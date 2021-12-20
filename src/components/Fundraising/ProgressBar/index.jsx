import React from 'react';
import './index.scss';
import { animated, useSpring } from '@react-spring/web';

export default function ProgressBar(props) {
    const style = useSpring({
        to: {
            transform: props.percent <= 0.9999 ? `translateX(${props.percent}%)` : "0%"
        },
        from: {
            transform: `translateX(-100%)`
        }

    });

    return (
        <div className="progress-bar">
            <animated.div className="progress-bar_inner" style={style}></animated.div>
        </div>
    );
};