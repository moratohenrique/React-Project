import { TitleProps } from '../../types';

function Title({ title, data: { name, age, occupation }, children }: TitleProps) {
  // const { title, data } = props;
  // console.log(title);
  // console.log(data);

  return (
    <section>
      <p>{ children }</p>
      <h1>{ title }</h1>
      <p>{ name }</p>
      <p>{ age }</p>
      <p>{ occupation }</p>
    </section>
  );
}

export default Title;
