import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactHashtag from "@mdnm/react-hashtag";

export default function Hashtags(props) {
  const { id, name } = props;
  console.log(props)
  return (
    <p>
      <ReactHashtag
        renderHashtag={(hashtagValue) => (
          <Link to={`/hashtag/${id}`} className="hashtag">
            <Hashtag># {hashtagValue.slice(1)}</Hashtag>
          </Link>
        )}
      >
        {name}
      </ReactHashtag>
    </p>
  );
}

const Hashtag = styled.span`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: white;
  cursor: pointer;
`;