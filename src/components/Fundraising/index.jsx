import React, { useState, useEffect, Fragment } from 'react';
import './index.scss';
import Form from './Form';
import ProgressBar from './ProgressBar';
import ConfettiFun from './ConfettiFun';
import utility from '../../utility';
import currency from 'currency.js';

const Fundraising = props => {

    // ----- Default Props (days and goal) -----------------------------------------------
    const days = props.days || "a few";
    const goal = props.goal || 0;
    // const api = props.api || true;

    // ----- Donations in State -----------------------------------------------
    const [donations, setDonations] = useState({
        list: [],
        total: 0,
        goal: goal,
        remaining: goal,
        progress: -100
    });

    const fetchAPI = () => {
        if (window.localStorage.donations) {

            // simulating a successful GET...
            const response = JSON.parse(window.localStorage.donations);

            setDonations({
                list: response,
                total: utility.total(response),
                goal: goal,
                remaining: utility.difference(goal, utility.total(response)),
                progress: utility.percent(utility.total(response), goal)
            })
        } else {
            return false;
        }
    }

    // ----- API (simulated/simplified) ------------------------------------------------
    // Simulate an initial GET endpoint on component mount to fetch donations
    useEffect(() => {
        fetchAPI();
    }, []);

    // ---------------------------------------------------------------------------------
    console.log("Donations State", donations);

    if (donations) {
        return (
            <>
                <ConfettiFun progress={donations.progress} />

                <section className='donations'>

                    <div className='donations-remaining'>
                        {
                            donations.total >= goal ? <strong>This project is fully funded!</strong> :
                                <>
                                    <strong>
                                        <span>$</span>{currency(donations.remaining, { symbol: '', precision: 0 }).format()}
                                    </strong> still needed to fund this project
                                </>
                        }
                    </div>

                    <div className="donations-main">
                        <Fragment>
                            <ProgressBar percent={donations.progress} />

                            <div className="donations-main_inner">
                                <h1>Only {days} days left to fund this project</h1>
                                <h2>
                                    {
                                        donations.list.length > 0 ?
                                            <span>
                                                Join the <strong>{donations.list.length}</strong> {donations.list.length === 1 ? "other donor who has" : "other donors who have"} already supported this project.
                                            </span>
                                            :
                                            <span>
                                                Be the first to donate to this project and help us reach our funding goal!
                                            </span>
                                    }
                                </h2>

                                <Form donations={donations.list} callback={fetchAPI} />
                            </div>
                        </Fragment>
                    </div>
                </section>
            </>
        );
    } else return "error"

};

export default Fundraising;