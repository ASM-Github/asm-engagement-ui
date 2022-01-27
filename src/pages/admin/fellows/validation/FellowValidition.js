import * as yup from "yup";

// eslint-disable-next-line
let isNumberRegx = /\d/; // contain at least 1 number
// eslint-disable-next-line
let specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
// eslint-disable-next-line
let uppercaseRegx = /[A-Z]/

export const FellowSchema = yup.object().shape({
    email: yup
        .string()
        .email("please enter a valid email")
        .required("email is required"),
    password: yup
        .string()
        .required()
        .matches(specialCharacterRegx, "must contain at least 1 symbol")
        .matches(uppercaseRegx, "must contain at least uppercase")
        .matches(isNumberRegx, "must contain at least 1 number")
        .min(8),
    name: yup
        .string()
        .required("name is required"),
    nric1: yup
        .string()
        .required("nric is required")
        .length(6),
    nric2: yup
        .string()
        .required("nric is required")
        .length(2),
    nric3: yup
        .string()
        .required("nric is required")
        .length(4),
    phone: yup
        .string()
        .required("phone number is required")
        .min(10, "minimun 10 charaters")
        .max(11, "Minimun 10 charaters"),
    address: yup
        .string()
        .required("address is required")
        .max(255, "Not longer than 255 charaters"),
    discipline: yup
        .string()
        .required("discipline is required"),
    expertise: yup
        .string()
        .required("expertise is required"),
    role: yup
        .string()
        .required("role is required")
        .nullable()

});