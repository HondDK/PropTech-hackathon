import React from 'react';
import '../src/styles/style.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import UserProfilePage from "./pages/UserProfilePage";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
    const persistor = persistStore(store);
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Routes>
                            <Route element={<LoginPage/>} path="/"/>
                            <Route element={<OrderPage/>} path="/orders"/>
                            <Route element={<OrderDetailPage/>} path="/order_detail"/>
                            <Route element={<PrivateRoute/>}>
                                <Route element={<UserProfilePage/>} path="/user_profile"/>
                            </Route>
                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App;
