import Image from "next/image";

const Banner = ({ title }) => {
    return (
        <section className="h-[320px] sm:h-[245px] relative" data-aos='fade-in'>
            <Image src="/imgs/banner.jpg" alt="banner" fill className="object-cover -z-10" data-aos='fade-in' />
            <div className="container flex flex-col justify-end h-full">
                {title && 
                    <h1 className="text-white text-[24px]/[150%] sm:text-[32px]/[150%] w-fit min-w-[280px] pr-10 pb-8 border-b-6 border-[#F00] font-medium" data-aos='fade-in' data-aos-delay='1000'>
                        {title}
                    </h1>
                }
            </div>
        </section>
    );
}

export default Banner;