import Image from "next/image";
import Link from "next/link";
import styles from "./TeamMember.module.scss";
const TeamMember = ({ data }) => {
  return (
    <div className={`${styles.teamMember} md:h-[400px] rounded-md border border-[#B3B3B3] overflow-hidden relative flex flex-col group`} data-aos='fade-up' data-aos-delay='2000'>
        <div className="flex-shrink py-6 px-[30px] hidden md:block">
            <h3 className="text-[20px]/[141%] font-bold">{data.name}</h3>
            <p className="text-base/[155%]">{data.role}</p>
        </div>
        <div className="relative flex-grow md:h-auto h-[260px]">
            <Image 
            src={data.image} 
            alt={data.name} 
            fill 
            className="object-contain object-bottom"
            />
        </div>
        <div className="py-6 px-[30px] flex flex-col justify-between md:absolute md:w-full md:h-full top-0 left-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1B2057E5]">
            <div>
                <h3 className="text-[20px]/[141%] font-bold text-white">{data.name}</h3>
                <p className="text-base/[155%] text-white">{data.role}</p>
                <p className="text-[12px]/[155%] md:my-[24px] my-[16px] text-white">{data.description}</p>
            </div>
            {data.linkedin && (
                <Link href={data.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                        <path d="M23.8656 26.0099H2.14433C1.92593 25.9206 1.71745 25.9007 1.47919 25.8114C0.655212 25.4937 0.198549 24.7591 0 23.9351V2.07484C0.258114 0.893471 1.08209 0.0992745 2.3131 0H23.6174C25.0172 0.109202 25.9007 0.982818 26 2.38259V23.6869C25.9404 24.8484 25.0271 25.8709 23.8557 26.0099H23.8656ZM8.47804 6.43299C8.47804 5.31119 7.57465 4.40779 6.45284 4.40779C5.33104 4.40779 4.42764 5.31119 4.42764 6.43299C4.42764 7.55479 5.33104 8.45819 6.45284 8.45819C7.57465 8.45819 8.47804 7.55479 8.47804 6.43299ZM21.3043 21.2348C21.2447 19.2493 21.3738 17.2341 21.3043 15.2486C21.2447 13.5907 21.1455 11.3769 19.5968 10.3841C18.614 9.75869 17.0951 9.63956 15.9733 9.91753C15.05 10.1459 14.2955 10.7911 13.7594 11.5456V10.126L13.6602 10.0267H10.4437V21.2348H13.8984V14.9011C13.8984 14.5934 14.1863 13.7793 14.3849 13.5212C15.0997 12.5682 17.0157 12.5682 17.5319 13.7595C17.6014 13.9084 17.7701 14.5636 17.7701 14.6926V21.2249H21.2944L21.3043 21.2348ZM4.7751 10.0367V21.2448H8.22986V10.0367H4.7751Z" fill="white" />
                    </svg>
                </Link>
            )}
        </div>
    </div>
  );
};

export default TeamMember; 