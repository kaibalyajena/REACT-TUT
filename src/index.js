import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToe from './TicTacToe';
import DataTable from './DataTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <TicTacToe/> */}
   <DataTable/>
  </React.StrictMode>
);


 