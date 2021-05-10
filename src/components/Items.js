import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {List, Header, Button,Card} from "semantic-ui-react";

export const Items=()=>{
    const[items, setItems]= useState([]);
  useEffect(()=>{
    fetch("/items").then(response =>
        response.json().then(data=>{
          setItems(data)
        })
    );
  },[]);
    const history = useHistory();
    const routeChange = () =>{ 
        let path = (`/item/`+localStorage.getItem('item_id')); 
        history.push(path);
    }
    return(
        <List>
            {items.map(item=>{
                return(
                    <List.Item key={item.name}>
                        <Card>
                        <Header>Name: {item.name}</Header>
                        <p className="">Price: {item.price}$</p>

                        <Button onClick={async () =>{
                    const response = await fetch('/items/'+item.item_id,{
                        method:'GET',
                        headers:{
                            "Content-Type":"application/json"
                        },
                    });
                     if (response.ok===false){
                        alert("Bad input data")
                     }
                     if (response.ok){
                         const json = await response.json();
                         console.log(json);
                         localStorage.setItem('item_name',json.name);
                         localStorage.setItem('item_describe',json.describe);
                         localStorage.setItem('item_id',json.item_id);
                         localStorage.setItem('item_price',json.price);
                         localStorage.setItem('item_quantity',json.quantity);
                        routeChange();
                     }

                }}>Read more</Button>
                                        </Card>
                    </List.Item>
                )
            })}
            
        </List>
        
    )
}