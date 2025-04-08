import Image from "next/image";
import Link from "next/link";

const Facts = () => {
    const data = [
        {
            title: "Global Branch with Local Roots",
            description: "Experienced fund managers with global expertise, specializing in Indonesia's opportunities."
        },
        {
            title: "Capitalizing Assymetric Informations",
            description: "Leverages insights from experts, entrepreneurs, and research for successful startup growth."
        },
        {
            title: "Focus is an Advantage Sector",
            description: "Extended Southeast Asia market especially Indonesia offers diverse investment opportunities, but selectivity is crucial."
        },
        {
            title: "Go Far,<br /> Go Together",
            description: "Bridges founders with leading corporations, leveraging strategic insights and global track record for growth."
        }
    ];
    return (
        <div className={`container mt-[140px]`}>
            <div className={`flex flex-col xl:flex-row gap-10 xl:gap-[85px]`}>
                <div className={`flex-shrink md:pt-[28px] md:min-w-[425px] xl:order-last flex-col flex items-start justify-between gap-10`}>
                    <h2 className={`text-[24px] md:text-[32px] font-medium leading-[160%] text-white w-full text-center md:text-left`}>We empower Ideas First, Collaborative Ventures, with Long Term Capital</h2>
                    <Link href="/contact" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] hidden md:block`}>PARTNER WITH US →</Link>
                </div>
                <div className={`grid md:grid-cols-2 lg:gap-x-[77px] md:gap-y-10 gap-10`}>
                    {data.map((item, index) => (
                        <div key={index} className={`flex md:flex-col gap-5 md:gap-0 items-start justify-start`}>
                            <Image src={`/imgs/dummy/facts/${index + 1}.svg`} alt={item.title} width={41} height={41} />
                            <div>
                                <h3 className={`text-[16px] md:text-[20px] font-medium leading-[131%] text-white md:mt-[27px]`} dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p className={`text-[12px] md:text-[14px] leading-[155%] text-white mt-2`}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/contact" className={`text-[16px] md:text-[18px] font-medium leading-[150%] text-white bg-[#F00] px-[20px] py-[10px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#840000] block md:hidden mx-auto`}>PARTNER WITH US →</Link>
            </div>
        </div>
    );
}

export default Facts;