export type TitleProps = {
  title: string,
  data: {
    name: string,
    age: number,
    occupation: string,
  }
  children: React.ReactNode,
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
