"use client";

import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner";
export default function NotFound() {
  return (
    <>
        <Banner title="" />
        <section className="bg-[#F5F5F5]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="relative w-full max-w-[300px] mb-20">
                    <Image 
                    src="/imgs/big-ornament.svg" 
                    alt="404" 
                    fill 
                    className="object-contain opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-[120px] font-bold text-[#1B2057]">404</h1>
                    </div>
                </div>
                
                <h2 className="text-[32px] font-medium leading-[150%] text-[#1B2057] mb-4">
                    Page Not Found
                </h2>
                
                <p className="text-[16px] font-normal leading-[150%] text-gray-600 max-w-[500px] mb-8">
                    The page you are looking for might have been removed, had its name changed, 
                    or is temporarily unavailable.
                </p>
                
                <Link 
                    href="/" 
                    className="text-[16px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] transition-colors duration-300"
                >
                    BACK TO HOME →
                </Link>
                </div>
            </div>
        </section>
    </>
  );
}
