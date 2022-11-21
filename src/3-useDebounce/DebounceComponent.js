import { useState } from "react";
import useDebounce from "./useDebounce";

export default function DebounceComponent() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert("called"), 2000, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((p) => p + 1)}>INCREMENT</button>
    </>
  );
}
