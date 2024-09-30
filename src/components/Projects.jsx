
/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import TopSection from "./common/TopSection";
import Carousel from 'react-material-ui-carousel';
import { Paper, Modal, Box } from '@mui/material';  // Ensure Modal is imported correctly
import s from '../assets/s.jpeg';
import t from '../assets/tt.jpg';
import u from '../assets/U.jpg';
import v from '../assets/view 1.jpg';
import w from '../assets/W.jpg';

const Projects = () => {

    const [open, setOpen] = useState(false);  // Modal state
    const [currentImage, setCurrentImage] = useState(null);

    var items = [
        { image: s },
        { image: t },
        { image: u },
        { image: v },
        { image: w }
    ];

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    return (
        <>
            <TopSection />
            <header className="bg-slate-500 w-full">
                <div className="pt-1"><Navbar /></div>
            </header>

            <section className="flex justify-center">
                <div className="w-full lg:w-3/4"> {/* Make it responsive */}
                    <h6 className="flex justify-center m-5 text-xl md:text-2xl lg:text-3xl font-serif text-amber-900">
                        O U R &nbsp; &nbsp;  P R O J E C T S
                    </h6>

                    <Carousel
                        autoPlay={true}             
                        interval={2000}             
                        navButtonsAlwaysVisible={true} 
                        animation="slide"          
                        indicators={true}          
                        stopAutoPlayOnHover={true}  
                        className="carousel-container h-full"
                    >
                        {
                            items.map((item, i) => <Item key={i} item={item} onClick={handleOpen} />)
                        }
                    </Carousel>

                    {/* Modal to show the clicked image */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                            className="flex justify-center items-center w-full h-full"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '90%',
                                maxWidth: '800px',
                                maxHeight: '90%',
                                outline: 'none'
                            }}
                        >
                            {currentImage && (
                                <img
                                    src={currentImage}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </Box>
                    </Modal>
                </div>
            </section>

            <Footer />
        </>
    );
}

function Item(props) {
    return (
        <Paper className="flex justify-center items-center h-full">
            {props.item.image && (
                <img
                    src={props.item.image}
                    alt=""
                    className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-fill cursor-pointer"  // Added cursor-pointer
                    onClick={() => props.onClick(props.item.image)}  // Added click event to handle modal
                />
            )}
        </Paper>
    );
}

export default Projects;
