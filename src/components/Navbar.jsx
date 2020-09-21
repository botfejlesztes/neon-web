import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {FaRobot} from 'react-icons/fa';
import {FcHome,FcInvite,FcRules} from 'react-icons/fc';
import {VscSettings} from 'react-icons/vsc';
import {DiCodeBadge} from 'react-icons/di';

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
        <Navbar.Toggle aria-controls="responsive-navbar-nav2" />
        <Navbar.Collapse id="responsive-navbar-nav2">
          <Nav className="mr-auto nav-tabs">
            <Link className="nav-link" to="/"><FcHome className="mr-2"/>Home</Link>
            <Link className="nav-link" to="/invite"><FcInvite className="mr-2"/>Invite</Link>
            <Link className="nav-link" to="/commands"><FcRules className="mr-2"/>Commands</Link>
            <NavDropdown title={"👩‍💻Support"} id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/teszt"><DiCodeBadge className ="mr-2"/>Developers</Link>
              <Link className="dropdown-item" to="/teszt">Another action</Link>
              <Link className="dropdown-item" to="/teszt">Something</Link>
              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/teszt">Separated link</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
}

export default Navigationbar;