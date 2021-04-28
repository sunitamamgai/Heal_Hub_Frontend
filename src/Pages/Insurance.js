import React, { useState, useEffect, useContext } from "react";
import InsuranceCard from "../components/InsuranceCard";
import InsuranceForm from "../Forms/InsuranceForm";
import axios from "axios";
import { Divider } from "@material-ui/core";
import { loginContext, urlContext } from "../App";

const Insurance = () => {
  const url = useContext(urlContext);
  const { state, dispatch } = useContext(loginContext);

  const [insurances, setInsurances] = useState([]);

  const [insuranceInfo, setInsuranceInfo] = useState({
    id: "",
    insuranceProvider: "",
    policyNumber: "",
    policyName: "",
    validTill: "",
    userId: "",
  });

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal((prevData) => !prevData);
    console.log(showModal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInsuranceInfo((prevData) => {
      return { ...prevData, [name]: value };
    });

    setInsuranceInfo((prevData)=> {
      return {...prevData, ["userId"]:state.user.token}
    })
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setInsuranceInfo((prevData) => {
      return { ...prevData, insuranceInfo };
    });
    setInsurances((prevData) => {
      return [...prevData, insuranceInfo];
    });

    //AXIOS POST Request
    axios
      .post(url+"/api/v1/InsuranceInfo/", insuranceInfo, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + state.token,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.response.request._response));

    refreshPage();
  };

  //AXIOS GET REQUEST
  useEffect(async function getData() {
    const response = await axios.get(
      url+`/api/v1/InsuranceInfo/`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + state.token,
        },
      }
    );
    console.log(response.data);
    setInsurances(response.data);
  }, [state.token]);

  //AXIOS DELETE REQUEST
  const deleteItem = async (id) => {
    await axios
      .delete(
        url+"/api/v1/InsuranceInfo/" + JSON.stringify(id),
        { data: { id: id }
       }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.request._response);
      });
    //console.log("delete:"+id);
    refreshPage();
    alert("Delete Successful");
  };

  //REFRESH PAGE
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <h1>Insurance Information</h1>
        <button onClick={toggleShowModal} className="btn btn-primary">
          Add
        </button>
        <InsuranceForm
          showModal={showModal}
          setShowModal={setShowModal}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          insuranceInfo={insuranceInfo}
        />

        <Divider />

        <table
          className="col table table-boardered"
          style={{
            maxHeight: 600,
            overflow: "auto",
            backgroundColor: "ActiveBorder",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Provider</th>
              <th scope="col">Valid Till</th>
              <th scope="col">Policy Name</th>
              <th scope="col">Policy Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {insurances.map((value, index) => {
              return (
                <InsuranceCard
                  data={value}
                  key={index}
                  id={value.id}
                  onSelect={deleteItem}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Insurance;
