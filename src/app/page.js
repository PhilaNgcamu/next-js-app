import Image from "next/image";
import Navbar from "./components/ui/navbar/navbar";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-screen w-[21.1vw] flex flex-col fixed bg-[#182237] p-5">
      <div className="flex mt-5">
        <Image
          src="/noavatar.png"
          alt="John Doe"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col ml-3">
          <span className="text-white">John Doe</span>
          <span className="text-white">Administrator</span>
        </div>
      </div>
      <ul className="flex flex-col mt-5">
        <li className="text-[#b7bac1] text-base">Pages</li>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>{" "}
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
      </ul>{" "}
      <ul className="flex flex-col">
        <li className="text-[#b7bac1]">Analytics</li>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 transition-duration-300 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
      </ul>{" "}
      <ul className="flex flex-col">
        <li className="text-[#b7bac1]">liages</li>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
      </ul>{" "}
      <ul className="flex flex-col">
        <li className="text-[#b7bac1]">liages</li>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-2.5 h-11 items-center hover:bg-gray-700 p-3 rounded-lg">
          <MdDashboard className="text-white" />
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
      </ul>
    </div>
  );
}
