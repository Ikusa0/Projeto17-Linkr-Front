import styled from "styled-components";
import React from "react";

export default function NewPost() {
  const [url, setUrl] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const hashtags = (description.match(/#\w+/gim) || []).map((hashtag) => hashtag.replace("#", ""));
    const descriptionWithoutHashtags = description.replace(/#\w+/gim, "").replace(/\s\s+/g, " ").trim();

    const data = {
      url,
      description: descriptionWithoutHashtags,
      hashtags,
    };

    console.log(data);
  }

  return (
    <Container>
      <div className="left-container">
        <div className="user-img-container"></div>
        <img src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" alt="" />
      </div>
      <div className="right-container">
        <h1>What are you going to share today?</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="http://..." value={url} onChange={(e) => setUrl(e.target.value)} type="url" required />
          <textarea
            placeholder="Awesome article about #javascript"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button>Publish</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: white;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: #707070;
    }

    input,
    textarea {
      padding: 8px 15px;
      background: #efefef;
      border: none;
      border-radius: 5px;
      resize: none;
    }

    textarea {
      min-height: 66px;
    }

    input::placeholder,
    textarea::placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #949494;
    }

    input:focus-visible,
    textarea:focus-visible {
      outline: none;
    }

    button {
      width: 112px;
      height: 31px;
      background: #1877f2;
      border-radius: 5px;
      border: none;
      color: white;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      align-self: end;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
