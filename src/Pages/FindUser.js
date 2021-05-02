import React, { useEffect, useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import UserCard from "../components/UserCard";
import axios from "axios";
import { urlContext } from "../App";

const FindUser = () => {
  const url = useContext(urlContext);
  const [search, setSearch] = useState("");
  const [names, setNames] = useState([]);

  const filteredNames = names.filter((name) => {
    return name.username.indexOf(search) !== -1;
  });

  

  useEffect(() => {
    const fetchData = async ()=> {
      let res = await axios.get(url+"/api/auth/userlist");
      //console.log(res.data);
      let temp = res.data.map((item) => item).filter((mp) => {
          return mp.is_MP === false;
      });
      setNames(temp);
    }
    fetchData();
  },[url]);

  return (
    <>
      <div className="content-inner">
        <div className="row">
          <div className="col">
            <h1>Registered Patient Detail</h1>
          </div>
          <div className="col-6">
              <div className="row align-centre">
                <div className="form-group col-md-7">
                  <input
                    type="text"
                    className="form-control"
                    id="myInput"
                    placeholder="Enter username to search"
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
        </div>  
        <hr/>
        <div className="profile-inner">
          <div className="user-container">
            {filteredNames.map((name, index) => (
              <UserCard value={name} key={index}/>
            ))}
          </div>
        </div>
      </div>  
    </>
  );
};

export default FindUser;
