"use client";
import MobileNavbar from "@/components/home/mobile-navbar";
import { buttonVariants } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/functions/cn";
import { NAV_LINKS } from "@/utils/constants/nav-links";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AnimationContainer from "../global/animation-container";
import MaxWidthWrapper from "../global/max-width-wrapper";

const Navbar = () => {
	const { user } = useClerk();
	const pathname = usePathname();

	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 8) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky inset-x-0 top-0 z-[99999] h-14 w-full select-none border-transparent border-b",
				scroll && "border-background/80"
			)}
		>
			<AnimationContainer reverse delay={0.1} className="size-full">
				<MaxWidthWrapper className="flex items-center justify-between">
					<div className="flex items-center space-x-12">
						<Link href="/">
							<span className="!leading-none font-bold font-heading text-lg">
								WApprentice
							</span>
						</Link>
					</div>

					<div className="hidden items-center lg:flex">
						{user ? (
							<SignedIn>
								<div className="flex items-center gap-3">
									<Link
										href={pathname === "/dashboard" ? "/posts" : "/dashboard"}
										className={`${buttonVariants({ size: "sm" })} font-semibold`}
									>
										{pathname === "/dashboard"
											? "Your Posts"
											: "Upload a video"}
									</Link>
									<UserButton />
								</div>
							</SignedIn>
						) : (
							<div className="flex items-center gap-x-4">
								<SignedOut>
									<SignInButton>
										<Link
											href="/sign-in"
											className={buttonVariants({ size: "sm" })}
										>
											Sign In
											<ZapIcon className="ml-1.5 size-3.5 fill-orange-500 text-orange-500" />
										</Link>
									</SignInButton>
								</SignedOut>
							</div>
						)}
					</div>
					<MobileNavbar />
				</MaxWidthWrapper>
			</AnimationContainer>
		</header>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					href={href!}
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-transparent hover:text-accent-foreground focus:bg-transparent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="flex items-center space-x-2 text-neutral-300">
						<Icon className="h-4 w-4" />
						<h6 className="!leading-none font-medium text-sm">{title}</h6>
					</div>
					<p
						title={children! as string}
						className="line-clamp-1 text-muted-foreground text-sm leading-snug"
					>
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Navbar;