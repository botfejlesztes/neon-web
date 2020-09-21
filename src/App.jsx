import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Navigationbar from './components/Navbar'
import Home from './views/Home.jsx';
import Commands from './views/Commands.jsx';
import Invite from './views/Invite.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar title="" isDash = "0"></Navigationbar>
        <Switch>
          <Route path="/" exact component={Home} title=""/>
          <Route path="/commands" exact component={Commands} title=""/>
          <Route path="/invite" exact component={Invite} title=""/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
