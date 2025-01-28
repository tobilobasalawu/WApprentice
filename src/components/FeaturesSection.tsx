import Image from "next/image";

export default function FeaturesSection() {
    return (
        <div className="text-black"> {/* Base text color */}
            <h2 className="text-2xl font-bold mb-4">
                All the <span className="text-[var(--special)]">tools,</span> you need to secure an <span className="text-[var(--special)]">Apprenticeship</span>
            </h2>
            <span className="text-gray-600">
                Know your options with Employer/training provider reviews, compare salaries across different levels, discover what happens after an apprenticeship, set a dedicated time for application (balance your a-levels) and so many other features.
            </span>
        </div>
    );
}