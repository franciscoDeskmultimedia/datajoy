import Image from "next/image";
const EyeBrowHero = (props) => {
  return (
    <section className="px-4 pb-20 lg:px-32 eyebrow_hero">
      <div className="flex flex-wrap">
        <div className="flex items-end justify-start w-full h-20 pb-1 pr-8 lg:justify-end lg:w-2/12 eyebrow_container">
          <p className="eyebrow">{props.eyebrow}</p>
        </div>
        <div className="w-10/12">
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="w-full mt-20 lg:w-10/12 mobileCoverImage">
        <Image
          className="mobileCoverImage"
          src={props.image}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
          layout="responsive"
          sizes="150,300,1024"
        />
      </div>
    </section>
  );
};

export default EyeBrowHero;
