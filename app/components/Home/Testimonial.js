"use client";

import useSWR from "swr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Testimonial = () => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_DOMAIN}/quotes`,
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
    <section className="pt-[50px] pb-[80px] md:pt-[100px] md:pb-[150px] z-10 relative">
      <div className="container">
        <h2 className="title-section">Our Value</h2>
        <div className="slider-container px-5 lg:px-0">
          <Slider {...settings}>
            {data.quotes.slice(0, 6).map((quote) => (
              <div key={quote.id} className="px-4 h-full">
                <div className="card-testimonial">
                  <div className="avatar"></div>
                  <div className="text-[12px] leading-[155%] mb-5">{quote.quote}</div>
                  <div className="text-[12px] leading-[155%] font-bold">{quote.author}</div>
                  <div className="text-[12px] leading-[155%]">CEO, RUN System</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;