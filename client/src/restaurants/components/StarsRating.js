import React from 'react';
import {Image} from "semantic-ui-react";
import ratingStar from "../../assets/star-icon.png";

const RATING_MAP = {
    1: <span><Image src={ratingStar} /></span>,
    2: <span><Image src={ratingStar} /><Image src={ratingStar} /></span>,
    3: <span><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /></span>,
    4: <span><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /></span>,
    5: <span><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /></span>,
}

export const StarsRating = (props) => {
    if(!props.rating) {
        return null;
    }

    const ratingRounded = Math.floor(props.rating).toString();
    return RATING_MAP[ratingRounded];
};