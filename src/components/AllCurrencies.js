import React, { useEffect, useState } from "react";
import { Container } from "react-bulma-components";
import Currency from "./Currency";

function AllCurrencies() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    fetch("https://api.nbp.pl/api/exchangerates/tables/A?format=json")
      .then((response) => response.json())
      .then((data) => setArray(data[0].rates));
  });
  return (
    <div>
      <Container style={{ margin: "auto", width: "80%" }}>
        <h1 className={"title mt-6 mb-6"}>Lista dostępnych walut</h1>
        {array.map((currency) => (
          <Currency
            key={currency.code}
            code={currency.code}
            name={currency.currency}
            value={currency.mid}
          />
        ))}
      </Container>
    </div>
  );
}

export default AllCurrencies;
