import React, { useState, useContext }from "react";
import { loginContext } from "../App"; 



const Dashboard = () => {
    const { state, dispatch } = useContext(loginContext);

    const [userName, setUserName] = useState("Shalom T Alexander");
    return (
        <>
            <h1>Hello! {state.user.username}</h1>
            <p>No current activities</p>
        </>
    );
}

export default Dashboard;