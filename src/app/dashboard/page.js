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
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
