import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import UserCard from "../components/UserCard";
import axios from "axios";

const FindUser = () => {
  const [search, setSearch] = useState("");
  const [names, setNames] = useState([]);

  const filteredNames = names.filter((name) => {
    return name.username.indexOf(search) !== -1;
  });

  useEffect(async () => {
    let res = await axios.get("http://127.0.0.1:8000/api/auth/userlist");
    //console.log(res.data);
    let temp = res.data.map((item) => item).filter((mp) => {
        return mp.is_MP === false;
    });
    setNames(temp);
  },[]);

  return (
    <>
      <h1>Find Patients Detail</h1>
      <strong>Use this tool to find out the details of all Patients</strong>
      <hr />
      <div className="searchinner">
        <div className="searchrow row">
          <div className="form-group col-md-9">
            <input
              type="text"
              className="form-control"
              id="myInput"
              placeholder="Search User"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <button className="btn btn-primary">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Usercontainer">
          {filteredNames.map((name) => (
            <UserCard value={name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindUser;
