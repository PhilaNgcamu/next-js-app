import Image from "next/image";
import Card from "../components/ui/card/card";
import Chart from "../components/ui/chart/chart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-10 mt-10">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <div className="mt-10 bg-[#182237] p-5 rounded-xl">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-white text-left">Name</th>
                <th className="text-white text-left">Date</th>
                <th className="text-white text-left">Status</th>
                <th className="text-white text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center">
                  <Image
                    src="/noavatar.png"
                    alt="John Doe"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="ml-3 text-white">John Doe</span>
                </td>
                <td>
                  <span className="p-1 text-white rounded-lg bg-[#f7cb7375]">
                    Pending
                  </span>
                </td>
                <td className="text-white">2022-01-01</td>
                <td className="text-white">$350</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
