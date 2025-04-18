import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Facts = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/values`, fetcher);
    return (
        <div className={`container mt-20 sm:mt-[140px]`}>
            <div className={`flex flex-col xl:flex-row gap-10 xl:gap-[85px]`}>
                <div className={`flex-shrink md:pt-[28px] md:min-w-[425px] xl:order-last flex-col flex items-start justify-between gap-10`} data-aos="fade-up" data-aos-delay="500">
                    <h2 className={`title-section !text-white w-full text-center md:text-left`}>We empower Ideas First, Collaborative Ventures, with Long Term Capital</h2>
                    <Link href="/contact" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] hidden md:block`}>PARTNER WITH US →</Link>
                </div>
                {!data ? 
                    <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                        <div>
                            Loading...
                        </div>
                    </div>
                :
                    <div className={`grid md:grid-cols-2 lg:gap-x-[77px] md:gap-y-10 gap-10`}>
                        {data.data.map((item, index) => (
                            <div key={index} className={`flex md:flex-col gap-5 md:gap-0 items-start justify-start`}  data-aos="fade-up" data-aos-delay="1000">
                                <Image src={item.icon} alt={item.title} width={41} height={41} />
                                <div>
                                    <h3 className={`text-[16px] md:text-[20px] font-medium leading-[131%] text-white md:mt-[27px]`} dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p className={`text-[12px] md:text-[14px] leading-[155%] text-white mt-2`}>{item.intro}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                <Link href="/contact" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] block md:hidden mx-auto`} data-aos="fade-up">PARTNER WITH US →</Link>
            </div>
        </div>
    );
}

export default Facts;