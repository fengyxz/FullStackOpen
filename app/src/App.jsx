import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import server from "./server/person";
import "./index.css";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameContains, setNameContains] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      console.log("data", res.data);
      setPersons(res.data);
    });
  }, []);

  const personsToShow = persons.filter((p) => {
    return p.name?.includes(nameContains);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("p", persons);
    if (persons.filter((p) => p.name === newName).length) {
      if (
        confirm(
          `${newName} is already added to phoneBook, replace the old number?`
        )
      ) {
        const oldPerson = persons.filter((p) => p.name === newName)[0];
        server.put(oldPerson.id, { ...oldPerson, number: newNumber });
      }
      server.getAll();
    } else {
      server.create({
        name: newName,
        number: newNumber,
        id: newName,
      });
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: newName,
        })
      );
    }
  };
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleNameContains = (e) => setNameContains(e.target.value);
  console.log(personsToShow);
  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter handleChange={handleNameContains} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} setPersons={setPersons} />
    </div>
  );
};

export default App;
