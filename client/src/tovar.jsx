import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';
import axios from 'axios';
import './tovar.css'

function Tovar(){
    
    const [getTovar, setGetTovar] = useState([]);

    useEffect(()=>{
        axios.post('http://localhost:5000/getTovar')
        .then(response => {
            setGetTovar(response.data);
            console.log(response.data)
        })
    },[]);

    function delTovar(Id_tovar, Name, Price, Weight, kategoriya, descripts){
        
        const Id = Id_tovar;

        axios.post('http://localhost:5000/delitedTovar', {Id:Id})
        .then((response)=>{
            console.log(response);
        })
    }

    let changer = false;

    function сhangeTovar(){

    }


    return(
        <div className='contentTovar'>
            <Popup trigger={<div className='buttonAddTovar'>Добавить товар</div>}>

            </Popup>
            <div className='getTovar'>
                {
                    getTovar.map((item=>(
                        <div className='tovar'>
                            <p>Название: {item.Name}</p>
                            <p>Цена: {item.Price}</p>
                            <p>Вес: {item.Weight}г.</p>
                            <p>Категория: {item.name}</p>
                            <Popup trigger={<input className='infTovar' type='button' value={"Подробнее"}/>} modal>
                                <div className='InformationTovar'>
                                    <div className='microInf'>
                                        <p>Название: {item.Name}</p>
                                        <p>Цена: {item.Price}</p>
                                        <p>Вес: {item.Weight}г.</p>
                                        <p>Категория: {item.name}</p>
                                    </div>
                                    <div className='infoTov'>
                                        <h1>Описание</h1>
                                        <p>{item.Descript}</p>
                                    </div>
                                </div>
                                <div className='settings'>
                                    <input type="button" onClick={() => сhangeTovar()} value="Изменить"/>
                                    <input type="button" onClick={() => delTovar(item.id)} value="Удалить" />
                                </div>
                            </Popup>
                        </div>
                    )))
                }
                
            </div>
        </div>
    )
}

export default Tovar;