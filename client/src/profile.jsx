import React from "react";
import ReactDOM from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./profile.css";

function Profile(){

    const user_data = JSON.parse(sessionStorage.getItem('user'));

    return(
        <>
        <div>
            <h1>Name:{user_data.Name}</h1>
        </div>
        </>
    )
}
export default Profile;