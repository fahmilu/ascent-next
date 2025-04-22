import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";
import Widget from "@/components/Portfolio/Detail/widget";
import Linkedin from "@/components/Portfolio/Detail/Linkedin";
import LinkOutside from "@/components/Portfolio/Detail/Link";

export async function generateMetadata({ params }) {   
    const { slug } = await params
    const portfolio = await fetch(`${process.env.NEXT_PUBLIC_API}/portfolios/${slug}`).then((res) => res.json());
    return {
      title: portfolio.data.title + ' | ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
      description: portfolio.data.intro,
    }
}

export default async function Page({ params }) {
    const { slug } = await params
    const portfolio = await fetch(`${process.env.NEXT_PUBLIC_API}/portfolios/${slug}`).then((res) => res.json());
    console.log(portfolio);
    return (
        <>
            <Banner title={'Our Portfolio'} />
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
                                <Image src={portfolio.data.image_url || `https://api.ascentgroup.vc/storage/${portfolio.data.image}`} alt="Detail Portfolio" fill className="object-contain lg:object-left" />
                            </div>
                            {portfolio.data.industry && (
                                <Widget title="Industry">
                                    {portfolio.data.industry}
                                </Widget>
                            )}
                            {portfolio.data.country && (
                                <Widget title="Country">
                                    {portfolio.data.country}
                                </Widget>
                            )}
                            {portfolio.data.founders.length > 0 && (
                                <Widget title="Founder">
                                    <div className="flex flex-col items-center md:items-start gap-2">
                                        {portfolio.data.founders.map((founder) => (
                                            <Linkedin key={founder.id} name={founder.name} linkedin={founder.linkedin_url} />
                                        ))}
                                    </div>
                                </Widget>
                            )}
                            {portfolio.data.stage && (
                                <Widget title="Stage">
                                    {portfolio.data.stage}
                                </Widget>
                            )}
                            {portfolio.data.partner_since && (
                                <Widget title="Partner Since">
                                    {portfolio.data.partner_since}
                                </Widget>
                            )}
                        </div>
                        <div className="flex-grow flex flex-col justify-start gap-5 lg:gap-[100px]">
                            <div className="relative h-[70px] mb-5 md:mb-20 md:hidden block">
                                <Image src={portfolio.data.image_url || `https://api.ascentgroup.vc/storage/${portfolio.data.image}`} alt="Detail Portfolio" fill className="object-contain lg:object-left" />
                            </div>
                            <div className="flex gap-y-2 gap-5 md:gap-[30px] md:order-first order-last flex-wrap min-h-6">
                                {portfolio.data.website && (
                                    <LinkOutside href={portfolio.data.website}>Website</LinkOutside>
                                )}
                                {portfolio.data.linkedin && (
                                    <LinkOutside href={portfolio.data.linkedin}>Linkedin</LinkOutside>
                                )}
                                {portfolio.data.instagram && (
                                    <LinkOutside href={portfolio.data.instagram}>Instagram</LinkOutside>
                                )}
                            </div>
                            <div className="pt-[22px] border-t border-[#B3B3B3]">
                                {portfolio.data.title && (
                                    <h2 className="title-section !mb-[20px]">{portfolio.data.title}</h2>
                                )}
                                {portfolio.data.intro && (
                                <h3 className="text-[20px] font-medium leading-[141%] mb-[20px]">Integrated ERP Software in Indonesia and SEA</h3>
                                )}
                                <div className="content-portfolio" dangerouslySetInnerHTML={{ __html: portfolio.data.description }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}