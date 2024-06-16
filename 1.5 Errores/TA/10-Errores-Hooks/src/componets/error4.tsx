// Incorrecto
const Lista = () => {
    const items = ['Uno', 'Dos', 'Tres'];
    return (
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  };
  // Error: No usar una clave única en la lista de elementos
  
  // Correcto
  const Lista = () => {
    const items = ['Uno', 'Dos', 'Tres'];
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  