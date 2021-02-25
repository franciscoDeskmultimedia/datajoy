import Image from 'next/image'

const HeroOne = (props) => {
    return (
      <section className="px-4 pt-10 pb-24 lg:pt-20 md:px-32 simple-hero">
        <h1 className={`mb-2 font-normal text-left ${!props.subtitle ? 'mb-20' : 'mb-2'  } `}>{props.title}</h1>
        <Image
          className="w-full "
          layout="responsive"
          src={props.imageSrc}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
        />
        
          {props.subtitle ? <h2 className="w-2/3 max-w-screen-sm mt-5 font-normal">{props.subtitle}</h2> : null}
        
        <div className='flex justify-end mt-10 lg:mt-16' >
          <div className='w-full' dangerouslySetInnerHTML={{ __html: props.copy}}></div>
        </div>
      </section>
    );
}

export default HeroOne;