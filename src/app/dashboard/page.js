import Image from "next/image";
import Card from "../components/ui/card/card";
import Chart from "../components/ui/chart/chart";
import Transactions from "../components/ui/transactions/transactions";
import Rightbar from "../components/ui/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col">
        <div className="flex flex-row gap-10 mt-10">
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Transactions />
          <Chart />
        </div>
      </div>
      <div className="flex">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
