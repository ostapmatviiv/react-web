import React, {useState} from 'react'

import {Button, Form, Input} from "semantic-ui-react";

export const ItemForm = ({onNewItem}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [describe, setDescribe] = useState('');


    return(
        <Form>
            <Form.Field>
                <Input placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input placeholder="price" value={price} onChange={e=>setPrice(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input placeholder="quantity" value={quantity} onChange={e=>setQuantity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input placeholder="description" value={describe} onChange={e=>setDescribe(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Button onClick={async () =>{
                    const item={name,price,quantity,describe};
                    let username=localStorage.getItem('provisoremail');
                    let password=localStorage.getItem('provisorpass');
                    if(!username || !password){
                        console.log("Redirect");
                    }
                    const log=username+":"+password;
                    const response = await fetch('/provisor/add',{
                        method:'POST',
                        headers:{
                            "Authorization": 'Basic ' + btoa(log),
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    if (response.ok){
                        onNewItem(item);
                        alert("New item added successful")

                    }
                }}>Submit</Button>
            </Form.Field>
        </Form>
    )
}