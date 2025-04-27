import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";

import faq from '../images/faq.png'

function FAQs() {
    const faqs = [
        {
            question: 'What are medical services and how do they benefit patients?',
            answer: 'Medical services include a wide range of healthcare solutions provided by professionals to maintain and improve the health of individuals. These services cover preventive care, diagnostic tests, treatments, and rehabilitation, ensuring that patients receive comprehensive care tailored to their needs.'
        },
        {
            question: 'What are the benefits of using home healthcare services?',
            answer: 'Home healthcare services offer the convenience and comfort of receiving medical care at home. These services include nursing care, physical therapy, and assistance with daily activities, all delivered by trained professionals to help patients recover in a familiar, supportive environment.'
        },
        {
            question: 'Why should I choose medical services for my loved ones?',
            answer: "Choosing professional medical services ensures your loved ones receive the highest quality care. Whether it's managing chronic conditions, recovering from surgery, or receiving elder care, trained professionals provide personalized care that improves health outcomes and enhances quality of life."
        },
        {
            question: 'What is the role of medical assessments in patient care?',
            answer: 'Medical assessments are crucial in diagnosing health conditions and tracking progress. Through physical exams, tests, and consultations, healthcare providers can evaluate a patient’s health, determine the appropriate treatment plan, and monitor recovery. Regular assessments help in early detection of potential health issues.'
        },
        {
            question: 'What is personalized healthcare?',
            answer: 'Personalized healthcare involves creating customized treatment plans based on an individual’s unique health profile, preferences, and needs. This approach ensures that patients receive the most effective treatments and care, improving health outcomes and patient satisfaction.'
        },
        {
            question: 'Why is telemedicine important in modern healthcare?',
            answer: 'Telemedicine allows patients to consult healthcare professionals remotely, making medical advice and treatment more accessible, especially for those in rural areas or with mobility issues. It enhances convenience, reduces wait times, and provides quick access to specialists, improving overall healthcare delivery.'
        }        
    ];

    const [activeIndex, setActiveIndex] = useState(null)
    
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };
    
    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className='max-w-[73%] mx-auto mt-10'>
            <h1 className='text-4xl font-semibold'>FAQ's</h1>
            <div className="grid grid-cols-2 gap-4 my-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="relative hover:text-orange hover:mb-32 "
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='flex relative'>
                            <h2 className="cursor-pointer bg-footer w-full font-semibold rounded-md p-3 ">{faq.question}</h2>
                            <p><FaAngleDown className='absolute right-[2%] mt-3 text-gray'/></p>
                        </div>
                    {activeIndex === index && (
                        <div className="absolute duration-300 top-full left-0 bg-footer text-gray px-3 py-2">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            <img src={faq} alt='faqs' />
        </div>
    )
}

export default FAQs