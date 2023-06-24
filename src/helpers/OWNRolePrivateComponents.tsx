import React, {HTMLProps} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {useJwt} from 'react-jwt';
import {setUsername} from "../redux/reducers/LoginPageSlice";

interface DecodedToken {
    groups?: string[];
    username:string;
}

const OWNRolePrivateComponents = ({children}: HTMLProps<HTMLElement>) => {
    const dispatch = useAppDispatch();

    const {access_token} = useAppSelector((state) => state.loginPage);

    const {decodedToken, isExpired} = useJwt<DecodedToken>(access_token);
    if(decodedToken && decodedToken.username){
        dispatch(setUsername(decodedToken.username))
    }
    console.log(decodedToken)
    if (decodedToken && decodedToken.groups && decodedToken.groups.includes('OWN01')) {
        return <>{children}</>
    } else {
        return <></>;
    }
};

export default OWNRolePrivateComponents;
