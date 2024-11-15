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
    // Your Home component logic here
    return (    
       <>
       <App/>
       <Coinsdetails/>
       <OrderDetails/>
       <LijnChart/>
       
       </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
