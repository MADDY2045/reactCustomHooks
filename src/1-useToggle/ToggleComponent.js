import useToggle from "./useToggle";

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <>
      <h1>{value.toString()}</h1>
      <button onClick={toggleValue}>TOGGLE</button>
      <button onClick={() => toggleValue(true)}>MAKE TRUE</button>
      <button onClick={() => toggleValue(false)}>MAKE FALSE</button>
    </>
  );
}
