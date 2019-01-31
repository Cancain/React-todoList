import React, { Component } from 'react';
import style from './ListItem.module.css';

var FontAwesome = require('react-fontawesome')

class ListItem extends Component {
    constructor(listText) {
        super();
        this.listText = listText;
    }


    render() {
        return (
            <div>
                <li className={style.List}>{this.listText}
                    <FontAwesome
                        className={'fas fa-ban ' + style.Remove}
                        name='fas fa-ban'
                        size='0.5x'
                    // onClick={props.clickRemove}
                    />
                </li>
            </div>
        )
    }

}

export default ListItem;

