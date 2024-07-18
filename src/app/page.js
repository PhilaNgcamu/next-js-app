import { MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center p-5 rounded-lg custom-background-color w-4/5">
      <h1 className="custom-text-color font-bold">Dashboard</h1>
      <div className="flex items-center rounded-xl background-color-search-bar p-2.5">
        <MdSearch className="text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 text-white"
        ></input>
      </div>
    </div>
  );
}
