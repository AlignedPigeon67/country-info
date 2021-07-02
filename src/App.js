import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  const [allCountries, setAllCountries] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(
        data => {
          setAllCountries(data);
          setIsLoaded(true);
        },
        err => {
          console.error(err);
        }
      );
  }, []);

  const searchHandler = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchHandler={searchHandler} />
      {isLoaded ? (
        <CountryList countries={allCountries} searchQuery={searchQuery} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
