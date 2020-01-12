import React from "react";
import { useLittera } from "react-littera";
import styled from "styled-components";
import Card from "../component/Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => {
    return props.toggle ? "#10171E" : "#fff";
  }};
`;

function Cards(props) {
  const [translated] = useLittera(props.translations);
  const toArr = Object.entries(translated).filter(el => el[0] !== "title");
  return toArr.map((kings,i) => (
    <Container key={i} toggle={props.darkMode}>
        <Card toggle={props.darkMode} translation={kings[1]} />
    </Container>
  ));
}

export default Cards;
