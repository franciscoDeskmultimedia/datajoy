import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useState,useEffect } from "react";
import {useRouter} from 'next/router';
import Link from 'next/link';

const GetDemoModal = (props) => {
  const [nameInput, setNameActive] = useState(false);
  const [emailInput, setEmailActive] = useState(false);
  const [companyInput, setCompanyNameActive] = useState(false);
  const [companySizeInput, setCompanySizeActive] = useState(false);
  const [companyCategoryInput, setCompanyCategoryActive] = useState(false);
  const router = useRouter();
  
  const [theName, setTheName] = useState('');

  const settingName = (event)=>{
    document.getElementById('first_name').value = event.target.value.split(' ')[0]
    document.getElementById('last_name').value = event.target.value.split(' ').slice(1).join(' ')
    setTheName(event.target.value)
  }
  useEffect(()=>{
    if(document.getElementById("name").value != ''){
      document.getElementById('first_name').value = document.getElementById('name').value.split(' ')[0]
      if(document.getElementById('name').value.split(' ').length > 1){
        document.getElementById('last_name').value = document.getElementById('name').value.split(' ').slice(1).join(' ')
      }
      // document.getElementById('last_name').value = document.getElementById('name').value.split(' ').slice(1).join(' ')
      setNameActive(!nameInput);
    }
    if(document.getElementById("email").value != ''){
      setEmailActive(!emailInput);
    }
    if(document.getElementById("company").value != ''){
      setCompanyNameActive(!companyInput);
    }
    if(document.getElementById("employees").value != 'default'){
      setCompanySizeActive(!companySizeInput);
    }
  },[])

  const toggleLabel = (el) => {
    const nameVal = document.getElementById("name").value;
    const emailVal = document.getElementById("email").value;
    const companyNameVal = document.getElementById("company").value;
    const companySizeVal = document.getElementById("employees").value;
    // const companyCategoryVal = document.getElementById("companyCategory").value;

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
    if (el == "companyCategory" && companyCategoryVal == "default") {
      setCompanyCategoryActive(!companyCategoryInput);
    }
  };
  return (
    <section className="fixed top-0 left-0 z-50 flex items-center w-full h-full min-h-full bg-white getBeta-overlay ">
      {/* <div className="absolute modalClose">
        <a className="cursor-pointer " onClick={() => router.back()}>
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
      </div> */}
      <div className="flex flex-wrap items-center w-full h-full">
        <div className="w-full h-full px-4 py-6 overflow-y-scroll bg-white md:w-1/2 lg:px-20 xl:px-32 lg:py-20 lg:w-1/2">
          <div className="mb-10">
            <a
              className="cursor-pointer "
              onClick={() => router.push('/')}
            >
              <Image src="/datajoy-logo.png" alt={props.imageAlt} width="111" height="32" />
            </a>
          </div>
          <h3 className="mb-2">Can we help you grow?</h3>
          <p className="mb-8 ">
            We’re accepting closed beta customers. Sign up now to join the
            waitlist.
          </p>
          <form className="pb-10" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
              <input type='hidden' name="oid" value="00D3t0000011QFg" className='hidden '/>
              <input type='hidden' name="retURL" value="https://datajoy.com/" className='hidden' />
              <input type='hidden' id="first_name"  name="first_name" size="20" type="text" defaultValue={theName.split(' ')[0]} className='hidden '/>
              <input type='hidden' id="last_name"  name="last_name" size="20" type="text" defaultValue={theName.split(' ').slice(1).join(' ')} className='hidden ' />
            <div
              className={`relative inputName ${nameInput ? "active" : ""} mb-1`}
            >
              <label className="absolute text-black top">Name</label>
              <input
                className="w-full p-4 px-0 pb-2 font-light text-black placeholder-black bg-white border-b border-black"
                id="name"
                type="text"
                aria-label="Name"
                defaultValue=''
                onFocus={() => toggleLabel("name")}
                onBlur={() => toggleLabel("name")}
                onChange={() => settingName(event)}
                autoComplete='nope'
                // placeholder="Name"
              />
            </div>

            <div
              className={`relative inputEmail ${
                emailInput ? "active" : ""
              } mb-1`}
            >
              <label className="absolute top">Email</label>
              <input
                className="w-full p-4 px-0 pb-2 text-2xl font-light text-black placeholder-black bg-white border-b border-black "
                id="email"
                type="email"
                name="email"
                aria-label="email address"
                onFocus={() => toggleLabel("email")}
                onBlur={() => toggleLabel("email")}
                autoComplete='nope'
                required
                //   placeholder="Email"
              />
            </div>

            <div
              className={`relative inputCompanyName ${
                companyInput ? "active" : ""
              } mb-1`}
            >
              <label className="absolute top">Company Name</label>
              <input
                className="w-full p-4 px-0 pb-2 text-2xl font-light text-black placeholder-black bg-white border-b border-black "
                id="company"
                type="text"
                name="company"
                aria-label="Company Name"
                onFocus={() => toggleLabel("companyName")}
                onBlur={() => toggleLabel("companyName")}
                autoComplete='nope'
                // placeholder="Company Name"
              />
            </div>

            <div
              className={`relative inputCompanySize ${
                companySizeInput ? "active" : ""
              } mb-1`}
            >
              <label className="absolute top">Company Size</label>
              <select
                className="w-full p-4 px-0 pb-2 text-2xl font-light text-black placeholder-black bg-white border-b border-black "
                id="employees"
                name="employees"
                aria-label="Company Size"
                onFocus={() => toggleLabel("companySize")}
                onBlur={() => toggleLabel("companySize")}
                autoComplete='nope'
                // placeholder="Enter your email address"
              >
                <option defaultValue value="default"></option>
                <option value="1">1</option>
                <option value="2-5">2-5</option>
                <option value="6-10">6-10</option>
                <option value="11+">11+</option>
              </select>
            </div>
            {/* <div
              className={`relative inputCompanyCategory ${
                companyCategoryInput ? "active" : ""
              } mb-1`}
            >
              <label className="absolute top">Company category</label>
              <select
                className="w-full p-4 px-0 pb-2 text-2xl font-light text-black placeholder-black bg-white border-b border-black "
                id="companyCategory"
                aria-label="email address"
                onFocus={() => toggleLabel("companyCategory")}
                onBlur={() => toggleLabel("companyCategory")}
              >
                <option defaultValue value="default"></option>
                <option value="1">Marketing</option>
                <option value="2-5">Real estate</option>
              </select>
            </div> */}
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
              <input className={`inline-block px-8 py-4 mt-4 text-xl font-light leading-tight text-center text-black rounded-full bg-djGreen transition duration-500 bg-whiteRock-500 hover:bg-whiteRock-600 lg:mt-0`} type="submit" name="Optimize my revenue" value='Optimize my revenue'></input>

            {/* <PrimaryButton
              linkName="Optimize my revenue"
              url="/#"
              buttonColor="#0E4830"
              textColor="white"
              fullWidth
            /> */}
          </form>
        </div>

        <div className="fixed top-0 right-0 items-center hidden h-full md:flex md:w-1/2 lg:flex quoteContainer lg:w-1/2 bg-whiteRock-500">
          <div className="flex flex-wrap items-center lg:px-20 lg:py-20 ">
            <p className="w-full mb-6 text-5xl text-center md:text-4xl lg:text-4xl xl:text-5xl">
              “The waterfall makes it easy to use, love the Google integration
              and that any person in the org can get up and running with minimal
              IT.”
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
