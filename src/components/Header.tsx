'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'; // Import Dialog components
import Button from './Button';

export default function Header() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false); // State for dialog

  const handleNavigationClick = () => {
    setIsComingSoonOpen(true); // Open the dialog
  };

  const components = [
    {
      title: 'CV Builder',
      description:
        'Craft the perfect CV with our intuitive builder designed to showcase your skills and experience',
    },
    {
      title: 'Assessment Practice',
      description:
        'Prepare for aptitude tests and interviews with practice materials that boost your confidence',
    },
    {
      title: 'Interview Tips',
      description:
        'Master your interviews with expert advice, sample questions, and proven techniques',
    },
    {
      title: 'Focus Time Scheduler',
      description:
        'Stay productive by scheduling dedicated blocks of time to work on your applications',
    },
  ];

  const components2 = [
    {
      title: 'Application Tracker',
      description:
        'Monitor all your submitted applications in one place and stay updated on their status',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 text-primary cursor-pointer">
      {/* Logo and Hamburger Icon */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Image
          src="/logo.svg"
          alt="WApprentice"
          width={100}
          height={100}
          className="max-w-[100px] h-auto lg:max-w-[150px]"
        />
      </div>

      {/* Navigation Menu */}
      <div className="hidden lg:block">
        <NavigationMenu className="flex flex-col items-center mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
          <NavigationMenuList className="flex flex-col items-center lg:flex-row w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Find Apprenticeships</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 sm:w-[300px] lg:w-[500px] lg:grid-cols-1 xl:w-[600px]">
                  {components2.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      onClick={handleNavigationClick} // Add click handler
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem onClick={handleNavigationClick}>
              Ratings & Reviews
            </NavigationMenuItem>
            <NavigationMenuItem onClick={handleNavigationClick}>
              Salary Insights
            </NavigationMenuItem>
            <NavigationMenuItem onClick={handleNavigationClick}>
              Events & Networking
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 sm:w-[300px] lg:w-[500px] lg:grid-cols-2 xl:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      onClick={handleNavigationClick} // Add click handler
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Button (Hidden on Small Screens) */}
      <div className="hidden lg:block">
        <Button type="primary" text="Join the Waitlist"/>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={isComingSoonOpen} onOpenChange={setIsComingSoonOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Coming Soon!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p>This feature is currently under development.</p>
            <p>Stay tuned for updates!</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          onClick={onClick} // Pass click handler
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';