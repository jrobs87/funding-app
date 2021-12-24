import React from 'react';
import utility from '../../../utility';
import './index.scss';

export default function Remaining(props) {

    const total = props.total;
    const goal = props.goal;
    const remaining = utility.formatCurrency(props.remaining);

    return (
        <div className='donations-remaining'>
            {
                total >= goal ?
                    <span>
                        <strong>Woohoo! This project is fully funded!</strong>
                        <br />
                        We have raised <span className='dollar-sign'>$</span>
                        {utility.formatCurrency(total)} (our goal was <span className='dollar-sign'>$</span>{utility.formatCurrency(goal)})!
                    </span>
                    :
                    <>
                        <strong>
                            <span className='dollar-sign'>$</span>{remaining}
                        </strong> still needed to fund this project
                    </>
            }
        </div>
    )
} 