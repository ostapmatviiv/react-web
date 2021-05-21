import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";



export const ItemEdit=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/item/`+localStorage.getItem('item_id'); 
        history.push(path);
        console.log(path)
    }

    const [name, setName] = useState(localStorage.getItem('item_name'))
    const [describe, setDescribe] = useState(localStorage.getItem('item_describe'))
    const [price, setPrice] = useState(localStorage.getItem('item_price'));
    const [quantity, setQuantity] = useState(localStorage.getItem('item_quantity'));
    let logname=localStorage.getItem('provisoremail');
    let logpass=localStorage.getItem('provisorpass');
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
                Name
                <Input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                Description
                <Input placeholder="Description" value={describe} onChange={e=>setDescribe(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                Price in $
                <Input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                Quantity
                <Input placeholder="Quantity" value={quantity} onChange={e=>setQuantity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Button.Group>
                <Button data-testid="submit1" onClick={routeChange}>Cancel</Button>
                <Button.Or />
                <Button data-testid="submit2" positive onClick={async () =>{
                    const item={name,describe,price,quantity};
                    const response = await fetch('/provisor/items/'+localStorage.getItem('item_id'),{
                        method:'PUT',
                        headers:{
                            "Authorization": 'Basic ' + btoa(log),
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    // if (response.ok){
                    //     alert("success");
                    //     setTimeout(routeChange, 300);
                    //     localStorage.setItem('item_name',name);
                    //     localStorage.setItem('item_describe',describe);
                    //     localStorage.setItem('item_price',price);
                    //     localStorage.setItem('item_quantity',quantity);
                    // }

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