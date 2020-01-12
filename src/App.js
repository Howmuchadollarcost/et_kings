import React, { useState } from "react";
import LitteraProvider from "react-littera";
import "./App.css";
import styled from "styled-components";
import Title from "./container/Title";
import Cards from "./container/Cards";
import Footer from './container/Footer';

const translations = {
  title: {
    en_US: "Ethiopian Kings",
    am_ET: "የኢትዮጵያ ነገስታት"
  },
  king0: {
    en_US: [
      {
        name: "Tewodros II ",
        bornName: "Kassa Hailegiorgis",
        reign: "1855-1868",
        aged: "50",
        house: "House of Solomon",
        horse: "Abba tatek",
        religion: "Orthodox",
        image:
          "https://www.nazret.com/wp-content/uploads/2019/03/px800-tewodros-ii.jpg"
      }
    ],
    am_ET: [
      {
        name: "ዳግማዊ ዓፄ ቴዎድሮስ",
        bornName: "ካሣ ኃይለ ጊዮርጊስ",
        reign: "1855-1868",
        aged: "50",
        house: "ሰሎሞን",
        horse: "አባ ታጠቅ",
        religion: "ኦርቶዶክስ ተዋሕዶ ክርስትና",
        image:
          "https://www.nazret.com/wp-content/uploads/2019/03/px800-tewodros-ii.jpg"
      }
    ]
  },
  king1: {
    en_US: [
      {
        name: "Yohannes IV",
        bornName: "Kassa Mercha",
        reign: "1871-1889",
        aged: "51",
        house: "House of Solomon",
        horse: "Abba Bezbez",
        religion: "Orthodox",
        image: "https://farm3.static.flickr.com/2091/2058092676_23985f2f50.jpg"
      }
    ],
    am_ET: [
      {
        name: "ዓፄ ዮሐንስ ፬ኛ",
        bornName: " ካሳ ምርጫ",
        reign: "1871-1889",
        aged: "51",
        house: "ሰሎሞን",
        horse: "አባ በዝብዝ",
        religion: "ኦርቶዶክስ ተዋሕዶ",
        image:"https://farm3.static.flickr.com/2091/2058092676_23985f2f50.jpg"
      }
    ]
  },
  king2: {
    en_US: [
      {
        name: "Menelik II",
        bornName: "Sahle Maryam",
        reign: "1889-1913",
        aged: "69",
        house: "House of Solomon",
        horse: "Abba dagnew",
        religion: "Orthodox",
        image:
          "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MDY1ODIyNzM1/menelik-ii-9405715-1-420.jpg"
      }
    ],
    am_ET: [
      {
        name: "ዳግማዊ ዓፄ ምኒልክ",
        bornName: "ሳህለ ማርያም",
        reign: "1889-1913",
        aged: "69",
        house: "ሰሎሞን",
        horse: "አባ ዳኘው",
        religion: "ኦርቶዶክስ ክርስትና",
        image:
          "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MDY1ODIyNzM1/menelik-ii-9405715-1-420.jpg"
      }
    ]
  }
};

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
            <ChangeLang nextLanguage={nextLanguage} translations={translations} />
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
    return (
        <button className="btn" onClick={() => props.nextLanguage()}>
            Change Language
        </button>
    )
}

export default App;
