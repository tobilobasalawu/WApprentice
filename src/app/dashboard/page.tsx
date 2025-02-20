"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { JobCard } from "@/components/find/job-card";
import { FilterSection } from "@/components/find/filter";
import { SearchHeader } from "@/components/find/search";
import { useState } from "react";

export default function DashboardPage() {
  const [isRemote, setIsRemote] = useState(false);
  const [salaryRange, setSalaryRange] = useState([1000, 25000]);

  return (
    <main className="min-h-screen bg- bg-gradient-to-t from-background p-6">
      <SearchHeader />
      
      <div className="mt-8 grid grid-cols-12 gap-6">
        {/* Filters Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <FilterSection 
            isRemote={isRemote} 
            setIsRemote={setIsRemote}
            salaryRange={salaryRange}
            setSalaryRange={setSalaryRange}
          />
        </aside>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">150</span> Jobs{" "}
              <span className="font-medium text-foreground">UI/UX Designer</span> in{" "}
              <span className="font-medium text-foreground">Indonesia</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by</span>
              <select className="rounded-md border-input bg-background px-3 py-1 text-sm">
                <option>Relevancy</option>
                <option>Latest</option>
                <option>Salary</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <JobCard 
              company="Pixelz Studio"
              position="UI/UX Designer"
              location="Yogyakarta"
              type="Fulltime"
              workMode="Hybrid"
              experience="2-4 Years"
              salary={1000}
              applicants={140}
              postedAgo="2 days ago"
              logo=""
            />
            <JobCard 
              company="Traveloka"
              position="Product Designer"
              location="Jakarta, Indonesia"
              type="Fulltime"
              workMode="Onsite"
              experience="2-4 Years"
              salary={1500}
              applicants={140}
              postedAgo="an hour ago"
              logo=""
            />
            <JobCard 
              company="Pixelz Studio"
              position="UI/UX Designer"
              location="Yogyakarta"
              type="Fulltime"
              workMode="Hybrid"
              experience="2-4 Years"
              salary={1000}
              applicants={140}
              postedAgo="2 days ago"
              logo=""
            />
            <JobCard 
              company="Traveloka"
              position="Product Designer"
              location="Jakarta, Indonesia"
              type="Fulltime"
              workMode="Onsite"
              experience="2-4 Years"
              salary={1500}
              applicants={140}
              postedAgo="an hour ago"
              logo=""
            />
            <JobCard 
              company="Pixelz Studio"
              position="UI/UX Designer"
              location="Yogyakarta"
              type="Fulltime"
              workMode="Hybrid"
              experience="2-4 Years"
              salary={1000}
              applicants={140}
              postedAgo="2 days ago"
              logo=""
            />
            <JobCard 
              company="Traveloka"
              position="Product Designer"
              location="Jakarta, Indonesia"
              type="Fulltime"
              workMode="Onsite"
              experience="2-4 Years"
              salary={1500}
              applicants={140}
              postedAgo="an hour ago"
              logo=""
            />
            <JobCard 
              company="Pixelz Studio"
              position="UI/UX Designer"
              location="Yogyakarta"
              type="Fulltime"
              workMode="Hybrid"
              experience="2-4 Years"
              salary={1000}
              applicants={140}
              postedAgo="2 days ago"
              logo=""
            />
            <JobCard 
              company="Traveloka"
              position="Product Designer"
              location="Jakarta, Indonesia"
              type="Fulltime"
              workMode="Onsite"
              experience="2-4 Years"
              salary={1500}
              applicants={140}
              postedAgo="an hour ago"
              logo=""
            />
            <JobCard 
              company="Pixelz Studio"
              position="UI/UX Designer"
              location="Yogyakarta"
              type="Fulltime"
              workMode="Hybrid"
              experience="2-4 Years"
              salary={1000}
              applicants={140}
              postedAgo="2 days ago"
              logo=""
            />
            <JobCard 
              company="Traveloka"
              position="Product Designer"
              location="Jakarta, Indonesia"
              type="Fulltime"
              workMode="Onsite"
              experience="2-4 Years"
              salary={1500}
              applicants={140}
              postedAgo="an hour ago"
              logo=""
            />
            {/* Add more JobCards as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
