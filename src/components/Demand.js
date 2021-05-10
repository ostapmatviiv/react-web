import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {List, Header, Button,Card} from "semantic-ui-react";

export default function Demand(){
    const history = useHistory();
    const routeChange = () =>{ 
        let path = (`/demand/`+localStorage.getItem('order_demand_id')); 
        history.push(path);
    }
    const[ordersdemand, setOrdersdemand]= useState([]);
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    if(!logname || !logpass){
        console.log("Redirect");
    }
    const log=logname+":"+logpass;
  useEffect(()=>{
    fetch("/user/order/special",{
        method: "GET",
        headers:{
            "Authorization": 'Basic ' + btoa(log),
            'Content-Type': 'application/json'
        }
    }).then(response =>
        response.json().then(data=>{
          setOrdersdemand(data)
        })
    );
  },[log]);
    return(
        <List>
            {ordersdemand.map(orderdemand=>{
                return(
                    <List.Item key={orderdemand.order_demand_id}>
                        <Card>
                            <Header>Id: {orderdemand.order_demand_id}</Header>
                            <Button onClick={async () =>{
                    const response = await fetch('/order/special/'+orderdemand.order_demand_id,{
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
                         localStorage.setItem('order_demand_item_id',json.order_demand_item_id);
                         localStorage.setItem('order_demand_id',json.order_demand_id);
                         localStorage.setItem('order_demand_user_id',json.order_demand_user_id);
                         localStorage.setItem('quantity_in_order_demand',json.quantity_in_order_demand);
                         const res = await fetch('/items/'+orderdemand.order_demand_item_id,{
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
                             localStorage.setItem('order_demand_item_name',data.name);
                             localStorage.setItem('order_demand_item_price',data.price);
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