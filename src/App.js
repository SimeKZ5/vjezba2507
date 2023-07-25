import React, { useState } from "react";
import Vozilo from "./components/Vozilo";
import DodajVozilo from "./components/DodajVozilo";

function App() {
  const [vozila, setVozila] = useState([
    { id: 1, marka: "Audi", tip: "Hatchback", godiste: "2023" },
    { id: 2, marka: "BMW", tip: "Hatchback", godiste: "2023" },
    { id: 3, marka: "Mercedes", tip: "Hatchback", godiste: "2023" },
    { id: 4, marka: "Volkswagen", tip: "Hatchback", godiste: "2023" },
  ]);

  const dodajVozilo = (novaVozila) => {
    const novoVozilo = { ...novaVozila, id: Date.now() };
    setVozila([...vozila, novoVozilo]);
  };

  return (
    <div>
      <h1>Lista vozila</h1>
      {vozila.map((vozilo) => (
        <Vozilo
          key={vozilo.id}
          marka={vozilo.marka}
          tip={vozilo.tip}
          godiste={vozilo.godiste}
        />
      ))}
      <DodajVozilo onDodajVozilo={dodajVozilo} />
    </div>
  );
}

export default App;
