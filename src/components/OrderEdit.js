import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";

export const OrderEdit=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/order/`+localStorage.getItem('order_id'); 
        history.push(path);
        console.log(path)
    }
    let order_item_id=localStorage.getItem('order_item_id')
    const [quantity_in_order, setQuantity] = useState(localStorage.getItem('quantity_in_order'));
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
            <Form.Field>
                Quantity
                <Input placeholder="Quantity" value={quantity_in_order} onChange={e=>setQuantity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Button.Group>
                <Button onClick={routeChange}>Cancel</Button>
                <Button.Or />
                <Button positive onClick={async () =>{
                    const item={order_item_id,quantity_in_order};
                    const response = await fetch('/order/'+localStorage.getItem('order_id'),{
                        method:'PUT',
                        headers:{
                            "Authorization": 'Basic ' + btoa(log),
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    if (response.ok===false){
                        console.log(response)
                        alert("Bad input data")
                    }
                    if (response.ok){
                        alert("success");
                        setTimeout(routeChange, 300);
                        localStorage.setItem('quantity_in_order',quantity_in_order);
                    }

                }}>Save</Button>
            </Button.Group>
            </Form.Field>
        </Form>
                    </li>
                    </main>
          </div>
        </div>
    )
}