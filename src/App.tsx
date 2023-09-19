/* eslint-disable react/jsx-no-bind */
import './App.css';
import { LuArrowUp01 } from 'react-icons/lu';
import Card from './components/Card';
import Title from './components/Title';
import { forecastList } from './data/forecast';

function App() {
  const text = 'Previsão do Tempo';
  // const text2 = 'Exemplo Chidlren';
  const person = {
    name: 'Henrique Morato',
    age: 30,
    occupation: 'Desenvolvedor',
  };
  const loading = true;

  function alertButtom(valor: string) {
    alert(valor);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name);
    console.log(event.target.id);
    console.log(event.target.value);
  }
  return (
    <div>
      { !loading && forecastList.length > 0 ? <h1>Carregando...</h1> : ( // os () significarão o retorno
        <section>
          <button onClick={ () => alertButtom('Teste!') }>Clicar!</button>
          <LuArrowUp01 size={ 84 } color="#f0f" style={ { marginBottom: '50px' } } />
          <Title data={ person } handleChange={ handleChange }>
            { text }
          </Title>
          { forecastList.map((forecast) => ( // os () dentro do map significarão o retorno
            <Card key={ forecast.date } data={ forecast } />
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
