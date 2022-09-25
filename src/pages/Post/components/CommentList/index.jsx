import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";

import { Container, NameComment, Comment, DividerComment } from "./styles";

export function CommentList({ name, comment }) {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Stack
          direction="row"
          spacing={2}
      
          alignItems="center"
        >
          <AccountCircle sx={{ color: "#fff" }} />
          <NameComment>{name}</NameComment>
        </Stack>
        <Comment>{comment}</Comment>
      </Container>
      <DividerComment />
    </div>
  );
}
