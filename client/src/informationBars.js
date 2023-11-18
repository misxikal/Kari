import './informationBars.css';
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';


function Information(){

    const [nameAdmin, setNameAdmin] = useState('');
    const [nameAddress, setNameAddress] = useState('');
    const [phone, setPhone] = useState('');

    function addBar(){
        fetch('http://localhost:5000/infoBar', {
            method: "post",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name:nameAdmin,
                address:nameAddress,
                phoneNumber:phone,
            })
        })
        .then(response => alert("Отправлено"))
        .catch(error => console.error(error))
    }

    const [infoBar, setInfoBar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/infoBar')
            .then(response => response.json())
            .then(infoBar => {
                console.log(infoBar);
                setInfoBar(infoBar);
            })
    },[]);

    return(
        <>
        <div className='Info'>
            {
                infoBar.map((item =>(
                    <div className='barBio'>
                        <h1>Название</h1>
                        <p>Владелец: {item.Name}</p>
                        <p>Адресс: {item.Address}</p>
                        <p>Номер: {item.PhoneNumber}</p>
                        <input type='button' value={"Подробнее"}/>
                    </div>
                )))
                
            }
        <Popup trigger={<div className='addBar'>+</div>} modal>
            <form>
                <p>Владелец</p>
                <input type='text' onChange={(e)=>{
                    setNameAdmin(e.target.value);
                }}/>
                <p>Адресс</p>
                <input type='text' onChange={(e)=>{
                    setNameAddress(e.target.value);
                }}/>
                <p>Номер телефона</p>
                <input type='text' onChange={(e)=>{
                    setPhone(e.target.value);
                }}/>
                <input type='button' value={"Добавить"} onClick={addBar}/>
            </form>
        </Popup>
            
        </div>
        </>
    )
}

export default Information;