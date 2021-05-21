import React from 'react'
import { useHistory} from "react-router-dom";
import { Header,Table ,Container,Form,Button} from "semantic-ui-react";


export const ProvisorOrderView=()=>{
    const history = useHistory();
    const routeChangeEdit = () =>{ 
        // let path = `/provisoredit/order`;
        // history.push(path);
    }
    const routeChangeDelete = () =>{ 
        // let path = `/provisordelete/order`;
        // history.push(path);
    }
    return(
        <Container>
            <Table>
            
                <Table.Row>
                    <Table.Cell>
                        <Header>Order ID: {localStorage.getItem('provisor_order_id')}</Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header>Order Item: {localStorage.getItem('provisor_order_item_name')}</Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header>Item quantity: {localStorage.getItem('provisor_quantity_in_order')}</Header>
                    </Table.Cell>  
                    <Table.Cell>
                        <Header>Order Price: {Number(localStorage.getItem('provisor_order_item_price'))*Number(localStorage.getItem('provisor_quantity_in_order'))}$</Header>
                    </Table.Cell>                   
                </Table.Row>
                <Table.Row><Table.Cell>
                <Form>
                <Form.Field>
                    <Button color='linkedin' onClick={routeChangeEdit}>Edit Order</Button>
                </Form.Field>
                </Form>
                </Table.Cell>
                <Table.Cell>
                    <Form>
                <Form.Field>
                    <Button color="youtube" onClick={routeChangeDelete}>Delete Order</Button>
                </Form.Field>
            </Form>
            </Table.Cell>
            </Table.Row>
                
            </Table>
        </Container>
    )
}