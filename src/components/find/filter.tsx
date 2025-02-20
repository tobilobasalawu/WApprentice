import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function FilterSection({ 
  isRemote, 
  setIsRemote,
  salaryRange,
  setSalaryRange 
}) {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="mb-4 font-medium">Job Type</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="contract" />
            <Label htmlFor="contract">Contract</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="fulltime" defaultChecked />
            <Label htmlFor="fulltime">Full-Time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="parttime" />
            <Label htmlFor="parttime">Part-Time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="internship" />
            <Label htmlFor="internship">Internship</Label>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Open to remote</h3>
          <Switch 
            checked={isRemote}
            onCheckedChange={setIsRemote}
          />
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4 font-medium">Range Salary</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="less1000" />
            <Label htmlFor="less1000">Less than $1000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="1000-15000" />
            <Label htmlFor="1000-15000">$1000 - $15,000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="more15000" />
            <Label htmlFor="more15000">More than $15,000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="custom" defaultChecked />
            <Label htmlFor="custom">Custom</Label>
          </div>
          {/* Add a range slider here if needed */}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4 font-medium">Experience</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="less1year" />
            <Label htmlFor="less1year">Less than a year</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="1-3years" defaultChecked />
            <Label htmlFor="1-3years">1-3 years</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="3-5years" />
            <Label htmlFor="3-5years">3-5 years</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="5-10years" />
            <Label htmlFor="5-10years">5-10 years</Label>
          </div>
        </div>
      </Card>
    </div>
  );
}