import React from "react";

const InsuranceCard = (props) => {
  const {
    insuranceProvider,
    policyNumber,
    policyName,
    validTill,
  } = props.data;

  return (
    <>
      <tr>
        <td>{insuranceProvider}</td>
        <td>{validTill}</td>
        <td>{policyName}</td>
        <td>{policyNumber}</td>
      </tr>
    </>
  );
};

export default InsuranceCard;
