import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./header.css"
import Logo from './image/logo.png';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



function Header(){

    const [phone,setPhone] = useState('');
    const [password, setPassword] = useState('');

    // function navig(){
    //     navigate("/profile");
    // }

    function login(){
        console.log(phone+password);
        axios.post('http://localhost:5000/login', {phone:phone, password:password})
        .then((response)=>{
            console.log(response);
            sessionStorage.setItem("user", JSON.stringify({Name: response.data[0].Name, PhoneNumber: response.data[0].PhoneNumber}))
            window.location.reload();
        })
        // fetch('http://localhost:5000/login',{
        //     method:"POST",
        //     headers:{
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify({
        //         phone:phone,
        //         password:password
        //     })
        // })
        // .then(response => console.log(response))
    }

        return (
            <header>
                <div className="logo">
                    <img src={Logo}/>
                    <h1>Kanri</h1>
                </div>
                {
                        !sessionStorage.getItem('user') ? 
                        <>
                        <div className="logIn">
                            <Popup trigger={<input type="button" value={"Войти"}/>} modal>
                                <form>
                                    <p>Номер телефона</p>
                                    <InputMask onChange={(e)=>{setPhone(e.target.value);}} autoFocus={false} type='text' mask="+7 (999) 999 99-99" maskChar={null} placeholder='+7 (999) 999 99-99'/>
                                    <p>Пароль</p>
                                    <input type="password" onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}/>
                                    <input type='button' id='addBar' value={"Войти"} onClick={login}/>
                                </form>
                            </Popup>
                        </div>
                        </> 
                         // eslint-disable-next-line react/jsx-no-undef
                         :<Link className="but" to="/profile">Профиль</Link>

                }
                
            </header>
            )
}

export default Header;