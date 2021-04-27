import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { css } from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';
import Header from './components/Header';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    const [loading, setLoading] = useState(false);
    const override = css
        `
    display:block;
    border-color:red;
    margin-top:20%;
    `;

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])
    return (
        <div className="App">
            {
                loading ? <PropagateLoader color={'#3d2514'} Loading={loading} css={override} size={40} />
                    :
                    <>
                        <Navbar />
                        <Header />
                        <Product />
                        <About />
                        <Contact />
                    </>
            }
        </div>
    );
}

export default App;
