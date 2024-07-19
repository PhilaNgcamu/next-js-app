import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

export default function Rightbar() {
  return (
    <div className="p-4 bg-[#182237] mt-10 fixed rounded-xl bg-gradient-to-t from-[#182237] to-[#2e374a]">
      <div className="absolute bottom-0 right-5">
        <Image
          src="/astronaut.png"
          alt="astronaut"
          width={200}
          height={200}
          className="opacity-20"
        ></Image>
      </div>
      <div className="flex flex-col gap-6 w-[80%]">
        <span className="text-white font-bold">🔥 Available Now</span>
        <p className="text-white">
          How to use the new version of the admin dashboard?
        </p>
        <p className="text-[#b7bac1]">Takes 4 minutes to learn</p>{" "}
        <p className="text-[#b7bac1]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eius moditalis etiam. Dolor sit amet, consectetur adipiscing elit.
          Pellentesque eius moditalis etiam
        </p>
        .
      </div>
      <button className="flex items-center gap-2.5 bg-[#5d57c9] p-3 rounded-lg text-white font-bold">
        <MdPlayCircleFilled />
        <span>Watch Now</span>
      </button>
    </div>
  );
}
