import React from "react";
import ReactDOM from "react";
import ava from './image/sUpLt6nSibY.jpg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./profile.css";
import { useNavigate } from "react-router-dom";

function Profile(){

    const navigate = useNavigate();
    const user_data = JSON.parse(sessionStorage.getItem('user'));

    function Exit(){
        sessionStorage.removeItem('user');
        navigate("/");
        window.location.reload();
    }

    return(
        <>
        <div className="content-profile">
            <div className="karta">
                <div className="info-user">
                    <div id="ava">
                        <img src={ava} alt="Ghbdt" />
                    </div>
                    <div id="infoProf">
                        <h1>Ваш профиль</h1>
                        <p>Имя: {user_data.Name}</p>
                        <p>Номер телефона: {user_data.PhoneNumber}</p>
                    </div>
                </div>
                <input type="button" onClick={Exit} value="Выйти нахуй" />
            </div>
        </div>
        </>
    )
}
export default Profile;