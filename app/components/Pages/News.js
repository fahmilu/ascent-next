"use client";

import Banner from "@/components/Banner";
import Featured from "@/components/News/Featured";
import NewsList from "@/components/News/List";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const NewsPageIndex = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/pages/news`,
        fetcher
    );

    return (
        <div>
            {(data) && (
                <>
                    <Banner title={data.data.title} />
                </>
            )}
            <Featured />
            <NewsList />
        </div>
    );
}

export default NewsPageIndex;
