import React, { useState, useEffect, useContext } from "react";
import PrescriptionCard from "../components/PrescriptionCard";
import logo from "../HealHubLogo.jpeg";
import axios from "axios";
import { loginContext } from "../App";

const Prescription = () => {
  const { state, dispatch } = useContext(loginContext);

  const [prescriptions, setPrescriptions] = useState([
  ]);

  // const [prescription, setPrescription] = useState({
  //     addedBy:"",
  //     prescriberId:"",
  //     hospitalOrClinic:"",
  //     doctorName:"",
  //     prescriptionDate:"",
  //     contactNumber:"",
  //     address:"",
  //     symptoms:"",
  //     medicines:"",
  //     notes:"",
  //     prescriptionAttachment:"",
  //     userId:"",
  // });

  useEffect(async function getData() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/PrescriptionInfoOfSpecificUser/`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Token "+state.token
        }
      }
    );
    // console.log(state.user);
    // console.log(state.user.username);
    // console.log(state.user.email);

    setPrescriptions(response.data);
  }, [state.token]);

  const generatePDF = () => {
    window.print();
  };


  return (
    <>
      <div className="container" id="invoice">
        <div className="invoice-title" id="invoice-header">
          <div className="row">
            <div className="col-xs-12">
              <img src={logo} alt="HEALHUB" height="100" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-12">
              <h2 className="justify-content-center">Medical History</h2>
            </div>
          </div>
          <div className="row">
            <address>
              <strong>Name: { state.user.username }</strong>
              <br />
              Email Id: {state.user.email}
              {/* <br />
              Address: 115, GF-3, Gyan Khand-2
              <br />
              Indirapuram, GZB, U.P
              <br />
              Contact: 9873738859 */}
              <br />
              Date: {Date().toLocaleString()}
            </address>
          </div>
        </div>
        <hr />
        <table
          className="col-8 table table-boardered"
          style={{
            maxHeight: 600,
            
            overflow: "auto",
            backgroundColor: "ActiveBorder",
          }}
          id="invoice-table"
        >
          <thead>
            <tr bgcolor="yellow">
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
        <button onClick={() => generatePDF()}>Generate PDF</button>
      </div>
      
    </>
  );
};

export default Prescription;
