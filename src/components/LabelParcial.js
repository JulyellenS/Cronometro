import React from 'react';
import '../App.css';

const LabelParcial = (props) => 
    {
        return(
            <ul>
                {props.itens.map((item, index) => (
                <li>{item}</li>
                ))}
            </ul>
        )
    }
export default LabelParcial
