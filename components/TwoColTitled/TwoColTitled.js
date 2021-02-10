import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";

const TwoColTitled = (props) => {
  return (
    <section
      style={{ backgroundColor: props.bgColor ? props.bgColor : '' }}
      className="flex px-4 pt-20 pb-40 bg-black md:px-32"
    >
      {props.iconSrc ? (
        <div className="items-start justify-end hidden pt-4 pr-8 lg:w-2/12 sm:flex">
          <Image
            layout="intrinsic"
            src={props.iconSrc}
            alt={props.iconAlt}
            width={props.iconWidth / 2}
            height={props.iconHeight / 2}
          />
        </div>
      ) : null}

      <div
        className={`flex flex-wrap w-full ${
          props.iconSrc ? "lg:w-10/12" : "w-full"
        }`}
      >
        <h1
          style={props.textColor ? { color: props.textColor } : null}
          className="w-full text-white"
        >
          {props.title}
        </h1>
        <div
          className={`flex flex-wrap pt-10 w-full ${
            props.reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className={`flex flex-col items-start justify-between w-full md:w-1/2 mb-10 ${
                props.reverse ? "md:pl-16 sm:mb-10 md:mb-0" : "md:pr-16"
              }`}>
            <p
              style={props.textColor ? { color: props.textColor } : null}
              className={`font-light text-white sm:p-0 sm:mb-4`}
            >
              {props.copy}
            </p>
            {props.ctaName ? (
              <PrimaryButton
                linkName={props.ctaName}
                url={props.ctaUrl}
                textColor={props.ctaTextColor}
                buttonColor={props.ctaBgColor}
              />
            ) : null}
          </div>
          <div className="w-full md:w-1/2">
            <Image
              layout="responsive"
              src={props.imageSrc}
              alt={props.imageAlt}
              width={props.imageWidth}
              height={props.imageHeight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColTitled;
