import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 text-primary">
      <Image src="/logo.svg" alt="WApprentice" width={100} height={100} />
      <nav className="flex flex-row">
        <ul className="flex flex-row">
          <li>Home</li>
          <li>Find Apprenticeships</li>
          <li>Ratings & Reviews</li>
          <li>Salary Insights</li>
          <li>Events & Networking</li>
          <li>Resources</li>
        </ul>
      </nav>
    </div>
  );
}