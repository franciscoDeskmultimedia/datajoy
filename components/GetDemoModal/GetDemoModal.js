import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useState } from "react";
import {useRouter} from 'next/router'

const GetDemoModal = (props) => {
  const [nameInput, setNameActive] = useState(false);
  const [emailInput, setEmailActive] = useState(false);
  const [companyInput, setCompanyNameActive] = useState(false);
  const [companySizeInput, setCompanySizeActive] = useState(false);
  const router = useRouter();

  const toggleLabel = (el) => {
    const nameVal = document.getElementById("name").value;
    const emailVal = document.getElementById("email").value;
    const companyNameVal = document.getElementById("companyName").value;
    const companySizeVal = document.getElementById("companySize").value;
    console.log(companySizeVal);

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
    <section className="fixed top-0 left-0 z-50 flex items-center w-full h-full bg-white getBeta-overlay ">
      <div className="absolute modalClose">
          <a className='cursor-pointer ' onClick={()=>router.back()}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3334 2.54667L17.4534 0.666672L10.0001 8.12001L2.54675 0.666672L0.666748 2.54667L8.12008 10L0.666748 17.4533L2.54675 19.3333L10.0001 11.88L17.4534 19.3333L19.3334 17.4533L11.8801 10L19.3334 2.54667Z"
            fill="black"
          />
        </svg>
        </a>
      </div>
      <div className="flex flex-wrap items-center h-full">
        <div className="h-full px-4 py-6 bg-white lg:px-32 lg:py-20 lg:w-1/2">
          <div className="mb-10">
             <a className='cursor-pointer ' onClick={()=>router.push(router.basePath)}>
            <Image src="/datajoy-logo.png" width="111" height="32" />
            </a> 
          </div>
          <h3 className="mb-5">Become a beta customer</h3>
          <p className="mb-8 ">
            We are currently accepting closed beta customers. Fill out the form
            below and we’ll asses if there’s a good fit.
          </p>
          <form className="">
            <div className={`relative inputName ${nameInput ? "active" : ""}`}>
              <label className="absolute top">Name:</label>
              <input
                className="w-full p-4 px-0 font-light text-black placeholder-black bg-white border-b border-black"
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
              <label className="absolute top">Email:</label>
              <input
                className="w-full p-4 px-0 font-light text-black placeholder-black bg-white border-b border-black"
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
              <label className="absolute top">Company Name:</label>
              <input
                className="w-full p-4 px-0 font-light text-black placeholder-black bg-white border-b border-black"
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
              <label className="absolute top">Company Size:</label>
              <select
                className="w-full p-4 px-0 font-light text-black placeholder-black bg-white border-b border-black"
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

            <select
              className="w-full p-4 px-0 font-light text-black placeholder-black bg-white border-b border-black"
              id="category"
              aria-label="email address"
              placeholder="Enter your email address"
            >
              <option value="default">Category</option>
              <option value="1">Marketing</option>
              <option value="2-5">Real estate</option>
            </select>
            <p className="py-5 text-xs ">
              By signing up, I agree to Datajoy’s privacy policy & terms of
              service.
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
              buttonColor="#0E4830"
              textColor="white"
              fullWidth
            />
          </form>
        </div>

        <div className="items-center hidden h-full lg:flex quoteContainer lg:w-1/2 bg-whiteRock-500">
          <div className="flex flex-wrap items-center lg:px-20 lg:py-20 ">
            <p className="w-full mb-6 text-5xl text-center">
              “The{" "}
              <span className="underline">waterfall makes it easy to use</span>,
              love the Google integration and that any person in the org can get
              up and running with minimal IT.”
            </p>
            <p className="w-full text-base text-center">
              — Kevin Conley, Finance Analytics Director, Intuit
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default GetDemoModal;
