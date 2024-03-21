import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BgGridVideo from '../assets/videos/grid-loop.mp4';
import './backgroundParallex.css';

const BackgrounParallex = () => {   

    const videoRef = useRef(null);
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Only trigger once when entering the viewport
    });

    // const handleIntersection = () => {
    //     if (inView) {
    //     videoRef.current.play();
    //     } else {
    //     videoRef.current.pause();
    //     }
    // };

    useEffect(() => {
        // Detect scroll direction
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
        console.log('Scroll value:', currentScrollY);

        // Set video playback direction
        videoRef.playbackRate = scrollDirection === 'down' ? 1 : -1;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
       

        <video ref={videoRef} controls >
            <source src={BgGridVideo} type="video/mp4" />
        </video>
    );





   
  };
  
  export default BackgrounParallex;