import Image from "next/image";

const transactionsData = [
  { name: "John Doe", date: "2022-01-01", amount: "$350" },
  { name: "Jane Smith", date: "2022-02-15", amount: "$450" },
  { name: "Michael Johnson", date: "2022-03-10", amount: "$250" },
  { name: "Emily Davis", date: "2022-04-05", amount: "$300" },
  { name: "Daniel Brown", date: "2022-05-20", amount: "$500" },
];

export default function Transactions() {
  return (
    <div className="mt-10 bg-[#182237] p-5 rounded-xl">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-white text-left px-4 py-2">Name</th>
            <th className="text-white text-left px-4 py-2">Status</th>
            <th className="text-white text-left px-4 py-2">Date</th>
            <th className="text-white text-left px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction, index) => (
            <tr key={index}>
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
                <span className="p-1 text-white rounded-lg bg-[#f7cb7375]">
                  Pending
                </span>
              </td>
              <td className="text-white px-4 py-2">{transaction.date}</td>
              <td className="text-white px-4 py-2">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
