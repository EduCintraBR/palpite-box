import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-400 py-2 text-center shadow-md">
            <Link href="/sobre">
                <a className="font-bold px-4 hover:opacity-75 text-lg ">Sobre o restaurante</a>
            </Link>
            <Link href="/contato">
                <a className="font-bold px-4 hover:opacity-75 text-lg">Contato</a>
            </Link>
        </nav>
    )
}

export default Navbar