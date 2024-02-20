import Filter from './components/Filter.jsx'
import Form from './components/Form.jsx'
import Renderer from './components/Renderer.jsx'
import Notification from './components/Notification.jsx'
import '../db.json'
import net from './services/persons.jsx'

import { useEffect, useState } from 'react'
const App = () => {

  useEffect(() => {
    net
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [persons, setPersons] = useState(null)

  const [filterPersons, setFilterPersons] = useState([])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null)

  return (
    
    <div>
    <h2>Phonebook</h2>
    {notification ?  
    <Notification message={notification.message} status={notification.status} />
     : null }

    <Filter 
    filter={filter} 
    setFilter={setFilter} 
    persons={persons} 
    setFilterPersons={setFilterPersons}
    setNotification={setNotification}
    />
    <Form 
    persons={persons} 
    setPersons={setPersons} 
    newName={newName} 
    setNewName={setNewName} 
    newNumber={newNumber} 
    setNewNumber={setNewNumber} 
    setNotification={setNotification}

    />
    <Renderer filter={filter} persons={persons} filterPersons={filterPersons}/>
    </div>
  )
}
export default App;

/*import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filterPersons, setFilterPersons] = useState([])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameExists = persons.some((value) => value.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return; // Exit the function if the name already exists
    }

    setPersons((current) => [...current, { name: newName, number: newNumber }]);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  
    setFilterPersons(filteredPersons);
    setFilter(event.target.value);
    console.log(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>

      <form onSubmit={handleSubmit}>
        <h1>add a new</h1>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
  filter
    ? filterPersons.map((item, index) => (
        <ul key={index}>
          <li>{item.name}</li>
        </ul>
      ))
    : persons.map((item, index) => (
        <ul key={index}>
          <li>{item.name}</li>
        </ul>
      ))
}
    </div>
  );
};

export default App;*/
