import React, { useState, useEffect } from 'react';
import utility from '../../utility';
import ConfettiFun from './ConfettiFun';
import Remaining from './Remaining';
import ProgressBar from './ProgressBar';
import Messaging from './Messaging';
import Form from './Form';
import Controls from './Controls';
import './index.scss';

const Donations = props => {

    // ----- Default Props (days and goal) -----------------------------------------------
    const days = props.days || "a few";
    const goal = props.goal || 0;

    // ----- Donations in State ----------------------------------------------------------
    const [donations, setDonations] = useState({
        list: [], // leave empty on load
        total: 0, // does not yet exist in API...
        goal: goal, 
        remaining: goal, 
        progress: -1 // ensures we begin with progress bar out of view on load...
    });

    // ----- Simuated GET/API Request ----------------------------------------------------
    const [postSuccess, setpostSuccess] = useState(true); // demo a failed API call...

    // "Successful" GET (in place of fetch + error handling)...
    const fetchAPI = () => {
        if (window.localStorage.donations) {

            const response = JSON.parse(window.localStorage.donations);

            setDonations({
                list: response,
                total: utility.total(response),
                goal: goal,
                remaining: utility.difference(goal, utility.total(response)),
                progress: utility.percent(utility.total(response), goal)
            });
        };
    };

    // ----- Reset Data and State for Demo -----------------------------------------------
    const reset = () => {
        window.localStorage.removeItem("donations");

        setDonations({
            list: [],
            total: 0,
            goal: goal,
            remaining: goal,
            progress: -1
        });
    };

    // ----- API (simulated/simplified) ------------------------------------------------
    // Simulate an initial GET endpoint on component mount to fetch donations... ignore warnings
    useEffect(() => {
        fetchAPI();
    }, []);

    // ----- Rendering Notes -----------------------------------------------------------
    // With a real/typical API call, I typically use an initial value of null (corresponding 
    // to a loading animation/spinner), false to display an error message/UI, and if the data
    // in state is truthy on success then we show the actual element with data. This allows 
    // for error handling and rendering logic to be controlled in a very much top-down fashion
    // e.g. see below...

    // if (data === null) {
    //     <LoadingSkeleton />
    // } else return (
    //     <>
    //         {
    //             data ? <ContentWithData /> : <Error />
    //         }
    //     </>
    // )

    // ----- Simplified rendering with data for demo... ----------------------------------
    return (
        <>
            <ConfettiFun // confetti element for goal completion :)
                progress={donations.progress} // simple percentage
            />

            <section className='donations'>

                <Remaining // messaging for amount remaining
                    goal={goal} // goal from top level props
                    total={donations.total} // sum of array
                    remaining={donations.remaining} // goal - sum of array
                />

                <div className="donations-main">
                    <ProgressBar
                        percent={donations.progress} // simple percentage
                    />

                    <div className="donations-main_inner">
                        <Messaging // main text content messaging (days and donors)
                            days={days} // days from initial prop/top level
                            donations={donations.list} // donations array
                        />

                        <Form // main Form element (donation submissions)
                            donations={donations.list} // donations array
                            callback={fetchAPI} // fetch data (apssed to update in POST)
                            postSuccess={postSuccess} // boolean to simulate failed POST
                        />
                    </div>
                </div>

                <Controls // demo controls to reset data and toggle APi failures
                    reset={reset} // reset all form/app data
                    postSuccess={postSuccess} // boolean to simulate failed POST
                    setpostSuccess={setpostSuccess} // update/toggle failed POST
                />
            </section>
        </>
    );
};

export default Donations;