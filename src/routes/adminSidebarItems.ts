import Dashboard from "@/pages/Dashboard/Dashboard";
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
  // {
  //   title: "Tour Management",
  //   items: [
  //     {
  //       title: "Add Tour Type",
  //       url: "/admin/add-tour-type",
  //       component: Dashboard,
  //     },
  //     {
  //       title: "Add Division",
  //       url: "/admin/add-division",
  //       component: Dashboard,
  //     },
  //     {
  //       title: "Add Tour",
  //       url: "/admin/add-tour",
  //       component: Dashboard,
  //     },
  //   ],
  // },
];
