
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";



export const Register=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
        window.location.reload();
    }
    const routeChangeLogin = () =>{ 
        let path = `/login`; 
        history.push(path);
    }
    const [username, setUsername] = useState('')
    const [userpass, setPassword] = useState('')
    const [useremail, setEmail] = useState('')
    return(
        <div class="wrapper row2">
        <div class="rounded">
          <main class="container clear"> 
          <li   className="card" >
        <Form>
        <Form.Field>Or <Button size="mini" secondary onClick={routeChangeLogin}>Login</Button></Form.Field>
            <Form.Field>
                Username:
                <Input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                Email:
                <Input placeholder="email" value={useremail} onChange={e=>setEmail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                Password:
                <Input placeholder="password" value={userpass} onChange={e=>setPassword(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Button data-testid="submit" primary onClick={async () =>{
                    const item={username,useremail,userpass};
                    const response = await fetch('/user',{
                        method:'POST',
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                     if (response.ok){
                        const url = '/login';
                        const data = { 'useremail':  useremail,
                                        'password': userpass};
                        console.log(url,data);
                        try {
                          const response = await fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          });
                          const json = await response.json();
                          localStorage.setItem('username',json.username);
                          localStorage.setItem('useremail',useremail);
                          localStorage.setItem('userpass',userpass);
                          localStorage.setItem('user_id',json.user_id)
                                                  routeChange();
                        } catch (error) {
                          console.error('Ошибка:', error);
                        }
                     }

                }}>Register</Button>
            </Form.Field>
        </Form>
        </li>
                        </main>
              </div>
            </div>
    )
}