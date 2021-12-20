import React from 'react';
import './index.scss';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            John Robertson | <a href="mailto:jwilliamrob@gmail.com">jwilliamrob@gmail.com</a> | { year }
        </footer>
    )
};