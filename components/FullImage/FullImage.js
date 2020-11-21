import Image from 'next/image'
const FullImage = () => {
    return (
        <section className='relative w-full fullImageContainer '>
            <Image className='object-cover object-center' src='/linkedin-sales-navigator-Mis5fyJi7Q0-unsplash1.png' layout='fill'/>
        </section>
    )
}

export default FullImage;