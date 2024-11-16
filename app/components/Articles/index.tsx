"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import LiveViews from '../LiveView/LiveView';
import ErrorBoundary from '../ErrorBoundry/ErrorBoundry';

interface FormData {
    to_name: string;
    from_name: string;
    message: string;
    reply_to: string;
    phone: string;
    subject: string;
}

const EnquiryForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        to_name: "Admin", // You can set this to whatever name you want the emails addressed to
        from_name: "",
        message: "",
        reply_to: "",
        phone: "",
        subject: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const form = useRef<HTMLFormElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (Object.values(formData).some(field => field === "")) {
            setSubmitMessage("Please fill in all fields.");
            return;
        }
    
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            await emailjs.sendForm(
                "service_w21plir", 
                "template_34nuwcb", 
                event.currentTarget, 
                "34m5rsXBLeGOkK1xb"
            );
            setSubmitMessage("Form submitted successfully!");
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitMessage("There was an error sending your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <div className="bg-offwhite p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                            type="text" 
                            id="from_name" 
                            name="from_name" 
                            value={formData.from_name} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="reply_to" 
                            name="reply_to" 
                            value={formData.reply_to} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input 
                            type="text" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows={3} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                            required
                        ></textarea>
                    </div>
                    <input type="hidden" name="to_name" value={formData.to_name} />
                    {submitMessage && (
                        <p className={`text-sm ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                            {submitMessage}
                        </p>
                    )}
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// CAROUSEL DATA
interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
    slideshowImages?: string[];
}

const postData: DataType[] = [
    {
        time: "Enquire Now",
        heading: 'Seraphic Villa',
        heading2: '2 BHK Villa in Panchgani',
        name: "astonishing villa with lavish amenities",
        date: 'By NatureSweetHomes',
        imgSrc: '/images/articles/sera1.jpeg',
        slideshowImages: [
            '/images/articles/sera2.jpeg',
            '/images/articles/sera3.jpeg',
            '/images/articles/sera4.jpeg',
            '/images/articles/sera1.jpeg']
    },
    // {
    //     time: "Enquire Now",
    //     heading: '3 BHK Pool Villa',
    //     heading2: 'Lavish 3 BHK villa in Lonavala',
    //     name: "stunning views & breathtaking landscapes",
    //     date: 'By NatureSweetHomes',
    //     imgSrc: '/images/articles/bhk1.jpeg',
    //     slideshowImages: [
    //         '/images/articles/bhk2.jpeg',
    //         '/images/articles/bhk3.jpeg',
    //         '/images/articles/bhk4.jpeg',
    //         '/images/articles/bhk1.jpeg']
    // },
    {
        time: "Enquire Now",
        heading: 'Mystique Villa',
        heading2: 'amidst lush trees in Panchgani',
        name: "the perfect setting for relaxation",
        date: 'By NatureSweetHomes',
        imgSrc: '/images/articles/mst2.jpeg',
        slideshowImages: [
            '/images/articles/mst3.jpeg',
            '/images/articles/mst4.jpeg',
            '/images/articles/mst5.jpeg',
            '/images/articles/mst2.jpeg']
    },
    {
        time: "Enquire Now",
        heading: 'StarLight Villa',
        heading2: 'Discover Charm of Panchgani',
        name: "Starlight Villa where luxury meets nature",
        date: 'By NatureSweetHomes',
        imgSrc: '/images/articles/starlight1.jpeg',
        slideshowImages: [
            '/images/articles/starlight2.jpeg',
            '/images/articles/starlight3.jpeg',
            '/images/articles/starlight4.jpeg',
            '/images/articles/starlight1.jpeg']
    },
    // ... other postData items ...
];

// ImageSlideshow Component
const ImageSlideshow: React.FC<{ images: string[] }> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index}>
                    <Image src={img} alt={`Slideshow image ${index + 1}`} width={389} height={262} className="inline-block m-auto" />
                </div>
            ))}
        </Slider>
    );
};

// MultipleItems Component
const MultipleItems: React.FC = () => {
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplayspeed: 500,
        speed: 200,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
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
        <div className="bg-lightgrey py-20" id="blog-section">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">we bring you</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold">Luxury Villas Associated with us.</h3>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} >
                            <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                {items.slideshowImages ? (
                                    <ImageSlideshow images={items.slideshowImages} />
                                ) : (
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />
                                )}

                                <button className="text-blue absolute bottom-3 right-3 font-semibold hover:text-red-500" onClick={openForm}>{items.time}</button>
                                <h3 className='text-3xl leading-8 font-bold pt-4 text-3xl'>{items.heading}</h3>
                                <h3 className='text-xl sm:text-2xl leading-8 font-bold pb-2'>{items.heading2}</h3>
                                <h4 className='pt-2 font-semibold text-grey'>{items.name}</h4>
                                <h5 className='text-sm text-gray-500 pt-1'>{items.date}</h5>

                                
                            </div>
                        </div>
                    ))}
                </Slider>

                {showForm && <EnquiryForm onClose={closeForm} />}
            </div>
        </div>
    );
};

export default MultipleItems;
