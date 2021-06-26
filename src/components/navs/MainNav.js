import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';

const MainNav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const trigger = useRef(null);
    const navbar = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!navbar.current || !trigger.current) return;
            if (
                !isMenuOpen ||
                navbar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setMenuOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!isMenuOpen || keyCode !== 27) return;
            setMenuOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="px-4 py-4 mx-auto lg:max-w-screen-xl">
            <div className="relative">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to="/" className="text-3xl font-medium">
                            Givers
                        </Link>
                    </div>
                    <div ref={navbar}>
                        <div className="items-center space-x-8 hidden md:flex">
                            <Link
                                to="/about"
                                className="text-lg hover:text-purple-600"
                            >
                                About
                            </Link>
                            <Link
                                to="/login"
                                className="py-3 px-12 rounded-lg text-lg font-medium bg-purple-100 text-purple-500"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="block md:hidden">
                            <button
                                ref={trigger}
                                className="focus:outline-none"
                            >
                                {!isMenuOpen ? (
                                    <MenuIcon
                                        className="h-6 w-6 hover:text-purple-500"
                                        aria-label="Open Menu"
                                        onClick={() => setMenuOpen(true)}
                                    />
                                ) : (
                                    <XIcon
                                        className="h-6 w-6 hover:text-purple-500"
                                        aria-label="Open Menu"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isMenuOpen}
                    enter="transition-opacity ease-linear duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute top-0 left-0 w-full space-y-8 z-1 mt-10">
                        <div className="p-8  bg-white shadow-sm space-x-16 text-center">
                            <Link
                                to="/about"
                                className="text-lg hover:text-purple-600"
                            >
                                About
                            </Link>
                            <Link
                                to="/login"
                                className="py-3 px-12 rounded-lg text-lg font-medium bg-purple-100 text-purple-500"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default MainNav;
