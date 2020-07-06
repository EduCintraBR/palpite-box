import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-gray-300 py-4">
            <Link href="/">
                <a><img src="logo.png" alt="PalpiteBox" className="mx-auto"/></a>
            </Link>
        </div>
    )
}

export default Header