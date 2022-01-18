import styled from "styled-components";

export const BaseTextarea = styled.textarea`
  border: 2px solid #9999ff; /* 枠線 */
  border-radius: 0.67em; /* 角丸 */
  padding: 0.5em; /* 内側の余白量 */
  box-sizing: border-box; /* ※これがないと横にはみ出る */
  font-size: 1em; /* 文字サイズ */
  line-height: 1.2; /* 行の高さ */
  &:focus {
    outline: none; /* ※ブラウザが標準で付加する線を消したいとき */
    border-color: #ff1493; /* 枠線の色 */
    background-color: #fff0f5; /* 背景色 */
  }
`;
