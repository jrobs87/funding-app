import React from 'react';

export default function Messaging(props) {

    const days = props.days;
    const donations = props.donations;

    return (
        <>
            <h1>Only { days } days left to fund this project</h1>
            <h2>
                {
                    donations.length > 0 ?
                        <span>
                            Join the <strong>{ donations.length }</strong> { donations.length === 1 ? "other donor who has" : "other donors who have" } already supported this project.
                        </span>
                        :
                        <span>
                            Be the first to donate to this project and help us reach our funding goal!
                        </span>
                }
            </h2></>
    )
};