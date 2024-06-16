// Incorrecto
const Componente = ({ valor }) => {
    React.useEffect(() => {
      console.log('Valor actualizado:', valor);
    }, []); // Sin dependencias, se ejecuta solo una vez
    return <div>Valor: {valor}</div>;
  };
  // Error: Usar useEffect incorrectamente con dependencias
  
  // Correcto
  const Componente = ({ valor }) => {
    React.useEffect(() => {
      console.log('Valor actualizado:', valor);
    }, [valor]); // Con dependencia, se ejecuta cuando valor cambia
    return <div>Valor: {valor}</div>;
  };
  