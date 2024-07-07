// components/FloatingButton.jsx
import Link from 'next/link';
import Image from 'next/image';

const FloatingButton = () => {
    return (
        <div className="fixed bottom-5 right-0 z-50 animate-bounce">
            <Link href="https://wa.me/918010368931" className="flex items-center justify-center w-15 h-15 ">
                    <Image src={'/images/footer/wp.png'} alt="WhatsApp" width={110} height={110} />
                
            </Link>
        </div>
    );
};

export default FloatingButton;
