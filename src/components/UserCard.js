
const UserCard = (props) => {
    const {id, username, email } = props.value;
  return (
    <>
      <div className="card">
        <div className="">
        <div className="row">
          <div className="col">
            <p className="card-text">
              Username : {username}
              <br></br>
              UserID : {id}
              <br></br>
              EmailID : {email}
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
