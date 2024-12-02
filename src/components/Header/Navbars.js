"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useRouter } from 'next/router';
import ServicesModal from "../Common/ServicesModal";
import DigitalModal from "../Common/DigitalModal";
import { useRef } from "react";

const mainMenuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/digital" },
    { label: "Digital", href: "/digital" },
    { label: "Moments", href: "/moments" },
    { label: "Career", href: "/career" },
    { label: "Portfolio", href: "/portfolio" }
];

const submenuItems = [
    [],
    [],
    [
        { label: "UI Designing Company", href: "/ui-designing-company" },
        { label: "UX Design Company", href: "/ux-design-company" },
        { label: "Prototyping Design Company", href: "/prototyping-design-company" },
        { label: "User Research Company", href: "/user-research-company" },
        { label: "Usability Testing Company", href: "/usability-testing-company" },
        { label: "Data Visualisation Company", href: "/data-visualisation-company" },
        { label: "Web Development Company", href: "/website-development-company" },
        { label: "App Modernization Company", href: "/app-modernization-company" },
        { label: "Software Development Company", href: "/software-development-company" },
        { label: "Digital Product Design Company", href: "/digital-product-design-company" },
        { label: "Ecommerce Development Company", href: "/ecommerce-developement-company" },
        { label: "Cloud Application Development Company", href: "/cloud-app-development-company" },
    ],
    [
        { label: "Digital Marketing Company", href: "/digital-marketing-company" },
        { label: "Social Media Marketing Company", href: "/social-media-marketing-company" },
        { label: "Search Engine Marketing Company", href: "/sem-company" },
        { label: "SEO Company", href: "/seo-company" },
        { label: "PR Agency", href: "/pr-agency" },
        { label: " Media Buying Company", href: "/media-buying-company" },
    ],
    [],
    [],
    []
];

export default function Navbar() {
    const [activeModal, setActiveModal] = useState(null);
    const hoverTimer = useRef(null);
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [animationParent] = useAutoAnimate();
    const [isScrolled, setIsScrolled] = useState(false);

    function openSideMenu() {
        setSideMenuOpen(true);
        setIsSubMenuOpen(false);
    }

    function closeSideMenu() {
        setSideMenuOpen(false);
        setIsSubMenuOpen(false);
        setOpenSubmenuIndex(null);
    }

    const handleMouseEnter = (modalType) => {
        clearTimeout(hoverTimer.current);
        setActiveModal(modalType);
    };

    const handleMouseLeave = () => {
        hoverTimer.current = setTimeout(() => {
            setActiveModal(null);
        }, 200);
    };

    const handleModalMouseEnter = () => {
        clearTimeout(hoverTimer.current);
    };

    const handleModalMouseLeave = () => {
        hoverTimer.current = setTimeout(() => {
            setActiveModal(null);
        }, 200);
    };

    function toggleSubmenu(index) {
        if (openSubmenuIndex === index) {
            setIsSubMenuOpen(false);
            setOpenSubmenuIndex(null);
        } else {
            setOpenSubmenuIndex(index);
            setIsSubMenuOpen(true);
        }
    }

    function backToMainMenu() {
        setIsSubMenuOpen(false);
        setOpenSubmenuIndex(null);
    }

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 py-4 md:py-6 transition-colors duration-300 ${isScrolled ? "bg-white text-black shadow-xl" : "bg-white text-black"}`}>
            <div className="max-w-full md:max-w-7xl mx-auto px-2 md:px-8">
                <div className="flex justify-between items-center">
                   
                    <div className="text-xl md:text-3xl font-bold bg-white">
                        <span>Digital Konnect</span>
                    </div>

                   
                    <div className="hidden md:flex flex-col items-end text-sm md:text-base">
                        <div className="flex items-center space-x-6">
                           
                            <span className="flex items-center space-x-2">
                                <HiOutlineMail className="w-5 h-5 text-black" />
                                <span>info@digitalkonnect.com</span>
                            </span>

                          
                            <span className="flex items-center space-x-2">
                                <FiPhone className="w-5 h-5 text-black" />
                                <span>+1 4122735579</span>
                            </span>

                            
                            <Link href="/contact">
                                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-gray-300" />

              
                <div className="hidden md:flex justify-between items-center">
                    <ul className="flex justify-between flex-grow space-x-8">
                      
                        {mainMenuItems.map((item, index) => (
                            <li key={index} 
                                onMouseEnter={() => (item.label === 'Service' ? handleMouseEnter('services') : item.label === 'Digital' ? handleMouseEnter('digital') : null)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={item.href}
                                    className={`${isScrolled ? "text-black" : "text-black"} hover:font-bold lg:text-[14px] xl:text-[18px]`}
                                >
                                    {item.label}
                                </Link>
                               
                                {activeModal === "services" && item.label === 'Service' && (
                                    <div
                                        className="absolute top-full left-0 w-full z-50"
                                        onMouseEnter={handleModalMouseEnter}
                                        onMouseLeave={handleModalMouseLeave}
                                    >
                                        <ServicesModal />
                                    </div>
                                )}
                                {activeModal === "digital" && item.label === 'Digital' && (
                                    <div
                                        className="absolute top-full left-0 w-full z-50"
                                        onMouseEnter={handleModalMouseEnter}
                                        onMouseLeave={handleModalMouseLeave}
                                    >
                                        <DigitalModal />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

             
                <div className="md:hidden flex justify-between items-center">
                    <button onClick={openSideMenu} className="text-black text-3xl">
                        <FiMenu />
                    </button>
                </div>
            </div>

       
            {isSideMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSideMenu}></div>
            )}

            {isSideMenuOpen && (
                <div className="fixed top-0 left-0 h-full w-full md:w-2/5 bg-[#072239] z-50 transform transition-transform translate-x-0" ref={animationParent}>
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <AiOutlineClose onClick={closeSideMenu} className="text-3xl cursor-pointer text-white" />
                            <div className="text-xl font-bold text-white">Digital Konnect</div>
                            <button className="text-white text-2xl">
                                <FaSearch />
                            </button>
                        </div>
                        <div className="w-full border-b border-white my-4" />
                    </div>

                    <div className="flex flex-col space-y-6 overflow-y-auto px-4 pb-4 max-h-[calc(100vh-100px)]">
                       
                        {!isSubMenuOpen ? (
                            mainMenuItems.map((menuItem, index) => (
                                <div key={index} onClick={() => toggleSubmenu(index)}>
                                    <div className="flex justify-between items-center text-white text-lg font-semibold cursor-pointer">
                                        <Link href={menuItem.href}>
                                            {menuItem.label}
                                        </Link>
                                        {submenuItems[index].length > 0 && <AiOutlineRight />}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col space-y-6">
                                <div className="flex justify-between items-center text-white text-lg font-semibold cursor-pointer" onClick={backToMainMenu}>
                                    <AiOutlineLeft /> Back
                                </div>
                                {submenuItems[openSubmenuIndex].map((submenu, subIndex) => (
                                    <li key={subIndex} className="text-white text-lg list-none">
                                        <Link href={submenu.href}>{submenu.label}</Link>
                                    </li>
                                ))}
                            </div>
                        )}
                        <Link href="#" className="text-white text-lg font-semibold hover:underline">Sign In</Link>
                        <Link href="#" className="text-white text-lg font-semibold hover:underline">Subscribe</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
