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
import { useGetWalletsQuery } from "@/redux/features/wallet/wallet.api";

export default function Wallet() {
  const { data, isLoading } = useGetWalletsQuery(undefined);

  if (isLoading) return <p>Loading wallets...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Wallet List</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Owner Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Owner Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((wallet: any) => (
              <TableRow key={wallet._id}>
                <TableCell>
                  {wallet?.owner ? wallet.owner.name : "N/A"}
                </TableCell>
                <TableCell>
                  {wallet?.owner ? wallet.owner.email : "N/A"}
                </TableCell>
                <TableCell>
                  {wallet?.owner ? wallet.owner.role : "N/A"}
                </TableCell>
                <TableCell>{wallet.ownerType}</TableCell>
                <TableCell>{wallet.status}</TableCell>
                <TableCell className="text-right">{wallet.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
