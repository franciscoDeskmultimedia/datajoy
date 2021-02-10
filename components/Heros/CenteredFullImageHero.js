import Image from 'next/image';
const CenteredFullImageHero = (props) => {
    return (
      <section className="pt-10 pb-24 text-center lg:pb-32 centeredFullImageHero">
        <h1 className="max-w-5xl px-4 m-auto mb-2 font-normal text-left lg:text-center lg:px-32">
          {props.title}
        </h1>

        {props.subtitle ? (
          <h2 className="w-full px-4 mt-5 mb-16 text-2xl font-normal text-left lg:text-center lg:px-64">
            {props.subtitle}
          </h2>
        ) : null}
        <div
          className={`w-full relative ${!props.subtitle ? "pt-10" : ""} ${
            props.fullImage == true ? "" : "lg:px-32 px-4"
          }`}
        >
          <div className={`relative w-full ${props.fullImage == true ? '' : 'centeredImage'}`} >
            {props.fullImage == true ? (
              <Image
                className={``}
                layout={`responsive`}
                src={props.imageSrc}
                alt={props.imageAlt}
                width={props.imageWidth}
                height={props.imageHeight}
              />
            ) : (
              <Image
                className={`object-cover`}
                alt={props.imageAlt}
                layout={`fill`}
                src={props.imageSrc}
                // width={props.imageWidth}
                // height={props.imageHeight}
              />
            )}
          </div>
        </div>
      </section>
    );
}

export default CenteredFullImageHero;