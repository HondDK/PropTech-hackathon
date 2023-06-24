import React from 'react'
import Navbar from "./Navbar";
import PrivateComponents from "../../helpers/PrivateComponents";
import {Link} from "react-router-dom";
import OWNRolePrivateComponents from "../../helpers/OWNRolePrivateComponents";

const Header = () => {
    return (
        <header>
            <Link to={"/orders"}>
                <img alt="logo"
                     src={"https://sun9-33.userapi.com/impg/loTq0HF-9c9XuzGmfsorHtiqU643SsEiqZIkOw/9UwVmHbf5ow.jpg?size=195x48&quality=96&sign=c90e0a84ca6db05b622083b57cd9ea63&type=album"}/>
            </Link>
            <PrivateComponents>
                <OWNRolePrivateComponents></OWNRolePrivateComponents>
                <Navbar></Navbar>
            </PrivateComponents>
        </header>
    )
}

export default Header;
