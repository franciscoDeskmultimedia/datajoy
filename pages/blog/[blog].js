import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
import TitledSlider from "../../components/TitledSlider/TitledSlider";

import { getSinglePost, getAllPostsWithSlug } from "../../lib/api";
import Footer from "../../components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
const BlogPost = ({ post, draftData }) => {
  const baseUrl = process.env.BASE_URL;
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
        <h1 className="hidden max-w-6xl px-4 lg:block sm:px-32">{thePost.title}</h1>
        <div className="px-4 mt-10 mb-12 sm:px-32">
          <div className="flex flex-wrap justify-between">
            <div className="flex w-full ">
              <p className="mr-4 text-sm">{thePost.categories.nodes[0].name}</p>
              <p className="text-sm">{thePost.readTime.readTime}</p>
            </div>
            <h1 className="block w-full lg:hidden ">{thePost.title}</h1>
            <div className='w-full lg:w-auto'>
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
              src={
                thePost.featuredImage
                  ? thePost.featuredImage.node.mediaItemUrl
                  : "/blog_IMG_08.jpg"
              }
              width={
                thePost.featuredImage
                  ? thePost.featuredImage.node.mediaDetails.width
                  : "730"
              }
              height={
                thePost.featuredImage
                  ? thePost.featuredImage.node.mediaDetails.height
                  : "486.67"
              }
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-4 pt-40 pb-40 lg:px-32 postContent">
        <div className="order-2 w-full lg:order-1 lg:w-1/3 shareLinks">
          <h3 className='hidden lg:flex' >{thePost.title}</h3>
          <p className="hidden mt-5 lg:flex">{transformDate(thePost.date)}</p>
          <div className="flex mt-4 socialShare">
            <div className="mr-2 linkedIn">
              <Link
                href={`http://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}/blog/${thePost.slug}&title=${thePost.title}&source=${baseUrl}`}
              >
                <a>
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 0C10.752 0 0 10.7908 0 24.0865C0 37.3823 10.752 48.1731 24 48.1731C37.248 48.1731 48 37.3823 48 24.0865C48 10.7908 37.248 0 24 0ZM17.28 36.2743C15.6 36.2743 13.92 36.2743 12.24 36.2743C12.24 30.879 12.24 25.4836 12.24 20.0882C12.24 20.04 12.24 19.9918 12.288 19.9918C13.968 19.9918 15.648 19.9918 17.328 19.9918C17.28 25.3872 17.28 30.8308 17.28 36.2743ZM13.104 17.2941C12.336 16.7642 11.712 15.6563 11.856 14.3556C12 13.3921 12.672 12.5732 13.392 12.1878C13.632 12.0433 13.968 11.9469 14.352 11.9469C16.272 11.7061 17.712 13.0549 17.712 14.8855C17.664 17.1014 15.12 18.643 13.104 17.2941ZM36.192 36.2743C34.512 36.2743 32.832 36.2743 31.152 36.2743C31.152 34.4438 31.152 32.5168 31.152 30.4454C31.152 27.9886 31.488 25.1464 29.808 24.2792C28.992 23.8457 27.888 23.9902 27.168 24.2792C25.344 25.0982 25.488 27.6995 25.488 30.5417C25.488 32.5168 25.488 34.5883 25.488 36.2743C23.808 36.2743 22.128 36.2743 20.448 36.2743C20.448 30.8308 20.448 25.3872 20.448 19.9918C22.08 19.9918 23.664 19.9918 25.296 19.9918C25.296 20.7144 25.296 21.4852 25.296 22.2078C25.488 22.0633 25.536 21.8706 25.68 21.6779C26.544 20.5217 28.08 19.5583 30.048 19.5583C32.544 19.5583 34.32 20.4254 35.232 22.0151C36.192 23.7012 36.192 26.0616 36.192 28.7112C36.192 31.168 36.192 33.8657 36.192 36.2743Z"
                      fill="#0E4830"
                    />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="mr-2 twitter">
              <Link href={`http://twitter.com/intent/tweet?original_referer=${baseUrl}/blog/${thePost.slug}&text=${thePost.title}&url=${baseUrl}/blog/${thePost.slug}`}>
                <a>
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 0C10.752 0 0 10.7908 0 24.0865C0 37.3823 10.752 48.1731 24 48.1731C37.248 48.1731 48 37.3823 48 24.0865C48 10.7908 37.248 0 24 0ZM36.768 19.4619C36.912 23.3158 35.808 26.3989 34.368 28.8557C32.976 31.2162 31.056 33.1431 28.8 34.4919C26.496 35.889 23.472 36.9006 19.872 36.8042C16.512 36.7079 13.872 35.7444 11.712 34.4438C11.568 34.3474 11.424 34.2511 11.328 34.1547C15.072 34.5883 17.904 33.3358 19.92 31.7942C18.432 31.7461 17.28 31.2643 16.464 30.5417C15.6 29.8673 14.88 28.952 14.496 27.7477C15.264 27.9404 16.368 27.8922 17.04 27.6514C15.648 27.3623 14.64 26.5915 13.824 25.6763C13.008 24.8091 12.48 23.5566 12.48 21.8706C12.528 21.7742 12.672 21.9188 12.72 21.9669C13.344 22.256 14.16 22.4968 15.024 22.545C13.584 21.5334 12.144 19.5583 12.576 16.8124C12.72 15.9935 12.96 15.319 13.296 14.741C13.68 15.1264 14.016 15.5599 14.4 15.9453C17.04 18.5948 20.4 20.4736 25.296 20.8589C24.624 17.824 26.16 15.6081 28.08 14.5001C29.136 13.922 30.624 13.633 32.064 13.922C33.36 14.1629 34.368 14.8373 35.136 15.6081C36.576 15.3672 37.728 14.7891 38.832 14.2111C38.304 15.6081 37.536 16.7161 36.288 17.3905C37.488 17.2941 38.592 16.8606 39.6 16.5234C38.88 17.6314 37.824 18.5948 36.768 19.4619Z"
                      fill="#0E4830"
                    />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="facebook">
              <Link href={`http://www.facebook.com/sharer/sharer.php?u=${baseUrl}/blog/${thePost.slug}&title=${thePost.title}`}>
                <a>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 0C10.752 0 0 10.7444 0 23.9831C0 37.2218 10.752 47.9662 24 47.9662C37.248 47.9662 48 37.2218 48 23.9831C48 10.7444 37.248 0 24 0ZM27.36 17.6995C29.04 17.6995 30.816 17.6516 32.496 17.7475C32.448 19.5222 32.496 21.3929 32.448 23.1677C30.768 23.1677 29.04 23.1677 27.36 23.1677C27.36 28.7797 27.36 34.3438 27.36 39.9558C24.96 39.9558 22.56 39.9558 20.16 39.9558C20.16 34.3438 20.16 28.7797 20.16 23.1677C18.672 23.1197 17.088 23.1677 15.552 23.1197C15.552 21.297 15.552 19.4743 15.552 17.6516C17.088 17.6516 18.624 17.6516 20.112 17.6516C20.16 16.2126 20.112 14.9175 20.208 13.7663C20.304 12.6151 20.688 11.6558 21.216 10.8404C22.272 9.30544 24 8.05832 26.352 7.96239C28.272 7.86645 30.432 8.01035 32.496 8.01035C32.496 9.83307 32.544 11.7037 32.448 13.4785C31.44 13.5265 30.384 13.3826 29.52 13.4785C28.608 13.5744 27.936 14.1021 27.648 14.7736C27.216 15.589 27.36 16.5963 27.36 17.6995Z"
                      fill="#0E4830"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="order-1 w-full article-content lg:w-2/3 lg:order-2"
          dangerouslySetInnerHTML={{
            __html: thePost.blogBuilder.blogBuilder[0]
              ? thePost.blogBuilder.blogBuilder[0].content
              : "",
          }}
        ></div>
      </div>
      <div className="pb-40 text-white slider articles bg-djGreen-500">
        <div className="flex items-end justify-between px-4 py-8 border-b border-white sm:px-32">
          <h2 className="leading-none">Related articles </h2>
          {/* <p className='text-right'>Get the latest on tech, business and entrepreneurship</p> */}
        </div>
        <div className="px-4 pt-20 sm:px-32">
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
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: false,
  };
}
