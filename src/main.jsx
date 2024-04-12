import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Cryptolist.jsx';
import './index.css';
import Coinsdetails from './Coinsdetails.jsx';
import LijnChart from './Lijnchart.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coins/:id" element={<Coinsdetails />} />
            </Routes>
        </Router>
    );
}

function Home() {
    // Your Home component logic here
    return (    
       <>
       <App/>
       <LijnChart/>
       </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
