import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center p-5 rounded-lg background-custom-color w-4/5">
      <h1 className="text-white text-2xl">Dashboard</h1>
      <div className="flex items-center rounded-xl background-color-search-bar p-3.5">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 text-white"
        ></input>
      </div>
    </div>
  );
}
