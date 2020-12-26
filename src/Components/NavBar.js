import React, {Component} from 'react';
import { Link } from 'react-scroll';
import Modal from 'react-modal';
import './hamburgers.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000000'
        }
};


class NavBar extends Component {

    constructor() {
        super();
        this.state = {
         
          showModal: false
        };
    
      
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
    


        handleOpenModal () {
            this.setState({ showModal: true });
        }

        handleCloseModal () {
            this.setState({ showModal: false });
        }

    render() {
        return (
            <div className = "nav-wrapper">

                {/* <button className= { this.state.active ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse" } type="button" onClick={this.toggleClassOpenModal} >
                     <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                 */}

                {/* <button className = "small-menu-button" onClick={this.handleOpenModal}>Trigger Modal</button> */}
                <Modal 
                    isOpen={this.state.showModal}
                    className="Modal"
                    contentLabel="Minimal Modal Example"
                    shouldFocusAfterRender={false}
                    className="Modal"
                >  
                    <div className = "link-container-mobile">
                        <div className = "test">

                        <div className = "link-container">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >Home</Link>
                        </div>
                        <div className = "link-container">
                        <Link
                                activeClass="active"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                        >About</Link>
                        </div>
                        <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="work-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Work</Link>
                        </div>
                        
                        <div className = "link-container">
                            <Link
                                activeClass="active"
                                to="contact-section"
                                spy={true}
                                smooth={true}
                                offset={500}
                                duration={1000}
                            >Contact</Link> 
                        </div>
                        </div>
                        
                        
                    </div>
                    
          <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
                <div className = "nav-bar">
                    <ul>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Home</Link>
                        <Link
                                activeClass="active"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >About</Link>
                        <Link
                            activeClass="active"
                            to="work-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Work</Link>
                        <Link
                            activeClass="active"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            offset={500}
                            duration={1000}
                        >Contact</Link> 
                    </ul>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    className="modal"
                    overlayClassName="Overlay"
                    disableAutoFocus={true}
                    ariaHideApp={false}
                >
                    <nav className = "small-nav">
                        <ul className='menu-small'>
                            <Link className = "aa" to='/' exact onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">HOME</span></Link>
                            <Link className = "aa" to='/about' onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">ABOUT</span></Link>
                            <Link className = "aa" to='/work' onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">WORK</span></Link>
                            <Link className = "aa" to='/contact' onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">CONTACT</span></Link>
                        </ul>
                    </nav>
                    <button className = "close-button" onClick = {this.closeModal}>close</button>
                </Modal>

            </div>
            
        );
    }
}

export default NavBar;