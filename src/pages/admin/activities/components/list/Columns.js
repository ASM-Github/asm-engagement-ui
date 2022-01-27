import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import EditActivityModal from "../edit-activity/Modal";
import DeleteConfirmation from "../delete-activity/ModalDelete";

export const COLUMNS = [
  {
    Header: "Activity Type",
    accessor: "activity_type",
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
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Score per activity",
    accessor: "score",
    Cell: ({ value }) => {
      return <span className="badge bg-primary">{value}</span>;
    },
  },
  {
    Header: "Action",
    accessor: "_id",
    Cell: ({ value }) => {
      const [show, setShow] = useState(false);
      const [showDelete, setShowDelete] = useState(false);
      return (
        <>
          <EditActivityModal id={value} show={show} setShow={setShow} />

          <button
            type="button"
            className="btn btn-success me-2"
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
        </>
      );
    },
  },
];
