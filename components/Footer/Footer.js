import Image from "next/image";
import PrimaryButton from '../Buttons/PrimaryButton'; 
const Footer = () => {
  return (
    <footer className="pt-20 text-white bg-black ">
      <div className='px-10 sm:px-32'>
        <div className="w-full">
          <h1 className="w-4/5 sm:w-3/5">Sign up & become a beta customer</h1>
        </div>
        <div className="flex flex-wrap pt-12 pb-20">
          <div className="w-full sm:w-3/5">
            <p className="w-full sm:w-3/5">
              We are currently accepting closed beta customers. We’re a well
              funded company backed by notable Silicon Valley VCs. Our leaders
              have a long track record that attests to the experience and
              expertise in Saas business, AI, ML and data analytics. Sign up and
              optimize your SaaS revenue funnel!{" "}
            </p>
          </div>
          <div className="w-full sm:w-2/5">
            <form className="">
              <input
                className="w-full p-4 px-0 font-light text-white bg-black border-b border-white"
                id="name"
                type="text"
                aria-label="Name"
                placeholder="Name"
              />
              <input
                className="w-full p-4 px-0 font-light text-white bg-black border-b border-white"
                id="email"
                type="email"
                aria-label="email address"
                placeholder="Email"
              />
              <input
                className="w-full p-4 px-0 font-light text-white bg-black border-b border-white"
                id="companyName"
                type="text"
                aria-label="Company Name"
                placeholder="Company Name"
              />
              <select
                className="w-full p-4 px-0 font-light text-white bg-black border-b border-white"
                id="companySize"
                aria-label="email address"
                placeholder="Enter your email address"
              >
                <option value="default">Company Size</option>
                <option value="1">1</option>
                <option value="2-5">2-5</option>
                <option value="6-10">6-10</option>
                <option value="11+">11+</option>
              </select>
              <select
                className="w-full p-4 px-0 font-light text-white bg-black border-b border-white"
                id="category"
                aria-label="email address"
                placeholder="Enter your email address"
              >
                <option value="default">Category</option>
                <option value="1">Marketing</option>
                <option value="2-5">Real estate</option>
              </select>
              <p className='py-5 text-xs '>By signing up, I agree to Datajoy’s privacy policy & terms of service.</p>
              {/* <button
                className="p-2 text-white duration-300 bg-blue-600 rounded-r shadow hover:bg-blue-700"
                type="submit"
              >
                Sign Up
              </button> */}
              <PrimaryButton linkName='Optimize my revenue' url='#' buttonColor='white' textColor='black' fullWidth />
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full py-10 border-t border-white">
        <div className='pl-10 sm:pl-32'>
          <Image
            src="/logo-white.png"
            width="111"
            height="32"
            layout="intrinsic"
          />
        </div>
        <div className="pr-10 text-xs sm:pr-32 copyright">© 2020 datajoy, inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
