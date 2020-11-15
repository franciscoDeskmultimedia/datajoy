
import Link from 'next/link';

const PrimaryButton = (props) => {
    return (
      <Link href={`${props.url}`}>
        <a
          style={{backgroundColor:props.buttonColor}}
          className="inline-block px-8 py-4 mt-4 text-base font-light leading-none text-white border rounded-full bg-djGreen bg-djGreen-500 lg:mt-0"
        >
          {props.linkName}
        </a>
      </Link>
    );   
}

export default PrimaryButton;