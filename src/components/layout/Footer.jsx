import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">

                {/* Left text */}
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>

                {/* Right links and icons */}
                <div className="flex items-center space-x-6 mt-4 sm:mt-0">

                    {/* Navigation links */}
                    <div className="flex space-x-4 text-sm">
                        <Link href="/" className="hover:text-[#da991b]">Home</Link>
                        <Link href="/about" className="hover:text-[#da991b]">About Us</Link>
                        <Link href="/events" className="hover:text-[#da991b]">Events</Link>
                        <Link href="/videos" className="hover:text-[#da991b]">Videos</Link>
                        <Link href="/contact" className="hover:text-[#da991b]">Contact Us</Link>
                    </div>

                    {/* Social icons */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/BazmeUrdughazal/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/khudrang_foundation/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaInstagram />
                        </a>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}
