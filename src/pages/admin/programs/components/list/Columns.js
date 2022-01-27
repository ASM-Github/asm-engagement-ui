import React, { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import EditProgramModal from "../edit-program/Modal";
import DeleteConfirmation from "../delete-program/ModalDelete";
import "../../../../../assets/css/alpha-icons.css";

export const COLUMNS = [
  {
    Header: "Topic",
    accessor: "topic",
    Cell: ({ value }) => {
      const FirstLetter = value.slice(0, 1);
      return (
        <div className="d-flex align-items-center">
          <div className="asm-alpha-icons-2 fw-bolder text-black">
            {FirstLetter}
          </div>
          <div>
            <h6 className="text-black fw-bolder mb-0 ms-4">{value}</h6>
          </div>
        </div>
      );
    },
  },
  {
    Header: "Users",
    accessor: "users.length",
    Cell: ({ value }) => {
      return <span className="badge rounded-pill bg-primary">{value}</span>;
    },
  },
  {
    Header: "Start Date",
    accessor: "start_date",
    Cell: ({ value }) => {
      return format(new Date(value), "PP");
    },
  },
  {
    Header: "End Date",
    accessor: "end_date",
    Cell: ({ value }) => {
      return format(new Date(value), "PP");
    },
  },
  {
    Header: "person in charge",
    accessor: "pic.email",
  },
  {
    Header: "Action",
    accessor: "_id",
    disableSortBy: true,
    Cell: ({ value }) => {
      const [show, setShow] = useState(false);
      const [showDelete, setShowDelete] = useState(false);
      let navigate = useNavigate();
      return (
        <>
          <EditProgramModal id={value} show={show} setShow={setShow} />
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setShow(true)}
          >
            <BsPencilSquare />
          </button>

          <DeleteConfirmation
            show={showDelete}
            setShow={setShowDelete}
            id={value}
          />
          <button
            type="button"
            className="btn btn-light text-danger me-2"
            onClick={() => setShowDelete(true)}
          >
            <MdCancel />
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/admin/program/view/${value}`)}
          >
            <AiOutlineInfoCircle className="text-primary" />
          </button>
        </>
      );
    },
  },
];
