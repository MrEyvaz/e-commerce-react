import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Basket from './components/Basket';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Products/>} />  
                <Route path="/basket" element={<Basket />} />  
            </Routes>
        </Router>
    );
}

export default App;