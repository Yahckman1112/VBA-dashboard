import NavBar from "./components/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import SideBar from "./components/sideBar/sideBar";
import './App.css'
import Theme from './pages/dashboard/template/themes';
function App() {

  return (
    <div className="App">
      <NavBar  />

      <div className="body">
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>

      </div>

      {/* </SideBar> */}
    </div>
  );
}

export default App;
