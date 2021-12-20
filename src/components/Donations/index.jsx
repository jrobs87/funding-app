import React, { useState, useEffect } from 'react';
import './index.scss';
import utility from '../../utility';
import Remaining from './Remaining';
import Messaging from './Messaging';
import Form from './Form';
import ProgressBar from './ProgressBar';
import ConfettiFun from './ConfettiFun';

const Donations = props => {

    // ----- Default Props (days and goal) -----------------------------------------------
    const days = props.days || "a few";
    const goal = props.goal || 0;

    // ----- Donations in State ----------------------------------------------------------
    // with a real API we use initial of null, then false for failed requests/erros
    const [donations, setDonations] = useState({
        list: [],
        total: 0,
        goal: goal,
        remaining: goal,
        progress: -100
    });

    // ----- Simuated GET/API Request ----------------------------------------------------
    // simulating a successful GET (in place of fetch + error handling)...
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
            progress: -100
        });
    };


    // ----- API (simulated/simplified) ------------------------------------------------
    // Simulate an initial GET endpoint on component mount to fetch donations
    useEffect(() => {
        fetchAPI();
    }, []);


    // ----- Rendering -----------------------------------------------------------------
    // with a real/typical API call, I typically use an initial value of null (corresponding 
    // to a loading animation/spinner), false to display an error message/UI, and if the data
    // in state is truthy on success then we show the actual element with data. e.g. see below...

    // if (data === null) {
    //     <LoadingSkeleton />
    // } else return (
    //     <>
    //         {
    //             data ? <ContentWithData /> : <Error />
    //         }
    //     </>
    // )

    // simplified rendering with data for demo...
    return (
        <>
            <ConfettiFun progress={donations.progress} />

            <section className='donations'>

                <div className='donations-remaining'>
                    <Remaining goal={goal} total={donations.total} remaining={donations.remaining} />
                </div>

                <div className="donations-main">
                    <>
                        <ProgressBar percent={donations.progress} />

                        <div className="donations-main_inner">
                            <Messaging days={days} donations={donations.list} />
                            <Form donations={donations.list} callback={fetchAPI} />
                        </div>
                    </>
                </div>

                <button onClick={reset} className='reset'>Reset</button>
            </section>
        </>
    );
};

export default Donations;