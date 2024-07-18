import Navbar from "../components/ui/navbar/navbar";
import Sidebar from "../components/ui/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex-[1] ">
        <Sidebar />
      </div>
      <div className="flex-[5] px-4 pt-4">
        <Navbar />
        {children}
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />
      </div>
    </div>
  );
}
