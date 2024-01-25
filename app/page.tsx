import Image from "next/image";
import Firstsection from "./components/Firstsection";
import Backgroundimage from "./components/Backgroundimage";

export default function Home() {
  return (
    <main className="flex w-[1300px] rounded-[50px] bg-white justify-center items-center my-6">
      <Firstsection />
      <Backgroundimage />
    </main>
  );
}
