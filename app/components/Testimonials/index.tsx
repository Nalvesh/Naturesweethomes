"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Mr.Sushil Kashyap",
        profession: '',
        comment: 'I was blown away by the exceptional service I received. Their team went above and beyond to ensure my needs were met. I highly recommend them!',
        imgSrc: '/images/testimonial/man.png',
    },
    {
        name: "Mr. Nitin Shah",
        profession: '',
        comment: 'I had a fantastic experience. The team was knowledgeable, responsive, and went above and beyond to ensure my satisfaction. I’ll definitely be a repeat customer.',
        imgSrc: '/images/testimonial/man.png',
    },
    {
        name: "Miss. Tejashree",
        profession: '',
        comment: 'I wanted to extend my heartfelt thanks to all of you for the outstanding hospitality and service provided during our stay over the past three days. Your attention to detail, warm welcome, and exceptional care made our visit truly memorable. We deeply appreciate all the efforts made to ensure our comfort and enjoyment.',
        imgSrc: '/images/testimonial/man.png',
    },
    {
        name: "Danish Irani",
        profession: '',
        comment: 'The place is beautiful, nice surroundings, enchanting view, easily accessible and clean',
        imgSrc: '/images/testimonial/man.png',
    },
    {
        name: "Vikrant Pandit",
        profession: '',
        comment: 'Stayed at this cool mountain villa recently. The people there were super nice, and the food was yummy with local flavors.',
        imgSrc: '/images/testimonial/man.png',
    },
    {
        name: "Ojas Khatri",
        profession: '',
        comment: 'They are pet friendly stay. Where i stayed we got 4bhk ,swimming pool n barbecue. So starting with rooms they are really good n maintained, 2 of them hv washrooms n other 2 are common ones the living area quite spacious n so waa thw dining area n kitchen(fully facilitated), they had a good big parking area.',
        imgSrc: '/images/testimonial/man.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-48 pb-1 lg:py-30" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3> */}
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}