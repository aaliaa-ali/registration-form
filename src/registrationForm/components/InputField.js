import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ErrorMessage } from "@hookform/error-message";

function InputField(props) {
  const { placeHolder, label, register, errors } = props;
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField
        {...register}
        sx={{ width: "100%" }}
        id="demo-helper-text-misaligned-no-helper"
        placeholder={placeHolder}
      />
      {errors ? <p>{errors?.message}</p> : ""}
    </Box>
  );
}

export default InputField;
