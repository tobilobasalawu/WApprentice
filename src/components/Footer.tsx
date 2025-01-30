import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="mt-auto py-12 bg-[var(--primary)] border-t">
            <div className="container mx-auto px-4 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    {/* Left Section */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <span className="text-white">hello@wapprentice.app</span>
                    <div className="hidden md:block h-4 w-px bg-border"></div>
                    <span>
                        Designed by <span className="text-white">WApprentice Team ❤</span>
                    </span>
                    </div>
            
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <Link href="linkedin.com">
                            <Image 
                            src="linkedin.svg"
                            width={34} 
                            height={34} 
                            className="hover:opacity-80 transition-opacity" 
                            alt="LinkedIn"
                            />
                        </Link>
                        <Link href="instagram.com">
                            <Image 
                            src="instagram.svg" 
                            width={34} 
                            height={34} 
                            className="hover:opacity-80 transition-opacity" 
                            alt="Instagram"
                            />
                        </Link>
                        <Link href="tiktok.com">
                            <Image 
                            src="tiktok.svg" 
                            width={34} 
                            height={34} 
                            className="hover:opacity-80 transition-opacity" 
                            alt="TikTok"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}