import React from "react";
import styled from "styled-components";

const Group = styled.div`
  width: 175px;
  display: inline-block;
  padding: 3em;
  @media only screen and (max-width: 705px){
    padding: 5px;
    transition: 1s all ease;
  }
`;

const Label = styled.h3`
  font-size: 1rem;
  letter-spacing: 3px;
  color: #feee43;
  text-transform: uppercase;
  line-height: 1;
  margin: 0 0 0.5em;
  &:first-child {
    margin-top: 0px;
  }
`;

const Description = styled.span`
  font-size: 1.25rem;
`;

function GroupCont(props) {
  return (
    <Group>
      <Label>{props.label}</Label>
      <Description>{props.desc}</Description>
    </Group>
  );
}

export default GroupCont;
