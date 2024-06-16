import React from 'react';

class MatrixComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input,
      rows: this.getRows(props.input),
      columns: this.getColumns(props.input)
    };
  }

  getRows(input) {
    return input.split('\n').map(x => x.split(" ").map(x => +x));
  }

  getColumns(input) {
    let matrix = this.getRows(input);
    let cols = [];
    for (let i = 0; i < matrix[0].length; i++) {
      cols[i] = matrix.map(x => x[i]);
    }
    return cols;
  }

  render() {
    return (
      <div>
        <h2>Rows</h2>
        <ul>
          {this.state.rows.map((row, index) => (
            <li key={index}>{row.join(', ')}</li>
          ))}
        </ul>
        <h2>Columns</h2>
        <ul>
          {this.state.columns.map((col, index) => (
            <li key={index}>{col.join(', ')}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function App() {
  const inputText = "1 2 3\n4 5 6\n7 8 9"; // ejemplo de texto de entrada
  return (
    <div>
      <h1>Matriz</h1>
      <MatrixComponent input={inputText} />
    </div>
  );
}

export default App;
