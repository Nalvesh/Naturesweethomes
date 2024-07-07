"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface DataType {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: DataType[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'We are originally based in Panchgani & Mahabaleshwar, nestled amidst the lush greenery of western ghats',
        link: ''
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'We offer great deals on your staycations by providing budget-friendly and lavish stays for you & your loved ones.',
        link: ''
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Take a look at what we offer because we care for your comfort.',
        link: ''
    },
];

const Aboutus = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % Aboutdata.length);
        }, 3000); // Change content every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="aboutus-section" className="bg-gray-100 py-24 relative">
            <div className="mx-auto max-w-7xl px-4 lg:px-10 rounded-3xl">
                <div className="text-center mb-8">
                    <h3 className='text-blue text-lg tracking-widest'>     </h3>
                    <h4 className='text-4xl lg:text-6xl font-bold'>   <br/><br/></h4>
                </div>
                <div className='relative'>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className='hover:bg-navyblue bg-white-opacity-50 rounded-3xl py-10 px-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{Aboutdata[activeIndex].heading}</h4>
                            <img src={Aboutdata[activeIndex].imgSrc} alt={Aboutdata[activeIndex].imgSrc} className="mx-auto mb-5" style={{ width: 100, height: 100 }} />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{Aboutdata[activeIndex].paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover:underline'>
                                {Aboutdata[activeIndex].link}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
