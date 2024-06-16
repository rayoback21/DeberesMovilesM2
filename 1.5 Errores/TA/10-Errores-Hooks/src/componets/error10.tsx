// Incorrecto
const Componente = () => {
    if (condicion) {
      const [estado, setEstado] = React.useState('Inicial');
      return <div>{estado}</div>;
    }
    return <div>Otro</div>;
  };
  // Error: Usar un hook dentro de un bloque condicional
  
  // Correcto
  const Componente = () => {
    const [estado, setEstado] = React.useState('Inicial');
    if (condicion) {
      return <div>{estado}</div>;
    }
    return <div>Otro</div>;
  };
  