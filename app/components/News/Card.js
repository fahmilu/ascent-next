import Image from "next/image";
import Link from "next/link";
const NewsCard = ({ data }) => {
    return (
        <div className="bg-white rounded-md border border-[#B3B3B3] overflow-hidden relative flex flex-col sm:flex-row">
            <div className="relative sm:min-w-[300px] min-h-[300px] lg:min-w-[360px] lg:min-h-[240px]">
                <Image src={`/imgs/dummy/news.jpg`} alt={data.title} fill className="object-cover" />
            </div>
            <div className="flex-grow py-[26px] px-5">
                <div className={`text-[14px] leading-[131%] font-medium mb-7`}>Feb 3, 2025 / Tech in Asia</div>
                <div className={`text-[20px] line-clamp-2 mb-[23px] font-medium leading-[141%]`}>{data.title}</div>
                <div className={`text-[12px] line-clamp-3 mb-[20px] font-medium leading-[155%]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, molestie interdum nisi nec, efficitur mollis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper quam at turpis malesuada, eu mattis sapien sodales. Suspendisse ac orci neque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, molestie interdum nisi nec, efficitur mollis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper quam at turpis malesuada, eu mattis sapien sodales. Suspendisse ac orci neque</div>
                <Link href="https://google.com" target="_blank" className={`text-[14px] leading-[131%] font-medium text-[#E93323]`}>VIEW ARTICLE →</Link>
            </div>
        </div>
    );
}

export default NewsCard;