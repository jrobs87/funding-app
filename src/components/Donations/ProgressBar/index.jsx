import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import './index.scss';

export default function ProgressBar(props) {
    const style = useSpring({
        to: {
            transform: props.percent <= 1 ? `translateX(${ (props.percent) * 100 }%)` : "translateX(100%)"
        },
        from: {
            transform: `translateX(0%)`
        }
    });

    return (
        <div className="progress-bar">
            <animated.div className="progress-bar_inner" style={style}></animated.div>
        </div>
    );
};