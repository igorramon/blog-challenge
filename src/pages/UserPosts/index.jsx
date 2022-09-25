import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "@mui/material";

import { ContainerList, Loading } from "./styles";

import api from "../../service/api";
import { RowPost } from "../../components/RowPost";

export function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  async function loadPosts() {
    const res = await api.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (res.status === 200) {
      setPosts(res.data);
    }
  }

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="md">
      {loading && <Loading color="inherit" />}
      <ContainerList>
        {posts.map((post) => (
          <RowPost
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            setLoading={setLoading}
            loading={loading}
          />
        ))}
      </ContainerList>
    </Container>
  );
}
