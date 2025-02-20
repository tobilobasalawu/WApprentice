import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Image from "next/image";

interface JobCardProps {
  company: string;
  position: string;
  location: string;
  type: string;
  workMode: string;
  experience: string;
  salary: number;
  applicants: number;
  postedAgo: string;
  logo: string;
}

export function JobCard({
  company,
  position,
  location,
  type,
  workMode,
  experience,
  salary,
  applicants,
  postedAgo,
  logo,
}: JobCardProps) {
  return (
    <Card className="relative p-4 hover:shadow-md transition-shadow">
      <button className="absolute right-4 top-4">
        <Bookmark className="h-5 w-5 text-muted-foreground hover:text-foreground" />
      </button>

      <div className="space-y-4">
        {/* Header with logo and title */}
        <div className="flex gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={logo || ""}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-base">{position}</h3>
            <p className="text-sm text-muted-foreground">
              {company} • {location}
            </p>
          </div>
        </div>

        {/* Match text */}
        <p className="text-sm text-muted-foreground">Match with your profile</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs">
            {type}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs">
            {workMode}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs">
            {experience}
          </span>
        </div>

        {/* Info and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <p className="text-blue-500 font-medium">
              ${salary}
              <span className="text-sm text-muted-foreground">/m</span>
            </p>
            <p className="text-sm text-muted-foreground">
              {postedAgo} • {applicants} Applicants
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="bg-blue-50 hover:bg-blue-100 text-blue-600"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  );
}