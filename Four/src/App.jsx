import { useState } from 'react'
import { UserContext } from "./Components/UserContext.jsx";
import Users from './Components/Users.jsx'
import Counter from './Components/Counter.jsx'
import useFetch from './Components/useFetch.jsx'
import Child from './Components/Child.jsx'
import { memo } from 'react'
import { useCallback } from 'react';
import './App.css'

function App() {
  {/*const users = useFetch("https://jsonplaceholder.typicode.com/users"); Custom Hook option 1 to fetch users*/ }
  const [user, setUser] = useState("Hafsa");
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      {/* {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))} */}
      <Users />
      <Counter />
      <UserContext.Provider value={{ user, setUser }}>
        <Child />
      </UserContext.Provider>
    </>
  )
}

export default App
