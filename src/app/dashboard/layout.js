import Footer from "../components/ui/footer/footer";
import Navbar from "../components/ui/navbar/navbar";
import Sidebar from "../components/ui/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className="ml-[17.666667%] w-5/6 px-4 pt-4">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
