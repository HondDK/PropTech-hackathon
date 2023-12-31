import React from 'react';
import '../src/styles/style.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import MyProfilePage from "./pages/MyProfilePage";
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
import ModerationPageOnReview from "./pages/ModerationPageOnReview";
import ModerationPageInProgress from "./pages/ModerationPageInProgress";
import RatingUserPage from "./pages/RatingUserPage";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18 from "./i18/i18next";
import BannedPage from "./pages/BannedPage";

function App() {
    const {t, i18n} = useTranslation();

    const persistor = persistStore(store);

    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <I18nextProvider i18n={i18}>
                        <Router>
                            <Routes>
                                <Route element={<RegPage/>} path="/reg"/>
                                <Route element={<LoginPage/>} path="/login"/>
                                <Route element={<OrdersPage/>} path="/orders"/>
                                <Route element={<OrderDetailPage/>} path="/order_detail/:uuid"/>
                                <Route element={<BannedPage/>} path="/ban"/>
                                <Route element={<PrivateRoute/>}>
                                    <Route element={<ActiveOrders/>} path={"/active_orders"}/>
                                    <Route element={<MyProfilePage/>} path="/user_profile"/>
                                    <Route element={<NewOrderCreate/>} path={"/new_order_create"}/>
                                    <Route element={<MyOrders/>} path="/my_orders"/>
                                    <Route element={<MyResponse/>} path={"/my_response"}/>
                                    <Route element={<ModerationPageOnReview/>} path={"/moderation_on_review"}/>
                                    <Route element={<ModerationPageInProgress/>} path={"/moderation_in_progress"}/>
                                    <Route element={<RatingUserPage/>} path={"/rating_users"}/>
                                </Route>
                            </Routes>
                        </Router>
                    </I18nextProvider>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App;
