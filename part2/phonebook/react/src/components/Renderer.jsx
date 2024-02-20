import React from 'react'
import net from '../services/persons'
function Renderer({filterPersons, persons, filter}) {
  const confirmDelete = (id) => {
    if (window.confirm("Do you really wanna do dat?")) {
      net.deleteObj(id);
    }
  }
  if (!persons)
  return null
  return (
    <>
    {
        filter
          ? filterPersons.map((item, index) => (
              <ul key={index}>
                <li>{item.name} {item.number} 
                <button onClick={() => confirmDelete(item.id)}>delete</button>
                </li>
              </ul>
            ))
          : persons.map((item, index) => (
              <ul key={index}>
                <li>{item.name} {item.number}
                
                <button onClick={() => confirmDelete(item.id)}>delete</button>

                </li>
              </ul>
            ))
      }
          </>

  )
}

export default Renderer