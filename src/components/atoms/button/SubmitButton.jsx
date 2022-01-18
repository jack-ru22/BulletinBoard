import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SubmitButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #9999ff;
  border-bottom: 5px solid #9999cc;
  &:hover {
    background-color: #ccccff;
    border-bottom: 2px solid #9999cc;
  }
`;
