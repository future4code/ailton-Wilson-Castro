import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  border: 1px solid black;
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000f;
`;

export const ImagemLogo = styled.img`
    position: absolute;
    width: 150px;
    left: 50%;
    transform: translate(-50%);
`

export const ImagemIconeMatch = styled.img`
    position: absolute;
    width: 75px;
    left: 100%;
    transform: translate(-100%);
`