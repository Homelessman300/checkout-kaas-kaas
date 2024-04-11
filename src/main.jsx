import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Coinsdetails from './Coinsdetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app/:id" element={<Coinsdetails />} />
            </Routes>
        </Router>
    );
}

function Home() {
    // Your Home component logic here
    return (    
       <>
       <App/>
       </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
