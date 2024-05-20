
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Notestate from "./context/Notestate";
import Signup from "./component/signup";
import Login from "./component/login";
import { useState} from "react";
import Alert from "./component/Alert";
import Contact from "./component/Contactme";
import "./App.css";
import Croushel from "./component/caroushel";
import UserLogo from "./component/UserLogo";
// import bglogin from "./images/login2.jpg";
function App() {
  const [alert, setalert] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
  };

  const removeBodyClasses = (cls) => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-grey");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.style.backgroundImage = "none";

  
  };
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const handleLogin = (email) => {
    setUserEmail(email);
    setLoggedIn(true);
  };

  return (
    <>
      <Notestate showAlert={showAlert}>
        {/* <Router> */}
        <Navbar showAlert={showAlert} toggleMode={toggleMode}  setLoggedIn={setLoggedIn} />
        <Alert alert={alert} />
        <div className="container">
          {" "}
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
           
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            />
           
            <Route
              exact
              path="/login"
              element={
                <Croushel
                  showAlert={showAlert}
                  setLoggedIn={setLoggedIn}
                  handleLogin={handleLogin}
                />
              }
            />

            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
        {loggedIn && <UserLogo email={userEmail} />}
      </Notestate>
    </>
  );
}

export default App;