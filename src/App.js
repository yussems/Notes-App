import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import MouseText from "./component/MouseText";
import { MainContext } from "./Context";

function App() {
  const touch = useRef();

  const [mode, setMode] = useState(false);

  const { handleMove } = useContext(MainContext);

  useEffect(() => {
    touch.current.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode);
    }
  };

  return (
    <div
      onMouseMove={(e) => handleMove(e)}
      ref={touch}
      tabIndex={0}
      onKeyUp={handleKeyUp}
      className="screen"
    >
      {mode && <p>selam naber</p>}
      <MouseText />
    </div>
  );
}

export default App;
