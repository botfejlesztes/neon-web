import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {FaRobot} from 'react-icons/fa';
import {FcHome,FcInvite} from 'react-icons/fc';
import {VscSettings} from 'react-icons/vsc';

class Navigationbar extends React.Component {
  render() {
    if (this.props.isDash > 0) {
      return (
        <div>
      <Navbar bg="light" expand="lg" className="shadow p-3 mb-5 bg-white rounded">
        <Navbar.Brand>
        <FaRobot className="mr-2"/> Neon - {this.props.title || "Dashboard"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-tabs">
            <Nav.Link className="active"><FcHome className="mr-2"/>Home</Nav.Link>
            <Nav.Link><VscSettings className="mr-2"/>Settings</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item>fghjgj</NavDropdown.Item>
              <NavDropdown.Item>fghgj action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

      );
    }else {
      return (
        <Navbar bg="light" expand="lg" className="shadow p-3 mb-5 bg-white rounded">
        <Navbar.Brand href="/">
        <FaRobot className="mr-2"/>
         Neon - {this.props.title || "Dashboard"}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-tabs">
            <Nav.Link ><Link style={{color: "gray"}} to="/"><FcHome className="mr-2"/>Home</Link></Nav.Link>
            <Nav.Link><Link style={{color: "gray"}} to="/invite"><FcInvite className="mr-2"/>Invite</Link></Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item><Link style={{color: "gray"}} to="/teszt">Action</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: "gray"}} to="/teszt">Another action</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: "gray"}} to="/teszt">Something</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link style={{color: "gray"}} to="/teszt">Separated link</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
}

export default Navigationbar;