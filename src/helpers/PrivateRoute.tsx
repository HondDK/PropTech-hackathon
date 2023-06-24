import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAppSelector} from "../hooks/useRedux";

const PrivateRoutes = () => {
    const { access_token } = useAppSelector((state) => state.loginPage);;
    const location = useLocation();

    const isLoginPage = location.pathname === "/";
    const isRegistrationPage = location.pathname === "/";

    if (access_token) {
        if (isLoginPage || isRegistrationPage) {
            return <Outlet/>;
        } else {
            return <Navigate to="/"/>;
        }
    } else {
        return <Outlet/>;
    }
};

export default PrivateRoutes;