import axios from "axios";
import { useContext } from "react";
import { loginContext, urlContext } from "../App";

const DoctorsCard = (props) => {

  const {state} = useContext(loginContext);
  const url = useContext(urlContext);

  const data = {
      pid: state.user.id,
      did: props.data.user,
  };  

  const onDecline = () => {
    if (window.confirm('Are you sure you want to decline access?')) {
        // Save it!
        console.log('You took the access');
        axios
        .post(url+"/api/v1/accessverificationupdate/", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error.response.request._response));
        
      } else {
        // Do nothing!
        console.log("You didnt take access");
      }
      window.location.reload(false);
  }

  return (
    <>
        <tr className="col">
          <td>{props.data.user}</td>
          <td>{props.data.name}</td>
          <td>{props.data.orgId}</td>
          <td>{props.data.mobileNumber}</td>

          <td>
          <button
            className="btn-sm btn-danger"
            type="submit"
            onClick={onDecline}
          >
            Decline Access
          </button>
        </td>
        </tr>
    </>
  );
};

export default DoctorsCard;
