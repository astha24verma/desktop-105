import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border border-gray-200 px-2 sm:px-4 py-1 shadow">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="../public" className="flex items-center">
                    <img src="/Group373logo.png" alt="logo" className="w-28" />
                </a>
                <div className="flex md:order-2">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto justify-end`}
                    id="mobile-menu"
                >
                    <ul className=" justify-items-end flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 justify-end md:text-sm md:font-medium">
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;