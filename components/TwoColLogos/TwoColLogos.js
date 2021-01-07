import Image from 'next/image'
const TwoColLogos = (props) => {
    return(
        <section className='flex flex-wrap pt-10 pb-10 border-t border-black lg:pt-24 lg:pb-24 logosection'>
            <div className='w-full lg:w-1/2 '>
                <h2 className='px-4 pb-10 lg:px-40'>{props.title}</h2>
            </div>
            <div className='flex flex-wrap justify-center w-full lg:w-1/2'>
                {props.logos.map((item,index)=>{
                    return(
                        <div key={index} className='flex items-center justify-center w-1/2 p-6'>
                        <Image  className='max-w-sm ' src={item.logoImage.mediaItemUrl} width={item.logoImage.mediaDetails.width / 2} height={item.logoImage.mediaDetails.height / 2}/>
                        </div>
                    )
                    
                })}
            </div>
        </section>
    )
}
export default TwoColLogos;