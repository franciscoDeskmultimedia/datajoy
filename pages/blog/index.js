import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TitledSlider from "../../components/TitledSlider/TitledSlider";

import { getPageBuilder, getAllPosts, getAllCategories,getAllPagesWithSlug } from "../../lib/api";
import PageBuilder from "../../components/PageBuilder/PageBuilder";
import Footer from "../../components/Footer/Footer";

import TwoColPost from "../../components/TwoUpPost/TwoUpPost";
import { AnimatePresence, motion } from "framer-motion";

const Blog = ({ page, posts, cat, draftData, previewData }) => {
  const [chooseCat, setCat] = useState("Uncategorized");
  const allCategories = cat.categories.nodes;
  const pageBuilder = page ? page.page.pageBuilder.pageBuilder : "";
  let popularPost = posts.posts.nodes.filter(
    (postFiltered) => postFiltered.popularArticle.popularArticle == true
  );
  // console.log('los posts : ' + popularPost.length);
  let allPosts = {};
  if (chooseCat != "Uncategorized") {
    allPosts = posts.posts.nodes.filter(
      (postFiltered) => postFiltered.categories.nodes[0].name == chooseCat && postFiltered.popularArticle.popularArticle != true
    );
  } else {
    allPosts = posts.posts.nodes;
  }
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
      {page.page.status == "publish" || draftData == true ? (
        <PageBuilder page={pageBuilder} />
      ) : (
        <h1>Post under construction</h1>
      )}
      <section>
        <div className="flex flex-row-reverse justify-center w-full py-12 border-b border-black">
          {allCategories.map((item, index) => (
            <p
              className={`cursor-pointer px-3 ${
                item.name == chooseCat ? "underline" : ""
              }`}
              key={item.id}
              onClick={() => {
                if (item.name == "Uncategorized") {
                  setCat("Uncategorized");
                } else {
                  setCat(item.name);
                }
              }}
            >
              {item.name == "Uncategorized" ? "All Categories" : item.name}
            </p>
          ))}
        </div>

        <div className={`${allPosts.length < 1 ? 'hidden' : '' } flex flex-wrap w-full px-4 mt-20 mb-20 post-1-row sm:px-32`} >
          {/* <p>{console.log(allPosts)}</p> */}
          {allPosts.map((item, index) => {
            if (chooseCat == "Uncategorized") {
              if (index <= 1 && item.popularArticle.popularArticle != true ) {
                return (
                  <AnimatePresence key={item.id} exitBeforeEnter={true}>
                    <motion.div
                      className="w-full px-4 mt-10 mb-20 sm:mt-0 sm:w-1/2"
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src={item.thumbImage.thumbImage ? item.thumbImage.thumbImage.mediaItemUrl : item.featuredImage.node.mediaItemUrl }
                        width={item.thumbImage.thumbImage ? item.thumbImage.thumbImage.mediaDetails.width : item.featuredImage.node.mediaDetails.width}
                        height={item.thumbImage.thumbImage ? item.thumbImage.thumbImage.mediaDetails.height : item.featuredImage.node.mediaDetails.height}
                        layout="responsive"
                      />
                      <div className="flex items-center pt-6 pb-3">
                        <div className="uppercase rounded-full pill pill-sand">
                          <p className="text-sm">
                            {item.categories.nodes[0].name}
                          </p>
                        </div>
                        <div>
                          <p className="ml-2 text-sm">{item.readTime.readTime}</p>
                        </div>
                      </div>
                      <Link href={'/blog/' + item.slug}>
                      <h3 className='cursor-pointer ' key={item.id}>{item.title} </h3>
                      </Link>
                      <div className="w-full mt-5 author">
                        <p className='text-base'>
                          By{" "}
                          {item.author.node.firstName +
                            " " +
                            item.author.node.lastName}
                          . <span>{transformDate(item.date)}</span>
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              }
            } else if (
              index <= 1 &&
              item.categories.nodes[0].name == chooseCat
              && item.popularArticle.popularArticle != true
            ) {
              return (
                <AnimatePresence key={item.id} exitBeforeEnter={true}>
                  <motion.div
                    className="w-full px-4 mt-10 mb-20 sm:mt-0 sm:w-1/2"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                        src={item.thumbImage.thumbImage ? item.thumbImage.thumbImage.mediaItemUrl : item.featuredImage.node.mediaItemUrl }
                        width={item.thumbImage.thumbImage ? item.thumbImage.thumbImage.mediaDetails.width : item.featuredImage.node.mediaDetails.width}
                        height={item.thumbImage.thumbImage ? item.thumbImage.thumbImage.mediaDetails.height : item.featuredImage.node.mediaDetails.height}
                        layout="responsive"
                      />
                    <div className="flex items-center pt-6 pb-3">
                      <div className="uppercase rounded-full pill pill-sand">
                        <p className="text-sm">
                          {item.categories.nodes[0].name}
                        </p>
                      </div>
                      <div>
                        <p className="ml-2 text-sm">{item.readTime.readTime}</p>
                      </div>
                    </div>
                    <Link href={'/blog/' + item.slug}>
                      <h3 className='cursor-pointer ' key={item.id}>{item.title}</h3>
                      </Link>
                    <div className="w-full mt-5 author">
                      <p className='text-base'>
                        By{" "}
                        {item.author.node.firstName +
                          " " +
                          item.author.node.lastName}
                        . <span>{transformDate(item.date)}</span>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            }
          })}
        </div>

        <div className="pb-40 overflow-hidden text-white slider articles bg-djGreen-500 ">
          <div className="flex items-end justify-between px-4 py-8 border-b border-white sm:px-32">
            <h2 className='leading-none'>Popular articles </h2>
            <p className='text-right'>Get the latest on tech, business and entrepreneurship</p>
          </div>
          <div className='px-4 pt-20 sm:px-32'>
            <TitledSlider popularPost={popularPost}></TitledSlider>
          </div>
          
        </div>

        <div className={`${allPosts.length < 3 ? 'hidden' : '' } flex flex-wrap w-full px-4 mt-20 mb-20 post-1-row sm:px-32`}>
          {allPosts.map((item, index) => {
            if (chooseCat == "Uncategorized" && item.popularArticle.popularArticle != true && item.popularArticle.popularArticle != true ) {
              if (index >= 2) {
                return (
                  <AnimatePresence key={item.id} exitBeforeEnter={true}>
                    <motion.div
                      className="w-full px-4 mt-10 mb-20 sm:mt-0 sm:w-1/2"
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src={item.thumbImage.thumbImage != null ? item.thumbImage.thumbImage.mediaItemUrl : item.featuredImage.node.mediaItemUrl}
                        width={item.thumbImage.thumbImage != null ? item.thumbImage.thumbImage.mediaDetails.width : item.featuredImage.node.mediaDetails.width}
                        height={item.thumbImage.thumbImage != null ? item.thumbImage.thumbImage.mediaDetails.height : item.featuredImage.node.mediaDetails.height}
                        layout="responsive"
                        
                      />
                      <div className="flex items-center pt-6 pb-3">
                        <div className="uppercase rounded-full pill pill-sand">
                          <p className="text-sm">
                            {item.categories.nodes[0].name}
                            {item.popularArticle.popularArticle}
                          </p>
                        </div>
                        <div>
                          <p className="ml-2 text-sm">{item.readTime.readTime}</p>
                        </div>
                      </div>
                      <Link href={'/blog/' + item.slug}>
                      <h3 className='cursor-pointer ' key={item.id}>{item.title}</h3>
                      </Link>
                      <div className="w-full mt-5 author">
                        <p className='text-base'>
                          By{" "}
                          {item.author.node.firstName +
                            " " +
                            item.author.node.lastName}
                          . <span>{transformDate(item.date)}</span>
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              }
            } else if (
              index >= 2 &&
              item.categories.nodes[0].name == chooseCat
              && item.popularArticle.popularArticle != true
            ) {
              // console.log(item.popularArticle.popularArticle)
              return (
                <AnimatePresence key={item.id} exitBeforeEnter={true}>
                  <motion.div
                    className="w-full px-4 mt-10 mb-20 sm:mt-0 sm:w-1/2"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                        src={item.thumbImage.thumbImage != null ? item.thumbImage.thumbImage.mediaItemUrl : item.featuredImage.node.mediaItemUrl}
                        width={item.thumbImage.thumbImage != null ? item.thumbImage.thumbImage.mediaDetails.width : item.featuredImage.node.mediaDetails.width}
                        height={item.thumbImage.thumbImage != null ? item.thumbImage.thumbImage.mediaDetails.height : item.featuredImage.node.mediaDetails.height}
                        layout="responsive"
                        
                      />
                    <div className="flex items-center pt-6 pb-3">
                      <div className="uppercase rounded-full pill pill-sand">
                        <p className="text-sm">
                          {item.categories.nodes[0].name}
                        </p>
                      </div>
                      <div>
                        <p className="ml-2 text-sm">{item.readTime.readTime}</p>
                      </div>
                    </div>
                    <Link href={'/blog/' + item.slug}>
                      <h3 className='cursor-pointer ' key={item.id}>{item.title}</h3>
                      </Link>
                    <div className="w-full mt-5 author">
                      <p className='text-base'>
                        By{" "}
                        {item.author.node.firstName +
                          " " +
                          item.author.node.lastName}
                        . <span>{transformDate(item.date)}</span>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            }
          })}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Blog;

// export async function getServerSideProps(context) {
//   const page = await getPageBuilder("blog");
//   const posts = await getAllPosts();
//   const cat = await getAllCategories();
//   const draftData = context.preview ? context.preview : null;
//   // const previewData = context.previewData;
//   return {
//     props: {
//       page,
//       posts,
//       cat,
//       draftData,
//       // previewData
//     },
//   };
// }

export async function getStaticProps({params, preview = false, previewData}) {
    const page = await getPageBuilder("blog", preview, previewData);
    const posts = await getAllPosts();
    const cat = await getAllCategories();
    const draftData = preview ? preview : null;

  return {
    props: {
      page,
      posts,
      cat,
      draftData
    },
  }
}


