import Image from "next/image";
import PrimaryButton from '../Buttons/PrimaryButton'; 
import { useState } from "react";
import Link from 'next/link';
const Footer = () => {
  const [nameInput, setNameActive] = useState(false);
  const [emailInput, setEmailActive] = useState(false);
  const [companyInput, setCompanyNameActive] = useState(false);
  const [companySizeInput, setCompanySizeActive] = useState(false);

  const toggleLabel = (el) => {
    const nameVal = document.getElementById("name").value;
    const emailVal = document.getElementById("email").value;
    const companyNameVal = document.getElementById("companyName").value;
    const companySizeVal = document.getElementById("companySize").value;
    // console.log(companySizeVal);

    if (el == "name" && nameVal == "") {
      setNameActive(!nameInput);
    }
    if (el == "email" && emailVal == "") {
      setEmailActive(!emailInput);
    }
    if (el == "companyName" && companyNameVal == "") {
      setCompanyNameActive(!companyInput);
    }
    if (el == "companySize" && companySizeVal == "default") {
      setCompanySizeActive(!companySizeInput);
    }
  };
  
  return (
    <footer className="pt-20 text-white bg-black footer ">
      <div className="px-4 lg:px-32">
        {/* <div className="w-full">
          <h1 className="w-4/5 sm:w-3/5">Can we help you grow?</h1>
        </div> */}
        <div className="flex flex-wrap pt-12 pb-20">
          {/* <div className="w-full sm:w-3/5">
            <p className="w-full sm:w-3/5">
              We are currently accepting closed beta customers. We’re a well
              funded company backed by notable Silicon Valley VCs. Our leaders
              have a long track record that attests to the experience and
              expertise in Saas business, AI, ML and data analytics. Sign up and
              optimize your SaaS revenue funnel!{" "}
            </p>
          </div> */}
          <div className="w-full sm:w-3/5">
            <h1 className="w-full max-w-lg ">Can we help you grow?</h1>
          </div>
          <div className="w-full pt-10 sm:pt-0 sm:w-2/5">
            <form autoComplete="off" className="max-w-2xl ">
              <div
                className={`relative inputName ${nameInput ? "active" : ""}`}
              >
                <label className="absolute text-white top">Name</label>
                <input
                  className="w-full p-4 px-0 font-light text-white placeholder-white bg-transparent border-b border-white"
                  id="name"
                  type="text"
                  aria-label="Name"
                  onFocus={() => toggleLabel("name")}
                  onBlur={() => toggleLabel("name")}
                  // placeholder="Name"
                />
              </div>

              <div
                className={`relative inputEmail ${emailInput ? "active" : ""}`}
              >
                <label className="absolute text-white top">Work email</label>
                <input
                  className="w-full p-4 px-0 font-light text-white placeholder-white bg-transparent border-b border-white"
                  id="email"
                  type="email"
                  aria-label="email address"
                  onFocus={() => toggleLabel("email")}
                  onBlur={() => toggleLabel("email")}
                  //   placeholder="Email"
                />
              </div>

              <div
                className={`relative inputCompanyName ${
                  companyInput ? "active" : ""
                }`}
              >
                <label className="absolute text-white top">Company name</label>
                <input
                  className="w-full p-4 px-0 font-light text-white placeholder-white bg-transparent border-b border-white"
                  id="companyName"
                  type="text"
                  aria-label="Company Name"
                  onFocus={() => toggleLabel("companyName")}
                  onBlur={() => toggleLabel("companyName")}
                  // placeholder="Company Name"
                />
              </div>

              <div
                className={`relative inputCompanySize ${
                  companySizeInput ? "active" : ""
                }`}
              >
                <label className="absolute text-white top">Company size:</label>
                <select
                  className="w-full p-4 px-0 font-light text-white placeholder-white bg-transparent border-b border-white"
                  id="companySize"
                  aria-label="email address"
                  onFocus={() => toggleLabel("companySize")}
                  onBlur={() => toggleLabel("companySize")}
                  // placeholder="Enter your email address"
                >
                  <option defaultValue value="default"></option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>

              {/* <select
              className="w-full p-4 px-0 font-light text-white placeholder-white bg-transparent border-b border-white"
              id="category"
              aria-label="email address"
              placeholder="Enter your email address"
            >
              <option value="default">Category</option>
              <option value="1">Marketing</option>
              <option value="2-5">Real estate</option>
            </select> */}
              <p className="py-5 text-xs ">
                By signing up, I agree to Datajoy’s{" "}
                <span className="underline ">
                  <Link href="/privacy-policy">privacy policy</Link>
                </span>{" "}
                &{" "}
                <span className="underline ">
                  <Link href="/cookie-policy">terms of service</Link>
                </span>
                .
              </p>
              {/* <button
                className="p-2 text-white duration-300 bg-blue-600 rounded-r shadow hover:bg-blue-700"
                type="submit"
              >
                Sign Up
              </button> */}
              <PrimaryButton
                linkName="Optimize my revenue"
                url="#"
                buttonColor="Secondary"
                textColor="black"
                fullWidth
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full py-10 border-t border-white">
        <div className="pl-10 sm:pl-32">
          <Image
            src="/datajoy_logo_REV.svg"
            width="111"
            height="32"
            layout="intrinsic"
          />
        </div>
        <div className="pr-10 text-xs sm:pr-32 copyright">
          © 2021 datajoy, inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
