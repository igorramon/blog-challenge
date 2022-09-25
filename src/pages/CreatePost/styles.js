import { styled, Box, Button, CircularProgress } from "@mui/material";

export const FormContainer = styled(Box)`
  width: 100%;
  max-width: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 50px;
`;

export const ButtonSend = styled(Button)`
  width: 100%;
  text-transform: none;
  margin: 0;
  background: #eba417;
  :hover {
    background: #eba417;
  }
`;

export const Loading = styled(CircularProgress)`
  color: #eba417;
`;
