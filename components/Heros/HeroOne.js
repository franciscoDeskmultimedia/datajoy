import Image from 'next/image'

const HeroOne = (props) => {
    return (
      <section className="px-4 pt-20 pb-24 md:px-32 simple-hero">
        <h1 className="mb-2 font-normal text-right ">{props.title}</h1>
        <Image
          className="w-full "
          layout="responsive"
          src={props.imageSrc}
          width={props.imageWidth}
          height={props.imageHeight}
        />
        <h2 className="w-2/3 max-w-screen-sm font-normal">
          {props.subtitle}
        </h2>
      </section>
    );
}

export default HeroOne;