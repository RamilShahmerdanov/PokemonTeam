import React from "react";
import styles from "./pokemons.module.css";

function Pokemons({ item, addToTeam, team }) {
  let fixId = item.id.toString().padStart(3, "0");
 

  // Pokémon artıq komandadadırsa, düyməni göstərməyək
  //  const isInTeam = team.some(p => p.id === item.id);

  return (
    <div className={styles.pokemon}>
      <img
        className={styles.img}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fixId}.png`}
        alt={item.name}
      />
      <h3>{item.name}</h3>
      <button onClick={() => addToTeam(item)}>Add to Team</button>
    </div>
  );
}

export default Pokemons;
