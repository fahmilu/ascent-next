"use client";

import styles from './Home.module.scss';
import useSWR from "swr";
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from "@/utils/date";
const fetcher = (url) => fetch(url).then((res) => res.json());

const LatestNews = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/news?featured=1`,
        fetcher
    );

    return (
        <section className={`${styles.latestNews} latest-news relative pt-[40px] pb-[60px] md:pt-[100px] md:pb-[150px]`}>
            <div className="container">
                <div className={`absolute hidden lg:block -top-[1200px] -right-[1000px] w-[1900px] h-[1900px] pointer-events-none`}>
                    <Image src={`/imgs/big-ornament.svg`} alt={`ornament`} fill className={`object-cover`} />
                </div>
                <h2 className="title-section z-10 relative" data-aos="fade-up" data-aos-delay="100">Featured Articles</h2>
                <div className=' z-10 relative'>
                    {!data ?
                        <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                            <div>
                                Loading...
                            </div>
                        </div>
                        :
                        <>
                            <div className={`hidden sm:grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] flex-grow`}>
                                {data.data.slice(0, 3).map((news) => (
                                    <a href={`${news.external_url}`} target="_blank" key={news.id} className={`news-card`} data-aos="fade-up" data-aos-delay="100">
                                        <div className={`relative w-[90px] h-[80px] mb-4 group`}>
                                            {news.source.logo_url && (
                                                <Image src={`${news.source.logo_url}`} alt={news.title} fill className={`object-contain`} />
                                            )}
                                        </div>
                                        <div>
                                            <div className={`text-[14px] leading-[131%] font-medium mb-2`}>{formatDate(news.published_at)} / {news.source.name}</div>
                                            <div className={`text-[20px] line-clamp-3 min-h-[86px] mb-[23px] font-medium leading-[141%]`}>{news.title}</div>
                                            <div className={`text-[14px] leading-[131%] font-medium text-[#E93323]`}>READ MORE →</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className={`grid grid-cols-1 sm:hidden flex-grow gap-5`}>
                                {data.data.map((news) => (
                                    <a href={`${news.external_url}`} target="_blank" key={news.id} className={`py-2 border-t border-[#E93323]`} data-aos="fade-up" data-aos-delay="100">
                                        <div className={`relative w-[60px] h-[60px] mb-2 group`}>
                                            {news.source.logo_url && (
                                                <Image src={`${news.source.logo_url}`} alt={news.title} fill className={`object-contain`} />
                                            )}
                                        </div>
                                        <div>
                                            <div className={`text-[16px] line-clamp-2 mb-2 font-medium leading-[141%]`}>{news.title}</div>
                                            <div className={`text-[12px] leading-[131%] font-medium mb-2`}>{formatDate(news.published_at)} / {news.source.name}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className={`flex mt-[30px] sm:mt-[100px]`}>
                                <Link href="/news" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000]`} data-aos="fade-up" data-aos-delay="1000">VIEW ALL ARTICLES →</Link>
                            </div>
                        </>
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