import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Button,Image} from "semantic-ui-react";
import Sorbex from "./Images/sorbex.png"
import Mezym from "./Images/mezym.png"
import Ibuprofen from "./Images/ibuprofen.png"
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
    console.log(items)
    let x=0;
    return(
            <div className="wrapper row4" >
                
  <div className="rounded" >
    <main className="container clear card"> 
    <div id="portfolio">
    <ul className="nospace clear" >
            {items.map(item=>{
                if (x%3===0){
                    x++;
                return(
                    <li   className="one_third first card" >
                    <Image src={Sorbex}/>
                        <article>
                         <h2>{item.name}</h2>
                         <p className="">Price: {item.price}$</p>

                         <Button onClick={async () =>{
                    const response = await fetch('/items/'+item.item_id,{
                        method:'GET',
                        headers:{
                            "Content-Type":"application/json"
                        },
                    });
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
                </article>
          </li>
                )
                
            }
            else if(x%3===1){
                x++;
                return(

                                            <li className="one_third second card">
                    <Image src={Mezym}/>
                    <article>
                         <h2>{item.name}</h2>
                         <p className="">Price: {item.price}$</p>

                         <Button onClick={async () =>{
                    const response = await fetch('/items/'+item.item_id,{
                        method:'GET',
                        headers:{
                            "Content-Type":"application/json"
                        },
                    });
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
                </article>
            </li>
            )
            }
            else{
                x++;
                return(

                    <li className="one_third card">
                        <Image src={Ibuprofen}/>
<article>
                         <h2>{item.name}</h2>
                         <p className="">Price: {item.price}$</p>

                         <Button onClick={async () =>{
                    const response = await fetch('/items/'+item.item_id,{
                        method:'GET',
                        headers:{
                            "Content-Type":"application/json"
                        },
                    });
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