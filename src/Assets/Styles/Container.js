import styled from "styled-components";
import "@fontsource/lato";

export const Container = styled.section `

width:30vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:#333333;

form {
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form input {
    width: 80%;
    height: 65px;
    border-radius: 6px;
    background: #ffffff;
    font-family:"Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-indent: 1em;
    margin: 8px;
    &::placeholder {
      color: #7e7e7e;
      text-indent: 1em;
      font-family:"Oswald";
    }
  }
  form div{
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:300px;
    margin: 0;
    padding: 0;
  }
  form div input {
    width: 145px;
    margin:0;
    padding:0;
    text-align: left;
    &::placeholder{
     font-size:12px;
    }
  }
`;
