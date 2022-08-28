import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Add = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div>
      <TextField
        id="standard-size-small"
        label="Tên"
        size="small"
        variant="outlined"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="standard-size-small"
        label="Điện thoại"
        size="small"
        variant="outlined"
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={(event) => {
          const person = {
            name: name,
            number: number,
          };
          props.onAdd(person);
        }}
      >
        THÊM
      </Button>
      <hr></hr>
    </div>
  );
};

export default Add;
