import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Label from "./Label";

export default function RadioButtons(props) {
  const { label, register, genders } = props;
 
  return (
    <FormControl {...register}>
      <Label label={label} />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {genders.map((gender) => {
          return (
            <FormControlLabel
            key={gender.key}
              value={gender.key}
              control={<Radio />}
              label={gender.value}
              {...register}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
