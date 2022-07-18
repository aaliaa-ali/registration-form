import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Label from "./Label";

function InputField(props) {
  const { placeHolder, label, register, errors ,...rest} = props;
  return (
    <Box>
      <Label label={label} />
      <TextField
      error={!!errors}
        {...register}
        sx={{ width: "100%" }}
        placeholder={placeHolder}
        {...rest}
      />
      {errors ? <p className="error">{errors?.message}</p> : ""}
    </Box>
  );
}

export default InputField;
