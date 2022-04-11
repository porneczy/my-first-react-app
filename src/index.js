import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import Data from './data'

/* console.log(Data.cards); */
/* console.log(<Beers list={Data.cards}  />); */
ReactDOM.render(
  <React.StrictMode>
    <Beers list={Data.cards}  />
  </React.StrictMode>,
  document.getElementById('root')
);

