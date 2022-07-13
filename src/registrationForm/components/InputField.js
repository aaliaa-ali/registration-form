import React from "react";
import TextField from "@mui/material/TextField";
import  Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Label from "./Label";

function InputField(props) {
  const { placeHolder, label, register, errors } = props;
  return (
    <Box>
      <Label label={label} />
      <TextField
      error={!!errors}
        {...register}
        sx={{ width: "100%" }}
        id="demo-helper-text-misaligned-no-helper"
        placeholder={placeHolder}
      />
      {errors ? <p className="error">{errors?.message}</p> : ""}
    </Box>
  );
}

export default InputField;
