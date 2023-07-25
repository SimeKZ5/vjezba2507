import React from "react";

const Vozilo = ({ marka, tip, godiste }) => {
  return (
    <div>
      <h3>Marka: {marka}</h3>
      <p>Tip: {tip}</p>
      <p>Godište: {godiste}</p>
    </div>
  );
};

export default Vozilo;
