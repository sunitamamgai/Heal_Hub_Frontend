import React from "react";

const InsuranceCard = (props) => {
  const {
    id,
    insuranceProvider,
    policyNumber,
    policyName,
    validTill,
    userId,
  } = props.data;

  const handleDelete = () => {
    props.onSelect(props.id);
  };

  return (
    <>
      <tr>
        <td>{insuranceProvider}</td>
        <td>{validTill}</td>
        <td>{policyName}</td>
        <td>
          <button
            className="btn-sm btn-danger"
            type="submit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default InsuranceCard;
