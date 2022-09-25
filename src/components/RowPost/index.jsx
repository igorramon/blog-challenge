import React, { useEffect, useState } from "react";
import api from "../../service/api";
import {
  WrapperList,
  TitleItemList,
  SubTitle,
  DividerItem,
  NameAuthor,
} from "./styles";

export function RowPost({ title, body, userId, setLoading, id, loading }) {
  const [author, setAuthor] = useState({});

  async function loadAuthorPost() {
    const res = await api.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (res.status === 200) {
      setAuthor(res.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAuthorPost();
    // eslint-disable-next-line
  }, []);

  return (
    !loading && (
      <div>
        <WrapperList>
        
            <NameAuthor>Autor: {author.name}</NameAuthor>
        
       
          <TitleItemList to={`/post/${id}/${author.id}`}>{title}</TitleItemList>
          <SubTitle>{body}</SubTitle>
        </WrapperList>
        <DividerItem />
      </div>
    )
  );
}
