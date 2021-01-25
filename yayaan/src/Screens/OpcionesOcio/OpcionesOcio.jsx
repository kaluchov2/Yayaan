import React from "react";

import "../Ocio/Ocio.css";

const OpcionesOcio = (props) => {
  const options = [
    {
      text: "Deportes",
      handler: props.actionProvider.handleDatosDeportes,
      id: 1,
    },

    // { text: "Historia", handler: props.actionProvider.handleHistoria, id: 2 },
    // { text: "Geografia", handler:props.actionProvider.handleGeografia, id: 3 },
    // { text: "Animales", handler:props.actionProvider.handleGeografia, id: 4 },
    // { text: "Espacio", handler:props.actionProvider.handleGeografia, id: 5 },

  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OpcionesOcio;