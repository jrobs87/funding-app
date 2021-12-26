import React from 'react';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';
import './index.scss';

export default function ConfettiFun(props) {

    const progress = props.progress;
    const [width, height] = useWindowSize();

    if (progress >= 1) {
        return <Confetti
            numberOfPieces={100}
            colors={["#18CCA4", "#B5F1E5", "#5D76E5", "#E4EBFD"]}
            width={width}
            height={height}
        />;
    } else return null;
};