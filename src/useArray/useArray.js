import { useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  //push
  function push(element) {
    setArray((a) => [...a, element]);
  }

  //filter
  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  //update
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  //remove
  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  //clear
  function clear() {
    setArray([]);
  }

  return { array, setArray, push, filter, update, remove, clear };
}
