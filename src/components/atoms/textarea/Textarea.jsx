import styled from "styled-components";
import { BaseTextarea } from "./BaseTextarea";

export const Textarea = (props) => {
  const { placeholder = "", onChange, maintext } = props;

  return (
    <STextarea
      rows="10"
      cols="60"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={maintext}
    />
  );
};

const STextarea = styled(BaseTextarea)`
  background-color: snow; /* 背景色 */
  height: 120px; /* 高さ */
`;
