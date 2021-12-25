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
                    <p>
                        <strong>Woohoo!</strong> This project is fully funded!
                    </p>
                    :
                    <p>
                        <strong>
                            <span className='dollar-sign'>$</span>{remaining}
                        </strong> still needed to fund this project
                    </p>
            }
        </div>
    )
} 