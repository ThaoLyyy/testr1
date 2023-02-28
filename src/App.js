// import logo from './logo.svg';
import "./App.css";
import Logout from "./components/Logout/Logout";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
    const key = "v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKu";
    const secret = "91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H";

    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        // Return the response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Log the API data
        console.log("token", data);
      })
      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
  }, []);

  return <div>{user ? <Logout /> : <Login />}</div>;
}

export default App;
