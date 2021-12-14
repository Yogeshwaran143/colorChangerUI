import React, { useState } from "react";
import Select from "react-select";

function DropDownColor() {
    var colorsArray = [
        {
            value: 1,
            label: 'Lime',
            value: 'lime'
        },
        {
            value: 2,
            label: 'Lavender',
            value: 'lavender'
        },
        {
            value: 3,
            label: 'Crimson',
            value: 'crimson'
        },
        {
            value: 4,
            label: 'Darkblue',
            value: 'darkblue'
        },
        {
            value: 5,
            label: 'Teal',
            value: 'teal'
        },
        {
            value: 6,
            label: 'Rebecca Purple',
            value: 'rebeccapurple'
        },
        {
            value: 7,
            label: 'Ghost White',
            value: 'ghostwhite'
        },
        {
            value: 8,
            label: 'Aqua Marine',
            value: 'aquamarine'
        },
        {
            value: 9,
            label: 'Alice Blue',
            value: 'aliceblue'
        },
    ];
    var [color, colorValue] = useState(colorsArray.value);
    var colorHandler = each => {
        colorValue(each.value)
    }

    return (
        <div>
            <h1 className="heading"> Color Changer </h1>
            <div className="dropDown">
                <Select options={colorsArray} onChange={colorHandler}></Select>
            </div>
            <div className="colorChanger center" style={{backgroundColor: color}}></div>
        </div>
    );
}

export default DropDownColor;