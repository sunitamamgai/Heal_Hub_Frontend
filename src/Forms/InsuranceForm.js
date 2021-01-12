import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const InsuranceForm = ({
  showModal,
  setShowModal,
  handleSubmit,
  handleInputChange,
  insuranceInfo,
}) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={setShowModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Insurance Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row input_field">
              <label>Insurance Provider</label>
              <input
                className="form-control "
                type="text"
                name="insuranceProvider"
                onChange={handleInputChange}
                value={insuranceInfo.insuranceProvider}
                autoComplete="off"
              />
            </div>
            <div className="row input_field">
              <label>Policy Number</label>
              <input
                className="form-control"
                type="text"
                name="policyNumber"
                onChange={handleInputChange}
                value={insuranceInfo.policyNumber}
                autoComplete="off"
              />
            </div>
            <div className="row input_field">
              <label>Policy Name</label>
              <input
                className="form-control"
                type="text"
                name="policyName"
                onChange={handleInputChange}
                value={insuranceInfo.policyName}
                autoComplete="off"
              />
            </div>
            <div className="row input_field">
              <label>validity</label>
              <input
                className="form-control"
                type="date"
                name="validTill"
                onChange={handleInputChange}
                value={insuranceInfo.validTill}
                autoComplete="off"
              />
            </div>
            <div className="row input_field">
              <label>User Id</label>
              <input
                className="form-control"
                type="text"
                name="userId"
                onChange={handleInputChange}
                value={insuranceInfo.userId}
                autoComplete="off"
              />
            </div>
            <button className="btn-sm btn-primary" type="submit">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InsuranceForm;
