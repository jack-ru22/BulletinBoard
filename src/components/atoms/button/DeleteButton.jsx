import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const DeleteButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #cc3399;
  border-bottom: 5px solid #cc33cc;
  color: white;
  &:hover {
    background-color: #cc66cc;
    border-bottom: 2px solid #cc66cc;
    color: white;
  }
`;
