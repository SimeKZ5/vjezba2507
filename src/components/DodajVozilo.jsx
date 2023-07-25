import React, { useState } from "react";

const DodajVozilo = ({ onDodajVozilo }) => {
  const [novaVozila, setNovaVozila] = useState({
    marka: "",
    tip: "",
    godiste: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovaVozila((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDodajVozilo(novaVozila);
    setNovaVozila({ marka: "", tip: "", godiste: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Marka:</label>
        <input
          type="text"
          name="marka"
          value={novaVozila.marka}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Tip:</label>
        <input
          type="text"
          name="tip"
          value={novaVozila.tip}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Godište:</label>
        <input
          type="text"
          name="godiste"
          value={novaVozila.godiste}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Dodaj vozilo</button>
    </form>
  );
};

export default DodajVozilo;
