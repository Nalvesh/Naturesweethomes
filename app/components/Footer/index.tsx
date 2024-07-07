import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'About', 'Contact'],
    },
    // {
    //     id: 2,
    //     section: "Category",
    //     link: ['Design', 'Mockup', 'View all', 'Log In']
    // },
    // {
    //     id: 3,
    //     section: "Pages",
    //     link: ['404', 'Instructions', 'License']
    // },
    // {
    //     id: 4,
    //     section: "Others",
    //     link: ['Styleguide', 'Changelog']
    // }
]

const footer = () => {
    return (
        <div className="bg-blue mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-4 pb-16 px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-6'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>Contact Us</h3>
                        <h4 className='text-white text-xl font-semibold leading-9 mb-2 lg:mb-10'>9C Bungalow, Silver Valley Society, Khinger Rd, behind Zalawadi Sanitorium, Shahunagar, Panchgani, Maharashtra 412805</h4>
                        <h4 className='text-white text-xl font-semibold leading-9 mb-2 lg:mb-5'>Write Us at naturesweethomes@gmail.com</h4>
                        <h4 className='text-white text-xl font-semibold leading-9 mb-2 lg:mb-5'>Or feel free to call us at <br/> +91 8010368931</h4>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com/Naturesweethomes"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>                                                                                      
                            <div className='footer-icons'>
                                <Link href="https://wa.me/918010368931"><Image src={'/images/footer/whatsappf.png'} alt="twitter" width={20} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com/naturesweethomes"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative  col-span-6">
                            
                            <p className="text-white text-2xl font-extrabold mb-20"> We are open for suggestions and feedback...</p>
                            <p className="text-white text-3xl font-extrabold mb-10">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-2xl font-normal mb-6 space-links">{link}</Link>
                                        
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2024 - All Rights Reserved by NatureSweetHomes</h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6">Developed By Ritesh & Nalvesh</h3>
                            </Link>
                            {/* <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Ritesh | Nalvesh</h3>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;