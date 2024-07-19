import Image from "next/image";

const statusColors = {
  Pending: "bg-[#968B24]",
  Completed: "bg-[#006600]",
  Failed: "bg-[#990000]",
};

export default function TransactionRow({ transaction }) {
  return (
    <tr>
      <td className="flex items-center px-4 py-2">
        <Image
          src="/noavatar.png"
          alt={transaction.name}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="ml-3 text-white">{transaction.name}</span>
      </td>
      <td className="px-4 py-2">
        <span
          className={`p-[4.5px] text-sm text-white rounded-lg ${
            statusColors[transaction.status]
          }`}
        >
          {transaction.status}
        </span>
      </td>
      <td className="text-white px-4 py-2">{transaction.date}</td>
      <td className="text-white px-4 py-2">{transaction.amount}</td>
    </tr>
  );
}
