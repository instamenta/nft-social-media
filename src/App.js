//import { useEffect, useState, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home"
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import "./App.css"
import { Footer } from './components/Footer';

function App() {


    return (
        <div id="box" className='box'>
            <Navbar />
            
            <main id="main-content" className='main-content'>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/create"  />
                    <Route path="/catalog" />
                    <Route path="/catalog/:gameId" />
                </Routes>
            </main>
            <Footer/>
        </div>
        
    );
}

export default App;
