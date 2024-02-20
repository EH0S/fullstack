import React from 'react'

function Filter({filter, setFilter, persons, setFilterPersons}) {
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
    filter shown with <input value={filter} onChange={handleFilterChange} />
  </div>
  )
}

export default Filter