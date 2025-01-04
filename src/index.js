import "./index.css"
import React from "react";
import ReactDom from 'react-dom/client';

import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App(){
    return <div className="container">
           <Header />
           <Menu />
           <Footer />
        </div>
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);