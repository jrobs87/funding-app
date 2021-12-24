import React from 'react';
import './index.scss';

export default function Controls(props) {

    const reset = props.reset;
    const postSuccess = props.postSuccess;
    const setpostSuccess = props.setpostSuccess;

    return (
        <div className="controls-wrapper">
            <button onClick={reset} className='controls reset'>Reset Data</button>
            <button className="controls post-success" onClick={() => setpostSuccess(!postSuccess)}>
                POST Success: {postSuccess.toString()}
            </button>
        </div>
    )
}