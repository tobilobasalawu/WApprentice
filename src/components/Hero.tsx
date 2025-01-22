import Button from './Button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className='flex'>
        <h1 className="text-blue-500 font-bold">Discover, Apply</h1>
        <h1 className="font-normal">and</h1>
        <h1 className="font-bold">Track</h1>
        <h1 className="font-normal">Your Dream</h1>
      </div>

      <div className='flex'>
        <h1 className="font-normal">Apprenticeship with</h1>
        <h1 className="text-blue-500 font-bold">Ease</h1>
      </div>

      <p className="">
        Find, apply, and track apprenticeships in one click—no BS. Search by location, levels, and sector, and get the real tea on employers, salary comparisons, and CV tips. Check apprenticeship salary levels and see how they grow year by year. Stay on top with progress updates, notifications, and balance applications with your A-Levels like a boss. Enough with the struggles—forget LinkedIn oppression, rejections are nothing, and slay your career with exclusive events, insider insights, and top-secret resources.
      </p>
      
      <Button type="secondary" text="Get Started" />
    </div>
  );
}