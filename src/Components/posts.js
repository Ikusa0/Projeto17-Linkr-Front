import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactHashtag from "@mdnm/react-hashtag";

export default function Posts(props) {
    const { name, url, description, id } = props;
    console.log(props)
    return (
        <PostCard>
            <Profile>
                <img src={"https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg"} alt="profile"></img>
            </Profile>
            <section>
                <h4>{name}</h4>
                <div>
                    <ReactHashtag renderHashtag={(hashtagValue) => (
                        <Link to={`/hashtag/${id}`} className="hashtag">
                            <Hashtag># {hashtagValue.slice(1)}</Hashtag>
                        </Link>)}>
                        {description}
                        {url}
                    </ReactHashtag>
                </div>
            </section>
        </PostCard>
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

const Profile = styled.div`
  img {
    width: 53px;
    height: 53px;
    background-color: orange;
    border-radius: 26.5px;
  }
`;

const PostCard = styled.div`
  width: 611px;
  height: 209px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  background: #171717;
  border-radius: 16px;

  img {
    margin: 16px 18px 0px 18px;
  }

  h4 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */

    color: #ffffff;
  }

  div {
    background-color: orange;
    display:flex;
    flex-wrap: wrap;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #b7b7b7;
  }
`;