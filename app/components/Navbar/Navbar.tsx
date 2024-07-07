"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import logo from "./public/images/banner/logo.jpeg";
import Image from "next/image";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus-section', current: false },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Villas', href: '#blog-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
            <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center">
                            <div className='flex items-center space-x-2'>
                                <Image src="/images/banner/logo.png" alt="hero-image" width={75} height={75} />
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                    NatureSweetHomes
                                </Link>
                            </div>
                        </div>

                        {/* LINKS */}
                        <div className="hidden lg:flex items-center border-right ">
                            <div className="flex justify-end space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                            'px-3 py-4 rounded-md text-lg font-normal'
                                        )}
                                        aria-current={item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CONTACT US BUTTON */}
                        <a href="https://api.whatsapp.com/send?phone=918010368931" className='hidden lg:flex justify-end items-center text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-blue hover:text-white'>
                            <img src="/images/footer/whatsappgreen.svg" alt="WhatsApp Logo" className="w-6 h-6 mr-2" />
                            Enquire Now
                        </a>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
