"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0); // State to track current image index
    const images = useMemo(() => ["/images/banner/bg1.jpg", "/images/banner/bg2.jpg", "/images/banner/bg3.jpg"], []); // Memoized array of image paths for slideshow
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const { scrollTop, clientHeight } = document.documentElement;
                const scrollPercent = scrollTop / clientHeight;
                const translateY = scrollPercent * 50; // Adjust the multiplier for the parallax effect
                parallaxRef.current.style.transform = `translateY(-${translateY}%)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // No dependency array needed for this useEffect

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
        }, 5000); // Change image every 5 seconds (adjust as needed)

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [images]); // Depend on images to restart interval on image change

    return (
        <div className="relative mx-auto max-w-7xl my-17 sm:my-10 px-6 sm:px-10 lg:px-20 overflow-hidden z-0">
            <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
                <Image
                    src={images[currentImage]}
                    alt="hero-image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Semi-transparent overlay */}
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 my-16 gap-10">
                {/* COLUMN-1 */}
                <div className="mx-auto sm:mx-0 text-white flex flex-col justify-center">
                    <div className="py-3 text-center lg:text-left">
                        <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
                            Welcome to NatureSweetHomes
                        </button>
                    </div>
                    <div className="py-4 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
                            A place where <br className="lg:hidden" /> your comfort<br className="lg:hidden" /> is our priority.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
