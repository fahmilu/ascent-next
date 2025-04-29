"use client";

import Banner from "@/components/Banner";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const ContactPageIndex = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/pages/partner-with-us`,
        fetcher
    );

    return (
        <div>
            {(data) && (
                <>
                    <Banner title={data.data.title} />
                    <section className="">
                        <div className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] xl:gap-[130px]">
                                <div className="py-[40px] xl:py-[97px]" data-aos="fade-right">
                                    <div className="text-[20px] md:text-[24px] font-medium leading-[150%] mb-[20px] md:mb-[40px]">
                                        {data.data.components[0].data.intro && data.data.components[0].data.intro}
                                    </div>
                                    {data.data.components[0].data.description && (
                                        <div className="contents" dangerouslySetInnerHTML={{ __html: data.data.components[0].data.description }}></div>
                                    )}
                                </div>
                                <div className="relative h-[500px] lg:h-auto lg:order-last order-first" data-aos="fade-left">
                                    <div className="absolute top-0 lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 w-[100vw] lg:w-[50vw] h-full">
                                        {data.data.components[0].data.url && (
                                            <iframe
                                                src={data.data.components[0].data.url}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                title="Google Map"
                                                aria-hidden="false"
                                            ></iframe>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

export default ContactPageIndex;