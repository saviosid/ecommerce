import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
   constructor() {
      super();

      this.state = { currentUser: null };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
         this.setState({ currentUser: user }); // this sets up a listner for us to be notified by google of any auth change
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth(); // Unsubscribes from the GoogleAuth
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
         </div>
      );
   }
}

export default App;
