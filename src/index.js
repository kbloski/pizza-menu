import React, { useState } from "react";
import ReactDom from 'react-dom/client';

import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App(){
    return <>
           <Header />
           <Menu />
           <Footer />

        </>
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);