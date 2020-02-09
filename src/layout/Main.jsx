import React, { useState } from "react";
import styled from "styled-components";
import { userData } from "./mockData";
import Card from "./Card";

const Main = props => {
  const [detailInputValue, setdetailInputValue] = useState("");
  const sendCardData = data => {
    setdetailInputValue(oldValue => `${oldValue}, ${data}`);
  };

  const getCards = userData.data.map((r, i) => (
    <Card
      onClick={() => sendCardData(r.first_name)}
      id={r.id}
      className={`card-${i}`}
      firstName={r.first_name}
      i={i - userData.data.length / 2}
      layoutLeft={userData.data.length / 2 > i}
    />
  ));

  return (
    <div {...props}>
      <CardListWrapper>{getCards}</CardListWrapper>

      <DetailsWrapper>
        Details
        <textarea value={detailInputValue} />
        <FAB>🖉</FAB>
      </DetailsWrapper>
    </div>
  );
};

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: white;
  margin: 1.5em 1.5em 1.5em 0;
  position: relative;
`;

const FAB = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;
  background-color: #03a9f4;
  padding: 1em;
  font-size: large;
  width: 20px;
  height: 20px;
  color: white;
  border-radius: 100%;
  box-shadow: 10px 10px 63px -12px rgba(59, 59, 59, 0.4);
`;
const StyledMain = styled(Main)`
  background-color: #f1f1f1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export default StyledMain;
