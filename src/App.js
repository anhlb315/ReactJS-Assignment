import logo from "./logo.svg";
import "./App.css";
import Add from "./components/Add";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import PersonRendered from "./components/PersonRendered";
import SearchAndDelete from "./components/SearchAndDelete";

function App() {
  const [persons, setPersons] = useState([
    {
      name: "Alice",
      number: "(816)-403-5456",
    },
    {
      name: "Bob",
      number: "(572)-566-2397",
    },
    {
      name: "Cris",
      number: "(864)-309-4841",
    },
    {
      name: "Daniel",
      number: "(816)-403-5456",
    },
  ]);

  const [renderedList, setRenderedList] = useState(persons);

  const onAdd = (person) => {
    const newList = [...persons, person].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setRenderedList(newList);
    setPersons(newList);
  };
  console.log(persons);

  const onSearchTerm = (searchTerm) => {
    const newRenderedList = persons.filter((person) => {
      return person.name === searchTerm || person.number === searchTerm;
    });
    setRenderedList(newRenderedList);
  };

  const onDeleteDuplicate = () => {
    const nonDuplicatedArray = [persons[0]];
    for (let i = 1; i < persons.length; i++) {
      let count = 0;
      for (let j = 0; j < nonDuplicatedArray.length; j++) {
        if (persons[i].number === nonDuplicatedArray[j].number) count++;
      }
      if (count === 0) nonDuplicatedArray.push(persons[i]);
    }
    setRenderedList(nonDuplicatedArray);
    setPersons(nonDuplicatedArray);
    console.log(nonDuplicatedArray);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Add persons={persons} onAdd={onAdd}></Add>
      <SearchAndDelete
        persons={persons}
        onSearchTerm={onSearchTerm}
        onDeleteDuplicate={onDeleteDuplicate}
      ></SearchAndDelete>
      <PersonRendered persons={renderedList}></PersonRendered>
    </Box>
  );
}

export default App;
