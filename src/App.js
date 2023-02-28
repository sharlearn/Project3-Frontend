import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

function App() {
  const [accessToken, setAccessToken] = useState("");

  const { isLoading, isAuthenticated, getAccessTokenSilently, user } =
    useAuth0();

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();
      setAccessToken(token);
      console.log(user);
      console.log(token);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet context={{ user }} />
    </div>
  );
}

export default App;
