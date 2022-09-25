import React from "react";
import { InputText } from "./styles";

function Input({ label, value, error, onChange, helperText,...rest }) {
  return (
    <InputText
      {...rest}
      error={error}
      label={label}
      value={value}
      defaltValue={value}
      id="outlined-basic"
      variant="standard"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Input;
