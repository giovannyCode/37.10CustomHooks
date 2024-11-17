import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function useFlip(initialVal = false) {
  // call useState, "reserve piece of state"
  const [isFacingUp, setIsFacingUp] = useState(initialVal);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };
  // return piece of state AND a function to toggle it
  return [isFacingUp, flipCard];
}

function useAxios(url) {
  const [items, setItems] = useState([]);
  const addItem = async (term) => {
    const response = await axios.get(term ? `${url}${term}` : url);
    setItems((items) => [...items, { ...response.data, id: uuidv4() }]);
  };
  return [items, addItem];
}

export const hooks = { useFlip, useAxios };
