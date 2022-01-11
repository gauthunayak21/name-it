import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbox from './components/Seachbox';
import SearchResults from './components/SearchResults'

const name = require('@rstacruz/startup-name-generator');

function App() {

  const [searchValues, setSearchResults] = useState([]);
  const [headerExpanded, setExpanded] = useState(false);

  const onSearch = (e) => {
    // setSearchText(e.target.value);
  e.target.value.length ? setSearchResults(name(e.target.value)) : setSearchResults([]);
    setExpanded(e.target.value.length);
  }

  return (
    <div className="flex flex-col items-center">
      <Header headerExpanded={headerExpanded} />
      <Searchbox onSearch={onSearch} />
      <SearchResults results={searchValues} />
    </div>
  );
}

export default App;
