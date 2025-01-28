import { Input } from "@/components/ui/input"
import Button from "./Button";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function Hero() {
  return (
  <div className="max-w-5xl mx-auto text-center mt-10 mb-10 sm:mb-20">
      <div className="flex flex-wrap justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Satoshi tracking-tight">
          <span className="block sm:inline mr-2 text-[var(--special)]">Discover, Apply, Track </span>
          <span className="block sm:inline mr-2">Your Dream Apprenticeship with</span>
          <span className="block sm:inline text-[var(--special)]">Ease</span>
        </h2>
      </div>

      <p className="paragraph-hero text-center text-sm px-2">
        Find, apply, and track apprenticeships in one click—no BS. Search by location, levels, and sector, and get the real tea on employers, salary comparisons, and CV tips. Check apprenticeship salary levels and see how they grow year by year. Stay on top with progress updates, notifications, and balance applications with your A-Levels like a boss. Enough with the struggles—forget LinkedIn oppression, rejections are nothing, and slay your career with exclusive events, insider insights, and top-secret resources.
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5 mb-5 w-full'>
        <div className="flex w-full px-2 md:px-4 sm:px-0 justify-center flex-col sm:flex-row ">
          <Input placeholder="name@emailaddress.com" className="w-full sm:w-1/2 px-3 py-3 rounded-full mr-5 mb-3 border-black" />
          <Button type={'secondary'} text={'Join Waitlist'} className="whitespace-nowrap w-full sm:w-auto" />
        </div>
      </div>

    </div>
  );
}