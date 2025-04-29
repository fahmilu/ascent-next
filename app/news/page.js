import NewsPageIndex from "@/components/Pages/News";

export async function generateMetadata() {   
    const news = await fetch(`${process.env.NEXT_PUBLIC_API}/pages/news`).then((res) => res.json());
    return {
      title: `${news.data.title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
      description: news.data.description,
    }
}

const NewsPage = () => {
    return (
       <NewsPageIndex />
    );
}

export default NewsPage;