'use client';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Button from './Button';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          className="max-w-[50px] h-auto lg:max-w-[100px]"
        />
        {/* Hamburger Icon for small devices */}
        <button
          className="block lg:hidden p-2 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <div className="space-y-1">
            <div className="h-1 w-6 bg-black"></div>
            <div className="h-1 w-5 bg-black"></div>
            <div className="h-1 w-6 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Normal Menu for Devices >= 1024px (lg) */}
      <div
        className={cn(
          'w-full lg:w-auto lg:flex lg:items-center lg:justify-center mx-auto px-4',
          menuOpen ? 'block' : 'hidden lg:block'
        )}
      >
        <NavigationMenu className="flex flex-col items-center mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
          <NavigationMenuList className="flex flex-col items-center lg:flex-row w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Find Apprenticeships</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 sm:w-[300px] lg:w-[500px] lg:grid-cols-1 xl:w-[600px]">
                  {components2.map((component) => (
                    <ListItem key={component.title} title={component.title}>
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
                <ul className="grid gap-3 p-4 sm:w-[300px] lg:w-[500px] lg:grid-cols-2 xl:w-[600px]">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title}>
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
        <Button type="primary" text="Join the Waitlist" />
      </div>

      {/* Overlay for Dimming Effect */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-10 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar for Small Devices */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-white shadow-lg transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden w-2/5 sm:w-[90vw]`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-600">
            Close
          </button>
        </div>
        <NavigationMenu className="flex flex-col items-start mt-4">
          <NavigationMenuList className="flex flex-col items-start w-full space-y-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Find Apprenticeships</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4">
                  {components2.map((component) => (
                    <ListItem key={component.title} title={component.title}>
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

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
  );
});
ListItem.displayName = 'ListItem';
