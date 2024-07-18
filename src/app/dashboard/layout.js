import Navbar from "../components/ui/navbar/navbar";
import Sidebar from "../components/ui/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[5] px-4 pt-4">
        <Navbar />
        {children}
        <div className="flex p-10 justify-between items-center text-[#b7bac1] rounded-xl">
          <span className="relative right-3">Philasande Ngcamu</span>
          <span className="relative left-3">© All rights reserved</span>
        </div>
      </div>
    </div>
  );
}
