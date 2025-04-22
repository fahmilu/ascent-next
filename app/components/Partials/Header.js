'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Desktop from './Nav/Desktop';
import Mobile from './Nav/Mobile';

const Header = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();



  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        if (window.scrollY > 0) {
          setIsTop(false);
        } else {
          setIsTop(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isTop ? 'bg-transparent py-[20px] sm:py-[50px]' : 'bg-[#1B2057] shadow-md py-[20px]'} ${isMobileMenuOpen ? '!bg-white' : ''}`}
    >
      <div className="container relative z-[1]"  data-aos='fade-down' data-aos-delay='500'>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-[120px] h-[35px] sm:w-[160px] sm:h-[49px] relative">
            <Link href="/">
              <Image
                src={isMobileMenuOpen ? '/imgs/logo-footer.svg' : '/imgs/logo.svg'}
                alt="Logo"
                fill
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
            <Desktop navigation={navigation} />
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md  ${isMobileMenuOpen ? 'text-[#1B2057]' : 'text-[white]'} focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 left-0 w-full md:hidden overflow-hidden ${
          isMobileMenuOpen ? 'h-[100vh]' : 'h-0'
        } bg-white shadow-lg transition-all duration-300`}
      >
        <Mobile navigation={navigation} />
      </div>
    </header>
  );
};

export default Header;
