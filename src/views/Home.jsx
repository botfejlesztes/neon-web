import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import JumpbotronPage from '../components/home_components/jumbotron'

class Home extends React.Component {
    render() {
      return(
        <div className="home-view">
            <JumpbotronPage title="First" content="Az oldal még nincs kész, hiszen még épül. -.-'"/>
        </div>
      )
  }
}

export default Home;