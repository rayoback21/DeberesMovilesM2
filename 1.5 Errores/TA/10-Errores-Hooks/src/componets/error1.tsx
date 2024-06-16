// Incorrecto
const Componente = () => {
    return <div>Hola Mundo</div>;
  };
  // Error: Olvidar importar React en componentes funcionales
  
  // Correcto
  import React from 'react';
  const Componente = () => {
    return <div>Hola Mundo</div>;
  };
  