import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const TopSection = () => {
    return (
        <div className='py-2 bg-black text-white'>
            <ul className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-10 py-2'>
                <li className='flex items-center gap-3'><IoMailUnreadOutline className='w-5 h-6' />roshin@gmail.com</li>
                <li className='flex items-center gap-3'><FaPhoneAlt className='w-5 h-6' />748949040564</li>
                <li className='flex items-center gap-3'><CiLocationOn className='w-5 h-6' />Chambad, Anjarakkandy, Kannur</li>
            </ul>
        </div>
    )
}

export default TopSection