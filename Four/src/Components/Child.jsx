import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import {memo} from 'react'

function Child() {
    const { user, setUser } = useContext(UserContext);
   
    return (

        <>
            <h1>{user}</h1>
            <button onClick={() => setUser("Ali")}>
                Change Name
            </button>

        </>
    );
}

export default Child