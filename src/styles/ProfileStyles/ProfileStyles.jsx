import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 85%;
  border: 1px solid #fff;
  height: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  gap: 20px;
`;

export const ContainerElements = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: fff;
  gap: 10px;
  cursor: pointer;
`;

export const Img = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height}};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 9px 32px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 9px 32px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 9px 32px -10px rgba(0, 0, 0, 0.75);
`;

export const Span = styled.span`
  border-bottom: 0.1em solid;
  width: 100%;
  height: 0px;
  color: #1976d2;
`;

export const Texto = styled.span`
  padding: 0 10px;
  color: #1976d2;
  font-size: ${(props) => props.tam};
`;

export const Image = styled.img`
  width: ${(props) => props.width};
`;
