import * as yup from "yup";

export const ProgramSchema = yup.object().shape({
    topic: yup
        .string()
        .required("topic is required"),
    start_date: yup
        .string()
        .required("date is required"),
    end_date: yup
        .string()
        .required("date is required"),
    description: yup
        .string()
        .required("description is required")
        .max(250)
        .nullable()

});