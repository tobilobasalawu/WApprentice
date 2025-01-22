import { Input } from "@/components/ui/input"
import Button from "./Button";

export default function Hero() {
  return (
  <div className="max-w-5xl mx-auto text-center">
      <div className="flex flex-wrap justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block sm:inline mr-2 text-[var(--special)]">Discover, Apply, Track </span>
          <span className="block sm:inline mr-2">Your Dream Apprenticeship with</span>
          <span className="block sm:inline text-[var(--special)]">Ease</span>
        </h2>
      </div>

      <p className="paragraph-hero text-center mt-1 text-sm px-2">
        Find, apply, and track apprenticeships in one click—no BS. Search by location, levels, and sector, and get the real tea on employers, salary comparisons, and CV tips. Check apprenticeship salary levels and see how they grow year by year. Stay on top with progress updates, notifications, and balance applications with your A-Levels like a boss. Enough with the struggles—forget LinkedIn oppression, rejections are nothing, and slay your career with exclusive events, insider insights, and top-secret resources.
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5 w-full'>
        <Input placeholder="Enter Email" className="w-[40vw]" />
        <Button type={'secondary'} text={'Join Waitlist'} />
      </div>

    </div>
  );
}