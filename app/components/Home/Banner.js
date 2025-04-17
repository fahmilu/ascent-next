"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Banner = () => {
    const [scrollY, setScrollY] = useState(0);
    const animationFrameId = useRef();
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }

            animationFrameId.current = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
                    setScrollY(currentScrollY);
                    lastScrollY.current = currentScrollY;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <div className="relative z-20 bg-[#1B2057]">
            <Image src="/imgs/home-banner.jpg" alt="Home Banner" fill  data-aos="fade-in" data-aos-delay="100" />
            <div className="container relative h-[420px] sm:h-[727px] sm:pt-[260px]">
                <div className="flex flex-col sm:items-start sm:justify-start justify-end pb-[40px] sm:pb-0 h-full relative z-[1]">
                    <div className={`absolute top-[30px] left-[-60px] w-[45px] aspect-square animate-bounce`}>
                        <Image src="/imgs/down-arrow.png" alt="Home Banner" fill  data-aos="fade-down"  data-aos-delay="1500" />
                    </div>
                    <h1 className="text-white text-[32px]/[150%] sm:text-[48px]/[150%] lg:text-[68px]/[87px] font-normal max-w-[690px]"  data-aos="fade-down" data-aos-delay="1000">
                    Advancing <br />
                    the Next Wave <br />
                    of <span className="font-semibold">Innovation</span>
                    </h1>
                </div>
                <div 
                    className={`absolute z-10 bottom-[-62px] right-[-50%] sm:right-[-93px] w-[500px] sm:w-[600px] aspect-square will-change-transform`} 
                    style={{
                        transform: `translateX(${Math.min(scrollY * 0.6, 1000)}px) rotate(${Math.min(scrollY * 0.2, 450)}deg)`,
                        opacity: Math.max(1 - scrollY * 0.002, 0),
                        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
                        transformOrigin: 'center center'
                    }}
                >
                    {/* <Image src="/imgs/graphbanner.svg" alt="Home Banner" className="motion-safe:animate-[spin_100s_linear_infinite]" fill /> */}
                    <Image src="/imgs/graphbanner.svg" alt="Home Banner" data-aos="fade-in" data-aos-delay="1000" fill />
                </div>
            </div>
        </div>
    );
}

export default Banner;