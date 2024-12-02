"use client"
import { useState } from 'react';
import Image from 'next/image';
import ITSupport from "../../../public/assets/images/Services_Custom/auto-loan-bullseye.webp"
import CloudServices from "../../../public/assets/images/Services_Custom/banking-bullseye.webp"
import CyberSecurity from "../../../public/assets/images/Services_Custom/business-loans-bullseye.webp"
import WebDevelopment from "../../../public/assets/images/Services_Custom/credit-cards-bullseye.webp"
import DataAnalytics from "../../../public/assets/images/Services_Custom/debt-relief-bullseye.webp"
import DevOps from "../../../public/assets/images/Services_Custom/home-equity-bullseye.webp"
import AI_ML from "../../../public/assets/images/Services_Custom/home-purchase-bullseye.webp"
import Blockchain from "../../../public/assets/images/Services_Custom/insurance-slide-bullseye.webp"
import MobileAppDevelopment from "../../../public/assets/images/Services_Custom/personal-loan-bullseye.webp"
import DigitalMarketing from "../../../public/assets/images/Services_Custom/student-loans-bullseye.webp"
import ITConsulting from "../../../public/assets/images/Services_Custom/student-loans-bullseye.webp"
import EcommerceSolutions from "../../../public/assets/images/Services_Custom/student-loans-bullseye.webp"
import UIUXDesign from "../../../public/assets/images/Services_Custom/student-loans-bullseye.webp"
import { FcNext, FcPrevious } from 'react-icons/fc';
import { FaNetworkWired, FaCloud, FaShieldAlt, FaCode, FaChartBar, FaTools, FaRobot, FaCubes, FaMobileAlt, FaBullhorn, FaLightbulb, FaShoppingCart, FaPaintBrush, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Service = () => {
    // Tabs  
    const tabs = [
        { label: 'UI/UX Design', key: 'ui_ux_design', icon: FaPaintBrush },
        { label: 'Web Development', key: 'web_development', icon: FaCode },
        { label: 'Mobile App Development', key: 'mobile_app_dev', icon: FaMobileAlt },
        { label: 'Software Development', key: 'software_development', icon: FaNetworkWired },
        { label: 'Digital Marketing', key: 'digital_marketing', icon: FaBullhorn },
        { label: 'Cloud Manage Services', key: 'cloud_services', icon: FaCloud },
        { label: 'E-commerce Solutions', key: 'ecommerce_solutions', icon: FaShoppingCart },
       
        
        { label: 'Cyber Security', key: 'cyber_security', icon: FaShieldAlt },
        { label: 'Data Analytics', key: 'data_analytics', icon: FaChartBar },
        { label: 'DevOps', key: 'devops', icon: FaTools },
        { label: 'AI & Machine Learning', key: 'ai_ml', icon: FaRobot },
        { label: 'Blockchain', key: 'blockchain', icon: FaCubes },
        { label: 'IT Consulting', key: 'it_consulting', icon: FaLightbulb },
    ];
    
    const tabContent = {
        ui_ux_design: {
            title: 'UI/UX Design',
            description: 'Create intuitive and visually appealing interfaces that enhance user experiences across platforms.',
            buttonText: 'Design With Us',
            imageSrc: UIUXDesign.src, 
            width: 1200,
            height: 1200,
        },
        web_development: {
            title: 'Web Development',
            description: 'Build high-performing, secure websites with our expert development team.',
            buttonText: 'Get Started',
            imageSrc: WebDevelopment.src,
            width: 1200,
            height: 1200,
        },
        mobile_app_dev: {
            title: 'Mobile App Development',
            description: 'Create user-friendly and feature-rich mobile apps for iOS and Android platforms with our expert development team.',
            buttonText: 'Start Development',
            imageSrc: MobileAppDevelopment.src, 
            width: 1200,
            height: 1200,
        },
        digital_marketing: {
            title: 'Digital Marketing',
            description: 'Boost your online presence with tailored digital marketing strategies, from SEO to social media advertising.',
            buttonText: 'Grow Your Brand',
            imageSrc: DigitalMarketing.src, 
            width: 1200,
            height: 1200,
        },
        ecommerce_solutions: {
            title: 'E-commerce Solutions',
            description: 'Build scalable e-commerce platforms that deliver seamless shopping experiences for your customers.',
            buttonText: 'Shop Solutions',
            imageSrc: EcommerceSolutions.src, 
            width: 1200,
            height: 1200,
        },
        software_development: {
            title: 'Software Development',
            description: 'Ensure smooth operations with our round-the-clock software development.',
            buttonText: 'Learn More',
            imageSrc: ITSupport.src,
            width: 1200,
            height: 1200,
        },
        cloud_services: {
            title: 'Cloud Services',
            description: 'Leverage the power of cloud computing to scale and optimize your operations.',
            buttonText: 'Explore Services',
            imageSrc: CloudServices.src,
            width: 1200,
            height: 1200,
        },
        cyber_security: {
            title: 'Cyber Security',
            description: 'Protect your business from cyber threats with our advanced security solutions.',
            buttonText: 'Get Secured',
            imageSrc: CyberSecurity.src,
            width: 1200,
            height: 1200,
        },
        data_analytics: {
            title: 'Data Analytics',
            description: 'Turn data into actionable insights with our advanced analytics services.',
            buttonText: 'Analyze Data',
            imageSrc: DataAnalytics.src,
            width: 1200,
            height: 1200,
        },
        devops: {
            title: 'DevOps',
            description: 'Streamline your development pipeline with our DevOps solutions, from CI/CD to infrastructure automation.',
            buttonText: 'Optimize DevOps',
            imageSrc: DevOps.src, 
            width: 1200,
            height: 1200,
        },
        ai_ml: {
            title: 'AI & Machine Learning',
            description: 'Harness the power of artificial intelligence and machine learning to drive innovation and automate processes.',
            buttonText: 'Discover AI Solutions',
            imageSrc: AI_ML.src, 
            width: 1200,
            height: 1200,
        },
        blockchain: {
            title: 'Blockchain',
            description: 'Build secure, decentralized applications and leverage blockchain for transparency and efficiency.',
            buttonText: 'Explore Blockchain',
            imageSrc: Blockchain.src, 
            width: 1200,
            height: 1200,
        },
        it_consulting: {
            title: 'IT Consulting',
            description: 'Get expert advice on IT strategies and solutions to drive your business forward.',
            buttonText: 'Consult Now',
            imageSrc: ITConsulting.src, 
            width: 1200,
            height: 1200,
        },
    };
    

    const [activeTab, setActiveTab] = useState(tabs[0].key);
    const [currentPage, setCurrentPage] = useState(1);
    const baseItemsPerPage = 4;
    const totalPages = Math.ceil(tabs.length / baseItemsPerPage);

    const isBothPaginationButtonsVisible = currentPage > 1 && currentPage < totalPages;
    const adjustedItemsPerPage = isBothPaginationButtonsVisible ? baseItemsPerPage - 1 : baseItemsPerPage;
    const currentTabs = tabs.slice((currentPage - 1) * adjustedItemsPerPage, currentPage * adjustedItemsPerPage);

    const handlePageChange = (direction) => {
        setCurrentPage(prevPage => {
            if (direction === 'next' && prevPage < totalPages) return prevPage + 1;
            if (direction === 'prev' && prevPage > 1) return prevPage - 1;
            return prevPage;
        });
    };

    return (
        <>
            <div className="hidden md:block max-w-7xl mx-auto md:p-2 lg:p-8">
                <span className='md:flex justify-center items-center text-center text-[23px] md:text-[23px] lg:text-[38px] font-semibold px-4 md:px-0'>
                    Let us help you with our services
                </span>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    {/* Tab Buttons */}
                    <div className="flex flex-col md:my-2 lg:my-8 bg-white overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-5  w-full">
                            {currentTabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex flex-col items-center justify-center p-2 md:p-1 lg:p-3 focus:outline-none whitespace-nowrap ${activeTab === tab.key ? 'bg-[#062C7E] text-white' : 'text-gray-700'} hover:bg-[#062C7E] hover:text-white`}
                                >
                                    <tab.icon className={`mb-2 text-2xl md:text-3xl lg:text-3xl text-cyan-500 ${activeTab === tab.key ? 'bg-[#062C7E] text-white ' : 'text-blue-500 hover:text-white'} hover:bg-[#062C7E] hover:text-white`} />
                                    <span className="text-xs md:text-sm lg:text-[12px]">{tab.label}</span>
                                </button>
                            ))}
                            {/* Pagination Buttons */}
                            {currentPage > 1 && (
                                <button onClick={() => handlePageChange('prev')} className="flex flex-col items-center  justify-center px-2 py-3 focus:outline-none whitespace-nowrap text-slate-700">
                                    <div className="border rounded-full bg-cyan-500 text-white  px-3 py-3">
                                        <FaArrowLeft style={{ color: 'white !important' }}  />
                                    </div>
                                    <span className="text-xs md:text-[10px] lg:text-[12px]  ">Previous Services</span>
                                </button>
                            )}
                            {currentPage < totalPages && (
                                <button onClick={() => handlePageChange('next')} className="flex flex-col items-center justify-center px-2 py-3 focus:outline-none whitespace-nowrap text-slate-700">
                                    <div className="border rounded-full  bg-cyan-500 text-white px-3 py-3">
                                        <FaArrowRight style={{ color: 'white !important' }}  />
                                    </div>
                                    <span className="text-xs md:text-[10px] lg:text-[12px]  ">More Services</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="flex flex-col md:flex-row justify-between mt-6 px-8">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 mb-2">{tabs.find(tab => tab.key === activeTab)?.label}</p>

                        <h4 className="text-2xl font-semibold mb-4">
                            {tabContent[activeTab].title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                            {tabContent[activeTab].description}
                        </p>
                        <button className="bg-[#062C7E] text-white px-6 py-2 rounded-md">
                            {tabContent[activeTab].buttonText}
                        </button>
                    </div>

                    <div className="flex-1 mt-8 lg:mt-0 lg:ml-8 flex justify-center items-center">
                        <Image
                            src={tabContent[activeTab].imageSrc}
                            alt={tabContent[activeTab].title}
                            width={tabContent[activeTab].width}
                            height={tabContent[activeTab].height}
                            className="max-w-lg w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
