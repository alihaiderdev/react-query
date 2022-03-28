import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './app.css';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeros.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Router>
          <nav>
            <ul
              style={{
                margin: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
              }}
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/super-heroes' element={<SuperHeroesPage />}></Route>
            <Route
              path='/rq-super-heroes'
              element={<RQSuperHeroesPage />}
            ></Route>
          </Routes>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
