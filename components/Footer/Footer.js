import Image from "next/image";
import PrimaryButton from '../Buttons/PrimaryButton'; 
import { useState,useEffect } from "react";
import Link from 'next/link';
const Footer = () => {
  const [nameInput, setNameActive] = useState(false);
  const [emailInput, setEmailActive] = useState(false);
  const [companyInput, setCompanyNameActive] = useState(false);
  const [companySizeInput, setCompanySizeActive] = useState(false);

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
            <p className='pt-5'>We're accepting closed beta customers.</p>
            <p>Sign up now to join the waitlist.</p>
          </div>
          <div className="w-full pt-10 sm:pt-0 sm:w-2/5">
            <form className="max-w-2xl " action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
              <input type='hidden' name="oid" value="00D3t0000011QFg" className='hidden '/>
              <input type='hidden' name="retURL" value="https://datajoy.com/" className='hidden' />
              <input type='hidden' id="first_name"  name="first_name" size="20" type="text" defaultValue={theName.split(' ')[0]} className='hidden '/>
              <input type='hidden' id="last_name"  name="last_name" size="20" type="text" defaultValue={theName.split(' ').slice(1).join(' ')} className='hidden ' />
              <div
                className={`relative inputName ${nameInput ? "active" : ""} mb-1`}
              >
                <label className="absolute text-white top">Name</label>
                <input
                  className="w-full p-4 px-0 pb-2 text-2xl font-light text-white placeholder-white bg-transparent border-b border-white"
                  id="name"
                  name='name'
                  type="text"
                  aria-label="Name"
                  onChange={() => settingName(event)}
                  onFocus={() => toggleLabel("name")}
                  onBlur={() => toggleLabel("name")}
                  autoComplete='nope'
                  // placeholder="Name"
                />
              </div>

              <div
                className={`relative inputEmail ${emailInput ? "active" : ""} mb-1`}
              >
                <label className="absolute text-white top">Work email</label>
                <input
                  className="w-full p-4 px-0 pb-2 text-2xl font-light text-white placeholder-white bg-transparent border-b border-white "
                  id="email"
                  name="email"
                  type="email"
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
                <label className="absolute text-white top">Company name</label>
                <input
                  className="w-full p-4 px-0 pb-2 text-2xl font-light text-white placeholder-white bg-transparent border-b border-white "
                  id="company"
                  name="company"
                  type="text"
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
                <label className="absolute text-white top">Company size</label>
                <select
                  className="w-full p-4 px-0 pb-2 text-2xl font-light text-white placeholder-white bg-transparent border-b border-white "
                  id="employees"
                  name="employees"
                  aria-label="Company Size"
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
              <input className={`inline-block px-8 py-4 mt-4 text-xl font-light leading-tight text-center text-black rounded-full bg-djGreen transition duration-500 bg-whiteRock-500 hover:bg-whiteRock-600 lg:mt-0`} type="submit" name="Optimize my revenue" value='Optimize my revenue'></input>
              {/* <PrimaryButton
                linkName="Optimize my revenue"
                url="/#"
                buttonColor="Secondary"
                textColor="black"
              /> */}
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full py-10 border-t border-white">
        <div className="pl-10 sm:pl-32">
          <Image
            alt='Datajoy Logo'
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
