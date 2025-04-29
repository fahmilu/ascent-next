"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import NewsCard from "./Card";

const fetcher = (url) => fetch(url).then((res) => res.json());

const NewsList = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/news?featured=0`,
        fetcher
    );

    const [visibleItems, setVisibleItems] = useState(5);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        if (!data) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !loading && visibleItems < data.data.length) {
                loadMoreItems();
            }
        }, { threshold: 0.1 });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loaderRef, loading, visibleItems, data]);

    const loadMoreItems = () => {
        setLoading(true);
        // Simulate loading delay
        setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 3, data?.data?.length || 0));
            setLoading(false);
        }, 800);
    };

    // Function to determine animation delay based on index
    const getAnimationDelay = (index) => {
        // First 5 items use standard timing
        if (index < 5) {
            return 0;
        }
        // Items loaded on scroll get staggered delays
        return 100 + ((index - 5) % 3) * 150;
    };

    return (
        <section className="pb-[40px] md:pb-[72px]">
            <div className="container">
                <h2 className="title-section !mb-[24px]" data-aos='fade-up' data-aos-delay='1000'>All Articles</h2>
                {!data ?
                    <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                        <div>
                            Loading...
                        </div>
                    </div>
                    :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-[30px] lg:gap-y-[48px]" data-aos='fade-up' data-aos-delay='1000'>
                            {data.data.slice(0, visibleItems).map((news, index) => (
                                <div 
                                    key={news.id} 
                                    className="transition-all duration-500 ease-out"
                                    style={{ 
                                        opacity: 0,
                                        transform: 'translateY(20px)',
                                        animation: `fadeInUp 0.5s ease-out ${getAnimationDelay(index)}ms forwards`
                                    }}
                                >
                                    <NewsCard data={news} />
                                </div>
                            ))}
                        </div>
                        
                        {visibleItems < data.data.length && (
                            <div 
                                ref={loaderRef} 
                                className="mt-10 text-center"
                            >
                                {loading ? (
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 border-t-2 border-b-2 border-white rounded-full animate-spin mx-auto"></div>
                                        <p className="mt-3">Loading more news...</p>
                                    </div>
                                ) : (
                                    <div className="h-10"></div>
                                )}
                            </div>
                        )}
                        
                        <style jsx>{`
                            @keyframes fadeInUp {
                                from {
                                    opacity: 0;
                                    transform: translateY(20px);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                        `}</style>
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
        </section>
    );
}

export default NewsList;