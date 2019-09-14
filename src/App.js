import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';

const App = () => {
   return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
         </Switch>
      </div>
   );
};

export default App;
