"use client";

import Testimonial from "@/components/Home/Testimonial";   
import Banner from "@/components/Home/Banner";
import Portofolio from "@/components/Home/Portofolio";
import LatestNews from "@/components/Home/LatestNews";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeIndex = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/pages/home`,
        fetcher
    );
    return (
        <div>
            {data && (
                <>
                    <Banner title={data.data.components[0].data.title || 'Advancing <br />the Next Wave <br />of <strong>Innovation</strong>'} />
                    <Portofolio title={data.data.components[1].data.title} title_value={data.data.components[2].data.title} />
                    <Testimonial title={data.data.components[3].data.title} />
                    <LatestNews title={data.data.components[4].data.title} />
                </>
            )}
        </div>
    );
}

export default HomeIndex;