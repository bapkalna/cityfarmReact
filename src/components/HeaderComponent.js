import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isDropdownOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleDropdown() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Email: ${this.email.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.prevent.default();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/peas.jpeg"
                height="55"
                width="60"
                style={{ borderRadius: 50 }}
                alt="CityFarm Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown
                    onClick={this.toggleDropdown}
                    isOpen={this.state.isDropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle nav caret>
                      Urban farming
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <NavLink className="nav-link" to="/gardens">
                          Gardens
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink className="nav-link" to="/animals">
                          Animals
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink className="nav-link" to="/bees">
                          Bees
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-lg" /> Education
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-lg" /> Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-lg" /> Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-lg" /> Forum
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button
                  outline
                  onClick={this.toggleModal}
                  className="login-button"
                >
                  <i className="fa fa-sign-in fa-lg login-icon" /> Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <p>Already a member?</p>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">E-mail address</Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  innerRef={(input) => (this.email = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" className="buttonStyle">
                Sign in
              </Button>
              <Button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.handleCloseModal}
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
