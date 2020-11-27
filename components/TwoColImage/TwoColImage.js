import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";

const TwoColImage = (props) => {
  return (
    <section
      className={`twocolimage flex flex-wrap ${
        props.reverse == true ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {props.fullImage == true ? (
        <div className="relative flex items-center justify-center w-full p-16 fullImage bg-lightblue-500 lg:h-56 lg:w-1/2">
          <Image layout="fill" src={props.imageSrc} />
        </div>
      ) : (
        <div
          style={{ backgroundColor: props.backgroundColor }}
          className="flex items-center justify-center w-full p-16 px-10 py-20 sm:px-20 containImage bg-lightblue-500 lg:w-1/2"
        >
          <Image
            layout="intrinsic"
            src={props.imageSrc}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        </div>
      )}
      <div className="flex flex-wrap w-full px-10 py-20 items-betweens sm:px-20 lg:w-1/2">
        <div className="w-full">
          <h2>{props.title}</h2>
          {props.subtitle ? <div className='hidden subtitle-desk lg:block'>{props.subtitle}</div> : null}
      {props.mobileSubtitle ? <div className='subtitle-desk lg:hidden'>{props.mobileSubtitle}</div> : null}
          <div className='subtitle-mobile'></div>
          <p className="mt-4">{props.text}</p>
        </div>
        <div className='self-end w-full'>
          {props.ctaUrl 
          ? 
            (
              <div className="mt-12 ">
                <PrimaryButton
                  buttonColor={props.ctaBgColor}
                  linkName={props.ctaName}
                  url={props.ctaUrl}
                />
              </div>
            ) 
          :
          ""
          }
          
          {props.social == true ? (
            <div className="flex flex-wrap self-end mt-12">
              {props.socialIcons.linkedin ? (
                <div className="p-2 linkedin">
                  <Link href={props.socialIcons.linkedin.url}>
                    <a>
                      <svg
                        width="48"
                        height="49"
                        viewBox="0 0 48 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 0C10.752 0 0 10.7907 0 24.0864C0 37.3821 10.752 48.1729 24 48.1729C37.248 48.1729 48 37.3821 48 24.0864C48 10.7907 37.248 0 24 0ZM17.28 36.2742C15.6 36.2742 13.92 36.2742 12.24 36.2742C12.24 30.8788 12.24 25.4834 12.24 20.0881C12.24 20.0399 12.24 19.9917 12.288 19.9917C13.968 19.9917 15.648 19.9917 17.328 19.9917C17.28 25.3871 17.28 30.8306 17.28 36.2742ZM13.104 17.2941C12.336 16.7642 11.712 15.6562 11.856 14.3555C12 13.3921 12.672 12.5731 13.392 12.1877C13.632 12.0432 13.968 11.9469 14.352 11.9469C16.272 11.706 17.712 13.0548 17.712 14.8854C17.664 17.1014 15.12 18.6429 13.104 17.2941ZM36.192 36.2742C34.512 36.2742 32.832 36.2742 31.152 36.2742C31.152 34.4436 31.152 32.5167 31.152 30.4452C31.152 27.9884 31.488 25.1462 29.808 24.2791C28.992 23.8456 27.888 23.9901 27.168 24.2791C25.344 25.0981 25.488 27.6994 25.488 30.5416C25.488 32.5167 25.488 34.5881 25.488 36.2742C23.808 36.2742 22.128 36.2742 20.448 36.2742C20.448 30.8306 20.448 25.3871 20.448 19.9917C22.08 19.9917 23.664 19.9917 25.296 19.9917C25.296 20.7143 25.296 21.4851 25.296 22.2077C25.488 22.0632 25.536 21.8705 25.68 21.6778C26.544 20.5216 28.08 19.5582 30.048 19.5582C32.544 19.5582 34.32 20.4253 35.232 22.015C36.192 23.701 36.192 26.0615 36.192 28.711C36.192 31.1678 36.192 33.8655 36.192 36.2742Z"
                          fill="#0E4830"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
              {props.socialIcons.twitter ? (
                <div className="p-2 twitter">
                  <Link href={props.socialIcons.twitter.url}>
                    <a>
                      <svg
                        width="48"
                        height="49"
                        viewBox="0 0 48 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 0C10.752 0 0 10.7907 0 24.0864C0 37.3821 10.752 48.1729 24 48.1729C37.248 48.1729 48 37.3821 48 24.0864C48 10.7907 37.248 0 24 0ZM36.768 19.4618C36.912 23.3157 35.808 26.3987 34.368 28.8555C32.976 31.216 31.056 33.1429 28.8 34.4918C26.496 35.8888 23.472 36.9004 19.872 36.8041C16.512 36.7077 13.872 35.7443 11.712 34.4436C11.568 34.3472 11.424 34.2509 11.328 34.1546C15.072 34.5881 17.904 33.3356 19.92 31.7941C18.432 31.7459 17.28 31.2642 16.464 30.5416C15.6 29.8672 14.88 28.9519 14.496 27.7476C15.264 27.9403 16.368 27.8921 17.04 27.6512C15.648 27.3622 14.64 26.5914 13.824 25.6761C13.008 24.809 12.48 23.5565 12.48 21.8705C12.528 21.7741 12.672 21.9186 12.72 21.9668C13.344 22.2559 14.16 22.4967 15.024 22.5449C13.584 21.5333 12.144 19.5582 12.576 16.8123C12.72 15.9934 12.96 15.319 13.296 14.7409C13.68 15.1263 14.016 15.5598 14.4 15.9452C17.04 18.5947 20.4 20.4735 25.296 20.8588C24.624 17.824 26.16 15.608 28.08 14.5C29.136 13.922 30.624 13.6329 32.064 13.922C33.36 14.1628 34.368 14.8372 35.136 15.608C36.576 15.3671 37.728 14.7891 38.832 14.211C38.304 15.608 37.536 16.716 36.288 17.3904C37.488 17.2941 38.592 16.8605 39.6 16.5233C38.88 17.6313 37.824 18.5947 36.768 19.4618Z"
                          fill="#0E4830"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoColImage;
