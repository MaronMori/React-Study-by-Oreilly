import {FaStar} from "react-icons/fa";
import React from "react";

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

export default Star;