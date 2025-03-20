import Link from "next/link";
import React from "react";
import { RiText } from "react-icons/ri"; // Corrected import for the icon

const Navbar = () => {
    return (
        <nav className="z-10 top-14 left-1/2 -translate-x-1/2 fixed flex items-center gap-5 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800">
            <a href="/">
                <RiText className="text-4xl" /> {/* Corrected icon usage */}
            </a>

            <Link href="/book" className="hover:text-gray-300 transition-colors">
                <span>Books</span>
            </Link>

            <Link href="/about" className="hover:text-gray-300 transition-colors">
                <span>About</span>
            </Link>

            <Link href="/" className="hover:text-gray-300 transition-colors">
                <span>Solutions</span>
            </Link>

            <Link href="/" className="hover:text-gray-300 transition-colors">
                <span>Contact</span>
            </Link>
        </nav>
    );
};

export default Navbar;