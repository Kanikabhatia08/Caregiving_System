import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { caregiverSignupSchema } from '../../schema/index';

import { useFormik } from 'formik'

const initialValues = {
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    experience:'',
    specialization:'',
    role: 'caregiver',

};

export default function CaregiverSignup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: caregiverSignupSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm(); //resets the form after submit
        }
    });
    // console.log(Formik)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="border-[1px] order-1 my-[5%] border-lightgray rounded-2xl shadow-lg p-9">
                    <h1 className="text-3xl font-semibold pb-4">Register as Caregiver</h1>

                    <div className="flex-col">
                        <div>
                            <input
                                type="text"
                                placeholder="Name*"
                                name="name"
                                id='name'
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.name && touched.name ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.name}</p>
                                ) : null
                            }
                        </div>

                        <div>
                            <input
                                type="tel"
                                placeholder="Phone No.*"
                                name="phone"
                                id='phone'
                                value={values.phone}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.phone && touched.phone ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.phone}</p>
                                ) : null
                            }
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Address*"
                                name="address"
                                id='address'
                                value={values.address}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.address && touched.address ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.address}</p>
                                ) : null
                            }
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Experience (In years)*"
                                name="experience"
                                id='experience'
                                value={values.experience}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.experience && touched.experience ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.experience}</p>
                                ) : null
                            }
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Specialization*"
                                name="specialization"
                                id='specialization'
                                value={values.specialization}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.specialization && touched.specialization ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.specialization}</p>
                                ) : null
                            }
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email*"
                                name="email"
                                id='email'
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.email && touched.email ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.email}</p>
                                ) : null
                            }
                        </div>
                        <div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                id='password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Password*"
                                className="w-full my-3 border-[1px] relative border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            <span
                                className="absolute mt-5 right-[34%] cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                            {
                                errors.password && touched.password ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.password}</p>
                                ) : null
                            }
                        </div>

                        <div>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmPassword}
                                name="confirmPassword"
                                id="confirmPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Confirm Password*"
                                className="w-full my-3 border-[1px] border-lightgray relative z-0 rounded-lg p-2 text-lg max-w-full"
                            />
                            <span
                                className="absolute mt-5 right-[34%] cursor-pointer"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                            >
                                {showConfirmPassword ? (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                            {
                                errors.confirmPassword && touched.confirmPassword ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.confirmPassword}</p>
                                ) : null
                            }
                        </div>
                    </div>
                    <button type="submit" className="rounded-full py-2 text-xl my-4 text-white bg-orange border-none w-full">
                        Register
                    </button>
                    <p>
                        Have an account?{' '}
                        <button>
                            <Link to="/login" className="text-orange hover:underline">
                                Log In
                            </Link>
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
}



