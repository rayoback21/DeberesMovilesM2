// Incorrecto
const Componente = () => {
    const [estado, setEstado] = React.useState('');
    const handleClick = () => {
      setTimeout(() => {
        setEstado('Listo');
      }, 1000);
    };
    return (
      <div>
        <p>Estado: {estado}</p>
        <button onClick={handleClick}>Iniciar</button>
      </div>
    );
  };
  // Error: No manejar correctamente los eventos asincrónicos
  
  // Correcto
  const Componente = () => {
    const
  