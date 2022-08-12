import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home"
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer/Footer';
import { Profile } from './components/Profile/Profile';
import { Catalog } from './components/Catalog/Catalog';

import "./App.css"
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
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/catalog/:gameId" />
                    <Route path="/profile/*" element={<Profile />}/>
                    <Route path="/catalog/most-wanted" />
                </Routes>
            </main>
            <Footer/>
        </div>
        
    );
}

export default App;
