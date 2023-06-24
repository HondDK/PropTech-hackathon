import React from 'react';
import '../src/styles/style.scss';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<LoginPage/>} path="/"/>
                    <Route element={<OrderPage/>} path="/orders"/>
                    <Route element={<OrderDetailPage/>} path="/order_detail"/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
