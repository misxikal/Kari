import { render } from "@testing-library/react";
import React from "react";
import "./header.css"
import Logo from './image/logo.png';

function header(){
        return (
            <header>
                <img src={Logo}/>
                <h1>Kanri</h1>
            </header>
            )
}

export default header;