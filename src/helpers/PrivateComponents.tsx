
import { Link } from "react-router-dom";
import {useAppSelector} from "../hooks/useRedux";
import {HTMLProps} from "react";
const PrivateComponents = ({ children }: HTMLProps<HTMLElement>) => {

    const { access_token } = useAppSelector((state) => state.loginPage);

    if (access_token) {
        return <>{children}</>;
    } else {
        return (
            <>
                <Link to="/login" relative="path" >
                    <p>Авторизация</p>
                </Link>
            </>
        );
    }
};

export default PrivateComponents;