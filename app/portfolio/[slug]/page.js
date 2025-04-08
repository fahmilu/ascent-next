import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";
import Widget from "@/components/Portfolio/Detail/widget";
import Linkedin from "@/components/Portfolio/Detail/Linkedin";
import LinkOutside from "@/components/Portfolio/Detail/Link";

export async function generateMetadata() {
    return {
        title: 'Detail Portfolio | Ascent',
        description: '',
    }
}

export default async function Page({ params }) {
    const { slug } = await params
    return (
        <>
            <Banner title="Our Portfolio" />
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
                    <div className="flex flex-col lg:flex-row gap-[40px] xl:gap-[128px]">
                        <div className="lg:min-w-[320px]">
                            <div className="relative h-[70px] mb-5 md:mb-20">
                                <Image src="/imgs/dummy/logo/1.svg" alt="Detail Portfolio" fill className="object-contain lg:object-left" />
                            </div>
                            <Widget title="Industry">
                                Consumer
                            </Widget>
                            <Widget title="Country">
                                Indonesia
                            </Widget>
                            <Widget title="Founder">
                                <div className="flex flex-col gap-2">
                                    <Linkedin name="Sony Rachmadi Purnomo" linkedin="https://www.linkedin.com/in/sony-rachmadi-purnomo-b71110120/" />
                                    <Linkedin name="John Appleseed" linkedin="https://www.linkedin.com/in/sony-rachmadi-purnomo-b71110120/" />
                                </div>
                            </Widget>
                            <Widget title="Stage">
                                Early
                            </Widget>
                            <Widget title="Partner Since">
                                August 2021
                            </Widget>
                        </div>
                        <div className="flex-grow flex flex-col justify-start gap-5 lg:gap-[100px]">
                            <div className="flex gap-y-2 gap-5 md:gap-[30px] md:order-first order-last flex-wrap">
                                <LinkOutside href="https://www.runsystem.id/">Website</LinkOutside>
                                <LinkOutside href="https://www.runsystem.id/">Linkedin</LinkOutside>
                                <LinkOutside href="https://www.runsystem.id/">Instagram</LinkOutside>
                            </div>
                            <div className="pt-[22px] border-t border-[#B3B3B3]">
                                <h2 className="title-section !mb-[20px]">RUN System</h2>
                                <h3 className="text-[20px] font-medium leading-[141%] mb-[20px]">Integrated ERP Software in Indonesia and SEA</h3>
                                <div className="content-portfolio">
                                    <p>The main strength of RUN System is their extensive expertise and experience in planning, designing, building and implementing Information Technology Solutions for all integrated business processes. The rapidly changing business competition gives us more energy to develop products that can meet all consumer needs. The RUN System as a superior product is a manifestation of all our souls resulting from the selection and sorting of the best technology that is tailored to the situation, conditions and corporate culture in Indonesia which has its own uniqueness.</p>
                                    <p>Currently, RUN System has 3 Gold Business Partners and 1 Silver Business Partners, both as Distribution Partners and Implementation Partners which prove that RUN System is the best ERP Software in Southeast Asia, with the support of “RUNers” (RUN System stakeholders) both technology expert or business process specialist.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}