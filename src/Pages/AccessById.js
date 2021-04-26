import { useContext, useEffect, useState } from "react";
import { loginContext } from "../App";
import axios from "axios";
import RequestCard from "../components/RequestCard";

const AccessById = () => {
  const { state, dispatch } = useContext(loginContext);

  const [id, setID] = useState({
    pid: "",
    did: state.user.id,
  });

  const [names, setNames] = useState([]);

  const [user, setUser] = useState();

  const [otp, setOtp] = useState({
      otp:"",
      pid:"",
      did:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setID((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleOTPInputChange = (event) => {
      const {name, value} = event.target;

      setOtp((prevData)=> {
          return {...prevData, [name]:value}
      })
      setOtp((prevData)=> {
        return {...prevData, ["pid"]:localStorage.getItem('pid'), ["did"]: state.user.id}
    })
  }

  const handleOTPSubmit = async (event) => {
      if(event) {
          event.preventDefault()
      }
      
      let res = await axios
      .post("http://127.0.0.1:8000/api/v1/otpaccessverification/", otp, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);

        if(response.status === 200) {
            alert(response.data);
        } else if (response.status === 201){
            alert("OTP verified");
        }
        
      })
      .catch((error) => {
        console.log(error.response);
        alert("No User Available for this OTP");
      });

      console.log(otp);

  }

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    let res = names
      .map((name) => name)
      .filter((n) => {
        return n.id == id.pid;
      });
    setUser(res);
    console.log(user);
  };

  useEffect(async () => {
    let res = await axios.get("http://127.0.0.1:8000/api/auth/userlist");
    //console.log(res.data);
    let temp = res.data
      .map((item) => item)
      .filter((mp) => {
        return mp.is_MP === false;
      });
    setNames(temp);
    
  }, []);

  return (
    <>
      <div className="container inner">
        <h3>Access By Id </h3>
        <div className="container2 inner">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Patient ID/ User ID</label>
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="Patient ID"
                    name="pid"
                    value={id.pid}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Search Patient
                </button>
              </div>
            </form>
            <form onSubmit={handleOTPSubmit}>
              <div className="form-row row">
                <div className="form-group col-md-4">
                  <label>OTP</label>
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="One Time Password"
                    name="otp"
                    value={otp.otp}
                    onChange={handleOTPInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
          <div className="">
            {user ? (
              user.map((u) => (
                <RequestCard key={u.id} value={u} did={state.user.id} />
              ))
            ) : (
              <div className="card2">
                <p>No Data</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessById;
