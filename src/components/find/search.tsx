import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

export function SearchHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="UI/UX Designer" 
          className="pl-9"
        />
      </div>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="All City" 
          className="pl-9"
        />
      </div>
      <Button>
        Search
      </Button>
    </div>
  );
}