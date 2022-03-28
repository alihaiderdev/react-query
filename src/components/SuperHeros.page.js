import axios from 'axios';
import { useEffect, useState } from 'react';

export const SuperHeroesPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading ...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className='superHeroesPage'>
      <h2> Super Heroes Page</h2>
      {data?.length > 0 &&
        data.map((hero) => {
          return <div key={hero.id}>{hero.name}</div>;
        })}
    </div>
  );
};
