import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [fighters, setFighters] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000/UFC_Champions')
     .then(resp => resp.json())
     .then(data => setFighters(data))
     .catch(error => console.error('Error:', error));
  }, []);

  function handleNewSubmit(newChampion){
    fetch(`http://localhost:4000/UFC_Champions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newChampion)
    })
    .then(resp => resp.json())
    .then(data =>{
      const updatedFighters = [...fighters, data]
      setFighters(updatedFighters)
      console.log(data)
    })
  }

  function handleUpdateSubmit(id, championToUpdate){
    fetch(`http://localhost:4000/UFC_Champions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(championToUpdate)
    })
    .then(resp => resp.json())
    .then(data =>{
      const updatedFighters = fighters.map(fighter => fighter.id === id ? data : fighter)
      setFighters(updatedFighters)
    })
  }

  const contextData = {fighters, handleUpdateSubmit, handleNewSubmit}

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Outlet context={contextData} />
      <Footer />
    </div>
  );
}

export default App;
