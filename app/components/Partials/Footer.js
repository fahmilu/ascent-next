import Link from "next/link";
import Image from "next/image";

const Footer = ({ navigation }) => {
    return (
        <footer className="bg-[#E6E6E6] ">
            <div className="container pt-10 pb-8 sm:pt-20 sm:pb-18">
                <div className="flex justify-between flex-col gap-y-5 lg:flex-row">
                    <div className="flex flex-col justify-between items-center lg:items-start gap-y-10 lg:gap-y-0">
                        <Link href="/">
                            <Image src="/imgs/logo-footer.svg" alt="logo" width={134} height={40} />
                        </Link>
                        <div className={`flex gap-5 sm:gap-10 sm:flex-row flex-col`}>
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name} className={`text-sm leading-[150%] uppercase hover:text-red-500 font-medium text-center sm:text-left`}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center lg:items-end gap-y-5 lg:gap-y-0 max-w-[310px]">
                        <div className={`text-[12px]/[199%] text-center lg:text-left lg:mb-10 w-full`}>
                            80 Robinson Road, #08-01, Singapore 068898<br />
                            <Link href={`mailto:info@ascentgroup.vc`}>info@ascentgroup.vc</Link>
                        </div>
                        <div className={`text-[12px]/[199%] text-center lg:text-left`}>
                            Copyright &copy; 2025 Ascent Group - All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 