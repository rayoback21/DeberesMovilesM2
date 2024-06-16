// Incorrecto
const Componente = () => {
    React.useState('Inicial');
    return <div>Hola Mundo</div>;
  };
  // Error: Olvidar usar el hook useEffect para efectos secundarios
  
  // Correcto
  const Componente = () => {
    React.useEffect(() => {
      console.log('Efecto ejecutado');
    }, []);
    return <div>Hola Mundo</div>;
  };
  