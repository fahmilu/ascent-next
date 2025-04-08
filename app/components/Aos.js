'use client'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const AosInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 0,
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom',
        })
    }, []);

    return null;
}

export default AosInit;