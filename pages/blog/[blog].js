import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
import TitledSlider from "../../components/TitledSlider/TitledSlider";

import { getSinglePost, getAllPostsWithSlug } from "../../lib/api";
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
        <h1 className="max-w-6xl px-4 sm:px-32">{thePost.title}</h1>
        <div className="px-4 mt-10 mb-12 sm:px-32">
          <div className="flex justify-between">
            <div className="flex">
              <p className="mr-4 text-sm">{thePost.categories.nodes[0].name}</p>
              <p className="text-sm">{thePost.readTime.readTime}</p>
            </div>
            <div>
              <p className="text-sm">
                {thePost.author.node.firstName +
                  " " +
                  thePost.author.node.lastName}
                , {transformDate(thePost.date)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-0 border-t border-b border-black sm:px-32">
          <div className="max-w-6xl">
            <Image
              src={thePost.featuredImage ? thePost.featuredImage.node.mediaItemUrl : '/blog_IMG_08.jpg'}
              width={thePost.featuredImage ? thePost.featuredImage.node.mediaDetails.width : '730'}
              height={thePost.featuredImage ? thePost.featuredImage.node.mediaDetails.height : '486.67'}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-4 pt-40 pb-40 sm:px-32 postContent">
        <div className="w-full sm:w-1/3 shareLinks">
          <h3>{thePost.title}</h3>
          <p className='mt-5'>{transformDate(thePost.date)}</p>
        </div>
        <div
          className="w-full sm:w-2/3"
          dangerouslySetInnerHTML={{
            __html: thePost.blogBuilder.blogBuilder[0] ? thePost.blogBuilder.blogBuilder[0].content : '',
          }}
        ></div>
      </div>
      <div className="pb-40 text-white slider articles bg-djGreen-500">
          <div className="flex items-end justify-between px-4 py-8 border-b border-white sm:px-32">
            <h2 className='leading-none'>Related articles </h2>
            {/* <p className='text-right'>Get the latest on tech, business and entrepreneurship</p> */}
          </div>
          <div className='px-4 pt-20 sm:px-32'>
            <TitledSlider></TitledSlider>
          </div>
          
        </div>

      <Footer></Footer>
    </>
  );
};
export default BlogPost;

// export async function getServerSideProps(context) {
//   const post = await getSinglePost(context.params.blog);
//   const draftData = context.preview ? context.preview : null;

//   // const previewData = context.previewData;
//   return {
//     props: {
//       post,
//       draftData,
//       // previewData
//     },
//   };
// }
export async function getStaticProps(context) {
    const post = await getSinglePost(context.params.blog);
    const draftData = context.preview ? context.preview : null;
  
    return {
      props: {
        post,
        draftData,
      },
    }
  }
  
  export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
      fallback: false,
    }
  }
