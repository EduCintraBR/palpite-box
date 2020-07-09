import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-400 lg:py-2 py-4 text-center shadow-md">
            <Link href="/sobre">
                <a className="font-bold px-4 hover:opacity-75 text-lg lg:inline block">Sobre o restaurante</a>
            </Link>
            <Link href="/contato">
                <a className="font-bold px-4 hover:opacity-75 text-lg">Contato</a>
            </Link>
        </nav>
    )
}

export default Navbar