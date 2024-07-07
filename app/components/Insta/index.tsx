"use client";
import React, { useEffect, useRef, CSSProperties } from "react";
import Image from "next/image";

const Insta = () => {
    const imageRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLDivElement;
                    if (entry.isIntersecting) {
                        const overlay = target.querySelector('.overlay') as HTMLElement;
                        const image = target.querySelector('img') as HTMLElement;
                        overlay.style.opacity = "1";
                        image.style.transform = "scale(1.1)";
                    } else {
                        const overlay = target.querySelector('.overlay') as HTMLElement;
                        const image = target.querySelector('img') as HTMLElement;
                        overlay.style.opacity = "0";
                        image.style.transform = "scale(1)";
                    }
                });
            },
            {
                threshold: 1, // Adjusted threshold for earlier visibility
            }
        );

        imageRefs.current.forEach((imageRef) => observer.observe(imageRef));

        return () => {
            observer.disconnect();
        };
    }, []);

    const imageContainerStyle: CSSProperties = {
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "306px",
        margin: "auto",
    };

    const imageStyle: CSSProperties = {
        transition: "transform 0.3s ease",
        width: "100%",
        height: "auto",
        cursor: "pointer", // Added cursor pointer for clickable effect
    };

    const overlayStyle: CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        opacity: 0,
        transition: "opacity 0.3s ease",
        fontSize: "1rem",
        padding: "10px",
        textAlign: "center",
    };

    return (
        <div className="mx-auto max-w-7xl pb-16 px-4 sm:px-6 lg:px-8">
            <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="mx-auto" style={imageContainerStyle} ref={(el) => el && imageRefs.current.push(el)}>
                    <Image
                        src="/images/insta/Panchgani.jpg"
                        alt="Panchgani"
                        width={306}
                        height={306}
                        style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                        Panchgani
                    </div>
                </div>

                <div className="mx-auto" style={imageContainerStyle} ref={(el) => el && imageRefs.current.push(el)}>
                    <Image
                        src="/images/insta/para.jpg"
                        alt="Paragliding"
                        width={306}
                        height={306}
                        style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                        Paragliding
                    </div>
                </div>

                <div className="mx-auto" style={imageContainerStyle} ref={(el) => el && imageRefs.current.push(el)}>
                    <Image
                        src="/images/insta/tikona.jpg"
                        alt="Tikona Fort"
                        width={306}
                        height={306}
                        style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                        Tikona Fort
                    </div>
                </div>

                <div className="mx-auto" style={imageContainerStyle} ref={(el) => el && imageRefs.current.push(el)}>
                    <Image
                        src="/images/insta/MAHABALESHWAR.jpg"
                        alt="Mahabaleshwar"
                        width={306}
                        height={306}
                        style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                        Mahabaleshwar
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insta;
