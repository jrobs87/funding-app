import React, { useState, useRef } from 'react';
import './index.scss';
import CurrencyInput from 'react-currency-input-field';

export default function Form(props) {

    const postSuccess = props.postSuccess;

    const [input, setInput] = useState(null); // controlled input (text/string)
    const [disabled, setDisabled] = useState(false); // disable toggle
    const [submitValue, setSubmitValue] = useState("Give Now"); // submit button text
    const [success, setSuccess] = useState(null); // used to handle API states

    const submitButton = useRef(); 
    const inputField = useRef();
    
    const callback = props.callback; // fetch API from parent passed as callback

    const handleInput = (value) => {
        if (!success) setSuccess(null);
        setInput(value);
    };

    const handleSubmit = (event, cb) => {
        event.preventDefault();

         // ignore invalid amounts and shift focus back to input
        if (input < 5) {
            inputField.current.focus();
            return;
        };

        submitButton.current.focus(); // blur submit
        setSuccess(null); // clear success
        setDisabled(true); // disable inputs
        setSubmitValue("Giving..."); // update to interim value

        // API (stand-in for POST)
        setTimeout(() => {
           
            // success and error handling
            if (postSuccess) {
                const payload = props.donations;
                payload.push(parseFloat(input));

                window.localStorage.donations = JSON.stringify(payload);
                
                setSuccess(true);
                setSubmitValue("Thanks!");

                // reset form on simulated success
                setTimeout(() => {
                    setSuccess(null);
                    setDisabled(false);
                    setSubmitValue("Give Now");

                    submitButton.current.blur(); // blur submit
                    setInput(""); // clear input
                    cb(); // callback (fetch updated data and re-render - from parent)
                }, 1500);
            } else {

                setSubmitValue("Uh Oh!"); // error message

                // reset form on simulated error
                setTimeout(() => {
                    setSuccess(false);
                    setDisabled(false);
                    setSubmitValue("Give Now");
                }, 1000)
            };

        }, 1500);
    };

    return (
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
                        disabled={disabled}
                        ref={inputField}
                        onValueChange={(value) => handleInput(value)}
                    />
                    <input type="submit" value={submitValue} ref={submitButton} disabled={disabled ? true : false} />

                </fieldset>

                {/* input error message */}
                {
                    (input < 5 || input === 0) && input !== null && input !== "" ? <aside>Donations must be at least $5.</aside> : null
                }

                {/* submission error message */}
                {
                    success === false ? <aside>Donation was unsuccessful. </aside> : null
                }
            </form>
    )
}

