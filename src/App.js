import logo from './logo.svg';
import './App.css';
import moviesData from './moviesData/Movies';
import Movies from './components/Movies';
// import Movie from './components/Movie';

function App() {
  // console.log(moviesData);
  return (
    <div className="App">
      <Movies movies={moviesData}/>
 
    </div>
  );
}

export default App;
