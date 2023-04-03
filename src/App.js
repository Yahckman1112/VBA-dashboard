import NavBar from "./components/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';
import SideBar from "./components/sideBar/sideBar";


function App() {
  return (
    <div>
      <NavBar />

    <SideBar/>
      <Routes>
      <Route path="/" element={< Dashboard />} />
      </Routes>

    {/* </SideBar> */}
    </div>
  );
}

export default App;
