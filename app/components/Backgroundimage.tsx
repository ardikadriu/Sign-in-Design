import Image from "next/image";
import Nautre from "@/public/Nature.png";
const Backgroundimage = () => {
  return (
    <div className="ml-[107px]">
      <Image src={Nautre} width={637} height={802} alt="nautre" />
    </div>
  );
};
export default Backgroundimage;
