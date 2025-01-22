import { Input } from "@/components/ui/input"
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-5">

    <div className="flex flex-wrap justify-center">
      <h1 className="text-[var(--special)] font-bold text-4xl md:text-5xl mb-1">
        <span className="mr-2">Discover,</span>
        <span className="mr-2">Apply</span>
      </h1>
      <h1 className="font-bold text-4xl md:text-5xl mb-1">
        <span className="mr-2">and</span>
      </h1>
      <h1 className="text-[var(--special)] font-bold text-4xl md:text-5xl mb-1">
        <span className="mr-2">Track</span>
      </h1>
      <h1 className="font-bold text-4xl md:text-5xl mb-1">
        <span className="mr-2">Your</span>
        <span className="mr-2">Dream</span>
      </h1>
      <h1 className="font-bold text-4xl md:text-5xl mb-1">
        <span className="mr-2">Apprenticeship</span>
        <span className="mr-2">with</span>
      </h1>
      <h1 className="text-[var(--special)] font-bold text-4xl md:text-5xl">
        <span className="mr-2">Ease</span>
      </h1>
    </div>

      <p className="paragraph-hero text-center mt-4 text-sm md:text-sm lg:text-sm px-2">
        Find, apply, and track apprenticeships in one click—no BS. Search by location, levels, and sector, and get the real tea on employers, salary comparisons, and CV tips. Check apprenticeship salary levels and see how they grow year by year. Stay on top with progress updates, notifications, and balance applications with your A-Levels like a boss. Enough with the struggles—forget LinkedIn oppression, rejections are nothing, and slay your career with exclusive events, insider insights, and top-secret resources.
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5 w-full'>
        <Input placeholder="Enter Email" className="w-[35vw]" />
        <Button type={'secondary'} text={'Join Waitlist'} />
      </div>

    </div>
  );
}