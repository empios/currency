import React, { useEffect, useState } from "react";
import { Columns, Container } from "react-bulma-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faMinus } from "@fortawesome/free-solid-svg-icons";

function CurrencyFav(props) {
  let { item } = props;
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://api.nbp.pl/api/exchangerates/rates/A/" + item + "/")
        .then((response) => response.json())
        .then((data) => {
          setName(data.currency);
          setValue(data.rates[0].mid);
        });
    };
    fetchData();
  }, []);

  const deleteFromFav = () => {
    let confirm = window.confirm("Czy jesteś pewien?");
    if (confirm) {
      localStorage.removeItem(item);
    }
  };
  return (
    <div>
      <Container>
        <Columns>
          <Columns.Column>
            <h1>
              <FontAwesomeIcon
                style={{ marginRight: "0.3em" }}
                icon={faCoins}
              />
              {name}
            </h1>
          </Columns.Column>
          <Columns.Column>
            <h1>{value}</h1>
          </Columns.Column>
          <Columns.Column>
            <button className={"button is-danger"} onClick={deleteFromFav}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  );
}
CurrencyFav.propTypes = {
  item: PropTypes.string,
};
export default CurrencyFav;
