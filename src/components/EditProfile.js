import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import {Button, Form , Input} from "semantic-ui-react";



export const EditProfile=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/profile`; 
        history.push(path);
    }
    const [username, setUsername] = useState(localStorage.getItem('username'))
    const [useremail, setEmail] = useState(localStorage.getItem('useremail'))
    const [userpass, setPassword] = useState(localStorage.getItem('userpass'));
    const [provisorname, setProvisorname] = useState(localStorage.getItem('provisorname'))
    const [provisoremail, setprovisorEmail] = useState(localStorage.getItem('provisoremail'))
    const [provisorpass, setProvisorpass] = useState(localStorage.getItem('provisorpass'));
    if(localStorage.getItem('username')){

        let logname=localStorage.getItem('useremail');
        let logpass=localStorage.getItem('userpass');
        if(!logname || !logpass){
            console.log("Redirect");
        }
        const log=logname+":"+logpass;
        return(
            <Form>
                <Form.Field>
                    <Input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder="email" value={useremail} onChange={e=>setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder="password" value={userpass} onChange={e=>setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Button.Group>
                    <Button onClick={routeChange}>Cancel</Button>
                    <Button.Or />
                    <Button positive onClick={async () =>{
                        const item={username,useremail,userpass};
                        const response = await fetch('/user/'+localStorage.getItem('user_id'),{
                            method:'PUT',
                            headers:{
                                "Authorization": 'Basic ' + btoa(log),
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify(item)
                        });
                        if (response.ok===false){
                            alert("Bad input data")
                        }
                        if (response.ok){
                            alert("success");
                            setTimeout(routeChange, 300);
                            localStorage.setItem('username',username);
                            localStorage.setItem('useremail',useremail);
                            localStorage.setItem('userpass',userpass);
                        }

                    }}>Save</Button>
                </Button.Group>
                </Form.Field>
            </Form>
        )
    }
    else if(localStorage.getItem('provisorname')){

        let logname=localStorage.getItem('provisoremail');
        let logpass=localStorage.getItem('provisorpass');
        if(!logname || !logpass){
            console.log("Redirect");
        }
        const log=logname+":"+logpass;
        return(
            <Form>
                <Form.Field>
                    <Input placeholder="provisorname" value={provisorname} onChange={e=>setProvisorname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder="email" value={provisoremail} onChange={e=>setprovisorEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder="password" value={provisorpass} onChange={e=>setProvisorpass(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Button.Group>
                    <Button onClick={routeChange}>Cancel</Button>
                    <Button.Or />
                    <Button positive onClick={async () =>{
                        const item={provisorname,provisoremail,provisorpass};
                        const response = await fetch('/provisor/'+localStorage.getItem('provisor_id'),{
                            method:'PUT',
                            headers:{
                                "Authorization": 'Basic ' + btoa(log),
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify(item)
                        });
                        if (response.ok===false){
                            alert("Bad input data")
                        }
                        if (response.ok){
                            alert("success");
                            setTimeout(routeChange, 300);
                            localStorage.setItem('provisorname',provisorname);
                            localStorage.setItem('provisoremail',provisoremail);
                            localStorage.setItem('provisorpass',provisorpass);
                        }

                    }}>Save</Button>
                </Button.Group>
                </Form.Field>
            </Form>
        )
    }
}