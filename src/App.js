import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';
import MemberPage from './containers/Members/MemberPage';
import VotePage from './containers/Votes/VotePage';
import BillPage from './containers/Bills/BillPage';


const App = (props) => {
  return (
    <div className="app">
      <NavigationBar />
      <Switch>
        <Route path="/members" component={MemberPage}></Route>
        <Route path="/bills" component={BillPage}></Route>
        <Route path="/votes" component={VotePage}></Route>
      </Switch>
    </div>
    );
}

export default App;
