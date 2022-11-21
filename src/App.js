import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';

function App() {
    return (
        <Router>
            <div className="app">
            <Header/>
                <Routes>
                    {/* Login Route */}
                    <Route path='/login' element={
                    <h1>
                    Welcome To The Login Page
                      </h1>
                    }/>
                    {/* Checkout Route */}
                    <Route path='/checkout' element={<>
                      <Checkout/>
                      </>
                    }/>
                    
                    {/* Home Route */}
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
