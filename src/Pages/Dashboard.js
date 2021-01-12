import React, { useState }from "react";



const Dashboard = () => {
    const [userName, setUserName] = useState("Shalom T Alexander");
    return (
        <>
            <h1>Hello! {userName}</h1>
            <p>No current activities</p>
        </>
    );
}

export default Dashboard;