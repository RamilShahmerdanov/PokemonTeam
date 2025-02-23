import React, { useEffect, useState } from "react";
import Pokemons from "../Carts/Pokemons";
import styles from "./pokemon_team.module.css";
import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";

function Pokemon_Team({ pokodata, team, addToTeam, setTeam }) {
  const [totalcount, setTotalcount] = useState(0);
  console.log("pokodata", pokodata);
  console.log("team", team);
  function incrementFunc(pokemon) {
    setTeam(
      team.map((p) => (p.id === pokemon.id ? { ...p, count: p.count + 1 } : p))
    );
  }
  function decrementFunc(pokemon) {
    if (pokemon.count > 0) {
      setTeam(
        team.map((p) =>
          p.id === pokemon.id ? { ...p, count: p.count - 1 } : p
        )
      );
    }
  }
  function RemoveFunc(pokemon) {
    setTeam(team.filter((p) => p.id !== pokemon.id));
  }
  console.log("totalcount", totalcount);

  useEffect(() => {
    const totalcount = team.reduce((acc, pokemon) => acc + pokemon.count, 0);
    setTotalcount(totalcount);
  }, [team]);
  return (
    <>
    <div className={styles.tablebody}>
      <div className={styles.team}>
        {pokodata.map((item, index) => (
          <Pokemons key={index} item={item} addToTeam={addToTeam} />
        ))}
      </div>

      <h2 className={styles.texts} >Your Pokemon Team</h2>
      {team.map((pokemon) => (
        <div className={styles.adteam}>
      
            <div className={styles.pokodata}>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id
                  .toString()
                  .padStart(3, "0")}.png`}
                alt={pokemon.name}
              />
              <h3>{pokemon.name}</h3>
            </div>

            <div className={styles.btns}>
              <button
                className={styles.btninc}
                onClick={() => decrementFunc(pokemon)}
              >
                -
              </button>
              {pokemon.count}
              <button
                className={styles.btndec}
                onClick={() => incrementFunc(pokemon)}
              >
                +
              </button>
              <button
                className={styles.btnremove}
                onClick={() => RemoveFunc(pokemon)}
              >
                Remove
              </button>
            </div>
         
        </div>
      ))}
      <h3 className={styles.texts}>Total Pokemon: {totalcount}</h3>
      <h2 className={styles.texts}>Individual Pokemon Count</h2>
      <Table striped bordered hover className={styles.table}>
    <thead>
      <tr>
        <th>Nickname</th>
        <th>Count</th>
        <th>Label</th>
      </tr>
    </thead>
    <tbody>
      {team.map((pokemon, i) => (
        <tr key={i}>
          <td>{pokemon.name}</td>
          <td>{pokemon.count}</td>
          <td>Pokémons</td>
        </tr>
      ))}
    </tbody>
  </Table>
      
    </div>
   
  </>
  );
}

export default Pokemon_Team;
