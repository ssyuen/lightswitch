import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Portfolio} from "./components/Portfolio";
import {About} from "./components/About";
import {Comparison} from "./components/Comparison";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/comparison"} element={<Comparison/>}/>
            <Route path={"/portfolio"} element={<Portfolio/>}/>
        </Routes>

    </BrowserRouter>,
    document.getElementById('root')
)
