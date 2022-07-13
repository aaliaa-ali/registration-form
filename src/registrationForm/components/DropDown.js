import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import Label from "./Label";

function DropDown(props) {
  const { placeHolder, label, register, values } = props;

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Label label={label} />
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          position
        </InputLabel>
        <Select
          {...register}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="position"
        >
          {values.map((element) => {
            return (
              <MenuItem key={element.key} value={element.key}>
                {element.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDown;
