import { useState } from "react";
import { Header } from "./components/atoms/layout/Header";
import styled from "styled-components";
import { Textarea } from "./components/atoms/textarea/Textarea";
import { SubmitButton } from "./components/atoms/button/SubmitButton";
import { BulltetinBoard } from "./components/molecules/BulltetinBoard";

export default function App() {
  const [maintext, setText] = useState("");
  const [main, setMain] = useState([]);

  const onChangeText = (event) => setText(event.target.value);

  const onClickButton = () => {
    if (maintext === "") {
      alert("入力してください");
    } else {
      const newMains = [...main, maintext];
      setMain(newMains);
      setText("");
    }
  };

  return (
    <div>
      <Header />
      <SH1>共有したいことを書き込もう！</SH1>
      <Textarea
        maintext={maintext}
        placeholder="今何してる？"
        type="text"
        onChange={onChangeText}
        required="required"
      />
      <br />
      <SubmitButton onClick={onClickButton}>投稿</SubmitButton>
      <h1>掲示板</h1>
      {main.length >= 1 && <BulltetinBoard main={main} />}
    </div>
  );
}

const SH1 = styled.h1`
  padding-top: 30px;
  font-size: 20px;
`;
