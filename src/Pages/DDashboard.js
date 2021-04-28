import DProfileCard from "../components/DProfileCard";

const DDashboard = () => {
  return (
    <>
      <div className="container inner">
        <h1>Dashboard</h1>
        <hr />
        <div className="scrollable-container">
         <DProfileCard/>
        </div>
      </div>
    </>
  );
};

export default DDashboard;
