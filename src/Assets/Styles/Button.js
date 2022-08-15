import styled from "styled-components";


export const Button = styled.button `
 
  width:80%;
  height: 65px;
  left: 956px;
  top: 473px;
  border-radius: 6px;
  border: 0;
  background: ${props=>props.disabled ?  '#dddddd':'#1877F2'};
  color: ${props=>props.disabled ? '#aaaaaa':'#ffffff'};
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  padding:12px;
  margin: 6.5px;
  cursor: pointer;
  
}
`;
