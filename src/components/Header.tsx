'use client'
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Button from "./Button";


export default function Header() {

  return (
    <div className="flex items-center justify-between p-4 text-primary">
      <Image src="/logo.svg" alt="WApprentice" width={100} height={100} />
      <NavigationMenu className="flex flex-row">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button type={'primary'} text='Join the Waitlist'/>
    </div>
  );
}