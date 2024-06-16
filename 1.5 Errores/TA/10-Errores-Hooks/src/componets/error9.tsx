// Incorrecto
const Componente = () => {
    React.useEffect(() => {
      console.log('Efecto ejecutado');
    }, []);
    return <div>Componente</div>;
  };
  // Error: No limpiar los efectos correctamente
  
  // Correcto
  const Componente = () => {
    React.useEffect(() => {
      console.log('Efecto ejecutado');
      return () => {
        console.log('Efecto limpiado');
      };
    }, []);
    return <div>Componente</div>;
  };
  