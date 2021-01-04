import React from 'react';
import Head from "next/head"
import Navbar from "./Shared/Navbar"
const MainLayout = ({children}) => {

    return (
        <>
            <Head>
                <title>Alperen Arıkan | Frontend Developer</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
}

export default MainLayout;
