import React, { useState } from 'react';
import "./header.css"
import Logo from './image/logo.png';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';


function Header(){

    const [phone,setPhone] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        console.log(phone+password);
        fetch('http://localhost:5000/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                phone:phone,
                password:password
            })
        })
        .then(response => console.log(response[0]))
    }

        return (
            <header>
                <div className="logo">
                    <img src={Logo}/>
                    <h1>Kanri</h1>
                </div>
                <div className="logIn">
                    
                    
                    <Popup trigger={<input type="button" value={"Войти"}/>} modal>
                        <form>
                            <p>Номер телефона</p>
                            <InputMask mask="+7 (999) 999 99-99" maskChar={null} type='text' onChange={(e)=>{
                                setPhone(e.target.value);
                            }}/>
                            <p>Пароль</p>
                            <input type="password" onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                            <input type='button' id='addBar' value={"Войти"} onClick={login}/>
                        </form>
                    </Popup>
                </div>
            </header>
            )
}

export default Header;