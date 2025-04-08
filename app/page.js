import Testimonial from "@/components/Home/Testimonial";   
import Banner from "@/components/Home/Banner";
import Portofolio from "@/components/Home/Portofolio";
import LatestNews from "@/components/Home/LatestNews";

export default function Home() {
  return (
    <div className={`home-page`}>
      <Banner />
      <Portofolio />
      <Testimonial />
      <LatestNews />
    </div>
  );
}
