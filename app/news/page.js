import Banner from "@/components/Banner";
import NewsList from "@/components/News/List";
import Featured from "@/components/News/Featured";
export async function generateMetadata() {   
    const news = await fetch(`${process.env.NEXT_PUBLIC_API}/pages/news`).then((res) => res.json());
    return {
      title: `${news.data.title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
      description: news.data.description,
    }
}

const NewsPage = () => {
    return (
        <>
            <Banner title="News" />
            <Featured />
            <NewsList />
        </>
    );
}

export default NewsPage;