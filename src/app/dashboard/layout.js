import Navbar from "../components/ui/navbar/navbar";
import Sidebar from "../components/ui/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
