import React, { useState } from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useQueryClient } from "react-query";
import { ImSpinner2 } from "react-icons/im";
import { updateProgram } from "../../../../../utils/AxiosService";
import { ProgramSchema } from "../../validation/ProgramValidation";

function EditProgramForm({ program, handleClose, setShow }) {
  let queryClient = useQueryClient();
  const VALID = "form-control";
  const INVALID = "form-control is-invalid";
  const { _id, topic, description, start_date, end_date } = program;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      topic: topic,
      description: description,
      start_date: start_date,
      end_date: end_date,
    },
    validationSchema: ProgramSchema,
    onSubmit: (values) => {
      setLoading(true);
      updateProgram(_id, values)
        .then((response) => {
          queryClient.refetchQueries("programs-list");
          queryClient.refetchQueries("programByID");
          setLoading(false);
          setShow(false);
        })
        .catch((e) => {
          toast.error(e.response.data, {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
        });
    },
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <>
      <ToastContainer />
      <form className="px-4" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label className="form-label">Update Program</label>
          <input
            type="text"
            className={touched.topic && Boolean(errors.topic) ? INVALID : VALID}
            value={values.topic}
            name="topic"
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            {touched.topic && errors.topic}
          </div>
        </div>
        <div class="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className={
              touched.description && Boolean(errors.description)
                ? INVALID
                : VALID
            }
            rows="3"
            value={values.description}
            name="description"
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">
            {touched.description && errors.description}
          </div>
        </div>
        <div class="mb-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className={
              touched.start_date && Boolean(errors.end_date) ? INVALID : VALID
            }
            value={values.start_date}
            name="start_date"
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            {touched.start_date && errors.start_date}
          </div>
        </div>
        <div class="mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className={
              touched.end_date && Boolean(errors.score) ? INVALID : VALID
            }
            value={values.end_date}
            name="end_date"
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            {touched.end_date && errors.end_date}
          </div>
        </div>
        <div className="d-flex justify-content-end gap-2 py-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {loading ? (
              <span>
                <ImSpinner2 className="bx-spin me-2" />
                saving
              </span>
            ) : (
              " Save Changes"
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditProgramForm;
