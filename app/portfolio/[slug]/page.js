import PortfolioDetailPageIndex from "@/components/Pages/PortofolioDetail";

export async function generateMetadata({ params }) {   
    const { slug } = await params
    const portfolio = await fetch(`${process.env.NEXT_PUBLIC_API}/portfolios/${slug}`).then((res) => res.json());
    return {
      title: portfolio.data.title + ' | ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
      description: portfolio.data.intro,
    }
}

export default async function Page({ params }) {
    const { slug } = await params
    return (

        <PortfolioDetailPageIndex slug={slug} />
    )
}