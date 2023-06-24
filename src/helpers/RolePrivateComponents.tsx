import React, {HTMLProps} from 'react';
import {useAppSelector} from '../hooks/useRedux';
import {useJwt} from 'react-jwt';

interface DecodedToken {
    groups?: string[];

}

const RolePrivateComponents = ({children}: HTMLProps<HTMLElement>) => {
    const {access_token} = useAppSelector((state) => state.loginPage);

    const {decodedToken, isExpired} = useJwt<DecodedToken>(access_token);

    if (decodedToken && decodedToken.groups && decodedToken.groups.includes('OWN01')) {
        return <>{children}</>
    } else {
        return <></>;
    }
};

export default RolePrivateComponents;
