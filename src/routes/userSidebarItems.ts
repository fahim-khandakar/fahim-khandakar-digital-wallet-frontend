import Dashboard from "@/pages/Dashboard/Dashboard";
import { type ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/user/analytics",
        component: Dashboard,
      },
    ],
  },
];
