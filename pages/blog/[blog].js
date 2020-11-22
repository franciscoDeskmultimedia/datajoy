import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
import TitledSlider from "../../components/TitledSlider/TitledSlider";

import { getSinglePost } from "../../lib/api";
import Footer from "../../components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
const BlogPost = ({ post, draftData }) => {
  const thePost = post.post;
  const transformDate = (date) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da} ${mo} ${ye}`;
  };
  return (
    <>
      <Head>
        <title>Datajoy</title>
        <link rel="icon" href="/datajoy-favicon.png" />

        {/* Poppins font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navigation />
      <div className="pt-20 ">
        <h1 className='max-w-6xl px-4 sm:px-32'>{thePost.title}</h1>
        <div className='px-4 mt-10 mb-12 sm:px-32'>
          <div className="flex justify-between">
            <div className='flex'>
              <p className='mr-4 text-sm'>{thePost.categories.nodes[0].name}</p>
              <p className='text-sm'>{thePost.readTime.readTime}</p>
            </div>
            <div>
              <p className='text-sm'>
                {thePost.author.node.firstName +
                  " " +
                  thePost.author.node.lastName}
                , {transformDate(thePost.date)}
              </p>
            </div>
          </div>
        </div>
        <div className='w-full px-4 border-t border-b border-black sm:px-32'>
            <div className='max-w-6xl'>
            <Image  src={thePost.featuredImage.node.mediaItemUrl} width={thePost.featuredImage.node.mediaDetails.width}  height={thePost.featuredImage.node.mediaDetails.height} layout='responsive'/>
            </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default BlogPost;

export async function getServerSideProps(context) {
  const post = await getSinglePost(context.params.blog);
  const draftData = context.preview ? context.preview : null;

  // const previewData = context.previewData;
  return {
    props: {
      post,
      draftData,
      // previewData
    },
  };
}
