import { useState } from "react";
import styled from "styled-components";
import { DeleteButton } from "../atoms/button/DeleteButton";

export const BulltetinBoard = (props) => {
  const { main } = props;
  const [Main, setMain] = useState([]);

  const onClickDelete = (index) => {
    main.splice(index, 1);
    setMain([...main]);
  };

  return (
    <>
      {main.map((m, index) => {
        return (
          <SContainer key={index}>
            <p>ID:{index}</p>
            <p>{m}</p>
            <DeleteButton onClick={() => onClickDelete(index)}>
              削除
            </DeleteButton>
          </SContainer>
        );
      })}
    </>
  );
};

const SContainer = styled.div`
  border: solid 6px pink;
  background-color: #ffede8;
  text-align: center;
  width: 30%;
  min-height: 10px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
