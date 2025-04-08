"use client";

import useSWR from "swr";

import Link from "next/link";
import Image from "next/image";
import FilterByCategory from "./FilterByCategory";

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
const fetcher = (url) => fetch(url).then((res) => res.json());

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Portofolio = () => {
    const pathname = usePathname();
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_DOMAIN}/products`,
        fetcher
    );

    const [currentCategory, setCurrentCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productCategories, setProductCategories] = useState([]);


    useEffect(() => {
        if (currentCategory) {
            const filteredProducts = products.filter(product => product.category === currentCategory);
            setFilteredProducts(filteredProducts);
        } else {
            setFilteredProducts(products);
        }
    }, [currentCategory]);

    // Reset data when pathname changes
    useEffect(() => {
        // Reset states when page changes
        setCurrentCategory(null);
        setFilteredProducts([]);
        setProductCategories([]);
        
        // Reset any other relevant state here
    }, [pathname]);

    // Update filtered products when data changes
    useEffect(() => {
        if (data && data.products) {
            const products = data.products.slice(0, 16);
            setFilteredProducts(products);
            setProducts(products);
            
            // Extract and deduplicate categories
            const categories = products.map(product => product.category);
            const uniqueCategories = [...new Set(categories)].filter(Boolean); // Remove any undefined/null/empty values
            setProductCategories(uniqueCategories);
        }
    }, [data]);

    console.log(filteredProducts);

    return (
        <section className='pb-10 sm:pb-[98px]'>
            <div className="container">
                {productCategories.length > 0 && (
                    <FilterByCategory productCategories={productCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
                )}
                {!data ?
                    <div className={`text-[16px] h-[380px] flex flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                        <div>
                            Loading...
                        </div>
                    </div>
                    :
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-[#B3B3B3] divide-x-[1px] divide-y-[1px] border-t border-l border-[#B3B3B3] flex-grow`}>
                        {filteredProducts.map((product) => (
                            <Link 
                                href={`/portfolio/${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`} 
                                key={product.id} 
                                className={`relative w-full last:border-r last:border-b last:border-[#B3B3B3] h-[180px] bg-white group`}
                            >
                                <Image src={`/imgs/dummy/logo/${getRandomNumber(1, 7)}.svg`} alt={product.title} fill className={`object-contain max-w-[60%] max-h-[70%] !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:grayscale transition-all duration-300`} />
                                <div className="absolute bottom-0 left-0 w-full h-full bg-[#1B2057] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 border-b-[6px] border-[#F00]">
                                    <div>
                                        <div className="text-[20px]/[141%] font-bold text-white mb-2 line-clamp-1">{product.title}</div>
                                        <div className="text-[12px]/[150%] text-white line-clamp-2">{ product.description }</div>
                                    </div>
                                    <div className="text-[12px]/[131%] font-medium text-[#F00]">VIEW MORE →</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
                {error && (
                    <div className={`text-white text-[16px] flex-col items-center justify-center font-medium leading-[150%] text-center flex-grow`}>
                        <div>
                            Error: {error.message}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portofolio;