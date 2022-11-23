import '../src/Styles/Carlos.css';
import React from 'react';
import img1 from "./Img/calculadora.jpg";



export function Carlos(props){
    return (
      <div className='Container'>
        <img src={props.img} alt="" />
      </div>
    );
}

export default Carlos;