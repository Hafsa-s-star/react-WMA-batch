import { useState } from 'react'
import './App.css'

function App() {
  // State
  const [name, setName] = useState(""); 
  return (
    <>
      <div>
        <input
        type="text"
         onChange={(e) => setName(e.target.value) }  //Events = onChange,onClick
        />
        <h2>Hello {name}</h2>
      </div>
    </>
    // End of State
  )
}

export default App
