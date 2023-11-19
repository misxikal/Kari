import { render } from "@testing-library/react";
import React from "react";
import "./menu.css"
import Logo from './image/logo.png';
import { Link } from "react-router-dom";

function menu(){

        return (
            <div>
                <nav>
                    <Link className="but" to="/">Информация о барах</Link>
                    <Link className="but" to="/personal">Персонал</Link>
                    <Link className="but" to="/tovar">Товарный учет</Link>
                </nav>
            </div>
            )
}

export default menu;