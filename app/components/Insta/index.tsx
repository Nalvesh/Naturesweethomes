import Image from "next/image";
import Link from "next/link";


const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/Panchgani.jpg" width={306} height={306} alt="instaOne" />
                    <Link href={""} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/Panchgani.jpeg" alt="Panchgani" width={250} height={300} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/para.jpg" width={306} height={306} alt="instaTwo" />
                    <Link href={""} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/para.jpeg" alt="Paragliding" width={250} height={300} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/tikona.jpg" width={306} height={306} alt="Tikona Fort" />
                    <Link href={""} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/tikona.jpeg" alt="Lonavala" width={250} height={300} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/MAHABALESHWAR.jpg" width={306} height={306} alt="MAHABALESHWAR" />
                    <Link href={""} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/MAHABALESHWAR.jpeg" alt="__Mahabaleshwar" width={249} height={300} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Insta
