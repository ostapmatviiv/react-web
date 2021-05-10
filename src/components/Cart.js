import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {List, Header, Button,Card} from "semantic-ui-react";

export const Cart=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = (`/order/`+localStorage.getItem('order_id')); 
        history.push(path);
    }
    const[orders, setOrders]= useState([]);
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    if(!logname || !logpass){
        console.log("Redirect");
    }

    const log=logname+":"+logpass;
  useEffect(()=>{
    fetch("/user/order",{
        method: "GET",
        headers:{
            "Authorization": 'Basic ' + btoa(log),
            'Content-Type': 'application/json'
        }
    }).then(response =>
        response.json().then(data=>{
          setOrders(data)
        })
    );
  },[log]);
    return(
        <List>
            {orders.map(order=>{
                return(
                    <List.Item key={order.order_id}>
                        <Card>
                            <Header>Id: {order.order_id}</Header>
                            <Button onClick={async () =>{
                    const response = await fetch('/order/'+order.order_id,{
                        method:'GET',
                        headers:{
                            "Authorization": 'Basic ' + btoa(log),
                            "Content-Type":"application/json"
                        },
                    });
                     if (response.ok===false){
                        alert("Bad input data")
                     }
                     if (response.ok){
                         const json = await response.json();
                         localStorage.setItem('order_item_id',json.order_item_id);
                         localStorage.setItem('order_id',json.order_id);
                         localStorage.setItem('order_user_id',json.order_user_id);
                         localStorage.setItem('quantity_in_order',json.quantity_in_order);

                         const res = await fetch('/items/'+order.order_item_id,{
                            method:'GET',
                            headers:{
                                "Authorization": 'Basic ' + btoa(log),
                                "Content-Type":"application/json"
                            },
                        });
                         if (response.ok===false){
                            alert("Bad input data")
                         }
                         if (response.ok){
                             const data = await res.json();
                             localStorage.setItem('order_item_name',data.name);
                             localStorage.setItem('order_item_price',data.price);
                             routeChange();
                         }
                     }
                }}>Read more</Button>
                        </Card>
                    </List.Item>
                )
            })}
            
        </List>
        
    )
}