import { TitleProps } from '../../types';
import './styles.css';

function Title({ handleChange, data: { name, age, occupation }, children }: TitleProps) {
  // const { title, data } = props;
  // console.log(title);
  // console.log(data);

  return (
    <section>
      <h1 className="Title">{ children }</h1>
      {/* <h1>{ title }</h1> */}
      <p className="Name">{ name }</p>
      <p className="Age">{ age }</p>
      <p className="Occupation">{ occupation }</p>
      <input
        onChange={ (event) => handleChange(event) }
        type="text"
        placeholder="Digite seu texto aqui!"
        name="nome"
        id="selecionar"
      />
    </section>
  );
}

export default Title;
