import React from "react";
import { Columns, Container } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

function Currency(props) {
  let { code, name, value } = props;
  function addToFav() {
    if (!localStorage.getItem(code)) {
      localStorage.setItem(code, code);
    } else {
      toast.error("😅 Waluta już jest obserwowana!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
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
            <button className={"button is-primary"} onClick={addToFav}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  );
}

Currency.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  code: PropTypes.string,
};

export default Currency;
