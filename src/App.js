import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

function App() {
  const [selectedActress, setSelectedActress] = useState("");

  const options = ["Jynx Maze", "Riley Reid", "Kali Rose"];

  return (
    <div>
      {selectedActress && <div>Sua Atriz: {selectedActress}</div>}

      <Dropdown
        title="Selecione sua atriz inicial"
        options={options}
        onSelect={setSelectedActress}
      />
    </div>
  );
}

export default App;
