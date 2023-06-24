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
import AcceptedOrders from "./pages/AcceptedOrders";

function App() {
    const persistor = persistStore(store);
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Routes>
                            <Route element={<LoginPage/>} path="/"/>
                            <Route element={<OrdersPage/>} path="/orders"/>
                            <Route element={<OrderDetailPage/>} path="/order_detail/"/>
                            <Route element={<PrivateRoute/>}>
                                <Route element={<AcceptedOrders/>} path={"/accepted_orders"}/>
                                <Route element={<UserProfilePage/>} path="/user_profile/:uuid"/>
                                <Route element={<NewOrderCreate/>} path={"/new_order_create"}/>
                            </Route>
                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App;
