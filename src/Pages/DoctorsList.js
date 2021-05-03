import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { loginContext, urlContext } from "../App";
import DoctorsCard from "../components/DoctorsCard";

const DoctorsList = () => {
  const { state } = useContext(loginContext);
  const url = useContext(urlContext);

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + `/api/v1/accessverification/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + state.token,
          },
        });
        setDoctors(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, [url, state.token]);
  
  return (
    <>
      <div className="content-inner">
        <h1>Doctors List</h1>
        <p>
          <strong>Note: </strong>Here you can see the list of doctors who has
          access to your data.
        </p>
        <hr />
        <div className="">
          <table
            className="table table-boardered table-striped"
            id="invoice-table"
          >
            <thead className="thead-dark">
              <tr bgcolor="">
                <th scope="col">Doctors ID</th>
                <th scope="col">Doctor's Name</th>
                <th scope="col">Doctor's Organization ID</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Take Access</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((value, index) => {
                return <DoctorsCard data={value} key={index} id={value.id} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorsList;
