import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    function handleResize() {
      // console.log(window.innerWidth);
      if (window.innerWidth < 1024) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  const toggleNav = () => {
    setActive(!active);
  };
  return (
    <nav
      className={` top-0 fixed z-50 flex flex-wrap items-center justify-between w-full h-20 px-4 lg:px-32 bg-white border-b border-black border-solid z-50flex bg-white-500 ${
        active && mobile ? "navActive" : ""
      }`}
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link href="/">
          {/* <Image layout='fixed' width='111' height='32' src='/datajoy-logo.png'/> */}
          <div>
            <img
              className="hidden cursor-pointer lg:block "
              src="/datajoy_logo_POS.svg"
              width="111"
              height="32"
            ></img>
            <img
              className="cursor-pointer lg:hidden "
              src={active ? "/datajoy_logo_REV.svg" : "/datajoy_logo_POS.svg"}
              width="111"
              height="32"
            ></img>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleNav()}
          className="flex items-center px-3 py-2"
        >
          {/* <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg> */}
          {active ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3334 2.54667L17.4534 0.666672L10.0001 8.12001L2.54675 0.666672L0.666748 2.54667L8.12008 10L0.666748 17.4533L2.54675 19.3333L10.0001 11.88L17.4534 19.3333L19.3334 17.4533L11.8801 10L19.3334 2.54667Z" fill="white"/>
</svg>
 : <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
              fill="black"
            />
          </svg>}
          
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
          <Link href='/getbeta'>
            <a
              className={`hover:bg-djGreenHover-500 transition duration-500 inline-block px-8 py-4 mt-4  text-base font-light leading-none text-center text-white rounded-full bg-djGreen bg-djGreen-500 lg:mt-0`}
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
        className={`pt-10 px-4 pb-5 lg:hidden flex nav-overlay flex-col justify-between flex-wrap fixed flex-grow  w-full lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col flex-wrap justify-start w-full text-sm lg:flex-grow">
        <Link href="/">
            <a
              onClick={()=>setActive(false)} className={`text-white text-5xl w-full block mt-4 mr-4  lg:inline-block lg:mt-0 hover:text-gray`}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={()=>setActive(false)} className={`text-white text-5xl w-full block mt-4 mr-4  lg:inline-block lg:mt-0 hover:text-gray`}
            >
              Our story
            </a>
          </Link>
          <Link href="/blog">
            <a onClick={()=>setActive(false)} className="block w-full mt-4 mr-4 text-5xl text-white lg:inline-block lg:mt-0 hover:text-gray">
              Blog
            </a>
          </Link>
        </div>
        <div>
          {/* <PrimaryButton linkName='Get beta' url='#'/> */}
          <Link href={`/getbeta`}>
            <a 
              onClick={()=>setActive(false)}
              style={{ color: "white" }}
              className={`w-full text-5xl flex items-center font-light leading-none text-white lg:mt-0`}
            >
              <span className="mr-4">Get beta</span>
              <span>
                <svg
                  width="42"
                  height="28"
                  viewBox="0 0 42 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 11.75H32.6325L24.5775 3.6725L27.75 0.5L41.25 14L27.75 27.5L24.5775 24.3275L32.6325 16.25H0.75V11.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
