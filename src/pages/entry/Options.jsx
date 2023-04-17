import axios from "axios";
import React, { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";
import ToppingOption from "./ToppingOption";

/**
 * @param {{optionType:'scoops' | 'toppings'}} optionType 둘 중에 하나여야만 함*/
function Options({ optionType = "scoops" }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        /**error handling */
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}

export default Options;
