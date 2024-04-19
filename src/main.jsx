import React from 'react';
import ReactDOM from 'react-dom'; 
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'

import App from './Cryptolist.jsx';
import './index.css';
import LineChart from './Lijnchart.jsx';
import Coinsdetails from './Coinsdetails.jsx';

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
       <LineChart/>       
       </>
    );
}

createRoot(document.getElementById('root')).render(<Main/>); // Use createRoot to render
