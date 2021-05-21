import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Button} from "semantic-ui-react";

export default function Demand(){
    const history = useHistory();
    const routeChange = () =>{ 
        // let path = (`/demand/`+localStorage.getItem('order_demand_id'));
        // history.push(path);
    }

    const[ordersdemand, setOrdersdemand]= useState([]);
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    const[items, setItems]= useState([]);
    // useEffect(()=>{
    //   fetch("/items").then(response =>
    //       response.json().then(data=>{
    //         setItems(data)
    //       })
    //   );
    // },[]);
    const log=logname+":"+logpass;
  // useEffect(()=>{
  //   fetch("/user/order/special",{
  //       method: "GET",
  //       headers:{
  //           "Authorization": 'Basic ' + btoa(log),
  //           'Content-Type': 'application/json'
  //       }
  //   }).then(response =>
  //       response.json().then(data=>{
  //         setOrdersdemand(data)
  //       })
  //   );
  // },[log]);
  let x=0;

    return(
        <div className="wrapper row2" >
                
  <div className="rounded" >
    <main className="container clear"> 
    <div id="portfolio">
    <ul className="nospace clear" >
    {/*        {ordersdemand.map(orderdemand=>{*/}
    {/*            let id=orderdemand.order_demand_item_id;*/}
    {/*            if (x%3===0){*/}
    {/*                x++;*/}
    {/*            return(*/}
    {/*                <li   className="one_third first card" >*/}
    {/*                    <article>*/}
    {/*                    <h2>Id: {orderdemand.order_demand_id}</h2>*/}
    {/*                    <p className="">Name: {items[id-1].name} <br/>*/}
    {/*                    Price: {items[id-1].price}$<br/>*/}
    {/*                    Amount: {orderdemand.quantity_in_order_demand} pcs.</p>*/}
    {/*                    <Button onClick={async () =>{*/}
    {/*                const response = await fetch('/order/special/'+orderdemand.order_demand_id,{*/}
    {/*                    method:'GET',*/}
    {/*                    headers:{*/}
    {/*                        "Authorization": 'Basic ' + btoa(log),*/}
    {/*                        "Content-Type":"application/json"*/}
    {/*                    },*/}
    {/*                });*/}
    {/*                 if (response.ok){*/}
    {/*                     const json = await response.json();*/}
    {/*                     // localStorage.setItem('order_demand_item_id',json.order_demand_item_id);*/}
    {/*                     // localStorage.setItem('order_demand_id',json.order_demand_id);*/}
    {/*                     // localStorage.setItem('order_demand_user_id',json.order_demand_user_id);*/}
    {/*                     // localStorage.setItem('quantity_in_order_demand',json.quantity_in_order_demand);*/}
    {/*                     const res = await fetch('/items/'+orderdemand.order_demand_item_id,{*/}
    {/*                        method:'GET',*/}
    {/*                        headers:{*/}
    {/*                            "Authorization": 'Basic ' + btoa(log),*/}
    {/*                            "Content-Type":"application/json"*/}
    {/*                        },*/}
    {/*                    });*/}
    {/*                     // if (response.ok){*/}
    {/*                     //     const data = await res.json();*/}
    {/*                     //     localStorage.setItem('order_demand_item_name',data.name);*/}
    {/*                     //     localStorage.setItem('order_demand_item_price',data.price);*/}
    {/*                     //     routeChange();*/}
    {/*                     // }*/}
    {/*                 }*/}
    {/*            }}>Read more</Button>*/}
    {/*        </article>*/}
    {/*        </li>            */}
    {/*        )          */}
    {/*        }*/}
    {/*        if (x%3===1){*/}
    {/*            x++;*/}
    {/*        return(*/}
    {/*            <li   className="one_third card" >*/}
    {/*                <article>*/}
    {/*                <h2>Id: {orderdemand.order_demand_id}</h2>*/}
    {/*                    <p className="">Name: {items[id-1].name} <br/>*/}
    {/*                    Price: {items[id-1].price}$<br/>*/}
    {/*                    Amount: {orderdemand.quantity_in_order_demand} pcs.</p>*/}
    {/*                <Button onClick={async () =>{*/}
    {/*                const response = await fetch('/order/special/'+orderdemand.order_demand_id,{*/}
    {/*                    method:'GET',*/}
    {/*                    headers:{*/}
    {/*                        "Authorization": 'Basic ' + btoa(log),*/}
    {/*                        "Content-Type":"application/json"*/}
    {/*                    },*/}
    {/*                });*/}
    {/*                 if (response.ok){*/}
    {/*                     const json = await response.json();*/}
    {/*                     // localStorage.setItem('order_demand_item_id',json.order_demand_item_id);*/}
    {/*                     // localStorage.setItem('order_demand_id',json.order_demand_id);*/}
    {/*                     // localStorage.setItem('order_demand_user_id',json.order_demand_user_id);*/}
    {/*                     // localStorage.setItem('quantity_in_order_demand',json.quantity_in_order_demand);*/}
    {/*                     const res = await fetch('/items/'+orderdemand.order_demand_item_id,{*/}
    {/*                        method:'GET',*/}
    {/*                        headers:{*/}
    {/*                            "Authorization": 'Basic ' + btoa(log),*/}
    {/*                            "Content-Type":"application/json"*/}
    {/*                        },*/}
    {/*                    });*/}
    {/*                     // if (response.ok){*/}
    {/*                     //     const data = await res.json();*/}
    {/*                     //     localStorage.setItem('order_demand_item_name',data.name);*/}
    {/*                     //     localStorage.setItem('order_demand_item_price',data.price);*/}
    {/*                     //     routeChange();*/}
    {/*                     // }*/}
    {/*                 }*/}
    {/*            }}>Read more</Button>*/}
    {/*    </article>*/}
    {/*    </li>            */}
    {/*    )          */}
    {/*    }*/}
    {/*    if (x%3===2){*/}
    {/*        x++;*/}
    {/*    return(*/}
    {/*        <li   className="one_third card" >*/}
    {/*            <article>*/}
    {/*            <h2>Id: {orderdemand.order_demand_id}</h2>*/}
    {/*                    <p className="">Name: {items[id-1].name} <br/>*/}
    {/*                    Price: {items[id-1].price}$<br/>*/}
    {/*                    Amount: {orderdemand.quantity_in_order_demand} pcs.</p>*/}
    {/*            <Button onClick={async () =>{*/}
    {/*                const response = await fetch('/order/special/'+orderdemand.order_demand_id,{*/}
    {/*                    method:'GET',*/}
    {/*                    headers:{*/}
    {/*                        "Authorization": 'Basic ' + btoa(log),*/}
    {/*                        "Content-Type":"application/json"*/}
    {/*                    },*/}
    {/*                });*/}
    {/*                 if (response.ok){*/}
    {/*                     const json = await response.json();*/}
    {/*                     // localStorage.setItem('order_demand_item_id',json.order_demand_item_id);*/}
    {/*                     // localStorage.setItem('order_demand_id',json.order_demand_id);*/}
    {/*                     // localStorage.setItem('order_demand_user_id',json.order_demand_user_id);*/}
    {/*                     // localStorage.setItem('quantity_in_order_demand',json.quantity_in_order_demand);*/}
    {/*                     const res = await fetch('/items/'+orderdemand.order_demand_item_id,{*/}
    {/*                        method:'GET',*/}
    {/*                        headers:{*/}
    {/*                            "Authorization": 'Basic ' + btoa(log),*/}
    {/*                            "Content-Type":"application/json"*/}
    {/*                        },*/}
    {/*                    });*/}
    {/*                     if (response.ok){*/}
    {/*                         const data = await res.json();*/}
    {/*                         // localStorage.setItem('order_demand_item_name',data.name);*/}
    {/*                         // localStorage.setItem('order_demand_item_price',data.price);*/}
    {/*                         routeChange();*/}
    {/*                     }*/}
    {/*                 }*/}
    {/*            }}>Read more</Button>*/}
    {/*</article>*/}
    {/*</li>            */}
    {/*)          */}
    {/*}*/}
    {/*        })}*/}
            
        </ul>
            </div>
        </main>
    </div>
    </div>
        
    )
}