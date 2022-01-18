import styled from "styled-components";

export const Header = () => {
  return <SHeader>★掲示板サイト★</SHeader>;
};

const SHeader = styled.header`
  color: white;
  width: 100%;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(-135deg, #e4a972, #9941d8);
`;
