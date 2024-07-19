"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ item }) {
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={`${
        item.href === pathname ? "bg-gray-700" : ""
      } text-[#b7bac1] active:bg-gray-700 rounded-lg`}
    >
      <div className="flex gap-2.5 h-18 items-center hover:bg-gray-700 p-5 rounded-lg">
        {item.icon}
        {item.title}
      </div>
    </Link>
  );
}
