import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const Star = ({selected = false}) => (
    <FaStar color={selected ? "red" : "grey"}/>
);


export default function StarRating({totalStars = 5}) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {[...Array(totalStars)].map((n, i) => (
                <Star key={i} selected={selectedStars > i}/>
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
}

