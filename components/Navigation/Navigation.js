import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if(window.innerWidth < 1024){
      setMobile(true);
    }else{
      setMobile(false);
    }
    function handleResize() {
      console.log(window.innerWidth)
      if(window.innerWidth < 1024){
        setMobile(true);
      }else{
        setMobile(false);
      }
        
    }
    window.addEventListener('resize', handleResize)
  });
  
  const toggleNav = () => {
    setActive(!active);
  };
  return (
    <nav
      className={`fixed z-50 flex flex-wrap items-center justify-between w-full h-20 px-10 bg-white border-b border-black border-solid z-50flex sm:px-32 bg-white-500 ${
        active && mobile ? "navActive" : ""
      }`}
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link href="/">
          {/* <Image layout='fixed' width='111' height='32' src='/datajoy-logo.png'/> */}
          <div>
            <img
              className="hidden cursor-pointer lg:block "
              src="/datajoy-logo.png"
              width="111"
              height="32"
            ></img>
            <img
              className="cursor-pointer lg:hidden "
              src={active ? "/logo-white.png" : "/datajoy-logo.png"}
              width="111"
              height="32"
            ></img>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleNav()}
          className="flex items-center px-3 py-2 border rounded"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={` hidden lg:flex flex-wrap flex-grow lg:items-center lg:w-auto`}
      >
        <div className="flex flex-wrap justify-end text-sm lg:flex-grow">
          <Link href="/about">
            <a
              className={`text-white block mt-4 mr-4 sm:text-black lg:inline-block lg:mt-0 hover:text-gray`}
            >
              Our story
            </a>
          </Link>
          <Link href="/blog">
            <a className="block mt-4 mr-4 text-white sm:text-black lg:inline-block lg:mt-0 hover:text-gray">
              Blog
            </a>
          </Link>
        </div>
        <div>
          {/* <PrimaryButton linkName='Get beta' url='#'/> */}
          <Link href={`#`}>
            <a
              style={{ backgroundColor: "#0E4830", color: "white" }}
              className={`inline-block px-8 py-4 mt-4  text-base font-light leading-none text-center text-white rounded-full bg-djGreen bg-djGreen-500 lg:mt-0`}
            >
              Get beta
            </a>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -1000, scaleX: 0 }}
        animate={
          active
            ? { opacity: 1, x: 0, scaleX: 1 }
            : { opacity: 0, x: -1000, scaleX: 0 }
        }
        transition={{ duration: 0.2 }}
        className={`lg:hidden flex nav-overlay flex-col justify-between flex-wrap fixed flex-grow  w-full lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col flex-wrap justify-start w-full text-sm lg:flex-grow">
          <Link href="/about">
            <a
              className={`text-white w-full block mt-4 mr-4  lg:inline-block lg:mt-0 hover:text-gray`}
            >
              Our story
            </a>
          </Link>
          <Link href="/blog">
            <a className="block w-full mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray">
              Blog
            </a>
          </Link>
        </div>
        <div>
          {/* <PrimaryButton linkName='Get beta' url='#'/> */}
          <Link href={`#`}>
            <a
              style={{ backgroundColor: "#0E4830", color: "white" }}
              className={`inline-block px-8 py-4 mt-4  text-base font-light leading-none text-center text-white rounded-full bg-djGreen bg-djGreen-500 lg:mt-0`}
            >
              Get beta
            </a>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
