
import { CiMobile3 } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import '../common/style.css'

const Footer = () => {
    return (
        <div className="bg-black text-white pt-5 pb-2">
            <div>
                <ul className="flex flex-col sm:flex-row justify-around pt-2">
                    <li className="footer-common flex items-center gap-2"><CiMobile3 color="white" className="h-6 w-6 sm:h-10 sm:w-10" />+91 7025063771</li>
                    <li className="footer-common flex items-center gap-2"><IoMailUnreadOutline color="white" className="h-6 w-6 sm:h-10 sm:w-10" />roshin@gmail.com</li>
                    <li className="footer-common flex items-center gap-2"><CiLocationOn color="white" className="h-6 w-6 sm:h-10 sm:w-10" />Chambad, Anjarakkandy, Kannur</li>
                </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-around my-10 px-5">
                <div className="w-full sm:w-1/2 lg:ml-56 mb-5 sm:mb-0">
                    <header className="text-xl sm:text-2xl mb-3">Quick Links</header>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer hover:text-gray-400">Home</li>
                        <li className="cursor-pointer hover:text-gray-400">Services</li>
                        <li className="cursor-pointer hover:text-gray-400">Projects</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:mx-32">
                    <header className="text-md sm:text-2xl mb-3">WORK</header>
                    <span className="text-xs sm:text-base">Primactive is a leading builder and interior construction company specializing in a wide range of services to meet diverse client needs. Our expertise extends to renovation projects, meticulous planning, accurate estimation, and thorough supervision to ensure exceptional outcomes.</span>
                </div>
            </div>
            <div className="flex justify-center text-xs"><p>© All Rights Reserved. Designed by ashinrajeevan98@gmail.com</p></div>
        </div>
    )
}

export default Footer
