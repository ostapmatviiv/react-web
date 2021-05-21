
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";



export const Buy=()=>{
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    if(!logname || !logpass){
        // console.log("Redirect");
    }
    const log=logname+":"+logpass;
    const history = useHistory();
    const routeChange = () =>{ 
        // let path = `/`;
        // history.push(path);
    }
    const [quantity_in_order, setQuantity] = useState('')
    const order_item_id=localStorage.getItem('item_id')
    return(
        <div class="wrapper row2">
        <div class="rounded">
          <main class="container clear"> 
          <li   className="card" >
        <Form>
            <Form.Field>
                Please, input amount
                <Input placeholder="Quantity" value={quantity_in_order} onChange={e=>setQuantity(e.target.value)}/>
            </Form.Field>

            <Form.Field>
                <Button onClick={async () =>{
                    const item={quantity_in_order,order_item_id};
                    const response = await fetch('/order',{
                        method:'POST',
                        headers:{
                            "Authorization": 'Basic ' + btoa(log),
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                     // if (response.ok){
                     //    routeChange();
                     //    }
                     }
                    }>Add to Cart</Button>
            </Form.Field>
        </Form>
        </li>
                                    </main>
                          </div>
                        </div>
    )
}