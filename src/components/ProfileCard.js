import React from "react";


const ProfileCard = (props) => {
    const {firstName, lastName} = props.data;
    return (
        <>
        <div className="card">
            <h1>Profile Information</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
        </div>    
        </>
    );
};

export default ProfileCard;
