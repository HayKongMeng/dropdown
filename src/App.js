
import './output.css';
import Data from './pages/Data';
import { BrowserRouter, NavLink, Route, Router, Routes } from "react-router-dom";
import Table from './pages/Table';
import AccessKey from './pages/AccessKey';
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
      </div>
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/table" element={<Table />} />
        <Route path="/accesskey" element={<AccessKey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
