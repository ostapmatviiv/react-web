import React, { Fragment } from 'react';
import { useHistory} from "react-router-dom";
import {Form, Button,Icon,Image,Header, Table} from "semantic-ui-react";
import "./style.css"
import myImage from './Images/mezym.png'

export const Item=()=>{
    const history = useHistory();
    const routeChangeEdit = () =>{ 
        let path = `/edit/item`; 
        history.push(path);        
    }
    const routeChangeDelete = () =>{ 
        let path = `/delete/item`; 
        history.push(path);       
    }
    const routeDemand = () =>{ 
        let path = `/reserve`; 
        history.push(path);       
    }
    const routeBuy = () =>{ 
        let path = `/buy`; 
        history.push(path);       
    }
    return(
        <div class="wrapper row2">
        <div class="rounded">
          <main class="container clear"> 
          <li   className="card" >
            <Table>
            
                <Table.Row>
                    <Table.Cell>
                        <Image src={myImage} size="medium"/>
                    </Table.Cell>
                    <Table.Cell>
                        <Header>Name: {localStorage.getItem('item_name')}</Header>
                    </Table.Cell>                    
                </Table.Row>
                
                <Table.Row>
                <Table.Cell><Header>Description: {localStorage.getItem('item_describe')}</Header>
                    </Table.Cell>
                <Table.Cell>
                    <Header>Price: {localStorage.getItem('item_price')}$</Header>
                    </Table.Cell>
                {localStorage.getItem('item_quantity')>0?(
                        <Table.Cell positive>
                            <h>In Stock</h>
                        </Table.Cell>
                ):(<Table.Cell negative>
                    <h>Not Available</h>
                </Table.Cell>)}
                    
                    <Table.Cell>
                <Form>
                    {localStorage.getItem('provisorname')?
                    (<Fragment>
                    <Form.Field>
                            <Button onClick={routeChangeEdit}>Edit Item</Button>
                        </Form.Field>
                        <Form.Field>
                            <Button color="red" onClick={routeChangeDelete}>Delete Item</Button>
                        </Form.Field>
                    </Fragment> ):null}
                    {localStorage.getItem('useremail')?(
                        <Fragment>
                        {localStorage.getItem('item_quantity')>0?(
                        <Form.Field>
                            <Button animated='vertical' onClick={routeBuy}>
                                <Button.Content hidden>123</Button.Content>
                                <Button.Content visible>
                                    <Icon name='shop' />
                                </Button.Content>
                            </Button>
                        </Form.Field>):(
                            <Form.Field>
                            <Button animated='horisontal' onClick={routeDemand}>
                                <Button.Content hidden>Demand</Button.Content>
                                <Button.Content visible>
                                    <Icon name='shop' />
                                </Button.Content>
                            </Button>
                        </Form.Field>
                        )}</Fragment>):null}
                </Form>
                </Table.Cell>
                </Table.Row>
            </Table>
                                    </li>
                                    </main>
                          </div>
                        </div>
    )
}