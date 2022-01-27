import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DeleteConfirmation from "../delete-fellow/ModalDelete";
import { MdCancel } from "react-icons/md";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ value }) => {
      const firstLetter = value.slice(0, 1);
      return (
        <div className="d-flex align-items-center">
          <div className="asm-alpha-icons-2 fw-bolder text-black">
            {firstLetter}
          </div>
          <div>
            <h6 className="text-black fw-bolder mb-0 ms-4">{value}</h6>
          </div>
        </div>
      );
    },
  },
  {
    Header: "NRIC",
    accessor: "nric",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Role",
    accessor: "role",
    Cell: ({ value }) => {
      if (value === "councilmember") {
        return <span className="badge border text-danger">Council Member</span>;
      } else if (value === "president") {
        return <span className="badge border text-primary">{value}</span>;
      } else {
        return <span className="badge border text-black">{value}</span>;
      }
    },
  },
  {
    Header: "Program",
    accessor: "programs.length",
    Cell: ({ value }) => {
      return (
        <span className={value > 0 ? "badge bg-black" : "badge bg-danger"}>
          {value}
        </span>
      );
    },
  },
  {
    Header: "Action",
    accessor: "_id",
    disableSortBy: true,
    Cell: ({ value }) => {
      let navigate = useNavigate();
      const PATHNAME = "/admin/fellow/manage-fellows/view";
      const [showDelete, setShowDelete] = useState(false);

      return (
        <>
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
            onClick={() => navigate(`${PATHNAME}/${value}`)}
          >
            <AiOutlineInfoCircle className="text-primary" />
          </button>
        </>
      );
    },
  },
];
