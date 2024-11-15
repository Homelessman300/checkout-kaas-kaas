import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/Checktracker.jsx';
import './index.css';
import Coinsdetails from './component/Details.jsx';
import LijnChart from './component/BestellingWijzigen.jsx';
import OrderDetails from './component/Hello.jsx';
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
    return (
        <>
            <div className="space-y-5">
              
                <App />
                <Coinsdetails />
                <OrderDetails />
                <LijnChart />
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
