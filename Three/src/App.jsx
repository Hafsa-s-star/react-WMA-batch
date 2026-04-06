import { useState } from 'react'
import './App.css'

function Header() {
  return <h1>My App</h1>;
}

function Button() {
  return <button>Click Me</button>;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}

function Parent({ name }) {
  return <Child name={name} />;
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

const users = ["Ali", "Sara", "Ahmed"];

function App() {
   const [count, setCount] = useState(0);

  return (
     <div>  <Card>
      <h2>Title</h2>
      <p>Description</p>
    </Card>
      <Parent name="Hafsa" />
      <Header />
      <Button />
       <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
        <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
