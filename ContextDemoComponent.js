import { useState,useContext } from "react";
import React from "react";
let userDetailsContext = React.createContext(null);


const ContextDemoComponent = () => {
    const [userDetails,setUserDetails] = useState({
        username:'',
        email:''
    })

    const[newuserDetails,setNewUserDetails] = useState({});

    const HandleUsername = (e) => {
        setUserDetails({
            username : e.target.value,
            email: userDetails.email
        })

    }

    const HandleEmail = (e) => {
        setUserDetails({
            username : userDetails.username,
            email: e.target.value
        })
    }

    const HandleLogin = (e) => {
        setNewUserDetails({
            username:userDetails.username,
            email:userDetails.email
        })
    }

    return(
        <>
        <userDetailsContext.Provider value={newuserDetails}>
            <div className="container-fluid">
            <h1>User Login</h1>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={HandleUsername} type="text" /></dd>
                <dt>Email Id</dt>
                <dd><input onChange={HandleEmail} type="email" /></dd>
                <button onClick={HandleLogin}>Login</button>
            </dl>
            <h2>Main Component</h2>
            <HomeComponent/>
            </div>
        </userDetailsContext.Provider>

        </>
    )
}
export default ContextDemoComponent;

const HomeComponent = () =>{
    const details = useContext(userDetailsContext);
    return(
        <>
            <div className="bg-danger text-white">
                <h2>Home Component - {details.username}</h2>
                <NavComponent/>
            </div>
        </>
    )
}

const NavComponent = () =>{
    const details = useContext(userDetailsContext);
    return(
        <>
            <div>
                <h2>Nav Component -  {details.email}</h2>
            </div>
        </>
    )
}