import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";
export const Login=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
        window.location.reload();
        
    }
    const [useremail, setUseremail] = useState('')
    const [password, setPassword] = useState('')
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('provisorpass');
    localStorage.removeItem('provisorname');
    return(
        <Form>
            <Form.Field>
                <Input type="username" placeholder="username" value={useremail} onChange={e=>setUseremail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Button onClick={async () =>{
                    const item={useremail,password};
                    const res = await fetch('/login',{
                        method:'POST',
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(item)
                    });
                     if (res.ok===false){
                        alert("BAD DATA!!!");

                     }
                     if (res.status===200){

                         let result = await res.json();
                        if(result.message==='Success user'){
                            localStorage.setItem('username',result.username);
                            localStorage.setItem('useremail',useremail);
                            localStorage.setItem('userpass',password);
                            localStorage.setItem('user_id',result.user_id)
                        }
                        else if(result.message==='Success provisor'){
                            localStorage.setItem('provisorname',result.provisorname);
                            localStorage.setItem('provisoremail',useremail);
                            localStorage.setItem('provisorpass',password);
                            localStorage.setItem('provisor_id',result.provisor_id)
                        }
                        routeChange();
                     }

                }}>Submit</Button>
            </Form.Field>
        </Form>
    )
}

export default Login;