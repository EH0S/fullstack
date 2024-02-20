import React from 'react'
import net from '../services/persons'
function Form({setPersons, persons, newName, setNewName, newNumber, setNewNumber, setNotification}) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const nameExists = persons.some((value) => value.name === newName);


        if (nameExists) { //person is in db
          if (window.confirm(`${newName} is already added to phonebook, replace the old number?`)) 
          {
            net.update(newPerson.id, newPerson).catch(error => {
              setNotification({ message: `${newName} was already removed from server`, status: "error"})
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)})

            setPersons((current) => [...current, { name: newName, number: newNumber }]);
            return;
          } 
          else {
            return; // Exit the function if the name already exists
          }
        }
        //person not in db

        const newPerson = {name: newName, number: newNumber};

        net.create(newPerson)

        setNotification({ message: `${newName} was added`, status: "success"})
        setTimeout(() => {
          setNotification(null)
        }, 5000)

        setPersons((current) => [...current, { name: newName, number: newNumber }]);

        
      };

      const handleNameChange = (event) => {
        setNewName(event.target.value);
      };
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
      }
    
  return (
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
  )
}

export default Form