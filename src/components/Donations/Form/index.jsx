import React, { useState } from 'react';
import './index.scss';
import CurrencyInput from 'react-currency-input-field';

export default function Form(props) {

    const [input, setInput] = useState(null); // controlled input
    const callback = props.callback; // fetch API from parent

    const handleInput = (value) => {
        setInput(value);
    };

    const handleSubmit = (event, cb) => {
        event.preventDefault();

        if (input < 5) return; // ignore invalid amounts

        // simulated POST 
        const payload = props.donations; 
        payload.push(parseFloat(input));
        window.localStorage.donations = JSON.stringify(payload);

        setInput("");
        cb();
    };

    return (
        <>
            <form onSubmit={(event) => handleSubmit(event, callback)} className='form'>
                <fieldset>
                    <label htmlFor="donation" hidden>Donation</label>
                    <CurrencyInput
                        id="donation"
                        name="donation"
                        placeholder="00"
                        value={input}
                        decimalsLimit={2}
                        required
                        min={5}
                        step={5}
                        allowNegativeValue={true}
                        onValueChange={(value) => handleInput(value)}
                    />
                    <input type="submit" value="Give Now" />

                </fieldset>
                {
                    (input < 5 || input === 0) && input !== null && input !== "" ? <aside>Donations must be at least $5.</aside> : null
                }
            </form>
        </>
    )
}

