import Navbar from "../Navbar";
import ReactDOM from "react-dom"
import React from "react"
import {BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";



//Nav
it("Nav renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Navbar/></Router>,div);
})
