import home1 from "../assets/Images/home-1.jpg";
import support from "../assets/Images/support.jpg";
import security from "../assets/Images/security.png";
import { Link } from "react-router-dom";
import logo from "../assets/Images/healhub-logo.png";

const HomeScreen = () => {
    return (
        <>
            <div className="row sec-home-body-container">   
                <div className="home-content-inner align-centre">
                    <div className="row">
                        <img className="home-1-img" src={home1} alt="#" />
                        <div className="col">
                            <img src={logo} alt="HEALHUB" height="200px" />
                            <p className="bold-900" >HealHub<span className="icon-size-sm material-icons">health_and_safety</span></p>
                            <p className="font-medium">An Electronic Health Record Management System. A secure place to store your Health Records.</p>
                            <Link to="/register"><button className="btn-1">Register</button></Link>    
                        </div>
                    </div>     
                    
                </div>  
                <div className="home-content-inner x-axis-scroll">
                    <p className="bold-500"><span className="icon-size material-icons">article</span> About </p>
                
                    <div className="row">
                        <div className="col">    
                            <div className="profile-inner" >
                                <h1>What is HealHub?</h1>
                                <p style={{textAlign:"justify"}}>HealHub helps to store and maintain the health records of a patient and provide patient’s the facility to share their medical records with any Medical Practitioner at their own ease. 
Medical emergencies can happen anytime and anywhere. A number of cases has been reported where a fraction of deaths were caused due to the unavailability of the patient’s health record. This platform removes the hassle of physical medical records and gives patient the power to store his medical records securely in one place.
</p>
                            </div>  
                        </div>
                        <div className="col align-centre">
                            <img className="home-1-img" src={home1} alt="#" /> 
                        </div>
                    </div> 
                    
                </div>  
                <div className="home-content-inner">
                    <p className="bold-500"> <span className="icon-size material-icons">supervised_user_circle</span> Stakeholder</p>  
                    <div className="stakeholders-inner x-axis-scroll">
                    <div className="row">
                        <div className="profile-inner">
                            <h1>Patient's</h1>
                            <p style={{textAlign:"justify"}}>A patient is a stakeholder who requires medical care and treatment based on his past Medial History. Here a patient can store his Medical History data safely and securely. He can as well as grant Medical Practitioners the access to his medical data through this platform. </p>
                        </div>
                        <div className="profile-inner">
                            <h1>Doctor's</h1>
                            <p style={{textAlign:"justify"}} >Doctors are the prime stakeholder, who will have utmost benefit from this platform. They will be able to access patient’s health record with ease and will be able to serve their best for the care and treatment of the patient.</p>
                        </div>
                    </div>
                    </div>
                </div>  
                <div className="home-content-inner x-axis-scroll">
                    <p className="bold-500"> <span className="icon-size material-icons">security</span>Security</p>
                    <div className="row">
                        <div className="col align-centre">
                                <img className="home-2-img" src={security} alt="#" /> 
                        </div>
                        <div className="col">
                            <div className="profile-inner">
                                <h1>How your data is secure with us?</h1>
                                <p style={{textAlign:"justify"}}>Authentication is the mechanism of associating an incoming request with a set of identifying credentials, such as the user the request came from, or the token that it was signed with. The permission and throttling policies can then use those credentials to determine if the request should be permitted.</p>
                                <p style={{textAlign:"justify"}}>Knox authentication is token based, similar to the TokenAuthentication built in to DRF. However, it overcomes some problems present in the default implementation:</p>
                                <p style={{textAlign:"justify"}}>Knox provides one token per call to the login view - allowing each client to have its own token which is deleted on the server side when the client logs out.</p>
                                <p style={{textAlign:"justify"}}>Knox tokens are only stored in an encrypted form. Even if the database were somehow stolen, an attacker would not be able to log in with the stolen credentials.</p>
                            </div>  
                        </div>
                        
                    </div>
                </div>
                <div className="home-content-inner x-axis-scroll">
                    <p className="bold-500"> <span className="icon-size material-icons">contact_support</span> Contact and Support</p>
                    <div className="row">
                        <div className="col">
                            <div className="profile-inner">
                                <h1>Found a Bug or Issue ?</h1>
                                <p style={{textAlign:"justify"}}>We assure customer reliability and ease while using web portal. Support team is available to resolve any issue arise using the web application .
            Contact us today at healhub0@gmail.com
   	Or leave a bug or issue feedback using the form below.
</p>
                                <a  href="https://forms.gle/9qK4jrywRds9zuxm9"><button className="btn-1">Support Form </button> </a>
                            </div>
                        </div> 
                        <div className="col align-centre">
                            <img className="home-1-img" src={support} alt="#" /> 
                        </div>
                    </div>    
                </div>
                  
               
            </div>
        </>
    );
}

export default HomeScreen;