import Link from "next/link";
import { formatDate } from "@/utils/date";

const NewsCard = ({ data }) => {
    return (
        <Link href={data.external_url} target="_blank" className="border-t border-[#FF0000] overflow-hidden relative flex flex-row gap-3 pt-6 group">
            <div className="w-[10px] min-w-[10px] mt-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                    <g clipPath="url(#clip0_30_445)">
                        <path d="M0.349976 0.5H9.25998V9.41" stroke="#FF0000" strokeMiterlimit={10} />
                        <path d="M0.349976 9.41L9.25998 0.5" stroke="#FF0000" strokeMiterlimit={10} />
                    </g>
                    <defs>
                        <clipPath id="clip0_30_445">
                            <rect width="9.76" height="9.76" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="flex-grow">
                <div className={`text-[14px] leading-[131%] font-medium mb-[8px]`}>{formatDate(data.published_at)} / {data.source.name}</div>
                <div className={`text-[20px] line-clamp-2 mb-[23px] font-medium leading-[141%] group-hover:text-[#FF0000] transition-colors duration-300`}>{data.title}</div>
            </div>
        </Link>
    );
}

export default NewsCard;