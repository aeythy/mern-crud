import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


const App = () => {
  return (
    <>
      <h1>Vite + React CRUD</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="w-full p-6">
        <Outlet />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <NavLink to="/">
        <div id="ruby">
          <img
            alt="MongoDB logo"
            className="h-10 inline"
            src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
          ></img>
          <a href="https://vitejs.dev" target="_blank" className="h-10 inline">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="h-10 inline">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </NavLink>
    </>
  );
}

export default App
