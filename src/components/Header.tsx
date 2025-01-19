'use client'
import Image from "next/image";
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Button from "./Button";


export default function Header() {

  const components:{title: string, description: string}[] = [{
    title: 'CV Builder',
    description: 'Craft the perfect CV with our intuitive builder designed to showcase your skills and experience',
  },{
    title: 'Assessment Practice',
    description: 'Prepare for aptitude tests and interviews with practice materials that boost your confidence',
  },
  {
    title: 'Interview Tips',
    description: 'Master your interviews with expert advice, sample questions, and proven techniques',
  },{
    title: 'Focus Time Scheduler',
    description: 'Stay productive by scheduling dedicated blocks of time to work on your applications',
  },
  {
    title: 'Networking Events',
    description: 'Connect with employers, apprentices, and mentors at exclusive events designed to grow your opportunities.',
  }]

  const components2:{title: string, description: string}[] = [{
    title: 'Application Tracker',
    description: 'Monitor all your submitted applications in one place and stay updated on their status',
  }]

  return (
    <div className="flex items-center justify-between p-4 text-primary">
      <Image src="/logo.svg" alt="WApprentice" width={100} height={100} />
      <NavigationMenu className="flex flex-row text-14 cursor-pointer">
        <NavigationMenuList className="flex space-x-4">

          <NavigationMenuItem>
            Home
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Find Apprenticeships</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                {components2.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
            
          <NavigationMenuItem>
            Ratings & Reviews
          </NavigationMenuItem>

          <NavigationMenuItem>
            Salary Insights
          </NavigationMenuItem>

          <NavigationMenuItem>
            Events & Networking
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <Button type={'primary'} text='Join the Waitlist'/>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
