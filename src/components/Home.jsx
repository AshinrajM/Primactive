import { useState } from 'react'
import emailjs from 'emailjs-com';
import { TailSpin } from 'react-loader-spinner';
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import TopSection from './common/TopSection'
import bg from '../assets/about.avif'
import contact from '../assets/contact.jpg'
import QuoteCard from './mui components/QuoteCard'



const Home = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;
        let errors = {};

        if (!validateEmail(formValues.email)) {
            formIsValid = false;
            errors.email = 'Invalid email format';
        }

        if (!validatePhone(formValues.phone)) {
            formIsValid = false;
            errors.phone = 'Phone number must be 10 digits';
        }

        // if (formValues.message.trim() === '') {
        //     formIsValid = false;
        //     errors.message = 'Message cannot be empty';
        // }

        setErrors(errors);

        if (formIsValid) {
            // Handle form submission (e.g., send data to server)
            setLoading(true)
            emailjs.send(
                'service_cm5v08s',
                'template_9pjrzat',
                formValues,
                'plaXrSRqdpwsAT-7I'

            )
                .then((result) => {
                    console.log('Email successfully sent!', result.text);
                    // Optionally reset form after submission
                    setFormValues({ email: '', phone: '', message: '' });
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    setLoading(false)
                });

            console.log('Form submitted:', formValues);
        }
    };

    const quote = "At Primactive, we believe in the power of great design and solid construction.' We strive to create structures that are not only functional but also inspiring, adhering to the wisdom of John Ruskin: 'When we build, let us think that we build forever.' Our commitment to quality is echoed in the words of Vince Lombardi, 'Perfection is not attainable, but if we chase perfection, we can catch excellence.' We embrace challenges with the mindset that 'The road to success is always under construction' and remain dedicated to turning visions into reality, knowing that 'Good buildings come from good people, and all problems are solved by good design,' as Stephen Gardiner wisely noted.";

    return (
        <>

            <TopSection />
            <div className='bg-custom h-screen'>
                <div className="pt-4"><Navbar /></div>
                {/* <div className="text-white ml-4 sm:ml-20 my-8 sm:my-28 w-10/12 sm:w-5/12">
                    <header style={{ fontFamily: 'fantasy', fontSize: '40px', sm: { fontSize: '60px' } }}>Builder & Interior Services</header>
                    <span style={{ fontFamily: 'serif', fontSize: '16px', sm: { fontSize: '20px' } }}>Primactive is a builder and interior construction company providing a range of services including building constructions, 3D modelling, interior and exterior designing, renovation, planning, estimation, supervision, AutoCAD, and MEP drawings.</span>
                </div> */}
                <div className="text-white ml-4 sm:ml-20 my-8 sm:my-28 w-full sm:w-10/12 lg:w-5/12 px-4">
                    <header className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-4">Builder & Interior Services</header>
                    <span className="font-serif text-sm sm:text-base lg:text-lg">Primactive is a builder and interior construction company providing a range of services including building constructions, 3D modelling, interior and exterior designing, renovation, planning, estimation, supervision, AutoCAD, and MEP drawings.</span>
                </div>
            </div>
            <div className='bg-slate-600 m-10'>
                <QuoteCard quote={quote} />
            </div>
            {/* <header className='flex justify-center text-4xl font-bold m-4 text-slate-700'>Contact Us</header>
            <div className='flex flex-col lg:flex-row mx-4 sm:mx-10 my-5'>
                <div className='lg:w-1/2 m-2'>
                    <img src={contact} alt="bg" className='w-full rounded-xl' />
                </div>
                <div className='lg:w-1/2 m-2'> */}
            <header className='text-center text-3xl sm:text-4xl font-bold m-4 text-slate-700'>Contact Us</header>
            <div className='flex flex-col lg:flex-row mx-4 sm:mx-10 my-5 gap-8'>
                <div className='lg:w-1/2'>
                    <img src={contact} alt="bg" className='w-full h-full object-cover rounded-xl' />
                </div>
                <div className='lg:w-1/2'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mx-2 sm:mx-10'>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formValues.phone}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        {errors.phone && <span className="text-red-500">{errors.phone}</span>}

                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formValues.message}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md h-32 resize-none"
                        ></textarea>
                        {errors.message && <span className="text-red-500">{errors.message}</span>}

                        {/* <button type="submit" className="p-2 sm:p-5 bg-blue-500 text-white rounded-md w-full sm:w-44">Send</button> */}
                        {/* <button
                            type="submit"
                            className="p-2 sm:p-5 bg-blue-500 text-white rounded-md w-full sm:w-44"
                            disabled={loading}  // Disable button when loading
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <TailSpin
                                        height="24"
                                        width="24"
                                        color="#ffffff"
                                        ariaLabel="loading-indicator"
                                    />
                                    <span className="ml-2"></span>
                                </div>
                            ) : 'Send'}
                        </button> */}

                        <button
                            type="submit"
                            className="p-2 sm:p-5 bg-blue-500 text-white rounded-md w-full sm:w-44 flex justify-center items-center"
                            disabled={loading}  // Disable button when loading
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <TailSpin
                                        height={20}  // Set a smaller height for mobile view
                                        width={20}   // Set a smaller width for mobile view
                                        color="#ffffff"
                                        ariaLabel="loading-indicator"
                                    />
                                    <span className="ml-2 text-sm"></span> {/* Optional: add text beside loader */}
                                </div>
                            ) : 'Send'}
                        </button>


                    </form>
                </div>
            </div>
            {/* <div className='flex flex-col lg:flex-row mx-4 sm:mx-10 my-5'>
                <div className='flex flex-col gap-5 lg:w-1/2  p-4'>
                    <header className='text-slate-700' style={{ fontFamily: 'fantasy', fontSize: '32px', sm: { fontSize: '40px' } }}>About Us</header>
                    <span className='text-sm'>Primactive is a leading builder and interior construction company specializing in a wide range of services to meet diverse client needs. Our expertise extends to renovation projects, meticulous planning, accurate estimation, and thorough supervision to ensure exceptional outcomes. We leverage advanced tools and techniques such as AutoCAD and MEP (Mechanical, Electrical, and Plumbing) drawings to deliver precise and effective construction solutions. At Primactive, our commitment is to transform visions into reality, providing services that are not only functional but also aesthetically pleasing and sustainable.</span>
                </div>
                <div className='lg:w-1/2 m-2'>
                    <img src={bg} alt="bg" className='w-full rounded-2xl' />
                </div>
            </div> */}
            <div className='flex flex-col lg:flex-row mx-4 sm:mx-10 my-5 gap-8'>
                <div className='flex flex-col gap-5 lg:w-1/2 p-4'>
                    <header className='text-slate-700 font-serif text-3xl sm:text-4xl' style={{ fontFamily: 'fantasy' }}>About Us</header>
                    <span className='text-sm sm:text-base'><i className='text-lg'>Primactive</i> is a leading builder and interior construction company specializing in a wide range of services to meet diverse client needs. Our expertise extends to renovation projects, meticulous planning, accurate estimation, and thorough supervision to ensure exceptional outcomes. We leverage advanced tools and techniques such as AutoCAD and MEP (Mechanical, Electrical, and Plumbing) drawings to deliver precise and effective construction solutions. At Primactive, our commitment is to transform visions into reality, providing services that are not only functional but also aesthetically pleasing and sustainable.</span>
                </div>
                <div className='lg:w-1/2'>
                    <img src={bg} alt="bg" className='w-full h-full object-cover rounded-2xl' />
                </div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.1109976655994!2d75.51013483675442!3d11.871257026983555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4254c07921e33%3A0xf9ca3e34db3ab2b9!2sVGC6%2BG35%2C%20Thalassery%20-%20Irikkur%20Rd%2C%20Paduvilayi%2C%20Kerala%20670612!5e0!3m2!1sen!2sin!4v1720588650923!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Home
