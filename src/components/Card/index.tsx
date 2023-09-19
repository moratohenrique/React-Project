/* eslint-disable react/jsx-closing-tag-location */
import { CardProps } from '../../types';

function Card({ data: { date, image, temp, weather, weekday } }: CardProps) {
  // const { data } = props;
  // const { date, image, temp, weather, weekday } = data;
  return (
    <div>
      { image
      && <section>
        <h2>Previsão</h2>
        <h2>{ weekday }</h2>
        <img src={ image } alt={ weekday } />
        <h2>{ date }</h2>
        <h2>{ temp }</h2>
        <h2>{ weather }</h2>
      </section> }
    </div>
  );
}

export default Card;
