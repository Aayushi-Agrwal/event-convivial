import Image from "next/image";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="">
      <Search />
      <div className="grid grid-rows-2 grid-flow-col text-white">
        <div className="bg-primary-dark m-2 rounded-md h-60">ADD +</div>
        <div className="bg-primary-dark m-2 rounded-md h-60">Grid 2</div>
        <div className="bg-primary-dark m-2 rounded-md h-60">Grid 3</div>
        <div className="bg-primary-dark m-2 rounded-md h-60">Grid 4</div>
      </div>
    </div>
  );
}
