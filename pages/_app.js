import React from 'react';
import '../css/styles.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <style jsx global> 
                {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`}
            </style>
            <Header />
            <Navbar />
            <div className="container mx-auto">
                <Component {...pageProps} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default MyApp;