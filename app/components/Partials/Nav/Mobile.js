import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Mobile = ({ navigation }) => {
    const pathname = usePathname();

    return (
        <div className="px-2 pt-[100px] pb-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive
                    ? ' text-blue-600 !font-bold'
                    : 'text-gray-600'
                } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
            );
          })}
        </div>
    );
}

export default Mobile;