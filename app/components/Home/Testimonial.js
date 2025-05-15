"use client";

import useSWR from "swr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Testimonial = ({title}) => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/testimonials`,
    fetcher
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.data.length > 0 && (
        <section className="pt-[50px] pb-[80px] md:pt-[100px] md:pb-[150px] z-10 relative">
          <div className="container">
            <h2 className="title-section" data-aos="fade-up" data-aos-delay="100">{title}</h2>
          <div className="slider-container px-5 lg:px-0">
            <Slider {...settings}>
              {data.data.slice(0, 6).map((item) => (
                <div key={item.id} className="sm:px-4 h-full">
                  <div className="card-testimonial" data-aos="fade-up" data-aos-delay="100">
                    <div className="avatar">
                      <Image src={item.image_url} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="text-[12px] leading-[155%] mb-5">{item.content}</div>
                    <div className="text-[12px] leading-[155%] font-bold">{item.name}</div>
                    <div className="text-[12px] leading-[155%]">{item.position}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default Testimonial;