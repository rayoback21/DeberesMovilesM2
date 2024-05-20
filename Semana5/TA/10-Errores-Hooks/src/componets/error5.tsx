// Incorrecto
const Componente = () => {
    const [contador, setContador] = React.useState(0);
    const incrementar = () => {
      contador++; // Modificar el estado directamente
      setContador(contador);
    };
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    );
  };
  // Error: Modificar directamente el estado sin usar la función setter
  
  // Correcto
  const Componente = () => {
    const [contador, setContador] = React.useState(0);
    const incrementar = () => {
      setContador(contador + 1);
    };
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    );
  };
  