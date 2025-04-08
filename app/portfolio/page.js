import Banner from "@/components/Banner";
import PortfolioComponent from "@/components/Portfolio";

export async function generateMetadata() {   
    return {
      title: 'Our Portfolio | Ascent',
      description: '',
    }
}

const Portfolio = () => {
    return (
        <>
            <Banner title="Our Portfolio" />
            <PortfolioComponent />
        </>
    );
}

export default Portfolio;