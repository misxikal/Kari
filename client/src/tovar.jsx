import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';
import axios from 'axios';
import './tovar.css'

function Tovar(){
    
    const [getTovar, setGetTovar] = useState([]);

    const [NameTovar, setNameTovar] = useState('');
    const [priceTovar, setPriceTovar] = useState('');
    const [weightTovar, setWeightTovar] = useState('');
    const [kategorTovar, setKategorTovar] = useState('');
    const [descriptTovar, setDescriptTovar] = useState('');


    function addTovar(){
        axios.post('http://localhost:5000/addTovar', {NameTovar:NameTovar, priceTovar:priceTovar, weightTovar:weightTovar, kategorTovar:kategorTovar, descriptTovar:descriptTovar})
        .then((response)=>{
            console.log(response);
        })
    }

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
                <div>
                    <p>Название</p>
                    <input type="text" onChange={(e)=>{
                        setNameTovar(e.target.value);
                    }}/>
                    <p>Цена</p>
                    <input type='text' placeholder='+7 (999) 999 99-99' onChange={(e)=>{
                        setPriceTovar(e.target.value);
                    }}/>
                    <p>Вес</p>
                    <InputMask mask="99" maskChar={null} type='text' placeholder='Возраст работника' onChange={(e)=>{
                        setWeightTovar(e.target.value);
                    }}/>
                    <p>Категория</p>
                    <input type="text" onChange={(e)=>{
                        setKategorTovar(e.target.value);
                    }}/>
                    <p>Описание</p>
                    <input type="text" onChange={(e)=>{
                        setDescriptTovar(e.target.value);
                    }}/>
                    <input type="button" value="Добавить" onClick={addTovar}/>
                </div>
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