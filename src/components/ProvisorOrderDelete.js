import React from "react";
import { useHistory} from "react-router-dom";
import {Button, Form } from "semantic-ui-react";



export const ProvisorOrderDelete=()=>{
    const history = useHistory();
    const routeBack = () =>{ 
        let path = `/provisor/orders/`+localStorage.getItem('provisor_order_id'); 
        history.push(path);
        console.log(path)
    }
    const routeChange = () =>{ 
        let path = `/provisor/orders`; 
        history.push(path);
        console.log(path)
    }
    let logname=localStorage.getItem('provisoremail');
    let logpass=localStorage.getItem('provisorpass');
    if(!logname || !logpass){
        console.log("Redirect");
    }
    const log=logname+":"+logpass;
    return(
        <Form>
            Are you sure?
            <Form.Field>
            <Button color="vk" onClick={routeBack}>Cancel</Button>
                    <Button color="youtube" onClick={async () =>{
                        const response = await fetch('/provisor/order/'+localStorage.getItem('provisor_order_id'),{
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
                            localStorage.removeItem('provisor_order_id');
                            localStorage.removeItem('provisor_order_user_id');
                            localStorage.removeItem('provisor_quantity_in_order');
                            localStorage.removeItem('provisor_order_item_id');
                            localStorage.removeItem('provisor_order_item_name');
                            localStorage.removeItem('provisor_order_item_price');
                        }

                    }}>Delete</Button>
            </Form.Field>
        </Form>
    )
}