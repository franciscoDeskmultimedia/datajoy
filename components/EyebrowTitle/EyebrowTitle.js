import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
const EyebrowTitle = (props) => {
  return (
    <section
      className="px-4 lg:px-32"
      style={{
        backgroundColor: props.bgColor ? props.bgColor : "white",
        color: props.textColor ? props.textColor : "black",
      }}
    >
      {props.linkedTitle ? (
        <div className="flex flex-wrap py-20">
          <p className="flex items-end w-full h-20 pb-1 pr-4 eyebrow lg:w-1/12">{props.eyebrow}</p>
          <div className="sm:11/12">
            <Link href={props.url.replace(process.env.WORDPRESS_BASE_URL, "")}>
              <a className="flex flex-wrap items-end ">
                <h1 className="w-full sm:w-auto linkedTitle">
                  {props.title}
                  <svg
                    className="inline ml-10"
                    width="87"
                    height="87"
                    viewBox="0 0 87 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.875 39.875H62.2413L49.2638 26.8612L54.375 21.75L76.125 43.5L54.375 65.25L49.2638 60.1388L62.2413 47.125H10.875V39.875Z"
                      fill={`${props.textColor ? props.textColor : "black"}`}
                    />
                  </svg>
                </h1>
              </a>
            </Link>
            {props.content ? (
              <div className="w-full mt-10 ">
                <div
                  className="w-full px-10 textContent sm:px-0"
                  dangerouslySetInnerHTML={{ __html: props.content }}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap py-20">
          <p className="flex items-end w-full h-20 pb-1 pr-4 eyebrow lg:w-2/12">{props.eyebrow}</p>
          <div className="lg:w-10/12">
            <h1 className="w-full sm:w-auto">{props.title}</h1>
            {props.content ? (
              <div className="w-full mt-10 ">
                <div
                  className="w-full textContent "
                  dangerouslySetInnerHTML={{ __html: props.content }}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EyebrowTitle;
