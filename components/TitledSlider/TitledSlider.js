import Slider from "react-slick";
import Link from 'next/link';
import Image from "next/image";
const TitledSlider = () => {
  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...SliderSettings}>
      <div className="w-full sm:pr-2">
        <div className="relative slider-one">
          <Image
            className="object-cover "
            src="/home_IMG_HERO.jpg"
            layout="fill"
          />
        </div>
        <div className="flex items-center pt-8 pb-3">
          <div className="uppercase rounded-full pill pill-sand">
            <p className="text-sm">Product</p>
          </div>
          <div>
            <p className="ml-2 text-sm">6 min read</p>
          </div>
        </div>
        <Link href='#'>
        <h3>Single source of truth for end to end SaaS metrics</h3>
        </Link>
        <div className="w-full mt-5 author">
          <p className='text-base'>
            By Ken Wong .  <span>09 Sep 2020</span>
          </p>
        </div>
      </div>

      <div className="w-full sm:pr-1 sm:pl-1">
        <div className="relative slider-two ">
          <Image
            className="object-cover"
            src="/blog_IMG_05.jpg"
            layout="fill"
          />
        </div>
        <div className="flex items-center pt-8 pb-3">
          <div className="uppercase rounded-full pill pill-sand">
            <p className="text-sm">Product</p>
          </div>
          <div>
            <p className="ml-2 text-sm">6 min read</p>
          </div>
        </div>
        <Link href='#'>
        <h3>Get up and running in days, not months</h3>
        </Link>
        <div className="w-full mt-5 author">
          <p className='text-base'>
            By Ken Wong .  <span>09 Sep 2020</span>
          </p>
        </div>
      </div>

      <div className="w-full sm:pl-2">
        <div className="relative slider-three ">
          <Image
            className="object-cover"
            src="/blog_IMG_06.jpg"
            layout="fill"
          />
        </div>
        <div className="flex items-center pt-8 pb-3">
          <div className="uppercase rounded-full pill pill-sand">
            <p className="text-sm">Product</p>
          </div>
          <div>
            <p className="ml-2 text-sm">6 min read</p>
          </div>
        </div>
        <Link href='#'>
        <h3>Hi CFOs, datajoy is here to optimize your revenue</h3>
        </Link>
        <div className="w-full mt-5 author">
          <p className='text-base'>
          By Ken Wong .  <span>09 Sep 2020</span>
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default TitledSlider;
