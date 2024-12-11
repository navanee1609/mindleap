import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        const navbarElement = document.querySelector(".navbar");
        if (navbarElement && !navbarElement.contains(event.target)) {
            handleCloseMenu();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const navLinks = (
        <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 md:space-x-4 sm:space-y-2 md:space-y-0 p-4 md:p-0">
            {["home", "services", "about", "pricing", "testimonial"].map((section) => (
                <li key={section}>
                    <a
                        href={`#${section}`}
                        className={`text-white ${activeSection === section ? "isActive" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(section);
                            handleCloseMenu();
                        }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <header className="bg-heroBg text-white py-6 fixed top-0 left-0 right-0 z-10 px-4 navbar">
            <div className="container flex justify-between items-center h-full mx-auto">
                {/* logo */}
                <div>
                    <a href="/">
                        <img src="/logo.svg" alt="Mindleap" />
                    </a>
                </div>
                {/* navItems */}
                <div className="hidden md:flex flex-grow justify-center items-center">
                    <nav>{navLinks}</nav>
                </div>
                {/* button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                    >
                        Contact us
                    </a>
                </div>
                {/* hamburger */}
                <div className="block md:hidden">
                    <button
                        className="text-white border border-white p-2"
                        onClick={handleToggle}
                    >
                        {isOpen ? <GrClose size={24} /> : <RiMenu3Line size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <nav className="absolute top-full z-20 bg-heroBg text-white w-full left-0 md:hidden">
                    <ul className="flex flex-col p-4 space-y-4">
                        {navLinks.props.children}
                        <li className="py-3">
                            <a
                                href="#contact"
                                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCloseMenu();
                                }}
                            >
                                Contact us
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
