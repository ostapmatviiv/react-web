import ReactDOM from "react-dom"
import React from "react"
import {BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Footer1 from "./Footer";



//Nav
it("Nav renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Footer1/></Router>,div);
})
