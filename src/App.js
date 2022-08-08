//import { useEffect, useState, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home"
import "./App.css"

function App() {


    return (
        <div id="box" className='box'>
            <Navbar />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
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
