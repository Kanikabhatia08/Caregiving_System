import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import { bookingValidationSchema } from '../schema/index'
import axios from 'axios';



// Dummy service data for now; you can replace this with actual API call results
const dummyServices = [
    { name: 'Nursing', costPerDay: 500 },
    { name: 'Physiotherapy', costPerDay: 700 },
    { name: 'Elderly Care', costPerDay: 600 },
];

const initialValues = {
    serviceName: '',
    costPerDay: '',
    startDate: '',
    endDate: '',
    totalCost: '',
    paymentStatus: '',
};

export default function Bookings() {
    const [services, setServices] = useState([]);
    const [selectedServiceCost, setSelectedServiceCost] = useState(0);

    useEffect(() => {
        // Fetch services from backend here
        // For now using dummy data
        setServices(dummyServices);
    }, []);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: bookingValidationSchema,
        onSubmit: async (values, action) => {
            console.log(values);
            try {
                await axios.post('http://localhost:5000/api/bookings', values);
                alert('Booking created successfully!');
            } catch (err) {
                console.error(err);
                alert('Failed to create booking');
            }
            action.resetForm();
        }
    });

    // Calculate total cost
    useEffect(() => {
        if (values.startDate && values.endDate && selectedServiceCost) {
            const start = new Date(values.startDate);
            const end = new Date(values.endDate);
            const diffTime = end.getTime() - start.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include the starting day
            if (diffDays > 0) {
                setFieldValue('totalCost', selectedServiceCost * diffDays);
            } else {
                setFieldValue('totalCost', 0);
            }
        }
    }, [values.startDate, values.endDate, selectedServiceCost, setFieldValue]);

    const handleServiceChange = (e) => {
        const selectedService = services.find(service => service.name === e.target.value);
        setSelectedServiceCost(selectedService ? selectedService.costPerDay : 0);
        setFieldValue('serviceName', e.target.value);
        setFieldValue('costPerDay', selectedService ? selectedService.costPerDay : '');
    };

    return (
        <div className='w-full mx-auto'>
            <form onSubmit={handleSubmit} className=" w-[50%] mx-auto">
                <div className="border-[1px] order-1 my-[5%] border-lightgray rounded-2xl shadow-lg p-9">
                    <h1 className="text-3xl font-semibold pb-4">Book a Service</h1>
                    <div className="flex-col">

                        <div>
                            <select
                                name="serviceName"
                                id="serviceName"
                                value={values.serviceName}
                                onChange={handleServiceChange}
                                onBlur={handleBlur}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            >
                                <option value="">Select Service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service.name}>
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                            {
                                errors.serviceName && touched.serviceName ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.serviceName}</p>
                                ) : null
                            }
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Cost Per Day"
                                name="costPerDay"
                                id="costPerDay"
                                value={values.costPerDay}
                                readOnly
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <input
                                type="date"
                                name="startDate"
                                id="startDate"
                                value={values.startDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.startDate && touched.startDate ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.startDate}</p>
                                ) : null
                            }
                        </div>

                        <div>
                            <input
                                type="date"
                                name="endDate"
                                id="endDate"
                                value={values.endDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            />
                            {
                                errors.endDate && touched.endDate ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.endDate}</p>
                                ) : null
                            }
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Total Cost"
                                name="totalCost"
                                id="totalCost"
                                value={values.totalCost}
                                readOnly
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <select
                                name="paymentStatus"
                                id="paymentStatus"
                                value={values.paymentStatus}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full my-3 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                            >
                                <option value="">Select Payment Status</option>
                                <option value="processing">Processing</option>
                                <option value="incomplete">Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                            {
                                errors.paymentStatus && touched.paymentStatus ? (
                                    <p className='text-orange text-xs font-semibold'>{errors.paymentStatus}</p>
                                ) : null
                            }
                        </div>

                    </div>

                    <button type="submit" className="rounded-full py-2 text-xl my-4 text-white bg-orange border-none w-full">
                        Book Now
                    </button>

                    <p>
                        Want to see your bookings?{' '}
                        <button>
                            <Link to="/bookings" className="text-orange hover:underline">
                                View Bookings
                            </Link>
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
}
