import React, { useState, useEffect, useContext } from "react";
import PrescriptionCard from "../components/PrescriptionCard";
import logo from "../HealHubLogo.jpeg";
import axios from "axios";
import { loginContext, urlContext } from "../App";

const Prescription = () => {
  const { state } = useContext(loginContext);
  const url = useContext(urlContext);

  const [prescriptions, setPrescriptions] = useState([]);


  useEffect(
    () => {
      const getData = async () => {
        const response = await axios.get(
          url+`/api/v1/PrescriptionInfoOfSpecificUser/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token " + state.token,
            },
          }
        );
        setPrescriptions(response.data);
      }

      getData();
    },
    [state.token, url]
  );

  const generatePDF = () => {
    window.print();
  };

  return (
    <>
      <div className="container inner" id="invoice">
        <div className="table" id="invoice-header">
          <div className="row">
            <div className="col">
              <img src={logo} alt="HEALHUB" height="100" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <h3>Medical History</h3>
            </div>
          </div>
          <div className="row align-centre">
          <div className="row dark-card">
            <address>
              <strong>Name: {state.user.username}</strong>
              <br />
              <strong>Email Id: {state.user.email}</strong>
              <br />
              Date: {Date().toLocaleString()}
            </address>
          </div>
          </div>
        </div>
        <hr />
        <div className="prescription-scrollable-container">
          <table
            className="col-8 table table-sm table-boardered table-striped inner"
            style={{
              maxHeight: 600,

              overflow: "auto",
              backgroundColor: "ActiveBorder",
            }}
            id="invoice-table"
          >
            <thead className="thead-dark">
              <tr bgcolor="">
                <th scope="col">Prescriber Id</th>
                <th scope="col">Hospital or Clinic</th>
                <th scope="col">Doctor's Name</th>
                <th scope="col">Date</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Address</th>
                <th scope="col">Symptoms</th>
                <th scope="col">Medicines</th>
                <th scope="col">Notes</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((value, index) => {
                return (
                  <PrescriptionCard
                    data={value}
                    key={index}
                    id={value.id}
                    //onSelect={deleteItem}
                  />
                );
              })} 
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary" onClick={() => generatePDF()}>Generate PDF</button>
      </div>
    </>
  );
};

export default Prescription;
