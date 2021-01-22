import Image from "next/image";
import Link from "next/link";

const TwoUpPost = (props) => {
  const transformDate = (date) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    // console.log(`${da} ${mo} ${ye}`);
    return `${da} ${mo} ${ye}`
  }
  return (
    <section className="flex flex-wrap items-center bg-black twoUpPost">
      <div className="order-2 w-full py-20 pl-4 pr-10 text-white bg-black lg:pl-32 sm:pl-24 lg:order-none twoUpPostContent lg:w-1/2">
        <div className='flex items-center w-full'>
          <div className="mr-5 uppercase rounded-full pill pill-white">
            <p className='text-sm'>{props.category}</p>
          </div>
          <div className="readTime">
            <p className='text-sm'>{props.readtime}</p>
          </div>
        </div>
        <div className='w-full mt-4'>
          <Link href={'/blog/' + props.slug}>
          <h2 className='max-w-lg cursor-pointer '>{props.title}</h2>
          </Link>
        </div>
        <div className='w-full mt-5 author'>
            <p>By {props.author} . <span>{transformDate(props.date)}</span></p>
        </div>
      </div>
      <div className="relative order-1 w-full lg:order-none twoUpPostImage lg:w-1/2">
        <Image className='object-cover' src={props.image} layout="fill" />
      </div>
    </section>
  );
};

export default TwoUpPost;
