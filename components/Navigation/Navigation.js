import Link from 'next/link';
import Image from 'next/image'

const Navigation = () => {
    return(
        <div className='navigation'>
            <Image layout='fixed' width='111' height='40' src='/datajoy-logo.png'/>
            <ul className='nav-items'>
                <li>test</li>
                <li>test 2</li>
            </ul>
        </div>
    )
}

export default Navigation;