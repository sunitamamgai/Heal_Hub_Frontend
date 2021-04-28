import React from "react";

const UserCard = (props) => {
    const {id, username, email } = props.value;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            Username : {username}
            <br></br>
            UserID : {id}
            <br></br>
            EmailID : {email}
            </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
