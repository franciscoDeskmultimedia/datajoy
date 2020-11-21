import Link from "next/link";

const PrimaryButton = (props) => {
  return (
    <Link href={`${props.url}`}>
      <a
        style={{ backgroundColor: props.buttonColor, color: props.textColor }}
        className={`inline-block px-8 py-4 mt-4 ${props.fullWidth ? 'w-full' : '' } text-xl font-light leading-none text-center text-white rounded-full bg-djGreen bg-djGreen-500 lg:mt-0`}
      >
        {props.linkName}
      </a>
    </Link>
  );
};

export default PrimaryButton;
