import React from "react";

const PrescriptionCard = (props) => {
  const {
    id,
    addedBy,
    prescriberId,
    hospitalOrClinic,
    doctorName,
    prescriptionDate,
    contactNumber,
    address,
    symptoms,
    medicines,
    notes,
    prescriptionAttachment,
    userId,
  } = props.data;

  //   const handleDelete = () => {
  //     props.onSelect(props.id);
  //   };

  return (
    <>
        <tr className="col">
          <td>{prescriberId}</td>
          <td>{hospitalOrClinic}</td>
          <td>{doctorName}</td>
          <td>{prescriptionDate}</td>
          <td>{contactNumber}</td>
          <td>{address}</td>
          <td>{symptoms}</td>
          <td>{medicines}</td>
          <td>{notes}</td>
          {/* <td>
          <button
            className="btn-sm btn-danger"
            type="submit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td> */}
        </tr>
    </>
  );
};

export default PrescriptionCard;
