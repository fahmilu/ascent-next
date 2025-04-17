"use client";

import useSWR from "swr";
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from "@/utils/date";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Featured = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/news?featured=1`,
        fetcher
    );

    return (
        <section className={`relative pt-[50px] pb-[40px] md:pt-[72px] md:pb-[60px]`}>
            <div className="container">
                <h2 className="title-section z-10 !mb-[24px] relative">Featured Articles</h2>
                <div className=' z-10 relative'>
                    {!data ?
                        <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                            <div>
                                Loading...
                            </div>
                        </div>
                        :
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] flex-grow`}>
                            {data.data.map((news) => (
                                <Link href={`${news.external_url}`} target="_blank" key={news.id} className={`news-card`}>
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

export default Featured;