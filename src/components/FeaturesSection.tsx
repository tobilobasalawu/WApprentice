export default function FeaturesSection() {
    return (
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-12">
        {/* Text Content Section */}
        <div className="max-w-2xl md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            All the <span className="text-[var(--special)]">tools,</span><br />
            you need to secure<br />
            an <span className="text-[var(--special)]">Apprenticeship</span>
          </h2>
          
          <div className="space-y-0.2 text-gray-600">
            <p>Know your options with Employer/training provider</p>
            <p>reviews, compare salaries across different levels,</p>
            <p>discover what happens after an apprenticeship, set a</p>
            <p>dedicated time for application (balance your a-levels) and</p>
            <p>so many other features.</p>
          </div>
        </div>
  
        {/* Box Section */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-[var(--subsecond)] p-6 rounded-[24px] space-y-6 h-full shadow-lg">
            <div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Ace Applications with Top Secret CV &<br />
                Interview Resources
              </h3>
              <p className="text-gray-600">
                Access your decision-making skills
              </p>
            </div>
            
            {/* Add any additional buttons or elements here */}
            <button className="bg-[var(--special)] text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }