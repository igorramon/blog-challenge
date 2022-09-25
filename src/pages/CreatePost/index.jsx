import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { toast } from "react-toastify";
import SendIcon from "@mui/icons-material/Send";

import Input from "../../components/Input";

import { FormContainer, ButtonSend, Loading } from "./styles";
import api from "../../service/api";

export function CreatePost(props) {
  const postEdit = props?.location?.state?.post || "";
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(postEdit ? postEdit.title : "");
  const [body, setBody] = useState(postEdit ? postEdit.body : "");

  async function handleSendPost() {
    if (!title || !body) return;
    let res;
    setLoading(true);
    if (postEdit) {
      res = await api.put(
        `https://jsonplaceholder.typicode.com/posts/${postEdit.id}`,
        {
          userId: postEdit.userId,
          title,
          body,
        }
      );
      if (res.status === 200) {
        toast.success("Update realizado com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      res = await api.post("https://jsonplaceholder.typicode.com/posts", {
        userId: 1,
        title,
        body,
      });
      if (res.status === 201) {
        toast.success("Post realizado com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
    console.log(res);
    setLoading(false);
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <FormContainer
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h5"
          noWrap
          component="Title"
          sx={{
            color: "#000",
            mr: 2,
            display: { xs: "flex", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          Crie seu post
        </Typography>
        <Input value={title} label="Titulo" onChange={setTitle} />
        <Input
          value={body}
          label="Texto"
          onChange={setBody}
          multiline
          rows={6}
        />
        {loading ? (
          <Loading />
        ) : (
          <ButtonSend
            variant="contained"
            onClick={handleSendPost}
            endIcon={<SendIcon />}
          >
            Postar
          </ButtonSend>
        )}
      </FormContainer>
    </Container>
  );
}
