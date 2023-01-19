import { List, X } from 'phosphor-react'
import { AnimatePresence, motion } from 'framer-motion';
import { Sling } from 'hamburger-react'
import React from 'react';

interface NavbarProps {
    items: string[];
}

export function Navbar(props: NavbarProps) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="relative flex flex-wrap items-center justify-between pt-10">
            <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
                onClick={navbarOpen ? () => setNavbarOpen(false) : () => setNavbarOpen(true)}>
                <Sling size={50} />
            </button>
            <div
                className={
                    "sm:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")}>
                <ul className={"flex flex-col sm:space-x-20 sm:flex-row text-white  text-2xl font-bold list-none sm:ml-auto animate-fade-in-down"}>
                    {props.items.map((item, index) => (
                        <li key={index} ><a href="">{item}</a></li>
                    ))}
                </ul>
            </div>
        </nav>

    );
};


