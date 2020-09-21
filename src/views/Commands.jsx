import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import JumpbotronPage from '../components/home_components/jumbotron'

class Commands extends React.Component {
    render() {
      return(
        <div className="commands-view">
            <JumpbotronPage title="Parancsok" content="Itt lesznek a parancsok..."/>
        </div>
      )
  }
}

export default Commands;