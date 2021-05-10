
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";



export const Reserve=()=>{
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    if(!logname || !logpass){
        console.log("Redirect");
    }
    const log=logname+":"+logpass;
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
        window.location.reload();
    }
    const [quantity_in_order_demand, setQuantity] = useState('')
    const order_demand_item_id=localStorage.getItem('item_id')
    return(
        <Form>
            <Form.Field>
            Please, input Quantity of item
                <Input placeholder="Quantity" value={quantity_in_order_demand} onChange={e=>setQuantity(e.target.value)}/>
            </Form.Field>

            <Form.Field>
                <Button onClick={async () =>{
                    const item={quantity_in_order_demand,order_demand_item_id};
                    const response = await fetch('/order/special',{
                        method:'POST',
                        headers:{
                            "Authorization": 'Basic ' + btoa(log),
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                     if (response.ok===false){
                        alert("Bad input data")
                     }
                     if (response.ok){
                        routeChange();
                        }
                     }
                    }>Add to Demand</Button>
            </Form.Field>
        </Form>
    )
}