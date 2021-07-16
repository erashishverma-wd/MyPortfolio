import React from 'react';
import img from "../src/images/design.jpg";
import Page from './Page';

const About = () => {
    const msg = "about myself";
    const tag = `Hello! Myself Ashish Verma, B.Tech final year student.
    I live in Varanasi (Uttar Pradesh) with my family. Currently I'm pursuing B.Tech. from Ashoka Institute of Technology and Management, Varanasi.
    I have total 5 members in my family including me. My hobbies are Travelling, Planting and playing Chess.
    My strengths are that I'm self-troubleshooting guy so you don't need to force or teach me to remove any error. I've an attitude of self-motivating
    too and can work under pressure...`;
    const btn_txt = "Read More";
    const visit = {onclick};
    return (
        <>
        <Page 
        name = {msg} 
        tagLine = {tag} 
        btn = {btn_txt}
        visit={visit}
        webimg = {img}
        />
        </>
    )
}

export default About;