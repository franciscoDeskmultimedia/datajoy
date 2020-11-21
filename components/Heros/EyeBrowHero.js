import Image from "next/image";
const EyeBrowHero = (props) => {
  return (
    <section className="px-10 sm:px-32 eyebrow_hero">
      <div className="flex flex-wrap">
        <div className="flex justify-end w-auto pt-10 pr-8 eyebrow_container">
          <p className="eyebrow">{props.eyebrow}</p>
        </div>
        <div className="w-10/12">
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="w-10/12 mt-20 mobileCoverImage">
        <Image
          className="mobileCoverImage"
          src={props.image}
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
