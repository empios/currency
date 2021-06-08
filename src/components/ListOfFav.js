import React, { useEffect, useState } from "react";
import { Container } from "react-bulma-components";
import CurrencyFav from "./CurrencyFav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ListOfFav() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(localStorage));
    const arrayOfCurrencies = Object.keys(parsed).map(function (key) {
      return parsed[key];
    });
    setItems(arrayOfCurrencies);
  });
  function deleteAll() {
    let confirm = window.confirm("Czy jesteś pewny?");
    if (confirm) {
      localStorage.clear();
    }
  }
  return (
    <div>
      <Container style={{ margin: "auto", width: "80%" }}>
        <h1 className={"title mt-6 mb-6"}>Twoje obserwowane waluty</h1>
        <h1 className={"subtitle mt-3 mb-6"}>
          <b>Usuń wszystko</b>
          <button
            className={"button is-danger is-small ml-3"}
            onClick={deleteAll}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </h1>
        {items.map((item) => (
          <CurrencyFav key={item} item={item} />
        ))}
      </Container>
    </div>
  );
}

export default ListOfFav;
