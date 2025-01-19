import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 text-primary">
      <Image src={"/logo.svg"} alt="WApprentice" width={100} height={100} />
    </div>
  );
}