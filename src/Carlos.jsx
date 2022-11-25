import '../src/Styles/Carlos.css';
import React from 'react';

export function Carlos(props){
    return (
      <div className='Container-img'>
        <img src={props.img} alt="" />
      </div>
    );
}

export default Carlos;