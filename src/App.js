import React, { useState } from "react";
import LitteraProvider from "react-littera";
import "./App.css";
import styled from "styled-components";
import Title from "./container/Title";
import Cards from "./container/Cards";
import Footer from './container/Footer';

import translationData from './translations';

const translations = JSON.parse(translationData);


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

function App() {
  const [language, setLanguage] = useState("en_US");
  const [darkMode, setDarkMode] = useState(false);
  const languages = ["en_US", "am_ET"];

  const nextLanguage = () =>
    setLanguage(languages[languages.indexOf(language) + 1] || languages[0]);
  const changeBC = () => setDarkMode(!darkMode);
  return (
    <div className="app">
      <LitteraProvider language={language}>
        {/* <Child translations={translations}/> */}
        <Container toggle={darkMode}>
            <ChangeLang nextLanguage={nextLanguage} translations={translations}  language={language} />
            <Toggle changeBC={changeBC} checked={darkMode} />
            <Title toggle={darkMode} translations={translations} />
        </Container>

        <Cards darkMode={darkMode} translations={translations} />
      </LitteraProvider>

      <Footer />
    </div>
  );
}

const Toggle = props => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={() => props.changeBC()} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

const ChangeLang = (props) =>{
  console.log(props.language === "en_US")
    return (
        <button className="btn" onClick={() => props.nextLanguage()}>
            {(props.language === "en_US") ? "አማርኛ" : "English"}
        </button>
    )
}

export default App;
