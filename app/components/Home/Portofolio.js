"use client";

import useSWR from "swr";

import styles from './Home.module.scss';
import Link from "next/link";
import Image from "next/image";
import Facts from "./Facts";
const fetcher = (url) => fetch(url).then((res) => res.json());

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Portofolio = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/portfolios`,
        fetcher
    );

    return (
        <div className={`${styles.portofolio} pt-[80px] md:pt-[120px] pb-[40px] md:pb-[80px]  z-10 relative`}>
            <div className="container">
                <div className={`flex w-full flex-col md:flex-row gap-[40px] md:gap-[85px]`}>
                    <div className={`flex-shrink min-w-[290px] flex flex-col items-start gap-[73px]`}>
                        <h2 className={`text-[24px] md:text-[32px] font-medium leading-[150%] text-white border-b border-white pb-[18px] w-fit pr-10 md:w-full`} data-aos="fade-up" data-aos-delay="500">Portofolio</h2>
                        <Link href="/portfolio" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] hidden md:block`} data-aos="fade-up" data-aos-delay="1000">VIEW ALL PORTFOLIO →</Link>
                    </div>
                    {!data ? 
                        <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                            <div>
                                Loading...
                            </div>
                        </div>
                     :
                        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] sm:gap-[10px] xl:gap-[28px] flex-grow`}>
                            {data.data.slice(0, 6).map((product) => (
                                <Link href={`/portfolio`} key={product.id} className={`relative w-full h-[100px] md:h-[75px] bg-white group`} data-aos="fade-up" data-aos-delay="1000">
                                    <Image src={product.image_url} alt={product.title} fill className={`object-contain max-w-[80%] max-h-[55px] !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2 grayscale group-hover:grayscale-0 transition-all duration-300`} />
                                </Link>
                            ))}
                        </div>
                    }
                    {error && (
                        <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                            <div>
                                Error: {error.message}
                            </div>
                        </div>
                    )}
                    <Link href="/portfolio" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] mx-auto md:hidden`} data-aos="fade-up" data-aos-delay="1000">VIEW ALL PORTFOLIO →</Link>
                </div>
            </div>
            <Facts />
        </div>
    );
};

export default Portofolio;