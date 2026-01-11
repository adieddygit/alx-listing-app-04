import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/assets/images/Logo.png';
import Link from 'next/link';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const filters = ['Rooms', 'Villa', 'Mansion', 'Countryside', 'Beachfront', 'City'];

    return (
        <header className="max-w-full flex items-center justify-between shadow-md sticky top-0 z-50 p-2 bg-white">
            
            {/* Logo */}
            <div className="ml-10 cursor-pointer">
                <Image src={Logo} alt="Logo" width={200} height={180} />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 items-center p-6">
                {filters.map(filter => (
                    <span
                        key={filter}
                        className="px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-100 cursor-pointer"
                    >
                        {filter}
                    </span>
                ))}
                <div className="relative">
            <input
              type="text"
              placeholder="Search location, property..."
              className="border rounded-md py-2 px-3 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
                <Link href="/signin" className="text-gray-700 hover:text-blue-600">Sign In</Link>
                <Link href="/signup" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Link>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden relative">

                {/* Hamburger Button */}
                <button onClick={() => setOpen(!open)} className="text-2xl hamburger flex flex-col cursor-pointer">
                    <span className="block bg-[#0f6f67] w-6 h-[3px] m-[3px] rounded"></span>
                    <span className="block bg-[#0f6f67] w-6 h-[3px] m-[3px] rounded"></span>
                    <span className="block bg-[#0f6f67] w-6 h-[3px] m-[3px] rounded"></span>
                </button>

                {/* Mobile Dropdown Menu */}
                {open && (
                    <div className="absolute right-0 mt-3 w-48 p-4 space-y-2 bg-white shadow-md rounded nav-menu">
                        {filters.map(filter => (
                            <span
                                key={filter}
                                className="block px-3 py-2 bg-gray-100 rounded-full cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                {filter}
                            </span>
                        ))}

                        <div className="relative">
                            <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-full py-2 px-3.5 w-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <Link href="/signin" className="block text-gray-700 nav-link" onClick={() => setOpen(false)}>
                            Sign In
                        </Link>

                        <Link href="/signup" className="block px-3 py-1 bg-blue-600 text-white rounded nav-link"
                            onClick={() => setOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;
