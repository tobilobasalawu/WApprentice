import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button";
  
export default function FeaturesSection() {
    return (
      <div className="flex flex-col lg:flex-row justify-center items-start gap-2 px-4 py-2 md:py-8">
        {/* Text Content Section - Adjusted for iPad */}
        <div className="w-full lg:w-1/2 max-w-[600px] space-y-4 mt-2 md:mt-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            All the <span className="text-[var(--special)]">tools,</span><br />
            you need to secure<br />
            an <span className="text-[var(--special)]">Apprenticeship</span>
          </h2>
  
          <div className="space-y-0.3 text-gray-600 text-base md:text-lg">
            <p>Know your options with Employer/training provider reviews,</p>
            <p>compare salaries across different levels, discover what</p>
            <p>happens after an apprenticeship, set a dedicated time for</p>
            <p>application (balance your a-levels) and so many other features.</p>
          </div>
        </div>
  
        {/* Box Section - iPad Optimized */}
        <div className="w-full lg:w-1/2 max-w-[500px] mt-4 md:mt-6">
          <div className="bg-[var(--subsecond)] p-5 md:p-6 rounded-2xl space-y-4 shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
              Ace Applications with Top Secret CV & Interview Resources
            </h3>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <Button>Start Test</Button>
            </Card>

          </div>
        </div>
      </div>
    );
  }