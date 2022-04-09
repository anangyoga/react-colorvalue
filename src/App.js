import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} />
      <Input isDarkText={isDarkText} setIsDarkText={setIsDarkText} colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} />
    </div>
  );
}

export default App;
