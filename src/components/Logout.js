import { useHistory} from "react-router-dom";
export const Logout=()=>{
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/login`; 
        history.push(path);
        window.location.reload();
    }
    localStorage.removeItem('useremail');
    localStorage.removeItem('userpass');
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    localStorage.removeItem('provisorpass');
    localStorage.removeItem('provisorname');
    localStorage.removeItem('provisor_id');
    localStorage.removeItem('provisoremail');
    return(  
        routeChange()
    )
}

export default Logout;