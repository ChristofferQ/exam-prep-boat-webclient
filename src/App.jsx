import { useState, useEffect } from 'react'
import './styles/App.css'
import facade from "./apiFacade";
import { Outlet, Link } from 'react-router-dom';

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
  }

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )

}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  useEffect(() => { facade.loginData().then(data => setDataFromServer(data.msg)); }, [])

  return (
    <div>
      <h3>{dataFromServer}</h3>
    </div>
  )

}

function Menu() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <p>User options:</p>
        <Link to="/Owners">Owners</Link> |{" "}
        <Link to="/Harbour">Harbour</Link> |{" "}
        <Link to="/Boat">Boat</Link>
        <p>Admin options:</p>
        <Link to="/CreateBoat">Create Boat</Link> |{" "}
        <Link to="/ConnectBoat">Connect Boat</Link> |{" "}
        <Link to="/Boat">Edit Boat</Link> |{" "}
        <Link to="/DeleteBoat">Delete Boat</Link>
      </nav>
      <Outlet />
    </div>
  )
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
  }

  const login = (user, pass) => {
    facade.login(user, pass)
      .then(res => setLoggedIn(true));
  }



  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <Menu />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )

}

export default App
