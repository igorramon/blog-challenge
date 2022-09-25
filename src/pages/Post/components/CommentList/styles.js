import { styled, Typography, Box, Divider } from "@mui/material";

export const Container = styled(Box)`
  margin: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NameComment = styled(Typography)`
  color: #fff;
  font-size: 18px;
  margin-bottom: 12px;
`;
export const Comment = styled(Typography)`
  color: #a8a8b3;

  font-size: 13px;
`;

export const DividerComment = styled(Divider)`
  background: #323238;
  width: 100%;
`;
