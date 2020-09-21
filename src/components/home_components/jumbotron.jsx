
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Jumbo extends React.Component {
    render() {
      return(
    <Jumbotron fluid>
        <Container>
        <h1>{this.props.title}</h1>
            <p>
            {this.props.content}
            </p>
        </Container>
    </Jumbotron>
      )
  }
}

export default Jumbo