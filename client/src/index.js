import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Menu from './menu';
import Information from './informationBars';
import reportWebVitals from './reportWebVitals';
import Profile from './profile';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Personal from './personal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter> 
    <Header />
    <div className='content'>
      <Menu />
        <Routes>
            <Route path="/" element={<Information/>}/>
            <Route path="/personal" element={<Personal/>}/>
            <Route path="/tovar" element={<p>Товарный учет</p>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
