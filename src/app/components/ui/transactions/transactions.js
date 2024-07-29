import TransactionRow from "./transactionRow";

const transactionsData = [
  { name: "John Doe", date: "2022-01-01", amount: "$350", status: "Pending" },
  {
    name: "Jane Smith",
    date: "2022-02-15",
    amount: "$450",
    status: "Completed",
  },
  {
    name: "Alice Johnson",
    date: "2022-03-10",
    amount: "$250",
    status: "Cancelled",
  },
  {
    name: "Hannah Lee",
    date: "2022-04-05",
    amount: "$300",
    status: "Pending",
  },
  {
    name: "Bob Brown",
    date: "2022-05-20",
    amount: "$500",
    status: "Completed",
  },
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
            <TransactionRow key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
