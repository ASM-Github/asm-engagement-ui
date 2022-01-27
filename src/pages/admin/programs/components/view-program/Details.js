import React from "react";
import { Card } from "react-bootstrap";
import { dateFormat } from "../../../../../utils/dateFormat";

function Details({ title, details }) {
  const { topic, description, start_date, end_date, pic, users } = details;

  return (
    <Card className="border-0 px-5 py-3">
      <div className="d-flex justify-content-center">
        <div className="asm-alpha-icons-4">{topic.slice(0, 1)}</div>
      </div>
      <h5 className="text-center mt-3">{topic}</h5>
      <div className="text-lg-center mt-1 mb-3">
        <span className="badge bg-primary">{pic.email}</span>
      </div>

      <div className="fw-bolder mt-3">Description</div>
      <div className="text-gray-600">{description}</div>

      <div className="fw-bolder mt-3">Start Date</div>
      <div className="text-gray-600">{dateFormat(start_date, "PP")}</div>

      <div className="fw-bolder mt-3">End Date</div>
      <div className="text-gray-600">{dateFormat(end_date, "PP")}</div>

      <div className="border border-gray-300 border-dashed rounded py-1 px-2 mt-3 mb-2">
        <div className="fs-3 fw-bolder text-gray-700">
          <span className="w-75px">{users.length}</span>
        </div>
        <div className="fw-bold text-muted">Total</div>
      </div>
    </Card>
  );
}

export default Details;
