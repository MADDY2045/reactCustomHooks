import React from "react";
import ToggleComponent from "./1-useToggle/ToggleComponent";
import TimeoutComponent from "./2-useTimeout/TimeoutComponent";
import DebounceComponent from "./3-useDebounce/DebounceComponent";
import ArrayComponent from "./useArray/ArrayComponent";

const App = () => {
  return (
    <div>
      <div>
        <u>USE TOGGLE HOOK</u>
        <ToggleComponent />
      </div>

      <div>
        <u>USE TIMEOUT HOOK</u>
        <TimeoutComponent />
      </div>

      <div>
        <u>USE DEBOUNCE HOOK</u>
        <DebounceComponent />
      </div>

      <div>
        <u>USE ARRAY HOOK</u>
        <ArrayComponent />
      </div>
    </div>
  );
};

export default App;
