import React from 'react';
import style from './ListItem.module.css';

var FontAwesome = require('react-fontawesome')

const listItem = (props) => {

    return (
        <div className={style.Box}>
            <li className={style.List}>{props.listText}
                <FontAwesome
                    className={'fas fa-ban ' + style.Remove}
                    name='fas fa-ban'
                    size='0.5x'
                    onClick={props.clickRemove}
                />
            </li>

        </div>
    )
}

export default listItem;