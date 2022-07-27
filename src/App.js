//import { useEffect, useState, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/navbar/navbar"
import "./App.css"
function App() {


    return (
        <div id="box">
            <Navbar />  
            <main id="main-content">
                <Routes>
                    <Route path="/" />
                    <Route path="/login" />
                    <Route path="/register" />
                    <Route path="/create"  />
                    <Route path="/catalog" />
                    <Route path="/catalog/:gameId" />
                </Routes>
            </main>
        </div>
    );
}

export default App;
