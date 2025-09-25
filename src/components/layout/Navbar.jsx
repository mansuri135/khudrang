'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#feebc6] fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-32">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            className="dark:invert"
                            src="/images/logo.png"
                            alt="Logo"
                            width={120}
                            height={120}
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-col gap-4 items-end">
                        {/* Contact Info */}
                        <div className="text-sm flex text-gray-600 gap-2 ml-6 pl-4">
                            <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-[#da991b]">
                                <FiPhone />
                                <span>+1 234 567 890</span>
                            </a>
                            <a href="mailto:info@example.com" className="flex items-center space-x-1 hover:text-[#da991b]">
                                <FiMail />
                                <span>info@example.com</span>
                            </a>
                        </div>
                        {/* Social Media */}
                        <div className="flex gap-4 text-gray-600">
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400" aria-label="Instagram">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400" aria-label="Twitter">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500" aria-label="Facebook">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                        </div>
                        <div className="space-x-12">
                            <Link href="/" className="hover:text-[#da991b]">Home</Link>
                            <Link href="/about" className="hover:text-[#da991b]">About Us</Link>
                            <Link href="/events" className="hover:text-[#da991b]">Events</Link>
                            <Link href="/videos" className="hover:text-[#da991b]">Videos</Link>
                            <Link href="/contact" className="hover:text-[#da991b]">Contact Us</Link>
                        </div>



                    </div>

                    {/* Hamburger (Mobile) */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
                    <div className="flex-col flex gap-6">
                        <Link href="/" className="hover:text-[#da991b]">Home</Link>
                        <Link href="/about" className="hover:text-[#da991b]">About Us</Link>
                        <Link href="/event" className="hover:text-[#da991b]">Events</Link>
                        <Link href="/video" className="hover:text-[#da991b]">Videos</Link>
                        <Link href="/contact" className="hover:text-[#da991b]">Contact Us</Link>
                    </div>

                    {/* Contact Info */}
                    <div className="text-sm flex text-gray-600 gap-2 ml-6 pl-4">
                        <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-[#da991b]">
                            <FiPhone />
                            <span>+1 234 567 890</span>
                        </a>
                        <a href="mailto:info@example.com" className="flex items-center space-x-1 hover:text-[#da991b]">
                            <FiMail />
                            <span>info@example.com</span>
                        </a>
                    </div>
                    {/* Social Media */}
                    <div className="flex gap-4 text-gray-600">
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400" aria-label="Twitter">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500" aria-label="Facebook">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
