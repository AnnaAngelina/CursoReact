import './App.css';

function App() {
  const nome = "Anna Angelina"
  const nome_maiusculo = nome.toUpperCase()

  function soma(a, b) {
    return a + b
  }
  return (
    <div className="App">
      <h1>Olá, React</h1>
      <p>Primeira aplicação de {nome} {nome_maiusculo}</p>
      <p>Soma {soma(1, 3)}</p>
    </div>
  );
}

export default App;
