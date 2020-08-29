import React ,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,Modal,ModalBody,ModalHeader,NavbarText, Button ,FormFeedback,Form,FormGroup,Label,Input,Carousel,CarouselCaption,CarouselItem, ButtonGroup} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);



        this.state = {
          isNavOpen: false,
          isModalOpen:false,
          isSignupOpen:false,
          isLoginOpen:true,

        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
                 }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen,
          isLoginOpen: true,
           isSignupOpen:false
        });
                    }
        
        
        toggleLogin() {
         this.setState({
           isLoginOpen: true,
           isSignupOpen:false
         });
                       }
        toggleSignup() {
            this.setState({
              isSignupOpen: true,
              isLoginOpen: false,
            });
                       }



    render() {

        return(
            <div>
                <Navbar dark expand="md" className="navbarcolur">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto zoom  " href="/home"><strong><span className="fa fa-home fa-lg"></span></strong></NavbarBrand>
                        <NavbarBrand className="mr-auto zoom offset-5" href="/home"><strong>Zomentum</strong></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg zoom"><strong>{' '} Login</strong></span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                                  
                
                <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ButtonGroup>
                    < Button  className="btn-success " onClick={this.toggleLogin}><ModalHeader><strong>Login</strong></ModalHeader></ Button>                
                    < Button  className="btn-secondary" onClick={this.toggleSignup}><ModalHeader className="offset-5" toggle={this.toggleModal}><strong>Signup</strong></ModalHeader></ Button>                
                    </ButtonGroup>
                     <ModalBody>
                         {this.state.isSignupOpen===false && this.state.isLoginOpen===true ? (
                      <Form>
                            <FormGroup row >
                                <Label htmlFor="email" className="col-12 col-sm-2"><strong>Email</strong></Label>
                                <Input type="email" id="email" name="email" className="col-12 offset-1 col-sm-7"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup row >
                                <Label htmlFor="password" className="col-12 col-sm-2"><strong>Password</strong></Label>
                                <Input type="password" id="password" name="password" className="col-12 offset-1 col-sm-7"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check >
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input) => this.remember = input}  />
                                   <strong>   Remember me</strong> 
                                </Label>
                            </FormGroup >
                            <ButtonGroup className="offset-3">
                            <Button type="submit" value="submit" color="primary"> Login</Button>
                            <Button type="submit" value="cancel" color="danger"> Cancel</Button>
                            </ButtonGroup>
                            
                        </Form>
                         ): (<Form>
                            <FormGroup row >
                                <Label htmlFor="Firstname" className="col-12 col-sm-2"><strong>Firstname</strong></Label>
                                <Input type="text" id="Firstname" name="Firstname" className="col-12 offset-1 col-sm-7"
                                    innerRef={(input) => this.Firstname = input} />
                            </FormGroup>
                            <FormGroup row >
                                <Label htmlFor="Lastname" className="col-12 col-sm-2"><strong>Lastname</strong></Label>
                                <Input type="text" id="Lastname" name="Lastname" className="col-12 offset-1 col-sm-7"
                                    innerRef={(input) => this.Lastname = input} />
                            </FormGroup>
                            <FormGroup row >
                                <Label htmlFor="email" className="col-12 col-sm-2"><strong>Email</strong></Label>
                                <Input type="email" id="email" name="email" className="col-12 offset-1 col-sm-7"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup row >
                                <Label htmlFor="password" className="col-12 col-sm-2"><strong>Password</strong></Label>
                                <Input type="password" id="password" name="password" className="col-12 offset-1 col-sm-7"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <ButtonGroup className="offset-3">
                            <Button type="submit" value="submit" color="primary"> Login</Button>
                            <Button type="submit" value="cancel" color="danger"> Cancel</Button>
                            </ButtonGroup>
                            
                        </Form>) }
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Header;