import './informationBars.css';
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';


function Information(){

    const [nameBar, setNameBar] = useState('');
    const [nameAdmin, setNameAdmin] = useState('');
    const [nameAddress, setNameAddress] = useState('');
    const [phoneBar, setPhoneBar] = useState('');

    function addBar(){
        console.log(phoneBar);
        fetch('http://localhost:5000/infoBar', {
            method: "post",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                nameBar:nameBar,
                name:nameAdmin,
                address:nameAddress,
                phoneBar:phoneBar,
            })
        })
        .then(response => window.location.reload())
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
                        <h1>{item.nameBar}</h1>
                        <p>Владелец: {item.Name}</p>
                        <p>Адресс: {item.Address}</p>
                        <p>Номер админа: {item.PhoneNumber}</p>
                        <p>Номер офиса: {item.numberBar}</p>
                        <input type='button' value={"Подробнее"}/>
                    </div>
                )))
                
            }
        <Popup trigger={<div className='addBar'>+</div>} modal>
            <form>
                <p>Название бара</p>
                <input type='text' onChange={(e)=>{
                    setNameBar(e.target.value);
                }}/>
                <p>Идентификатор сотрудника</p>
                <input type='text' onChange={(e)=>{
                    setNameAdmin(e.target.value);
                }}/>
                <p>Адресс</p>
                <input type='text' onChange={(e)=>{
                    setNameAddress(e.target.value);
                }}/>
                <p>Номер телефона</p>
                <InputMask mask="+7 (999) 999 99-99" maskChar={null} type='text' onChange={(e)=>{
                    setPhoneBar(e.target.value);
                }}/>
                <input type='button' id='addBar' value={"Добавить"} onClick={addBar}/>
            </form>
        </Popup>
            
        </div>
        </>
    )
}

export default Information;