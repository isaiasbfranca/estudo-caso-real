import React from 'react';
import './App.scss';
import Product from './containers/Products/Products';
import HostGatorBar from './components/HostGatorBar/HostGatorBar';

function App() {
  return (
    <div className="App">
      <HostGatorBar/>
      <Product/>
    </div>
  );
}

export default App;
