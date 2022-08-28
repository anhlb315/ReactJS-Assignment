import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const SearchAndDelete = (props) => {
  console.log(props);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <TextField
        id="standard-size-small"
        label="Tìm kiếm"
        size="small"
        variant="outlined"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => props.onSearchTerm(searchTerm)}
      >
        TÌM
      </Button>
      <Button variant="contained" onClick={props.onDeleteDuplicate}>
        XÓA TRÙNG
      </Button>
    </div>
  );
};

export default SearchAndDelete;
