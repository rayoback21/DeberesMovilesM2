// Incorrecto
const Componente = () => {
    let estado = 'Inicial';
    return <div>{estado}</div>;
  };
  // Error: Olvidar usar el hook useState para el estado
  
  // Correcto
  const Componente = () => {
    const [estado, setEstado] = React.useState('Inicial');
    return <div>{estado}</div>;
  };
  