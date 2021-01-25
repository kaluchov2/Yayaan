import React from "react";

import "./Ocio.css";

const Ocio = (props) => {
  const options = [
    {
      text: "Datos Curiosos",
      handler: props.actionProvider.handleDatosCuriosos,
      id: 1,
    },

    { text: "Actividades contra el  Estres", handler: props.actionProvider.handleEstres, id: 2 },
    { text: "Actividades contra la ansiedad", handler: () => {}, id: 3 },

  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Ocio;