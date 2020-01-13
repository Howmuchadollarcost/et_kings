import React from "react";
import styled from "styled-components";
import { Joiner } from "../middleware/middleFunc";
import { useLittera } from "react-littera";

const StartTitle = styled.div`
  font-size: 5em;
  text-transform: uppercase;
  ${props => {
    return (
      Joiner("color", "#fff", "#111", props) +
      Joiner("text-shadow", "none", "0.05em 0 0 #eee, 0.07em 0 0 #123", props)
    );
  }}

  @media only screen and (max-width: 705px){
    font-size:3em;
    transition: 1s all ease;
  }
  @media only screen and (max-width: 415px){
    font-size:2em;
    transition: 1s all ease;
  }
`;

function Title(props) {
  const [translated] = useLittera(props.translations);
  return <StartTitle toggle={props.toggle}>{translated.title}</StartTitle>;
}

export default Title;
