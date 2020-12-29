import Slider from "react-slick";
import Link from 'next/link';
import Image from "next/image";
const TitledSlider = (props) => {
  const transformDate = (date) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da} ${mo} ${ye}`;
  };
  const popPost = props.popularPost;
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
      {/* {popPost.map((item, index) => {
        console.log(item.featuredImage.node.mediaItemUrl);
        <div key={item.id} className="w-full sm:pr-2">
          <div className="relative slider-one">
            <Image
              className="object-cover "
              src={item.featuredImage.node.mediaItemUrl}
              layout="fill"
            />
          </div>
          <div className="flex items-center pt-8 pb-3">
            <div className="uppercase rounded-full pill pill-sand">
              <p className="text-sm">{item.categories.nodes[0].name}</p>
            </div>
            <div>
              <p className="ml-2 text-sm">6 min read</p>
            </div>
          </div>
          <Link href={"/blog/" + item.slug}>
            <h3 className="cursor-pointer " key={item.id}>
              {item.title}{" "}
            </h3>
          </Link>
          <div className="w-full mt-5 author">
            <p className="text-base">
              By {item.author.node.firstName + " " + item.author.node.lastName}.{" "}
              <span>{transformDate(item.date)}</span>
            </p>
          </div>
        </div>
      })} */}

      <div className="w-full outline-none sm:pr-2 ">
        <div className="relative slider-one">
          <Image
            className="object-cover "
            src={popPost[0].featuredImage.node.mediaItemUrl}
            layout="fill"
          />
        </div>
        <div className="flex items-center pt-8 pb-3">
          <div className="uppercase rounded-full pill pill-sand">
            <p className="text-sm">{popPost[0].categories.nodes[0].name}</p>
          </div>
          <div>
            <p className="ml-2 text-sm">6 min read</p>
          </div>
        </div>
        <Link href={"/blog/" + popPost[0].slug}>
          <h3 className='cursor-pointer '>{popPost[0].title}{" "}</h3>
        </Link>
        <div className="w-full mt-5 author">
          <p className="text-base">
          By {popPost[0].author.node.firstName + " " + popPost[0].author.node.lastName}.{" "}
              <span>{transformDate(popPost[0].date)}</span>
          </p>
        </div>
      </div>

      <div className="w-full outline-none sm:pr-1 sm:pl-1 ">
        <div className="relative slider-two ">
          <Image
            className="object-cover"
            src={popPost[1].featuredImage.node.mediaItemUrl}
            layout="fill"
          />
        </div>
        <div className="flex items-center pt-8 pb-3">
          <div className="uppercase rounded-full pill pill-sand">
            <p className="text-sm">{popPost[1].categories.nodes[0].name}</p>
          </div>
          <div>
            <p className="ml-2 text-sm">6 min read</p>
          </div>
        </div>
        <Link href={"/blog/" + popPost[1].slug}>
          <h3 className='cursor-pointer '>{popPost[1].title}{" "}</h3>
        </Link>
        <div className="w-full mt-5 author">
          <p className="text-base">
          By {popPost[1].author.node.firstName + " " + popPost[1].author.node.lastName}.{" "}
              <span>{transformDate(popPost[1].date)}</span>
          </p>
        </div>
      </div>

      <div className="w-full outline-none sm:pl-2 ">
        <div className="relative slider-three ">
          <Image
            className="object-cover"
            src={popPost[2].featuredImage.node.mediaItemUrl}
            layout="fill"
          />
        </div>
        <div className="flex items-center pt-8 pb-3">
          <div className="uppercase rounded-full pill pill-sand">
            <p className="text-sm">{popPost[2].categories.nodes[0].name}</p>
          </div>
          <div>
            <p className="ml-2 text-sm">6 min read</p>
          </div>
        </div>
        <Link href={"/blog/" + popPost[2].slug}>
          <h3 className='cursor-pointer '>{popPost[2].title}{" "}</h3>
        </Link>
        <div className="w-full mt-5 author">
          <p className="text-base">
          By {popPost[2].author.node.firstName + " " + popPost[2].author.node.lastName}.{" "}
              <span>{transformDate(popPost[2].date)}</span>
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default TitledSlider;
