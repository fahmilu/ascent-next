import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Desktop = ({ navigation }) => {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex h-[48px] items-end">
        {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return item.href === '/contact' ? (
                <Link 
                    key={item.name}
                    href={item.href} 
                    className="text-white bg-[#00A3E6] shadow-md px-6 py-[14px] rounded-md ml-10 uppercase font-poppins font-medium text-[12px] tracking-[1.2px] mb-[-3px] hover:bg-[#0086C7]"
                >
                    {item.name}
                </Link>
            ) : (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`before:w-[0px] ${
                        isActive
                            ? 'before:w-full'
                            : 'hover:before:w-full'
                    } text-white font-poppins font-medium uppercase px-5 pb-[10px] leading-[150%] text-[12px] tracking-[1.2px] relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:bg-[#F00] before:transition-width before:duration-300 before:ease-in-out`}
                >
                    {item.name}
                </Link>
            );
        })}
      </nav>
    );
}

export default Desktop;