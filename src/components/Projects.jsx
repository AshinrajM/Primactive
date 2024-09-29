/* eslint-disable react/prop-types */
import Footer from "./common/Footer"
import Navbar from "./common/Navbar"
import TopSection from "./common/TopSection"
import Carousel from 'react-material-ui-carousel'
import { Paper, } from '@mui/material'
import s from '../assets/S.jpg'
import t from '../assets/T.jpg'
import u from '../assets/U.jpg'
import v from '../assets/V.jpg'
import w from '../assets/W.jpg'


const Projects = () => {

    var items = [
        { image: s },
        { image: t },
        { image: u },
        { image: v },
        { image: w }
    ];

    return (
        <>
            <TopSection />
            <header className="bg-slate-500 w-full">
                <div className="pt-1"><Navbar /></div>
            </header>
            <section className=" flex justify-center ">
                <div className="w-full ">  {/* Adjust width here */}
                <h6 className="flex justify-center m-5 text-2xl font-serif text-amber-900">O U R &nbsp; &nbsp;  P R O J E C T S</h6>

                    <Carousel
                        autoPlay={true}             // Enable auto sliding
                        interval={2000}             // Slide interval (3 seconds)
                        navButtonsAlwaysVisible={true} // Optional: keep navigation buttons visible
                        animation="slide"           // Optional: choose between "fade" and "slide"
                        indicators={true}           // Optional: show indicator dots
                        stopAutoPlayOnHover={true}  // Optional: stops auto-play when hovered
                        className="carousel-container"
                    >
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>
            </section>
            <Footer />
        </>
    )
}
function Item(props) {
    return (
        <Paper className="flex justify-center items-center">
            {props.item.image && (
                <img
                    src={props.item.image}
                    alt=""
                    className="w-full h-screen object-fill"  
                />
            )}
        </Paper>
    );
}

export default Projects