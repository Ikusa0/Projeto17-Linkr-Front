import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import styled from "styled-components";

import Hashtags from "../Components/hashtags";
import axios from "axios";
import Posts from "../Components/posts";

dotenv.config();

function Main() {
  const [hashtags, setHashtags] = useState([]);
  const [posts, setPosts] = useState([])
  const [isCancelled, setIsCancelled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/hashtag`);
        const postData = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/posts`,
        )
        setHashtags(data);
        setPosts((postData.data).reverse());
        console.log(postData.data);
      } catch (error) {
        alert("Can't load!")
      }
    };
    fetchData();
  }, []);

  function changeDisable() { }

  async  function handleSubmit(e) {
    e.preventDefault();
    
    try {
      axios.post(
        `${process.env.REACT_APP_BACK_URL}/posts`, {
          user_id: 2,
          url: {url},
          description: description
        }); 
    } catch (error) {
      alert("Something went wrong!")
    }
  }

  return (
    <>
      <Body>
        <Header>
          <Link to={"/home"}>
            <h1>linkr</h1>
          </Link>
          <section>
            <DropDownMenu>S</DropDownMenu>
            <div>
              <Profile>
                <img src="https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg"></img>
              </Profile>
            </div>
          </section>
        </Header>
        <ContainerPost>
          <LeftPost>
            <h2>timeline</h2>
            <MakePost>
              <Profile>
                <img src="https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg"></img>
              </Profile>
              <section>
                <h3>What are you going to share today?</h3>
                <form onSubmit={handleSubmit}>
                  <input type="url" value={url} placeholder="http://..." onChange={(e) => setUrl(e.target.value)}></input>
                  <input
                    className="bigInput"
                    placeholder="Awesome article about #javascript"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                  <button type="submit" value="Submit">Publish</button>
                </form>
              </section>
            </MakePost>
           {posts.map((post) => (
              <Posts key={post.id} id={post.id} name={post.userId} description={post.description} image={post.url} url={post.url} />
            ))}
          </LeftPost>
          <Container>
            <Trending>trending</Trending>
            <Line></Line>
            <HashtagContainer>
              {hashtags.map((hashtag) => (
                <Hashtags
                  key={hashtag.id}
                  id={hashtag.id}
                  name={hashtag.name}
                />
              ))}
            </HashtagContainer>
          </Container>
        </ContainerPost>
      </Body>
    </>
  );
}

export default Main;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #151515;

  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    /* identical to box height */
    margin-left: 26px;

    letter-spacing: 0.05em;

    cursor: pointer;
    color: #ffffff;
  }

  section {
    display: flex;
    margin-right: 17px;
  }
`;

const DropDownMenu = styled.div`
  width: 10px;
  height: 50px;
  background-color: purple;
`;

const Profile = styled.div`
  img {
    width: 53px;
    height: 53px;
    background-color: orange;
    border-radius: 26.5px;
  }
`;

const ContainerPost = styled.article`
  width: 100%;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-right: 465px;
    margin-top: 78px;
    margin-bottom: 43px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }
`;

const LeftPost = styled.article`
  display: flex;
  align-items: center;
    flex-direction: column;
  margin-right: 25px;
`

const MakePost = styled.section`
  width: 611px;
  height: 209px;
  margin-bottom: 29px;
  display: flex;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  img {
    margin: 16px 18px 0px 18px;
  }

  h3 {
    margin-top: 21px;
    margin-bottom: 12px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: #707070;
  }

  forms {
    background-color: blue;
  }

  input {
    width: 503px;
    height: 30px;
    border: 0px;
    background: #efefef;
    border-radius: 5px;
    margin-bottom: 5px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #949494;
  }

  .bigInput {
    width: 502px;
    height: 66px;
    border: 0px;
    background: #efefef;
    border-radius: 5px;
    margin-bottom: 5px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #949494;
  }

  button {
    width: 112px;
    height: 31px;
    margin-left: calc(502px - 112px);
    border: 0px;
    background: #1877f2;
    border-radius: 5px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #ffffff;
  }
`;

const HashtagContainer = styled.div`
  margin-left: 16px;
  margin-top: 12px;
  width: 250px;

  p {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .hashtag {
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
  position: sticky;
  bottom: 70px;
  width: 300px;
  height: 400px;
  background-color: #171717;
  border-radius: 16px;
  margin: 10px;
  margin-top: 180px;
  position: sticky;
`;
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

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #b7b7b7;
  }
`;