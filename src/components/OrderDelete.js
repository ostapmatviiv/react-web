import React from "react";
import { useHistory} from "react-router-dom";
import {Button, Form } from "semantic-ui-react";



export const OrderDelete=()=>{
    const history = useHistory();
    const routeBack = () =>{ 
        let path = `/order/`+localStorage.getItem('order_id'); 
        history.push(path);
        console.log(path)
    }
    const routeChange = () =>{ 
        let path = `/cart`; 
        history.push(path);
        console.log(path)
    }
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    if(!logname || !logpass){
        console.log("Redirect");
    }
    const log=logname+":"+logpass;
    return(
        <div class="wrapper row2">
        <div class="rounded">
          <main class="container clear"> 
          <li   className="card" >
        <Form>
            Are you sure?
            <Form.Field>
            <Button color="vk" onClick={routeBack}>Cancel</Button>
                    <Button color="youtube" onClick={async () =>{
                        const response = await fetch('/order/'+localStorage.getItem('order_id'),{
                            method:'Delete',
                            headers:{
                                "Authorization": 'Basic ' + btoa(log),
                                "Content-Type":"application/json"
                            },
                        });
                        if (response.ok===false){
                            alert("Bad input data")
                        }
                        if (response.ok){
                            alert("success");
                            setTimeout(routeChange, 1000);
                            localStorage.removeItem('order_id');
                            localStorage.removeItem('order_user_id');
                            localStorage.removeItem('quantity_in_order');
                            localStorage.removeItem('order_item_id');
                            localStorage.removeItem('order_item_name');
                            localStorage.removeItem('order_item_price');
                        }

                    }}>Delete</Button>
            </Form.Field>
        </Form>
        </li>
            </main>
  </div>
</div>
    )
}