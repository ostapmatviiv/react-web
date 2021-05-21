import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Button} from "semantic-ui-react";

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
    const[items, setItems]= useState([]);
  useEffect(()=>{
    fetch("/items").then(response =>
        response.json().then(data=>{
          setItems(data)
        })
    );
  },[]);
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
  let x=0;

    return(
        <div className="wrapper row2" >
                
  <div className="rounded" >
    <main className="container clear"> 
    <div id="portfolio">
    <ul className="nospace clear" >
            {orders.map(order=>{
                let id=order.order_item_id;
                if (x%3===0){
                    x++;
                return(
                    <li   className="one_third first card" >
                        <article>
                        <h2>Id: {order.order_id}</h2>
                        <p className="">Name: {items[id-1].name} <br/>
                        Price: {items[id-1].price}$<br/>
                        Amount: {order.quantity_in_order} pcs.</p>
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
                     if (response.ok){
                         const data = await res.json();
                         localStorage.setItem('order_item_name',data.name);
                         localStorage.setItem('order_item_price',data.price);
                         routeChange();
                     }
                 }
            }}>Read more</Button>
            </article>
            </li>            
            )          
            }
            if (x%3===1){
                x++;
            return(
                <li   className="one_third card" >
                    <article>
                    <h2>Id: {order.order_id}</h2>
                    <p className="">Name: {items[id-1].name} <br/>
                    Price: {items[id-1].price}$<br/>
                    Amount: {order.quantity_in_order} pcs.</p>
                    <Button onClick={async () =>{
            const response = await fetch('/order/'+order.order_id,{
                method:'GET',
                headers:{
                    "Authorization": 'Basic ' + btoa(log),
                    "Content-Type":"application/json"
                },
            });
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
                 if (response.ok){
                     const data = await res.json();
                     localStorage.setItem('order_item_name',data.name);
                     localStorage.setItem('order_item_price',data.price);
                     routeChange();
                 }
             }
        }}>Read more</Button>
        </article>
        </li>            
        )          
        }
        if (x%3===2){
            x++;
        return(
            <li   className="one_third card" >
                <article>
                <h2>Id: {order.order_id}</h2>
                <p className="">Name: {items[id-1].name} <br/>
                Price: {items[id-1].price}$<br/>
                Amount: {order.quantity_in_order} pcs.</p>
                <Button onClick={async () =>{
        const response = await fetch('/order/'+order.order_id,{
            method:'GET',
            headers:{
                "Authorization": 'Basic ' + btoa(log),
                "Content-Type":"application/json"
            },
        });
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
             if (response.ok){
                 const data = await res.json();
                 localStorage.setItem('order_item_name',data.name);
                 localStorage.setItem('order_item_price',data.price);
                 routeChange();
             }
         }
    }}>Read more</Button>
    </article>
    </li>            
    )          
    }
            })}
            
        </ul>
            </div>
        </main>
    </div>
    </div>
        
    )
}