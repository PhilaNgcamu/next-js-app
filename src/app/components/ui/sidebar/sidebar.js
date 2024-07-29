"use client";
import Image from "next/image";
import {
  MdDashboard,
  MdPeople,
  MdShoppingCart,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdSettings,
  MdHelp,
  MdExitToApp,
} from "react-icons/md";
import SidebarItem from "./sideItem";

const sidebarData = [
  {
    section: "Pages",
    items: [
      {
        title: "Dashboard",
        icon: <MdDashboard className="text-[#b7bac1]" />,
        href: "/dashboard",
      },
      {
        title: "Users",
        icon: <MdPeople className="text-[#b7bac1]" />,
        href: "/dashboard/users",
      },
      {
        title: "Products",
        icon: <MdShoppingCart className="text-[#b7bac1]" />,
        href: "/dashboard/products",
      },
      {
        title: "Transactions",
        icon: <MdAttachMoney className="text-[#b7bac1]" />,
        href: "/dashboard/transactions",
      },
    ],
  },
  {
    section: "Analytics",
    items: [
      {
        title: "Revenue",
        icon: <MdWork className="text-[#b7bac1]" />,
        href: "/dashboard/revenue",
      },
      {
        title: "Reports",
        icon: <MdAnalytics className="text-[#b7bac1]" />,
        href: "/dashboard/reports",
      },
      {
        title: "Teams",
        icon: <MdPeople className="text-[#b7bac1]" />,
        href: "/dashboard/teams",
      },
    ],
  },
  {
    section: "User",
    items: [
      {
        title: "Settings",
        icon: <MdSettings className="text-[#b7bac1]" />,
        href: "/dashboard/settings",
      },
      {
        title: "Help",
        icon: <MdHelp className="text-[#b7bac1]" />,
        href: "/dashboard/help",
      },
      {
        title: "Logout",
        icon: <MdExitToApp className="text-[#b7bac1]" />,
        href: "/dashboard/logout",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-1/6 h-screen flex flex-col bg-[#182237] p-5">
      <div className="flex items-center mt-5">
        <Image
          src="/noavatar.png"
          alt="John Doe"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col ml-3">
          <span className="text-white">John Doe</span>
          <span className="text-[#b7bac1] text-sm">Administrator</span>
        </div>
      </div>
      {sidebarData.map((section, index) => (
        <ul key={index} className="flex flex-col mt-5">
          <li className="text-[#b7bac1] text-base">{section.section}</li>
          {section.items.map((item, idx) => (
            <SidebarItem key={idx} item={item} />
          ))}
        </ul>
      ))}
    </div>
  );
}
