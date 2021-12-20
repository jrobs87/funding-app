import React from 'react';
import Confetti from 'react-confetti';

export default function ConfettiFun(props) {

    const progress = props.progress || 0;

    if (progress >= 1) {
        return <Confetti colors={["#18CCA4", "#B5F1E5", "#5D76E5", "#E4EBFD"]} />;
    } else return null;
};