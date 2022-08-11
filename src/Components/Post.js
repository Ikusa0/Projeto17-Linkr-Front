import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Post() {
  return (
    <Container>
      <div class="left-container">
        <div class="user-img-container"></div>
        <img src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" alt="" />
      </div>
      <div class="right-container">
        <Link to={`/user/1`}>
          <h1>Juvenal Juvêncio</h1>
        </Link>
        <div>
          <span>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</span>
          <span class="hashtag"> #react</span>
          <span class="hashtag"> #material</span>
        </div>
        <LinkPreview
          img="https://user-images.githubusercontent.com/15041151/93779921-e249b380-fbfd-11ea-9db5-ce1c174473cb.png"
          title="Como aplicar o Material UI em um projeto React"
          description="Hey! I have moved this tutorial to my blog.content, new location. Sorry about making you click through to another page."
          url="https://medium.com/@pshrmn/a-simple-react-router"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 611px;
  height: 276px;
  display: flex;
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Lato";

  .left-container {
    display: flex;
    flex-direction: column;
    padding-right: 18px;
    box-sizing: border-box;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .right-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1,
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
    }

    span {
      color: #b7b7b7;
    }

    h1,
    .hashtag {
      color: white;
    }
  }
`;

const LinkPreview = ({ img, title, description, url }) => {
  return (
    <LinkPreviewContainer>
      <div class="information-contianer">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{url}</span>
      </div>
      <div class="img-container">
        <img src={img} alt="url-img" />
      </div>
    </LinkPreviewContainer>
  );
};

const LinkPreviewContainer = styled.div`
  width: 100%;
  height: 155px;
  display: flex;

  .information-contianer {
    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 24px;
    padding-left: 20px;
    border: 1px solid #4d4d4d;
    border-right: none;
    border-radius: 11px 0 0 11px;
    box-sizing: border-box;

    h1,
    p,
    span {
      font-style: normal;
      font-weight: 400;
    }

    h1 {
      font-size: 16px;
      line-height: 19px;
    }

    p,
    span {
      font-size: 11px;
      line-height: 13px;
    }

    p {
      color: #9b9595;
    }

    h1,
    span {
      color: #cecece;
    }

    span {
      margin-top: 10px;
    }
  }

  .img-container {
    img {
      width: 155px;
      height: 155px;
      object-fit: cover;
      border-radius: 0 11px 11px 0;
    }
  }
`;
