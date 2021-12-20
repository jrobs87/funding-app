import React from 'react';
import currency from 'currency.js';

export default function Remaining(props) {
    const total = props.total;
    const goal = props.goal;
    const remaining = props.remaining;

    return (
        <>
            {
                total >= goal ? <strong>This project is fully funded!</strong> :
                    <>
                        <strong>
                            <span>$</span>{currency(remaining, { symbol: '', precision: 0 }).format()}
                        </strong> still needed to fund this project
                    </>
            }
        </>
    )
} 