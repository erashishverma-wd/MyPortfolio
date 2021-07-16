import React from 'react';
import web from "../src/images/table.jpg";
import Page from './Page';
import WorkCarousel from './WorkCarousel';
import image from "../src/images/fast-arrow-down-svgrepo-com.svg"


const Home = () => {
    let pre = "Hello! This is "
    let msg = "Ashish Verma";
    let tag = "Innovative, Creative, Critical thinker";
    let btn_txt = "Explore me";
    let visit = "/about";
    return (
        <>
            <Page
                pre={pre}
                name={msg}
                tagLine={tag}
                btn={btn_txt}
                webimg={web}
                visit={visit} />
            <div className="container-fluid">
                <img src={image} className="imageDown " alt="Down Arrow" />
            </div>
            <WorkCarousel />
        </>
    )
}

export default Home;