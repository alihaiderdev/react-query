import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:8000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes', // every query takes an unique key
    fetchSuperHeroes
  );

  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
