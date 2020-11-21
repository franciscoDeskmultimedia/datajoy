import Image from 'next/image'
const FullImage = (props) => {
    return (
        <section className='relative w-full fullImageContainer '>
            <Image className='object-cover object-center' src={props.image} layout='fill'/>
        </section>
    )
}

export default FullImage;