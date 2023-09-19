export type TitleProps = {
  // title: string,
  data: {
    name: string,
    age: number,
    occupation: string,
  }
  children: React.ReactNode,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // o retorno nesse caso é void, mas pode ser outras coisas
};

export type ForecastListType = {
  weekday: string,
  date: string,
  temp: string,
  image: string,
  weather: string,
};

export type CardProps = {
  data: ForecastListType
};
