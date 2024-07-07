"use client";
"use client";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        name: 'Wi-Fi',
        imgSrc: '/images/wework/router.png',
    },
    {
        name: 'Refreshments',
        imgSrc: '/images/wework/fast-food.png',
    },
    {
        name: 'Pick & Drop',
        imgSrc: '/images/wework/taxi-driver.png',
    },
    {
        name: 'Swimming Pool',
        imgSrc: '/images/wework/swimming-pool.png',
    },
    {
        name: 'Gym',
        imgSrc: '/images/wework/gym.png',
    },
    {
        name: 'HouseKeeping',
        imgSrc: '/images/wework/mop.png',
    },
];

// CAROUSEL SETTINGS

const MultipleItems: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 480,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-wework py-10 sm:py-32">
            <div className="mx-auto max-w-7xl sm:px-4 lg:px-8">
                <div className="text-center">
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">We are at your service 24/7.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">We work in several verticals.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We care for your comfort.</h3>
                </div>
            </div>

            <Slider {...settings}>
                {postData.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="bg-white m-20 sm:m-8 py-4 sm:py-10 my-1 text-center shadow-xl rounded-3xl">
                            <div className="relative">
                                <Image src={item.imgSrc} alt={item.name} width={50} height={50} className="inline-block m-auto" />
                            </div>
                            <h4 className="text-2xl sm:text-4xl font-bold pt-6">{item.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MultipleItems;
