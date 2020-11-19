import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";

const TwoColImage = (props) => {
  return (
    <section
      className={`twocolimage flex flex-wrap ${
        props.reverse == true ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {props.fullImage == true ? (
        <div className="relative flex items-center justify-center w-full p-16 fullImage bg-lightblue-500 lg:h-56 lg:w-1/2">
          <Image layout="fill" src={props.imageSrc} />
        </div>
      ) : (
        <div
          style={{ backgroundColor: props.backgroundColor }}
          className="flex items-center justify-center w-full p-16 px-20 py-20 containImage bg-lightblue-500 lg:w-1/2"
        >
          <Image
            layout="intrinsic"
            src={props.imageSrc}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        </div>
      )}
      <div className="w-full px-20 py-20 lg:w-1/2">
        <h2>{props.title}</h2>
        <p className="mt-4">{props.text}</p>
        <div className="mt-12">
          <PrimaryButton
            buttonColor={props.ctaBgColor}
            linkName={props.ctaName}
            url={props.ctaUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default TwoColImage;
