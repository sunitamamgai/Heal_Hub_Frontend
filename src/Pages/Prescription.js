import React, { useState, useEffect, useContext } from "react";
import PrescriptionCard from "../components/PrescriptionCard";
// import logo from "../HealHubLogo.jpeg";
import axios from "axios";
import { loginContext, urlContext } from "../App";

const Prescription = () => {
  const { state } = useContext(loginContext);
  const url = useContext(urlContext);

  const [prescriptions, setPrescriptions] = useState([]);


  useEffect(
    () => {
      const getData = async () => {
        try {
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
        } catch (err) {
          console.log(err.response);
        }
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
      <div className="content-inner" id="invoice">
      <div className="row">
        <div className="col">
          <h1>Medical Prescription History</h1>
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={() => generatePDF()}>Generate PDF</button>
        </div>  
      </div>  
        <hr />
        <div className="">
          <table
            className="table table-boardered table-striped"
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
        
      </div>
    </>
  );
};

export default Prescription;
