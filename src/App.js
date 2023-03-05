import './App.css';
import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import PaiPage from './pages/PaiPage';
import StaffPage from './pages/StaffPage';
import NewStaffMember from './pages/NewStaffMember';
import AddPaiPage from './pages/AddPaiPage';



function App() {

  return (
    <div className="App flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pai" element={<AddPaiPage  />} />
          <Route path="/pai/:id" element={<PaiPage  />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/user" element={<NewStaffMember  />} />
          <Route path="/user/:id" element={<NewStaffMember edit={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
