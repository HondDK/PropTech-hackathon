import React from 'react';
import '../src/styles/style.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import UserProfilePage from "./pages/UserProfilePage";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import PrivateRoute from "./helpers/PrivateRoute";
import NewOrderCreate from "./pages/NewOrderCreate";
import MyResponse from "./pages/MyResponse";
import MyOrders from "./pages/MyOrders";
import ActiveOrders from "./pages/ActiveOrders";
import RegPage from "./pages/RegPage";

function App() {
    const persistor = persistStore(store);
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Routes>
                            <Route element={<LoginPage/>} path="/login"/>
                            <Route element={<RegPage/>} path="/reg"/>
                            <Route element={<OrdersPage/>} path="/orders"/>
                            <Route element={<OrderDetailPage/>} path="/order_detail/:uuid"/>
                            <Route element={<PrivateRoute/>}>
                                <Route element={<ActiveOrders/>} path={"/active_orders"}/>
                                <Route element={<UserProfilePage/>} path="/user_profile"/>
                                <Route element={<NewOrderCreate/>} path={"/new_order_create"}/>
                                <Route element={<MyOrders/>} path="/my_orders"/>
                                <Route element={<MyResponse/>} path={"/my_response"}/>
                            </Route>
                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App;
