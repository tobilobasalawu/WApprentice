import Image from "next/image";

export default function FeaturesSection() {
    return (
    <div className="min-h-screen flex justify-center items-start"> {/* Centers content horizontally */}
        <div className="max-w-2xl text-left px-4"> {/* Constrains width + left-align */}
            <h2 className="text-2xl font-bold mb-4">
            All the <span className="text-[var(--special)]">tools,</span><br />
            you need to secure<br />
            an <span className="text-[var(--special)]">Apprenticeship</span>
            </h2>
            
            <div className="space-y-3 text-gray-600"> {/* Adds vertical spacing */}
            <p>Know your options with Employer/training provider</p>
            <p>reviews, compare salaries across different levels,</p>
            <p>discover what happens after an apprenticeship, set a</p>
            <p>dedicated time for application (balance your a-levels) and</p>
            <p>so many other features.</p>
            </div>

            <p className="mt-6 font-bold text-[var(--special)]"> {/* Secret resources */}
            Ace Applications with Top Secret CV & Interview Resources
            </p>
        </div>

        <div>
            
        </div>
    </div>
    );
}