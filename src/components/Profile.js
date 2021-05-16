import React, { Fragment } from 'react';
import { useHistory} from "react-router-dom";
import {Form, Button,Card,Image} from "semantic-ui-react";

export const Profile=()=>{ 
    const history = useHistory();
    const routeChangeEdit = () =>{ 
        let path = `/edit`; 
        history.push(path);        
    }
    const routeChangeDelete = () =>{ 
        let path = `/delete`; 
        history.push(path);       
    }
    let logname="";
    let logpass="";
    if(localStorage.getItem('useremail')){
        logname=localStorage.getItem('useremail');
        logpass=localStorage.getItem('userpass');
    }
    if(localStorage.getItem('provisoremail')){
        logname=localStorage.getItem('provisoremail');
        logpass=localStorage.getItem('provisorpass');
    }

    const log=logname+':'+logpass;
    console.log(log);

    return(
        <div class="wrapper row2">
  <div class="rounded">
    <main class="container clear"> 
    <li   className="card" > 
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size="medium" circular />
            {localStorage.getItem('useremail')?(
                <Fragment>
                <Card.Content>Username: {localStorage.getItem('useremail')}</Card.Content>
                <Card.Content>Password: {localStorage.getItem('userpass')}</Card.Content>
                </Fragment>
            ):null}
            {localStorage.getItem('provisoremail')?(
                <Fragment>
                <Card.Content>Provisorname: {localStorage.getItem('provisorname')}</Card.Content>
                <Card.Content>Password: {localStorage.getItem('provisorpass')}</Card.Content>
                </Fragment>
                ):null}
            <Form>
                <Form.Field>
                    <Button color='linkedin' onClick={routeChangeEdit}>Edit Profile</Button>
                </Form.Field>
                <Form.Field>
                    <Button color="youtube" onClick={routeChangeDelete}>Delete Profile</Button>
                </Form.Field>
            </Form>
            </li>
            </main>
  </div>
</div>
    )
}