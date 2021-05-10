import React, {useEffect, useState} from 'react'
import './App.css';
import {Items} from "./components/Items"
import {Profile} from "./components/Profile"
import {ItemForm} from "./components/ItemsForm";
import Login from "./components/Login"
import {Register} from "./components/Register"
import {EditProfile} from "./components/EditProfile"
import {Delete} from "./components/Delete"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { Logout } from './components/Logout';
import {Item} from './components/Item';
import Footer1 from './components/Footer/Footer';
import { ItemEdit } from './components/ItemEdit';
import { Cart } from './components/Cart';
import { ItemDelete } from './components/ItemDelete';
import { Order } from './components/Order';
import {OrderEdit} from './components/OrderEdit'
import { OrderDelete } from './components/OrderDelete';
import { Buy } from './components/Buy';
import Demand from './components/Demand'
import {Reserve} from './components/Reserve'
import {OrderDemand} from './components/OrderDemand'
import {ProvisorOrders} from './components/ProvisorOrders'
import { ProvisorOrderView } from './components/ProvisorOrderView';
import { ProvisorOrderEdit } from './components/ProvisorOrderEdit';
import { ProvisorOrderDelete } from './components/ProvisorOrderDelete'

function App() {
  const[items, setItems]= useState([]);
  useEffect(()=>{
    fetch("/items").then(response =>
        response.json().then(data=>{
          setItems(data)
        })
    );
  },[]);

  return (
<Router>
    <Navbar/>

      <Switch>
        <Route path="/" exact>
        <Items/>
        </Route>
        <Route path="/add" exact>
          <ItemForm onNewItem={item => setItems(currentItems=>[item,...currentItems])}/>
          <Items items={items}/>
        </Route>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/edit">
          <EditProfile/>
        </Route>
        <Route exact path="/delete">
          <Delete/>
        </Route>
        <Route path="/item">
          <Item/>
        </Route>
        <Route path="/edit/item">
          <ItemEdit/>
        </Route>
        <Route path="/delete/item">
          <ItemDelete/>
        </Route>
        <Route path='/order'>
          <Order/>
        </Route>
        <Route exact path='/edit/order'>
          <OrderEdit/>
        </Route>
        <Route exact path='/delete/order'>
          <OrderDelete/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/buy">
          <Buy/>
        </Route>
        <Route path="/reserve">
          <Reserve/>
        </Route>
        <Route path='/cartdemand'>
          <Demand/>
        </Route>
        <Route path="/demand">
          <OrderDemand/>
        </Route>
        <Route exact path="/provisor/orders">
          <ProvisorOrders/>
        </Route>
        <Route path='/provisor/orders/'>
          <ProvisorOrderView/>
        </Route>
        <Route exact path="/provisoredit/order">
          <ProvisorOrderEdit/>
        </Route>
        <Route>
          <ProvisorOrderDelete/>
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer1/> 
   </Router>  
      

);
}

export default App;