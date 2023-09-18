import { CardProps } from '../../types';

function Card({ data: { date, image, temp, weather, weekday } }: CardProps) {
  // const { data } = props;
  // const { date, image, temp, weather, weekday } = data;
  return (
    <section>
      <h1>Previsão</h1>
      <h2>{ weekday }</h2>
      <img src={ image } alt={ weekday } />
      <h2>{ date }</h2>
      <h2>{ temp }</h2>
      <h2>{ weather }</h2>
    </section>
  );
}

export default Card;
