import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import './App.css';

const HatsPage = () => (
   <div>
      <h1>HATS Page</h1>
   </div>
);

const App = () => {
   return (
      <div>
         <switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hats" component={HatsPage} />
         </switch>
      </div>
   );
};

export default App;
