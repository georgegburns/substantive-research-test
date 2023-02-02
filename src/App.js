import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Navbar from "./components/Navbar";
import DataTable from "./views/DataTable";
import Settings from "./views/Settings";
import Reports from "./views/Reports";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Reports/>}/>
          <Route path="/Table" exact element={<DataTable/>}/>
          <Route path="/Settings" exact element={<Settings/>}/>
        </Routes>
    </Router>
  );
}

export default App;
