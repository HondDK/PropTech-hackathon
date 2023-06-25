import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const PrivateRoutes = () => {
    const { access_token } = useAppSelector((state) => state.loginPage);
    const location = useLocation();
    const {is_banned} = useAppSelector((state) => state.loginPage);
    const isLoginPage = location.pathname === "/";

    if (is_banned) {
        // Если пользователь находится в бане, перенаправляем его на страницу с предупреждением или другую нужную вам страницу
        return <Navigate to="/ban" />;
}
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
