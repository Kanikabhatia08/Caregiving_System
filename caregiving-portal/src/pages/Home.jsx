import React, { useState } from 'react'
import hero from '../images/hero.jpg'
import { categories, featured } from '../data'
import Categories from '../components/Home/Categories'
import Featured from '../components/Home/Featured'
import AddOn1 from '../images/Maskgroup.png'
import AddOn2 from '../images/Maskgroup2.jpg'
import AddOn3 from '../images/Maskgroup3.png'
import grow from '../images/Grow.jpg'
import tick from '../images/Tick.png'
import student from '../images/student.png'
import quotes from "../images/Quotes.png"
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className="flex">
        <div className="relative">
          <img src={hero} className="w-screen" alt="banner" />
        </div>

        <div className="absolute text-center  max-w-[30%] lg:max-w-[40%] left-[29%] top-[35%] lg:top-[48%] " >

          <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl animate-fadeLeft">
            MEDICAL SERVICES</h1>

          <p className="text-gray font-semibold text-xs py-3 md:py-6 xl:pt-9 md:text-lg lg:text-2xl">
            Compassionate Care, Trusted Support</p>
          <p className="text-gray text-xs p-3 md:py-6 xl:pb-9 md:text-sm lg:text-xl">
            Medical Services is your reliable partner in providing expert home healthcare, elderly assistance, and personalized caregiving solutions—ensuring comfort, dignity, and well-being for your loved ones.</p>

          <Link to="/bookings">
            <button className="text-white bg-orange rounded-full text-sm md:text-lg xl:text-xl px-3 md:py-4 md:px-4 animate-slideUp">
              Book an Appointment
            </button>
          </Link>

        </div>
      </section>

      <div className='max-w-[73%] flex-col flex gap-16 justify-center mx-auto my-14 '>

        {/* Top Categories */}
        <section className='my-10'>
          <div className='flex justify-between '>
            <div>
              <h2 className="lg:text-3xl">Services</h2>
              <p className="text-gray py-2">Explore our Services</p>
            </div>
            <div>
              <button className="rounded-full border-[#9D9D9D] border-2 px-4 py-3 hover:text-white hover:bg-orange hover:border-none">All Services</button>
            </div>
          </div>
          <Categories categories={categories} />
        </section>

        {/* Featured Courses */}
        <section>
          <div className="flex justify-between mx-auto ">
            <div>
              <h2 className="lg:text-3xl">Featured Doctors</h2>
              <p className="text-gray py-2">Get to know our specialized doctors</p>
            </div>
            <div>
              <button className="rounded-full border-[#9D9D9D] border-2 px-4 py-3 hover:text-white hover:bg-orange hover:border-none">
                Doctors</button>
            </div>
          </div>
          <Featured featured={featured} />

        </section>

        {/* add On 1 */}

        <div className="flex mx-auto justify-center pb-10">
          <div className="relative">
            <img src={AddOn1} alt='addOn1' />
          </div>
          <div className="absolute flex flex-col gap-3 max-w-[25%] left-[14%] my-[1%] mx-[3%]">
            <h3 className="text-gray text-xl">CARE THAT MATTERS</h3>
            <h1 className="hidden md:block text-3xl font-[590]">Expert Medical Assistance at Your Doorstep</h1>
            <p className="hidden xl:block text-[15px] text-gray">
              From routine check-ups to specialized care, our certified professionals deliver trusted medical services in the comfort of your home.
            </p>
            <button className="hidden w-[50%] lg:block rounded-full px-3 py-2 text-white bg-orange border-none">
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Grow SKill */}
        <div className="flex gap-30 mx-auto justify-between ">
          <div className="max-w-[50%]">
            <img src={grow} alt='medical-care' className='w-[80%]' />
          </div>
          <div className="max-w-[60%]">
            <h1 className="font-semibold lg:text-2xl 2xl:text-4xl">
              Comprehensive Healthcare Services You Can Trust
            </h1>
            <p className="py-3 text-gray 2xl:text-xl font-jost">
              We are committed to delivering compassionate and professional care that puts your well-being first—at home or in our partner facilities.
            </p>
            <ul className="font-jost 2xl:text-lg">
              <li className="flex gap-2 m-3"><img src={tick} alt='tick' />Certified Medical Professionals</li>
              <li className="flex gap-2 m-3"><img src={tick} alt='tick' />24/7 Emergency Assistance</li>
              <li className="flex gap-2 m-3"><img src={tick} alt='tick' />Home Nursing & Elder Care</li>
              <li className="flex gap-2 m-3"><img src={tick} alt='tick' />Affordable Health Plans</li>
            </ul>
            <button className="rounded-full mt-4 text-xl px-4 py-3 text-white bg-orange border-none">
              Explore Services
            </button>
          </div>
        </div>


        {/* Add on 2 */}
        <div className="flex mx-auto my-10 justify-center ">
          <div className="relative">
            <img src={AddOn2} alt='Healthcare Service' className='rounded-3xl' />
          </div>
          <div className="absolute max-w-[40%] text-center ml-20 lg:mt-8 2xl:mt-20">
            <h3 className="text-lg font-semibold">DELIVERING EXCEPTIONAL</h3>
            <h1 className="text-3xl font-[590] py-2">Medical & Caregiving Services</h1>
            <p className="text-gray lg:text-base 2xl:text-lg py-2">
              Advanced and personalized medical care at your doorstep. Because your health deserves the best—anytime, anywhere.
            </p>
            <button className="rounded-full lg:text-base 2xl:text-xl px-4 py-3 text-white bg-orange border-none">
              Explore Services
            </button>
          </div>
        </div>


        {/* Feedbacks */}
        <div className="mx-auto justify-center text-center">
          <div>
            <h1 className="text-3xl font-semibold py-2">Patient Testimonials</h1>
            <h3 className="text-gray font-jost text-xl">What Our Patients & Caregivers Say About Our Services</h3>
          </div>
          <div>
            <div className="row flex gap-4 mt-10 justify-center mx-auto text-left">
              <div className="col border-lightgray border-2 rounded-2xl p-8">
                <img src={quotes} alt='quotes' />
                <p className="text-lg py-3">The home nursing support was excellent. Their caregivers treated my father with great compassion and professionalism. I felt supported during a stressful time.</p>
                <h2 className="text-xl font-semibold">Priya Sharma</h2>
                <p className="text-gray">Family Member</p>
              </div>

              <div className="col border-lightgray border-2 rounded-2xl p-8">
                <img src={quotes} alt='quotes' />
                <p className="text-lg py-3">Booking a physiotherapist for my post-surgery recovery was seamless. I was impressed by their punctuality and the personalized care I received at home.</p>
                <h2 className="text-xl font-semibold">Rahul Mehta</h2>
                <p className="text-gray">Patient</p>
              </div>

              <div className="col border-lightgray border-2 rounded-2xl p-8">
                <img src={quotes} alt='quotes' />
                <p className="text-lg py-3">As a caregiver, working with this platform gives me confidence. I feel valued, and their matching system ensures I’m always with clients who need my expertise.</p>
                <h2 className="text-xl font-semibold">Sunita Verma</h2>
                <p className="text-gray">Certified Caregiver</p>
              </div>

              <div className="col border-lightgray border-2 rounded-2xl p-8">
                <img src={quotes} alt='quotes' />
                <p className="text-lg py-3">The online consultation feature helped me connect with a doctor late at night for my child’s sudden fever. It’s a real lifesaver for busy parents like me.</p>
                <h2 className="text-xl font-semibold">Anita Desai</h2>
                <p className="text-gray">Mother & Working Professional</p>
              </div>
            </div>
          </div>
        </div>


        {/* Add On 3 */}
        <div className="flex rounded-3xl mx-auto justify-center bg-gradient-to-r from-[#C7E6F9] to-[#E8D1FE]">
          <div className="relative">
            <img src={AddOn3} alt='Healthcare Team' />
          </div>
          <div className="absolute flex lg:mt-16 gap-44 lg:justify-between">
            <div className="flex">
              <img src={student} alt='Patient Icon' className="lg:w-[19%]" />
              <h1 className="lg:text-lg 2xl:text-2xl lg:mt-7 mx-3">Join Our Trusted Medical Network</h1>
            </div>
            <div className="lg:mt-4 gap-3 flex">
              <button className="rounded-full lg:text-sm 2xl:text-xl border-orange text-orange border-2 px-5 py-0
                          transform transition duration-500 hover:scale-110 hover:font-semibold">
                I'm a Patient
              </button>
              <button className="rounded-full lg:text-sm 2xl:text-xl px-5 py-0 text-white bg-orange border-none
                          transform transition duration-500 hover:scale-110 hover:font-semibold">
                I'm a Caregiver
              </button>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home;