
import './output.css';
import Data from './pages/Data';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Table from './pages/Table';
// import { Chart } from './pages/Chart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
