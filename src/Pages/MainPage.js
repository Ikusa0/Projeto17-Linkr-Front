import ReactHashtag from "@mdnm/react-hashtag";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Hashtags from "../Components/hashtags";

function Main() {
  const hashtags = [
    {
      id: 1,
      nome: "#teste1",
    },
    {
      id: 2,
      nome: "#aaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: 3,
      nome: "#teste3",
    },
    {
      id: 4,
      nome: "#teste4",
    },
    {
      id: 5,
      nome: "#teste5",
    },
  ];
  return (
    <>
      <Container>
        <Trending>trending</Trending>
        <Line></Line>
        <HashtagContainer>
            {hashtags.map((hashtag) => (
              <Hashtags key={hashtag.id} id={hashtag.id} name={hashtag.nome}  />
            ))}
        </HashtagContainer>
      </Container>
    </>
  );
}

export default Main;

const HashtagContainer = styled.div`
  margin-left: 16px;
  margin-top: 12px;
  width: 250px;

  p{
    display:flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .hashtag{
    cursor: default;
  }
`;
const Trending = styled.h1`
  margin-left: 4px;
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  padding: 12px;
  /* identical to box height */

  color: #ffffff;
`;
const Line = styled.div`
  width: 300px;
  height: 2px;
  background-color: grey;
`;
const Container = styled.article`
  width: 300px;
  height: 400px;
  background-color: #171717;
  border-radius: 16px;
  margin: 10px;
  position: sticky;
  
`;
