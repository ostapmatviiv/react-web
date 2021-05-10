import React,{useEffect} from 'react'
import { Header,Table ,Container} from "semantic-ui-react";


export const OrderDemand=()=>{
    let logname=localStorage.getItem('useremail');
    let logpass=localStorage.getItem('userpass');
    if(!logname || !logpass){
        console.log("Redirect");
    }
    const log=logname+":"+logpass;
    useEffect(()=>{
        fetch("/items/"+localStorage.getItem('order_demand_item_id'),{
            method: "GET",
            headers:{
                "Authorization": 'Basic ' + btoa(log),
                'Content-Type': 'application/json'
            }
        }).then(response =>
            response.json().then(data=>{
                console.log(data);
              localStorage.setItem('order_demand_item_name',data.name);
              localStorage.setItem('order_demand_item_price',data.price);
            })
        );
      },[log]);
    return(
        <Container>
            <Table>
            
                <Table.Row>
                    <Table.Cell>
                        <Header>Order ID: {localStorage.getItem('order_demand_id')}</Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header>Order Item: {localStorage.getItem('order_demand_item_name')}</Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header>Item quantity: {localStorage.getItem('quantity_in_order_demand')}</Header>
                    </Table.Cell>  
                    <Table.Cell>
                        <Header>Order Price: {Number(localStorage.getItem('order_demand_item_price'))*Number(localStorage.getItem('quantity_in_order_demand'))}$</Header>
                    </Table.Cell>                   
                </Table.Row>
            </Table>
        </Container>
    )
}