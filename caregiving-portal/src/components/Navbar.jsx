import React, {  useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../images/LOGO.png"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    //close dropdown on outside click
    const menuRef = useRef();
    const dropRef = useRef();
    window.addEventListener('click', (e)=>{
        if(e.target !== menuRef.current && e.target !== dropRef.current){
            setIsOpen(false);
        }
    })
    
    let location = useLocation();
    let loc = window.location.pathname.split("/").splice(-1)[0]

    return (
        <div className=''>
            
            <nav className="flex lg:flex-row justify-between lg:items-center max-w-[80%] mx-auto text-lg py-2">
                
                <Link to="/">
                    <img src={logo} className="img-fluid w-52" alt="Logo"/>
                </Link>
            

                <div className="hidden xl:flex xl:text-lg">
                    <ul className="flex gap-8">

                        <li className="hover:no-underline hover:text-orange cursor-pointer">
                            <Link to="/">Home</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/courses">Courses</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/blogs">Blogs</Link></li>

                            <button type="button" ref={dropRef} onClick={() => setIsOpen((prev) => !prev)} className="relative select-none hover:text-orange flex hover:no-underline cursor-pointer">
                                Page
                                
                                {!isOpen ? (<IoMdArrowDropdown className='mt-2' />) : (<IoMdArrowDropup className='mt-2'/>)}
                            </button>
                            {
                                isOpen && (
                                    <div ref={menuRef} className="absolute py-1 mt-10 bg-white border right-[48.5%] shadow-lg z-10" role="none">
                                        <Link to="/faqs" onClick={() =>{setIsOpen(false)}} className=" block px-4 py-2 text-sm hover:text-orange">FAQ's</Link>
                                        <Link to="/contactUs" onClick={() =>{setIsOpen(false)}}  className="text-gray-700 block px-4 py-2 text-sm hover:text-orange">Contact Us</Link>
                                    </div>
                                )
                            }

                            

                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">LearnPress Add-On</a></li>
                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">Premium Theme</a></li> 
                    </ul>
                </div>  


            </nav>
            
        </div>
    )
}

export default Navbar