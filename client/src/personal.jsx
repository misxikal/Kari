import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';
import axios from 'axios';
import "./personal.css";

function Personal(){

    const [NamePers, setNamePers] = useState('');
    const [PhonePers, setPhonePers] = useState('');
    const [AgePers, setAgePers] = useState('');
    const [PostPers, setPostPers] = useState('');
    const [BarPers, setBarPers] = useState('');

function addPers(){
    
    axios.post('http://localhost:5000/personal', {NamePers:NamePers, PhonePers:PhonePers, AgePers:AgePers, PostPers:PostPers, BarPers:BarPers})
    .then((response)=>{
        console.log(response);
    })
    
}
const [getPers, setGetPers] = useState([]);

useEffect(()=>{
    axios.post('http://localhost:5000/getPersonal')
    .then(response => {
        setGetPers(response.data);
        console.log(response.data)
    })
},[]);

    return(
        <>
        <div className='Content'>
            <div>
                <Popup trigger={<div className='addEmployees'>Добавить работника</div>} modal>
                    <p>ФИО</p>
                    <input type="text" onChange={(e)=>{
                        setNamePers(e.target.value);
                    }}/>
                    <p>Номер телефона</p>
                    <InputMask mask="+7 (999) 999 99-99" maskChar={null} type='text' placeholder='+7 (999) 999 99-99' onChange={(e)=>{
                        setPhonePers(e.target.value);
                    }}/>
                    <p>Возраст</p>
                    <InputMask mask="99" maskChar={null} type='text' placeholder='Возраст работника' onChange={(e)=>{
                        setAgePers(e.target.value);
                    }}/>
                    <p>Должность</p>
                    <input type="text" onChange={(e)=>{
                        setPostPers(e.target.value);
                    }}/>
                    <p>Место работы</p>
                    <input type="text" onChange={(e)=>{
                        setBarPers(e.target.value);
                    }}/>
                    <input type="button" value="Добавить" onClick={addPers}/>
                </Popup>
            </div>
            <div>
                {
                    getPers.map((item => (
                    <div className='itemPerson'>
                        <p>ФИО: {item.Name}</p>
                        <p>Номер телефона: {item.NumberPhone}</p>
                        <p>Возраст: {item.Age}</p>
                        <p>Должность: {item.Post}</p>
                        <p>Место работы: {item.nameBar}</p>
                    </div>
                    ))) 
                }
            </div>
        </div>
        </>
    )
}

export default Personal;