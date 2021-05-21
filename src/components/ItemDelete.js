import React from "react";
import { useHistory} from "react-router-dom";
import {Button, Form } from "semantic-ui-react";



export const ItemDelete=()=>{
    const history = useHistory();
    const routeBack = () =>{ 
        // let path = `/item/`+localStorage.getItem('item_id');
        // history.push(path);
        // console.log(path)
    }
    const routeChange = () =>{ 
        // let path = `/`;
        // history.push(path);
        // console.log(path)
    }
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
            Are you sure?
            <Form.Field>
            <Button color="vk" onClick={routeBack}>Cancel</Button>
                    <Button color="youtube" onClick={async () =>{
                        const response = await fetch('/provisor/items/'+localStorage.getItem('item_id'),{
                            method:'Delete',
                            headers:{
                                "Authorization": 'Basic ' + btoa(log),
                                "Content-Type":"application/json"
                            },
                        });

                        // if (response.ok){
                        //     alert("success");
                        //     setTimeout(routeChange, 1000);
                        //     localStorage.removeItem('item_id');
                        //     localStorage.removeItem('item_name');
                        //     localStorage.removeItem('item_describe');
                        //     localStorage.removeItem('item_price');
                        //     localStorage.removeItem('item_quantity');
                        //}

                    }}>Delete</Button>
            </Form.Field>
        </Form>
                    </li>
                    </main>
          </div>
        </div>
    )
}