import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import { IconButton, Stack } from "@mui/material";
import Swal from "sweetalert2";

import api from "../../service/api";
import {
  ContainerPost,
  TitlePost,
  BodyPost,
  Loading,
  InfoAuthor,
  CommentTitle,
  ButtonDelete,
  ButtonEdit,
  ButtonLink,
  TooltipButton,
} from "./styles";
import { CommentList } from "./components/CommentList";

export function Post() {
  const history = useHistory();
  const { id, idUser } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  async function loadPost() {
    const [resultPost, resultComment, resultUser] = await Promise.all([
      api.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
      api.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
      api.get(`https://jsonplaceholder.typicode.com/users/${idUser}`),
    ]);
    if (resultPost?.status === 200) setPost(resultPost?.data);
    if (resultComment?.status === 200) setComments(resultComment?.data);
    if (resultUser?.status === 200) setUser(resultUser?.data);

    setLoading(false);
  }

  async function handleDelete() {
    Swal.fire({
      title: "Tem certeza que deseja remover este post?",
      text: "Após a remoção do post não tem volta!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, Remover post!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await api.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (res.status === 200) history.push("/");
      }
    });
  }

  function handleEdit() {
    history.push({
      pathname: `/criar-post`,
      state: { post },
    });
  }

  function handleMorePosts() {
    history.push(`/user/${user.id}/post`);
  }

  useEffect(() => {
    loadPost();
    // eslint-disable-next-line
  }, [id]);
  return (
    <Container maxWidth="md">
      {loading && <Loading color="inherit" />}
      {!loading && (
        <ContainerPost>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ width: "100%" }}
            spacing={2}
          >
            <TooltipButton title="Posts deste autor" placement="top">
              <IconButton aria-label="link" onClick={handleMorePosts}>
                <ButtonLink />
              </IconButton>
            </TooltipButton>
            <TooltipButton title="Edit" placement="top">
              <IconButton aria-label="edit" onClick={handleEdit}>
                <ButtonEdit />
              </IconButton>
            </TooltipButton>
            <TooltipButton title="Delete" placement="top">
              <IconButton aria-label="delete" onClick={handleDelete}>
                <ButtonDelete />
              </IconButton>
            </TooltipButton>
          </Stack>
          <TitlePost>{post.title}</TitlePost>
          <Stack direction="row" spacing={2} alignItems="center">
            <InfoAuthor>Autor: {user?.name}</InfoAuthor>
            <InfoAuthor>Email: {user?.email}</InfoAuthor>
            <InfoAuthor>Website: {user?.website}</InfoAuthor>
          </Stack>

          <BodyPost>{post.body}</BodyPost>
          <CommentTitle>Comentários</CommentTitle>
          {comments.map((comment) => (
            <CommentList
              key={comment.id}
              name={comment.name}
              comment={comment.body}
            />
          ))}
        </ContainerPost>
      )}
    </Container>
  );
}
