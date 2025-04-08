import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative">
            <Image src="/imgs/home-banner.jpg" alt="Home Banner" fill />
            <div className="container relative h-[420px] sm:h-[727px] sm:pt-[260px]">
                <div className="flex flex-col sm:items-start sm:justify-start justify-end pb-[40px] sm:pb-0 h-full relative z-[1]">
                    <h1 className="text-white text-[32px]/[150%] sm:text-[48px]/[150%] lg:text-[68px]/[87px] font-normal max-w-[690px]">
                    Advancing <br />
                    the Next Wave <br />
                    of <span className="font-semibold">Innovation</span>
                    </h1>
                </div>
                <div className={`absolute bottom-[-62px] right-[-50%] sm:right-[-93px] w-[500px] sm:w-[600px] aspect-square`}>
                    <Image src="/imgs/a.png" alt="Home Banner" fill />
                </div>
            </div>
        </div>
    );
}

export default Banner;