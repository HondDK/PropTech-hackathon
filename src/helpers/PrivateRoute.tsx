import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const PrivateRoutes = () => {
    const { access_token } = useAppSelector((state) => state.loginPage);
    const location = useLocation();

    const isLoginPage = location.pathname === "/";

    if (access_token) {
        if (isLoginPage) {
            return <Navigate to="/orders" />;
        } else {
            return <Outlet />;
        }
    } else {
        return <Navigate to="/" />;
    }
};

export default PrivateRoutes;
