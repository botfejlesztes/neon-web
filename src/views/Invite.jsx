import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import JumpbotronPage from '../components/home_components/jumbotron'

class Invite extends React.Component {
    render() {
      return(
        <div className="commands-view">
            <JumpbotronPage title="Meghívás" content="Hívd meg te is szerveredre.."/>
        </div>
      )
  }
}

export default Invite;