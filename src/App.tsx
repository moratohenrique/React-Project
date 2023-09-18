import './App.css';
import Card from './components/Card';
import Title from './components/Title';
import { forecastList } from './data/forecast';

function App() {
  const text = 'Previsão do Tempo';
  const text2 = 'Exemplo Chidlren';
  const person = {
    name: 'Henrique Morato',
    age: 30,
    occupation: 'Desenvolvedor',
  };
  return (
    <>
      <Title title={ text } data={ person }>
        { text2 }
      </Title>
      { forecastList.map((forecast) => ( // os () dentro do map significarão o retorno
        <Card key={ forecast.date } data={ forecast } />
      ))}

    </>
  );
}

export default App;
