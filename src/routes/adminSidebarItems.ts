import Dashboard from "@/pages/Dashboard/Dashboard";
import Transaction from "@/pages/Transaction/Transaction/Transaction";
import UserList from "@/pages/User/User List/UserList";
import Wallet from "@/pages/Wallet/Wallets/Wallet";
import { type ISidebarItem } from "@/types";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard/analytics",
        component: Dashboard,
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        title: "User List",
        url: "/dashboard/user-list",
        component: UserList,
      },
      {
        title: "Wallet List",
        url: "/dashboard/wallets",
        component: Wallet,
      },
      {
        title: "Transaction List",
        url: "/dashboard/transactions",
        component: Transaction,
      },
    ],
  },
];
