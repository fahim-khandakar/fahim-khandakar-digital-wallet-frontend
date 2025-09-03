/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { format } from "date-fns";

export default function Transaction() {
  const { data, isLoading } = useGetTransactionsQuery(undefined);

  if (isLoading) return <p>Loading transactions...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Send To</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((txn: any) => (
              <TableRow key={txn._id}>
                <TableCell>{txn.type}</TableCell>
                <TableCell>{txn.status}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell>{txn.fee}</TableCell>
                <TableCell>{txn.commission}</TableCell>
                <TableCell>{txn.sendTo}</TableCell>
                <TableCell>{txn.user}</TableCell>
                <TableCell>
                  {txn.createdAt
                    ? format(new Date(txn.createdAt), "PPpp")
                    : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
