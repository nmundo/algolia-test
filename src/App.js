import React, { Component, useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import Hit from './components/Hit';
import './App.css';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

const currencies = {
  USD: '$',
  GBP: '£',
};

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">Instant Search Demo</a>
          </h1>
        </header>
        <SearchContainer />
      </div>
    );
  }
}

const SearchContainer = () => {
  const [currency, setCurrency] = useState();

  useEffect(() => {
    setCurrency(localStorage.getItem('currency') || 'USD');
  }, [])

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  const CurrencyDropdown = () => {
    return (
      <div className="currency-select">
        <select
          name="currency"
          value={currency}
          onChange={e => setCurrency(e.target.value)}
        >
          {Object.keys(currencies).map(currency => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
        <div className="search-panel">
          <div className="search-panel__results">
            <SearchBox className="searchbox" />
            <CurrencyDropdown />
            <Hits
              hitComponent={props => (
                <Hit currencySymbol={currencies[currency]} {...props} />
              )}
            />

            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default App;
