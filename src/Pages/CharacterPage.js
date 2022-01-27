import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function CharacterPage() {
  const [characterList, setCharacter] = useState(null);

  async function getCharacter() {
    const response = await axios.get(
      "https://hp-assessment-api.herokuapp.com/hp/characters"
    );
    setCharacter(response.data);
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      {characterList
        ? characterList.map((c) => {
            return <CharacterCard name={c.name} imgUrl={c.imgUrl} />;
          })
        : "Loading.."}
    </div>
  );
}
