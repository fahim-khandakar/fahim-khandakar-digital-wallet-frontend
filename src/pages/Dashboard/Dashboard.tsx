/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  useCreateTransactionMutation,
  useGetMyTransactionsQuery,
} from "@/redux/features/transaction/transaction.api";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";

export default function Dashboard() {
  const { data: user } = useUserInfoQuery(undefined);
  const { data: transactions, refetch } = useGetMyTransactionsQuery(undefined);
  const { data: wallet } = useGetMyWalletQuery(undefined);

  const [open, setOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<string | null>(null);
  const [createTransaction, { isLoading: transactionLoading }] =
    useCreateTransactionMutation();

  const handleOpen = (type: string) => {
    setTransactionType(type);
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!transactionType) return;

    const formData = new FormData(e.currentTarget);
    const payload: any = {
      type: transactionType,
      amount: Number(formData.get("amount")),
    };

    if (transactionType !== "TOP_UP") {
      payload.sendTo = formData.get("sendTo");
    }

    try {
      await createTransaction(payload).unwrap();
      await refetch();
      setOpen(false);
    } catch (err) {
      console.error("Transaction failed", err);
    }
  };

  // Role based permission
  const role = user?.data?.role;
  const canTopUp = role === "ADMIN";
  const canCashIn = role === "ADMIN" || role === "AGENT";
  const canCashOut = role === "ADMIN" || role === "AGENT";
  const canTransfer = role === "ADMIN" || role === "USER";

  return (
    <div className="p-6 space-y-6">
      {/* Wallet Balance */}
      <Card className="shadow-md">
        <CardHeader>
          <h2 className="text-xl font-semibold">Wallet Balance</h2>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">৳ {wallet?.data?.balance ?? 0}</p>
        </CardContent>
      </Card>

      {/* Transaction Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {canTopUp && (
          <Button onClick={() => handleOpen("TOP_UP")}>Top Up</Button>
        )}
        {canCashIn && (
          <Button onClick={() => handleOpen("CASH_IN")}>Cash In</Button>
        )}
        {canCashOut && (
          <Button onClick={() => handleOpen("CASH_OUT")}>Cash Out</Button>
        )}
        {canTransfer && (
          <Button onClick={() => handleOpen("TRANSFER")}>Transfer</Button>
        )}
      </div>

      {/* Transactions Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions?.data?.map((txn: any) => (
              <TableRow key={txn._id}>
                <TableCell>{txn.type}</TableCell>
                <TableCell>{txn.status}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell>
                  {new Date(txn.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Transaction Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{transactionType} Transaction</DialogTitle>
          </DialogHeader>

          {/* Transaction Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Amount Field */}
            <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                required
                className="w-full border rounded-md p-2"
              />
            </div>

            {/* Send To (only needed for some transactions) */}
            {transactionType !== "TOP_UP" && (
              <div>
                <label className="block text-sm font-medium">
                  Receiver Phone
                </label>
                <input
                  type="text"
                  name="sendTo"
                  required
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}

            <Button
              loading={transactionLoading}
              type="submit"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
