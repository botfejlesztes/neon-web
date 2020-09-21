import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Navigationbar from './components/Navbar'
import Car from './components/home_components/carousel'
import JumpbotronPage from './components/home_components/jumbotron'
function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar title="" isDash = "0"></Navigationbar>
        <Switch>
          <Route path="/" exact component={HomePage} title=""/>
        </Switch>
      </div>
    </Router>
  );
}
const HomePage= ()=>{
  return (
    <div>
      <Car/>
      <JumpbotronPage title="First" content="Az oldal még nincs kész, hiszen még épül. -.-'"/>
    </div>
  );
}
export default App;
