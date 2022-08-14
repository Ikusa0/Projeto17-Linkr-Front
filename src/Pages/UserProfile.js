import styled from "styled-components";
import Post from "../Components/Post";
import Page from "../Layouts/Page";
import Header from "../Layouts/Header";

export default function UserProfile() {
  return (
    <>
      <Header />
      <Container>
        <Page>
          <div className="page-title">
            <img
              className="image"
              src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg"
              alt=""
            />
            <h1 className="text">Juvenal Juvêncio's Post</h1>
          </div>
          <div className="main-content">
            <div className="left-container">
              <Post />
            </div>
            <div className="right-container">
              <div className="trending"></div>
            </div>
          </div>
        </Page>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 250px;
  box-sizing: border-box;
  justify-content: center;
  background-color: #333333;
  margin-top: 125px;

  .page-title {
    align-self: start;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .page-title .text {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: white;
  }

  .page-title .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 20px;
  }

  .main-content {
    display: flex;
    gap: 25px;
  }

  .trending {
    width: 301px;
    height: 406px;
    background: #171717;
    border-radius: 16px;
  }
`;
