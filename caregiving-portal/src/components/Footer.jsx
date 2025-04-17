import React from 'react'
import Flogo from '../images/LOGO.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <section className="bg-footer flex flex-col gap-10">
                {/* Main Footer */}
                <div className="flex flex-col lg:flex-row max-w-[90%] mx-auto pt-20 gap-12">

                    {/* Logo + About */}
                    <div className="lg:w-1/4">
                        <img src={Flogo} alt='MedicalCare Logo' className="w-52" />
                        <p className="py-6 text-gray font-jost text-base leading-relaxed">
                            At MedicalCare, we are committed to delivering quality home healthcare and caregiver services with compassion and professionalism. 
                        </p>
                    </div>

                    {/* Help Section */}
                    <div className="lg:w-1/5">
                        <h5 className="text-xl font-semibold uppercase">Get Help</h5>
                        <ul className="pt-6 text-gray font-jost text-base space-y-3">
                            <li>
                                <Link to="/contactUs" className="hover:text-orange hover:no-underline">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="hover:text-orange hover:no-underline">Health Articles</Link>
                            </li>
                            <li>
                                <Link to="/faqs" className="hover:text-orange hover:no-underline">FAQs</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="lg:w-1/5">
                        <h5 className="text-xl font-semibold uppercase">Services</h5>
                        <ul className="pt-6 text-gray font-jost text-base space-y-3">
                            <li><a href="#!" className="hover:text-orange">Home Nursing</a></li>
                            <li><a href="#!" className="hover:text-orange">Doctor Visit</a></li>
                            <li><a href="#!" className="hover:text-orange">Physiotherapy</a></li>
                            <li><a href="#!" className="hover:text-orange">Lab Tests</a></li>
                            <li><a href="#!" className="hover:text-orange">Elderly Care</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:w-1/4">
                        <h5 className="text-xl font-semibold uppercase">Contact Us</h5>
                        <div className="pt-6 text-gray font-jost text-base space-y-2">
                            <p>Address: 123 HealthCare Street, Sector 21, Cityname, Country</p>
                            <p>Tel: +1 (234) 567-8901</p>
                            <p>Email: support@medicalcare.com</p>
                        </div>

                        <ul className="flex gap-5 pt-4 text-xl text-gray">
                            <li><i className="fa-brands fa-facebook-f hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-instagram hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-x-twitter hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-youtube hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-linkedin-in hover:text-orange"></i></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray text-base pb-6">
                    <p>© 2024 MedicalCare Services | All Rights Reserved</p>
                </div>
            </section>
        </div>

    )
}

export default Footer;