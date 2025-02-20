"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utils/functions/cn";
import { NAV_LINKS } from "@/utils/constants/nav-links";
import { useAuth } from "@clerk/nextjs";
import { LucideIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
	const { isSignedIn, signOut } = useAuth();

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="flex items-center justify-end lg:hidden">
			{/* Removed Sheet component */}
			{/* <Sheet open={isOpen} onOpenChange={setIsOpen}> */}
			{/* ... existing code ... */}
			{/* </Sheet> */}
		</div>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
	return (
		<li>
			<Link
				href={href!}
				ref={ref}
				className={cn(
					"block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
					className,
				)}
				{...props}
			>
				<div className="flex items-center space-x-2 text-foreground">
					<Icon className="h-4 w-4" />
					<h6 className="!leading-none text-sm">{title}</h6>
				</div>
				<p
					title={children! as string}
					className="line-clamp-1 text-muted-foreground text-sm leading-snug"
				>
					{children}
				</p>
			</Link>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default MobileNavbar;