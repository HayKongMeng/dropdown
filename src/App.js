
import './output.css';
import Data from './pages/Data';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Table from './pages/Table';
import AccessKey from './pages/AccessKey';
import CreateAccessKey from './pages/CreateAccessKey';
import OverviewHr from './pages/OverviewHr';
import Attendance from './pages/AttendanceCard';
function App() {
  return (
    <BrowserRouter>
    {/* Tab navigation */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
        <NavLink
          to="/data"
          style={({ isActive }) => ({
            padding: '0.5rem 1rem',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            color: isActive ? '#007bff' : '#333',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Data
        </NavLink>
        <NavLink
          to="/table"
          style={({ isActive }) => ({
            padding: '0.5rem 1rem',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            color: isActive ? '#007bff' : '#333',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Table
        </NavLink>
        <NavLink
          to="/accesskey"
          style={({ isActive }) => ({
            padding: '0.5rem 1rem',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            color: isActive ? '#007bff' : '#333',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Access Key
        </NavLink>
        <NavLink
          to="/createaccesskey"
          style={({ isActive }) => ({
            padding: '0.5rem 1rem',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            color: isActive ? '#007bff' : '#333',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Create Access Key
        </NavLink>
        <NavLink
          to="/OverviewHr"
          style={({ isActive }) => ({
            padding: '0.5rem 1rem',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            color: isActive ? '#007bff' : '#333',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          OverviewHr
        </NavLink>
        <NavLink
          to="/Attendance"
          style={({ isActive }) => ({
            padding: '0.5rem 1rem',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            color: isActive ? '#007bff' : '#333',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Attendance
        </NavLink>
      </div>
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/table" element={<Table />} />
        <Route path="/accesskey" element={<AccessKey />} />
        <Route path="/createaccesskey" element={<CreateAccessKey />} />
        <Route path="/OverviewHr" element={<OverviewHr />} />
        <Route path="/Attendance" element={<Attendance />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
