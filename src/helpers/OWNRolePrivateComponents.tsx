import React, {HTMLProps} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {useJwt} from 'react-jwt';
import {setIs_banned, setUsername} from "../redux/reducers/LoginPageSlice";

interface DecodedToken {
    groups?: string[];
    username:string;
    is_banned: boolean;
}

const OWNRolePrivateComponents = ({children}: HTMLProps<HTMLElement>) => {
    const dispatch = useAppDispatch();

    const {access_token} = useAppSelector((state) => state.loginPage);

    const {decodedToken, isExpired} = useJwt<DecodedToken>(access_token);
    if(decodedToken && decodedToken.username){
        dispatch(setUsername(decodedToken.username))
        dispatch(setIs_banned(decodedToken.is_banned))
    }
    console.log(decodedToken)
    if (decodedToken && decodedToken.groups && decodedToken.groups.includes('OWN01')) {
        return <>{children}</>
    } else {
        return <></>;
    }
};

export default OWNRolePrivateComponents;
