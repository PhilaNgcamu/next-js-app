import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    createdAt: "2022-01-01",
    role: "Admin",
    status: "Active",
    avatar: "/noavatar.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    createdAt: "2022-02-01",
    role: "User",
    status: "Inactive",
    avatar: "/noavatar.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@gmail.com",
    createdAt: "2022-03-01",
    role: "User",
    status: "Active",
    avatar: "/noavatar.png",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@gmail.com",
    createdAt: "2022-04-01",
    role: "Admin",
    status: "Active",
    avatar: "/noavatar.png",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@gmail.com",
    createdAt: "2022-05-01",
    role: "User",
    status: "Inactive",
    avatar: "/noavatar.png",
  },
  {
    id: 6,
    name: "Diana Evans",
    email: "diana.evans@gmail.com",
    createdAt: "2022-06-01",
    role: "Admin",
    status: "Active",
    avatar: "/noavatar.png",
  },
  {
    id: 7,
    name: "Edward Green",
    email: "edward.green@gmail.com",
    createdAt: "2022-07-01",
    role: "User",
    status: "Active",
    avatar: "/noavatar.png",
  },
  {
    id: 8,
    name: "Fiona Harris",
    email: "fiona.harris@gmail.com",
    createdAt: "2022-08-01",
    role: "User",
    status: "Inactive",
    avatar: "/noavatar.png",
  },
  {
    id: 9,
    name: "George King",
    email: "george.king@gmail.com",
    createdAt: "2022-09-01",
    role: "Admin",
    status: "Active",
    avatar: "/noavatar.png",
  },
  {
    id: 10,
    name: "Hannah Lee",
    email: "hannah.lee@gmail.com",
    createdAt: "2022-10-01",
    role: "User",
    status: "Inactive",
    avatar: "/noavatar.png",
  },
];

export default function Users() {
  return (
    <div className="flex flex-col items-start p-7 rounded-xl bg-yellow-600">
      <div className="flex items-center bg-[#2e3742] p-2.5 rounded-xl">
        <MdSearch className="text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none border-0 text-white ml-1"
        />
      </div>
      <table className="bg-red-600 w-full">
        <thead>
          <tr>
            <th className="text-white text-left px-4 py-2">Name</th>
            <th className="text-white text-left px-4 py-2">Email</th>
            <th className="text-white text-left px-4 py-2">Created At</th>
            <th className="text-white text-left px-4 py-2">Role</th>
            <th className="text-white text-left px-4 py-2">Status</th>
            <th className="text-white text-left px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="flex items-center px-4 py-2">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="ml-3 text-white">{user.name}</span>
              </td>
              <td className="text-white px-4 py-2">{user.email}</td>
              <td className="text-white px-4 py-2">{user.createdAt}</td>
              <td className="text-white px-4 py-2">{user.role}</td>
              <td className="text-white px-4 py-2">{user.status}</td>
              <td className="text-white px-4 py-2 bg-blue-500">
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className="bg-teal-500 p-[10px] rounded-lg">
                    View
                  </button>
                </Link>
                <button className="ml-5 p-[10px] bg-red-500 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
