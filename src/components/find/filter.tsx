import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FilterSection({ 
  isRemote, 
  setIsRemote,
  salaryRange,
  setSalaryRange 
}) {
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
  const [isSalaryRangeOpen, setIsSalaryRangeOpen] = useState(true);
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);

  const toggleJobType = () => {
    setIsJobTypeOpen(!isJobTypeOpen);
  };

  const toggleSalaryRange = () => {
    setIsSalaryRangeOpen(!isSalaryRangeOpen);
  };

  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleJobType}>
          <h3 className="text-sm font-medium">Job Type</h3>
          <ChevronDown className={`h-4 w-4 text-muted-foreground ${isJobTypeOpen ? "rotate-180" : ""}`} />
        </div>
        {isJobTypeOpen && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="contract" />
              <Label htmlFor="contract" className="text-sm text-muted-foreground">Contract</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="fulltime" defaultChecked />
              <Label htmlFor="fulltime" className="text-sm text-muted-foreground">Full-Time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="parttime" />
              <Label htmlFor="parttime" className="text-sm text-muted-foreground">Part-Time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="internship" />
              <Label htmlFor="internship" className="text-sm text-muted-foreground">Internship</Label>
            </div>
          </div>
        )}
      </div>
      <hr className="border-t border-muted-foreground" />
      <div className="flex items-center justify-between py-2">
        <h3 className="text-sm font-medium">Open to remote</h3>
        <Switch 
          checked={isRemote}
          onCheckedChange={setIsRemote}
        />
      </div>
      <hr className="border-t border-muted-foreground" />
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleSalaryRange}>
          <h3 className="text-sm font-medium">Range Salary</h3>
          <ChevronDown className={`h-4 w-4 text-muted-foreground ${isSalaryRangeOpen ? "rotate-180" : ""}`} />
        </div>
        {isSalaryRangeOpen && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="less1000" />
              <Label htmlFor="less1000" className="text-sm text-muted-foreground">Less than $1000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="1000-15000" />
              <Label htmlFor="1000-15000" className="text-sm text-muted-foreground">$1000 - $15,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="more15000" />
              <Label htmlFor="more15000" className="text-sm text-muted-foreground">More than $15,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="custom" defaultChecked />
              <Label htmlFor="custom" className="text-sm text-muted-foreground">Custom</Label>
            </div>
            <div className="mt-4 px-1">
              <div className="relative h-1 w-full bg-border">
                <div className="absolute h-1 w-3/4 bg-blue-500"></div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>$1,000</span>
                <span>$25,000</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className="border-t border-muted-foreground" />
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleExperience}>
          <h3 className="text-sm font-medium">Experience</h3>
          <ChevronDown className={`h-4 w-4 text-muted-foreground ${isExperienceOpen ? "rotate-180" : ""}`} />
        </div>
        {isExperienceOpen && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="less1year" />
              <Label htmlFor="less1year" className="text-sm text-muted-foreground">Less than a year</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="1-3years" defaultChecked />
              <Label htmlFor="1-3years" className="text-sm text-muted-foreground">1-3 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="3-5years" />
              <Label htmlFor="3-5years" className="text-sm text-muted-foreground">3-5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="5-10years" />
              <Label htmlFor="5-10years" className="text-sm text-muted-foreground">5-10 years</Label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}