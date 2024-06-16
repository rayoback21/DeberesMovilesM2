// Incorrecto
const Componente = () => {
    React.useEffect(() => {
      console.log('Componente montado');
      return () => {
        console.log('Componente desmontado');
      };
    }, []);
    return <div>Componente</div>;
  };
  // Error: Usar el hook useEffect de forma incorrecta en componentes no montados
  
  // Correcto
  const Componente = () => {
    React.useEffect(() => {
      console.log('Componente montado');
      return () => {
        console.log('Componente desmontado');
      };
    }, []);
    return <div>Componente</div>;
  };
  