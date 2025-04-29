import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../images/login.jpg';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../schema/index'; // Import Yup schema
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';

const initialValues = {
  email: '',
  password: '',
  role: '',
};

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, action) => {
      try {
          const res = await axios.post('http://localhost:5000/login', values);
          console.log('Login Success:', res.data);
          alert('Logged in successfully!');
          action.resetForm();
      } catch (error) {
          console.error('Login Error:', error);
          alert('Error during Login');
      }
  }
  });

  return (
    <div>
      <section className='flex justify-center mx-auto max-w-[80%]'>
        <div className="sm:hidden lg:block lg:max-w-[50%] xl:max-w-[50%] sm:my-[20%] lg:my-0">
          <img src={loginImg} alt='login' />
        </div>

        <form onSubmit={handleSubmit}>
          <div className='border-[1px] border-lightgray rounded-2xl mt-10 p-9 shadow-lg'>
            <h1 className="text-3xl font-semibold">Login</h1>

            <div>
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Email Id*"
                  className="w-full my-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                />
                {errors.email && touched.email && (
                  <p className='text-orange text-xs font-semibold'>{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Password* "
                  className="w-full mb-4 border-[1px] border-lightgray rounded-lg p-2 relative z-0 text-lg max-w-full"
                />
                <span
                  className='absolute mt-[9px] cursor-pointer z-10 right-[1%]'
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
                {errors.password && touched.password && (
                  <p className='text-orange text-xs font-semibold'>{errors.password}</p>
                )}
              </div>

              {/* Role Field */}
              <div className="flex items-center space-x-4 mb-4">
                <label className="text-lg">Select Role:</label>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="customer"
                    name="role"
                    value="customer"
                    checked={values.role === "customer"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                  />
                  <label htmlFor="customer" className="text-lg">Customer</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="caregiver"
                    name="role"
                    value="caregiver"
                    checked={values.role === "caregiver"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                  />
                  <label htmlFor="caregiver" className="text-lg">Caregiver</label>
                </div>
              </div>
              {errors.role && touched.role && (
                <p className='text-orange text-xs font-semibold'>{errors.role}</p>
              )}
            </div>

            {/* Login Button */}
            <button type="submit" className="button rounded-full py-2 text-center text-xl my-4 text-white bg-orange border-none w-full">
              Login
            </button>

            {/* Signup link */}
            <p>Don't have an account? 
              <button>
                <Link to="/signup" className='text-orange hover:underline'> Sign Up</Link>
              </button>
            </p>
          </div>
        </form>

      </section>
    </div>
  );
}

export default Login;
