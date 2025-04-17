import Banner from "@/components/Banner";
import PortfolioComponent from "@/components/Portfolio";

export async function generateMetadata() {   
    const portfolio = await fetch(`${process.env.NEXT_PUBLIC_API}/pages/our-portfolio`).then((res) => res.json());
    return {
      title: `${portfolio.data.title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
      description: portfolio.data.description,
    }
  }

const Portfolio = async () => {
    const portfolio = await fetch(`${process.env.NEXT_PUBLIC_API}/pages/our-portfolio`).then((res) => res.json());
    return (
        <>
            <Banner title={portfolio.data.title} />
            <PortfolioComponent />
        </>
    );
}

export default Portfolio;