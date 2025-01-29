import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="mt-auto py-6 bg-[var(--primary)] border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <span className="text-white">hello@wapprentice.com</span>
              <div className="h-4 w-px bg-border" /> {/* Vertical separator */}
               <span>
                    Designed by
                    <span className="text-white"> WApprentice Team ❤</span>
                </span>
            </div>
      
            
            <div className="flex items-center gap-4">
                <Link href='linkedin.com'>
                    <Image src={'linkedin.svg'} width={'34'} height={'34'}/>
                </Link>
                <Link href='instagram.com'>
                    <Image src={'instagram.svg'} width={'34'} height={'34'}/>
                </Link>
                <Link href='tiktok.com'>
                    <Image src={'tiktok.svg'} width={'34'} height={'34'}/>
                </Link>
            </div>

          </div>
        </div>
      </footer>
    )
}