import React from "react";
import Typography from "@mui/material/Typography";

function Label(props) {
  const { label } = props;
  return <Typography sx={{ fontWeight: "bold", mb: 1 }}>{label}</Typography>;
}

export default Label;
