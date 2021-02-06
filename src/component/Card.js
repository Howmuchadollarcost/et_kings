import React from "react";
import styled from "styled-components";
import { Joiner } from "../middleware/middleFunc";
import Group from './Group';

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => {
		return props.toggle ? "#15202B" : "#191b21";
	}};
  height: 500px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 705px){
    max-width:300px;
    height:600px;
		margin-bottom: 100px;
  }

`;


const BioContainer = styled.div`
  width: 550px;
  color: rgba(255, 255, 255, 0.8);
  height: 100%;
  border-radius: 10px;
  float: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: ${props => {
		return props.toggle ? "#182430" : "#2d2f35";
	}};

  @media only screen and (max-width: 705px){
    width:100%;
    height:400px;
    flex-direction:column;
    overflow:hidden;
    float:none;
    margin:10px 0;
    transition: 1s all ease-in-out;
  }
`;
//width:100%,height:none, flex-direction:column


const Name = styled.h1`
  font-size: 4em;
  font-weight: bolder;
  position: absolute;
  top: -110px;
  right: 50px;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1em;
  ${props => {
		return (
			Joiner("color", "#fff", "#111", props) +
			Joiner("text-shadow", null, "0.05em 0 0 #eee, 0.1em 0 0 #123", props)
		);
	}}
  @media only screen and (max-width: 705px){
    font-size:1.8em;
    top: -50px;
    right:10px;
    transition: 1s all ease;
  }
`;
//font-size: 2em, top:100px, right:20px,


const King = styled.div`
  height: 600px;
  width: 600px;
  position: absolute;
  overflow: hidden;
  left: -150px;
  bottom: -150px;
  > img {
    height: 369px;
    width: 300px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.21);
    border: 1px solid #eee;
    border-radius: 8px;

    @media only screen and (max-width: 705px){
      height: 185px;
      width:150px;
      transition: 1s all ease;
    }
  }

  @media only screen and (max-width: 705px){
    height:185px;
    width:150px;
    left:0;
    bottom:0;
    position:relative;
    transition: 1s all ease;
  }

`;

//height:185px, width:150px,

function CardCont(props) {
	const { image, name, bornName, reign, house, horse, religion } = props.translation[0];
	const { language } = props;
	return (
		<>
			<Card toggle={props.toggle}>
				<King>
					<img src={image} alt={name} />
				</King>

				<Name toggle={props.toggle}>{name}</Name>

				<BioContainer toggle={props.toggle}>
					<Group label={language === "en_US" ? "Born Name" : "ሙሉ ስም"} desc={bornName}></Group>
					<Group label={language === "en_US" ? "Reign" : "ግዛት"} desc={reign}></Group>
					<Group label={language === "en_US" ? "House" : "ሥርወ-መንግሥት"} desc={house}></Group>
					{
						horse ? (
							<Group label={language === "en_US" ? "Horse Name" : "የፈረስ ስም"} desc={horse}></Group>
						) :
							null
					}

					<Group label={language === "en_US" ? "Religion" : "ሀይማኖት"} desc={religion}></Group>
					<Group label={language === "en_US" ? "More info." : "ተጨማሪ መረጃ"}></Group>
				</BioContainer>
			</Card>
		</>
	);
}



export default CardCont;
