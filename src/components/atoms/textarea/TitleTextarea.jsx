import styled from "styled-components";
import { BaseTextarea } from "./BaseTextarea";

export const TitleTextarea = (props) => {
  const { placeholder, onChange, titletext } = props;
  return (
    <STitleTextarea
      rows="1"
      cols="50"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={titletext}
    />
  );
};

const STitleTextarea = styled(BaseTextarea)`
  height: 30px; /* 高さ */
`;
