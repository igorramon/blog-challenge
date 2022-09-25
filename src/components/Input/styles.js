import { styled, TextField } from "@mui/material";

export const InputText = styled(TextField)(() => ({
  "& input": {
    color: "#333",
  },
  "& .MuiInput-root": {
    margin: "8px 0px",
  },

  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000",
  },
}));
