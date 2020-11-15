import Image from "next/image";
const TwoColTitled = (props) => {
  return (
    <section style={{ backgroundColor:props.bgColor}} className="flex px-4 pt-20 pb-40 bg-black sm:px-32">
      <div className="items-start justify-end hidden w-3/12 pt-4 pr-8 sm:flex">
        <Image layout='intrinsic' src={props.iconSrc} width={props.iconWidth / 2} height={props.iconHeight / 2} />
      </div>
      <div className="flex flex-wrap w-full sm:w-9/12">
        <h1 className='text-white'>{props.title}</h1>
        <div className="flex flex-wrap pt-10">
          <div className="w-full lg:w-1/2">
            <p className='font-light text-white sm:pr-16'>
              {props.copy}
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <Image layout='responsive' src={props.imageSrc} width={props.imageWidth} height={props.imageHeight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColTitled;
