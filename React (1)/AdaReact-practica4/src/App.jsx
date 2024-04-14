import { useState } from "react";
import charactersGOT from "./data.js";

import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ContainCard from "./components/ContainCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [listCharacters, setListCharacters] = useState(charactersGOT);

  const handleAddCharacter = (newCharacterForm) =>{
    setListCharacters(newCharacterForm)
  }


  return <div>
    <Header />
    <Form handleAddCharacter={handleAddCharacter} />
    <ContainCard />
    <Footer />
  </div>;
}

export default App;
