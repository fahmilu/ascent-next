import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FilterByCategory = ({ productCategories, currentCategory, setCurrentCategory }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="py-[20px] sm:py-[46px] category-container">
            <Slider {...settings}>
                <div 
                    onClick={() => setCurrentCategory(null)} 
                    className={`py-2 text-[12px]/[150%] uppercase text-center tracking-[1.2px] transition-all duration-300 ${!currentCategory ? 'text-[#1B2057] font-bold' : ' font-medium text-[#808080] cursor-pointer'}`}
                >
                    All
                </div>
                {productCategories.map((category) => (
                    <div 
                        key={category} 
                        onClick={() => setCurrentCategory(category)} 
                        className={`py-2 text-[12px]/[150%] uppercase text-center tracking-[1.2px] transition-all duration-300 ${currentCategory === category ? 'text-[#1B2057] font-bold' : 'font-medium text-[#808080] cursor-pointer'}`}
                    >
                        {category}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FilterByCategory;