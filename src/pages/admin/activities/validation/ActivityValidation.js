import * as yup from "yup";

export const ActivitySchema = yup.object().shape({
    activity_type: yup
        .string()
        .required("Name of activity is required"),
    score: yup
        .number("Score must be a number between 1 to 24")
        .integer("Score must be a number between 1 to 24")
        .required("Score is required")
        .min(1)
        .max(5)
        .positive("Enter a valid score"),
    description: yup
        .string()
        .required("Description is required")
        .max(225, "No longer than 255 words")

});