import * as Yup from "yup";
import YupPassword from 'yup-password';
YupPassword(Yup);

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(25, "Name can't be longer than 25 characters")
        .required("Please enter your name!"),

    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Please enter your phone number!"),

    address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .required("Please enter your address!"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email!"),

    password: Yup.string()
        .min(8, "Password should be more than 8 characters")
        .minLowercase(1, 'At least 1 lowercase letter required!')
        .minUppercase(1, 'At least 1 uppercase letter required!')
        .minNumbers(1, 'At least 1 number required!')
        .minSymbols(1, 'At least 1 special character required!')
        .required("Please enter your password!"),

    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password'), null], "Passwords must match!"),

    role: Yup.string()
        .oneOf(['customer'], 'Invalid role')
        .required(),
});


export const caregiverSignupSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name can't exceed 50 characters")
        .required("Name is required"),

    phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),

    address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .required("Address is required"),

    experience: Yup.number()
        .typeError("Experience must be a number")
        .min(0, "Experience can't be negative")
        .max(60, "Experience can't be more than 60 years")
        .required("Experience is required"),

    specialization: Yup.string()
        .min(2, "Specialization must be at least 2 characters")
        .required("Specialization is required"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Please confirm your password"),

    role: Yup.string()
        .oneOf(["caregiver"], "Role must be caregiver")
        .required("Role is required"),
});

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

    role: Yup.string()
        .oneOf(['customer', 'caregiver'], 'Role must be selected')
        .required('Role is required'),
});



export const bookingValidationSchema = Yup.object({
    serviceName: Yup.string()
        .required('Please select a service'),

    costPerDay: Yup.number()
        .required('Cost per day is required')
        .typeError('Cost per day must be a number'),

    startDate: Yup.date()
        .required('Please select a start date')
        .typeError('Start date is required'),

    endDate: Yup.date()
        .required('Please select an end date')
        .typeError('End date is required')
        .min(
            Yup.ref('startDate'),
            'End date cannot be before start date'
        ),

    totalCost: Yup.number()
        .required('Total cost is required')
        .typeError('Total cost must be a number'),

    paymentStatus: Yup.string()
        .required('Please select payment status'),
});
