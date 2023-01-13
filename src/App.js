import logo from "./logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <image />
      {isAuthenticated ? (
        <>
          <LogoutButton />
          <Profile />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
