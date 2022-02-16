import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

function App() {
  const [selectedClass, setSelectedClass] = useState("");

  const options = ["Curandeiro", "Mago", "Guerreiro"];

  return (
    <div>
      <Dropdown
        title="Selecione sua classe"
        options={options}
        onSelect={setSelectedClass}
      />

      {selectedClass && <div>Sua classe: {selectedClass}</div>}
    </div>
  );
}

export default App;
