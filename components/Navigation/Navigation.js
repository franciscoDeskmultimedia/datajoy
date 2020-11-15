import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '../Buttons/PrimaryButton';

const Navigation = () => {
    return (
      <nav className="flex flex-wrap items-center justify-between h-20 px-32 border-b border-black border-solid bg-white-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link href='/'>
            
            {/* <Image layout='fixed' width='111' height='32' src='/datajoy-logo.png'/> */}
            <img src={'/datajoy-logo.png'} width='111' height='32' ></img>
            
          </Link>
          
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded">
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
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="flex justify-end text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0 hover:text-gray"
            >
              Our story
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0 hover:text-gray"
            >
              Blog
            </a>
          </div>
          <div>
            <PrimaryButton linkName='Get beta' url='#'/>
          </div>
        </div>
      </nav>
    );
}

export default Navigation;