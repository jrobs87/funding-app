import React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {

    return (
        <Helmet>
            <title>
                Carputty Frontend Code Challenge
            </title>
            <link rel="icon" href="https://assets.website-files.com/601ae8f3553dea533cb5bfe3/6038ff7900244d333d9875ac_32x32%20Favicon%20white%20circle.png" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="icon" href="logo.png" />
            {/* <link rel="shortcut icon" type="image/x-icon"
                href="https://assets.website-files.com/601ae8f3553dea533cb5bfe3/6038ff7900244d333d9875ac_32x32%20Favicon%20white%20circle.png" /> */}
        </Helmet>
    )
}