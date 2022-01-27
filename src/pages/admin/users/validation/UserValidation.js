import * as yup from "yup";
// eslint-disable-next-line
let isNumberRegx = /\d/; // contain at least 1 number
// eslint-disable-next-line
let specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const UserSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .matches(specialCharacterRegx, "must contain at least 1 symbol")
        .matches(isNumberRegx, "must contain at least 1 number")
        .min(8),
    user_type: yup
        .string()
        .required("User type is required")
        .nullable()
});

export {
    UserSchema
};