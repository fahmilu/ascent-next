"use client";

import Banner from "@/components/Banner";
import PortfolioComponent from "@/components/Portfolio";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const PortfolioPageIndex = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/pages/our-portfolio`,
        fetcher
    );

    return (
        <>
            {(data) && (
                <>
                    <Banner title={data.data.title} />
                </>
            )}
            <PortfolioComponent />
        </>
    );
}

export default PortfolioPageIndex;
