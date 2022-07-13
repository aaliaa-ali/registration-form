import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Label from "./Label";

export default function RadioButtons(props) {
  const { label, register } = props;
  const genders = [
    { key: "male", value: "Male" },
    { key: "female", value: "Female" },
    { key: "other", value: "Other" },
    { key: "Prefer not to say", value: "Prefer not to say" },
  ];
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
