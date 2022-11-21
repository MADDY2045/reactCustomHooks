import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((current) => (typeof value === "boolean" ? value : !current));
  }

  return [value, toggleValue];
}
