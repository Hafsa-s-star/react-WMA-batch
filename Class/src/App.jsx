import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./Components/myNavbar.jsx"
import Cards from "./Components/Cards.jsx"
import MyFooter from "./Components/MyFooter.jsx"

function App() {


  return (
    <>
      <MyNavbar title="MyNavbar" link="About" />
      <br />
      <Cards name="Flower" desc="Download & use free flowers stock photos in high reso
      lution ✓ New free images everyday ✓ HD to 4K ✓ Best flowers pictures for all de
      vices on Pixabay." btn="Add to Cart" />
      <MyFooter />
    </>
  )
}

export default App
