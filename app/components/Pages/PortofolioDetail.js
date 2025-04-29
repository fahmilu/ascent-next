"use client";

import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";
import Widget from "@/components/Portfolio/Detail/widget";
import Linkedin from "@/components/Portfolio/Detail/Linkedin";
import LinkOutside from "@/components/Portfolio/Detail/Link";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PortfolioDetailPageIndex = ({ slug }) => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/portfolios/${slug}`,
        fetcher
    );
    
    const { data: page, error: pageError } = useSWR(`${process.env.NEXT_PUBLIC_API}/pages/our-portfolio`,
        fetcher
    );

    return (
       <>
        {(data && page) && (
            <>
            <Banner title={page.data.title} />
            <section className="pt-[20px] pb-[40px] xl:py-[47px]">
                <div className="container">
                    <Link href="/portfolio" className="flex items-center gap-[21px] mb-5 md:mb-[100px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={31} viewBox="0 0 17 31" fill="none">
                            <g clipPath="url(#clip0_8_166)">
                                <path d="M15.83 29.2701L1.58997 15.03L15.83 0.800049" stroke="#1B2057" strokeWidth="2.25" strokeMiterlimit={10} />
                            </g>
                            <defs>
                                <clipPath id="clip0_8_166">
                                    <rect width="16.62" height="30.06" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="text-[20px] uppercase tracking-[2px] font-medium leading-[150%]">Back</div>
                    </Link>
                    <div className="flex flex-col md:flex-row gap-[40px] xl:gap-[128px]">
                        <div className="lg:min-w-[320px] md:min-w-[200px] order-last md:order-first">
                            <div className="relative h-[70px] mb-5 md:mb-[54px] hidden md:block">
                                <Image src={data.data.image_url || `https://api.ascentgroup.vc/storage/${data.data.image}`} alt="Detail Portfolio" fill className="object-contain lg:object-left" />
                            </div>
                            {data.data.industry && (
                                <Widget title="Industry">
                                    {data.data.industry}
                                </Widget>
                            )}
                            {data.data.country && (
                                <Widget title="Country">
                                    {data.data.country}
                                </Widget>
                            )}
                            {data.data.founders.length > 0 && (
                                <Widget title="Founder">
                                    <div className="flex flex-col items-center md:items-start gap-2">
                                        {data.data.founders.map((founder) => (
                                            <Linkedin key={founder.id} name={founder.name} linkedin={founder.linkedin_url} />
                                        ))}
                                    </div>
                                </Widget>
                            )}
                            {data.data.stage && (
                                <Widget title="Stage">
                                    {data.data.stage}
                                </Widget>
                            )}
                            {data.data.partner_since && (
                                <Widget title="Partner Since">
                                    {data.data.partner_since}
                                </Widget>
                            )}
                        </div>
                        <div className="flex-grow flex flex-col justify-start gap-5 lg:gap-[100px]">
                            <div className="relative h-[70px] mb-5 md:mb-20 md:hidden block">
                                <Image src={data.data.image_url || `https://api.ascentgroup.vc/storage/${data.data.image}`} alt="Detail Portfolio" fill className="object-contain lg:object-left" />
                            </div>
                            <div className="flex gap-y-2 gap-5 md:gap-[30px] md:order-first order-last flex-wrap min-h-6">
                                {data.data.website && (
                                    <LinkOutside href={data.data.website}>Website</LinkOutside>
                                )}
                                {data.data.linkedin && (
                                    <LinkOutside href={data.data.linkedin}>Linkedin</LinkOutside>
                                )}
                                {data.data.instagram && (
                                    <LinkOutside href={data.data.instagram}>Instagram</LinkOutside>
                                )}
                            </div>
                            <div className="pt-[22px] border-t border-[#B3B3B3]">
                                {data.data.title && (
                                    <h2 className="title-section !mb-[20px]">{data.data.title}</h2>
                                )}
                                {data.data.intro && (
                                <h3 className="text-[20px] font-medium leading-[141%] mb-[20px]">{data.data.intro}</h3>
                                )}
                                <div className="content-portfolio" dangerouslySetInnerHTML={{ __html: data.data.description }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )}
       </>
    );
}

export default PortfolioDetailPageIndex;
