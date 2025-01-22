import Button from './Button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center">

      <div className='flex flex-col items-center'>

        <div className='flex space-x-1 mb-0'>
          <h1 className="text-[var(--special)] font-bold" style={{ fontSize: '40px' }}>Discover, Apply</h1>
          <h1 className="font-bold" style={{ fontSize: '40px' }}>and</h1>
          <h1 className="font-bold" style={{ fontSize: '40px' }}>Track</h1>
          <h1 className="font-bold" style={{ fontSize: '40px' }}>Your Dream</h1>
        </div>

        <div className='flex space-x-1 mt-[-3rem]'>
          <h1 className="font-bold" style={{ fontSize: '40px' }}>Apprenticeship with</h1>
          <h1 className="text-[var(--special)] font-bold" style={{ fontSize: '40px' }}>Ease</h1>
        </div>

      </div>

      <p className="max-w-5xl text-center">
        Find, apply, and track apprenticeships in one click—no BS. Search by location, levels, and sector, and get the real tea on employers, salary comparisons, and CV tips. Check apprenticeship salary levels and see how they grow year by year. Stay on top with progress updates, notifications, and balance applications with your A-Levels like a boss. Enough with the struggles—forget LinkedIn oppression, rejections are nothing, and slay your career with exclusive events, insider insights, and top-secret resources.
      </p>
      
      <Button type="secondary" text="Get Started" />
    </div>
  );
}