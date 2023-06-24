import React, { HTMLProps } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { useJwt } from 'react-jwt';
import { Link } from 'react-router-dom';

interface DecodedToken {
    groups?: string[];

}
const RolePrivateComponents = ({ children }: HTMLProps<HTMLElement>) => {
    const { access_token } = useAppSelector((state) => state.loginPage);

    const { decodedToken, isExpired } = useJwt<DecodedToken>(access_token);

    console.log(decodedToken);

    if (decodedToken && decodedToken.groups && !decodedToken.groups.includes('OWN01')) {
        return <p>Исполнитель</p>;
    } else {
        return <p>Заказчик</p>;
    }
};

export default RolePrivateComponents;
