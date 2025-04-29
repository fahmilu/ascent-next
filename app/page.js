import Testimonial from "@/components/Home/Testimonial";   
import Banner from "@/components/Home/Banner";
import Portofolio from "@/components/Home/Portofolio";
import LatestNews from "@/components/Home/LatestNews";


export async function generateMetadata() {   
  return {
    title: 'Home | ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
    description: '',
  }
}

export default async function Home() {
  const home = await fetch(`${process.env.NEXT_PUBLIC_API}/pages/home`).then((res) => res.json());

  return (
    <div className={`home-page`}>
      <Banner title={home.data.components[0].data.title || 'Advancing <br />the Next Wave <br />of <strong>Innovation</strong>'} />
      <Portofolio title={home.data.components[1].data.title} title_value={home.data.components[2].data.title} />
      <Testimonial title={home.data.components[3].data.title} />
      <LatestNews title={home.data.components[4].data.title} />
    </div>
  );
}
