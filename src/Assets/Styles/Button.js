import styled from "styled-components";

export const Button = styled.button `
 div{
  width:100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items:center !important;
 }
  width:80%;
  height: 65px;
  left: 956px;
  top: 473px;
  border-radius: 6px;
  border: 0;
  background: #1877F2;
  color: #ffffff;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  padding:12px;
  margin: 6.5px;
  cursor: pointer;
  ":disabled": {
    background: "red"
  }
}
`;
