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
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{position}</h3>
            <p className="text-sm text-muted-foreground">
              {company} • {location}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                {type}
              </span>
              <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                {workMode}
              </span>
              <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                {experience}
              </span>
            </div>
          </div>
        </div>
        <button className="rounded-md p-2 hover:bg-secondary">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">${salary}/m</span>
          <span className="text-sm text-muted-foreground">
            {postedAgo} • {applicants} Applicants
          </span>
        </div>
        <Button>
          Apply Now
        </Button>
      </div>
    </Card>
  );
}