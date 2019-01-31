import React from 'react';
import style from './Input.module.css';

const input = (props) => {
    return (
        <div>
            <input className={style.Input} value={props.text} onChange={props.changed} onKeyPress={props.keyDown} type="text"></input>
            <button className={style.Button} onClick={props.clicked} >OK</button>
        </div>
    )
}

export default input;