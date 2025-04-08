"use client";

import styles from './Home.module.scss';
import useSWR from "swr";
import Link from 'next/link';
import Image from 'next/image';
const fetcher = (url) => fetch(url).then((res) => res.json());

const LatestNews = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_DOMAIN}/posts`,
        fetcher
    );

    return (
        <section className={`${styles.latestNews} latest-news relative pt-[50px] pb-[80px] md:pt-[100px] md:pb-[150px]`}>
            <div className="container">
                <div className={`absolute hidden lg:block -top-[1200px] -right-[1000px] w-[1900px] h-[1900px] pointer-events-none`}>
                    <Image src={`/imgs/big-ornament.svg`} alt={`ornament`} fill className={`object-cover`} />
                </div>
                <h2 className="title-section z-10 relative">Latest News</h2>
                <div className=' z-10 relative'>
                    {!data ?
                        <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                            <div>
                                Loading...
                            </div>
                        </div>
                        :
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] flex-grow`}>
                            {data.posts.slice(0, 3).map((news) => (
                                <Link href={`/news/${news.id}`} key={news.id} className={`flex flex-col bg-[#E6E6E6] border border-white rounded-md overflow-clip`}>
                                    <div className={`relative w-full h-[235px] bg-white group`}>
                                        <Image src={`/imgs/dummy/news.jpg`} alt={news.title} fill className={`object-cover`} />
                                    </div>
                                    <div className={`py-6 px-5`}>
                                        <div className={`text-[14px] leading-[131%] font-medium mb-2`}>Feb 3, 2025 / Tech in Asia</div>
                                        <div className={`text-[20px] line-clamp-3 min-h-[86px] mb-[23px] font-medium leading-[141%]`}>{news.title}</div>
                                        <div className={`text-[14px] leading-[131%] font-medium text-[#E93323]`}>READ MORE →</div>
                                    </div>
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
                </div>
            </div>
        </section>
    );
}

export default LatestNews;