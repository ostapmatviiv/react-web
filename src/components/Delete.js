import React from "react";
import { useHistory} from "react-router-dom";
import {Button, Form } from "semantic-ui-react";



export const Delete=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        // let path = `/`;
        // history.push(path);
        // window.location.reload();
    }
    const routeBack=()=>{
        // let path = '/profile';
        // history.push(path);
    }
//     if(localStorage.getItem('useremail')){
//         let logname=localStorage.getItem('useremail');
//         let logpass=localStorage.getItem('userpass');
//         if(!logname || !logpass){
//             console.log("Redirect");
//         }
//         const log=logname+":"+logpass;
//         return(
//             <div class="wrapper row2">
//             <div class="rounded">
//               <main class="container clear">
//               <li   className="card" >
//             <Form>
//                 <Form.Field>Are you sure?
//                 </Form.Field>
//                 <Form.Field>
//                     <Button color="twitter" onClick={routeBack}>Cancel</Button>
//                     <Button color="youtube" onClick={async () =>{
//                         const response = await fetch('/user/'+localStorage.getItem('user_id'),{
//                             method:'Delete',
//                             headers:{
//                                 "Authorization": 'Basic ' + btoa(log),
//                                 "Content-Type":"application/json"
//                             },
//                         });
//                         if (response.ok===false){
//                             alert("Bad input data")
//                         }
//                         if (response.ok){
//                             alert("success");
//                             setTimeout(routeChange, 1000);
//                             localStorage.removeItem('user_id');
//                             localStorage.removeItem('username');
//                             localStorage.removeItem('useremail');
//                             localStorage.removeItem('userpass');
//                         }
//
//                     }}>Delete</Button>
//                 </Form.Field>
//             </Form>
//             </li>
//             </main>
//   </div>
// </div>
//         )
//     }
    // else if(localStorage.getItem('provisoremail')){
    //     let logname=localStorage.getItem('provisoremail');
    //     let logpass=localStorage.getItem('provisorpass');
    //     if(!logname || !logpass){
    //         console.log("Redirect");
    //     }
    //     const log=logname+":"+logpass;
    //     return(
    //         <div class="wrapper row2">
    //         <div class="rounded">
    //           <main class="container clear">
    //           <li   className="card" >
    //         <Form>
    //             <Form.Field>Are you sure?
    //             </Form.Field>
    //             <Form.Field>
    //             <Button color="vk" onClick={routeBack}>Cancel</Button>
    //                 <Button color="youtube" onClick={async () =>{
    //                     const response = await fetch('/provisor/'+localStorage.getItem('provisor_id'),{
    //                         method:'Delete',
    //                         headers:{
    //                             "Authorization": 'Basic ' + btoa(log),
    //                             "Content-Type":"application/json"
    //                         },
    //                     });
    //                     if (response.ok===false){
    //                          alert("Bad input data")
    //                     }
    //                     if (response.ok){
    //                         alert("success");
    //                         setTimeout(routeChange, 300);
    //                         localStorage.removeItem('provisor_id');
    //                         localStorage.removeItem('provisorname');
    //                         localStorage.removeItem('provisoremail');
    //                         localStorage.removeItem('provisorpass');
    //                     }
    //
    //                 }}>Delete</Button>
    //             </Form.Field>
    //         </Form>
    //                     </li>
    //                     </main>
    //           </div>
    //         </div>
    //     )
    // }
    return (

        <div className="wrapper row2">
            <div className="rounded">
                <main className="container clear">
                    <li className="card">
                        <Form>
                            <Form.Field>Are you sure?
                            </Form.Field>
                            <Form.Field>
                                <Button data-testid="submit1" color="twitter" onClick={routeBack}>Cancel</Button>
                                <Button data-testid="submit2" color="youtube" onClick={async () => {
                                    const response = await fetch('/user/' + localStorage.getItem('user_id'), {
                                        method: 'Delete',
                                        // headers: {
                                        //     "Authorization": 'Basic ' + btoa(log),
                                        //     "Content-Type": "application/json"
                                        // },
                                    });

                                    // if (response.ok) {
                                    //     alert("success");
                                    //     setTimeout(routeChange, 1000);
                                    //     localStorage.removeItem('user_id');
                                    //     localStorage.removeItem('username');
                                    //     localStorage.removeItem('useremail');
                                    //     localStorage.removeItem('userpass');
                                    // }

                                }}>Delete</Button>
                            </Form.Field>
                        </Form>
            <Form>
                <Form.Field>Are you sure?
                </Form.Field>
                <Form.Field>
                <Button data-testid="submit3" color="vk" onClick={routeBack}>Cancel</Button>
                    <Button data-testid="submit4" color="youtube" onClick={async () =>{
                        const response = await fetch('/provisor/'+localStorage.getItem('provisor_id'),{
                            method:'Delete',
                            // headers:{
                            //     "Authorization": 'Basic ' + btoa(log),
                            //     "Content-Type":"application/json"
                            // },
                        });
                        // if (response.ok){
                        //     alert("success");
                        //     setTimeout(routeChange, 300);
                        //     localStorage.removeItem('provisor_id');
                        //     localStorage.removeItem('provisorname');
                        //     localStorage.removeItem('provisoremail');
                        //     localStorage.removeItem('provisorpass');
                        // }

                    }}>Delete</Button>
                </Form.Field>
            </Form>
                        </li>
                        </main>
              </div>
            </div>
    )

}