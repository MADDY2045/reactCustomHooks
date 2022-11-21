import { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>INCREMENT</button>
      <button onClick={reset}>RESET</button>
      <button onClick={clear}>CLEAR TIMEOUT</button>
    </>
  );
}
