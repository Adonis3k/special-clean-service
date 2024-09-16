import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false, 
      showButton: window.innerWidth < 768,
      headerHeight: 0, // Initialize header height
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.updateHeaderHeight); // Listen for scroll changes too if header size changes dynamically
    this.updateHeaderHeight(); // Calculate the header height when the component mounts
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.updateHeaderHeight);
  }

  handleResize = () => {
    const showButton = window.innerWidth < 768;
    this.setState({ showButton, isOpen: false });
    this.updateHeaderHeight(); // Recalculate the header height on resize
  }

  updateHeaderHeight = () => {
    const bannerElement = document.querySelector('.Banner');
    if (bannerElement) {
      const headerHeight = bannerElement.getBoundingClientRect().height;
      this.setState({ headerHeight });
    }
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }), this.updateHeaderHeight); // Recalculate height after toggling the nav
  }

  closeNav = () => {
    this.setState({ isOpen: false });
    window.scrollTo(0, window.scrollY);
  }

  render() {
    const { showButton, isOpen, headerHeight } = this.state;
    return (
      <div className="Banner">
        {showButton && (
          <button className="nav-toggle" onClick={this.toggleNav}>
            {isOpen ? 'X' : '☰'}
          </button>
        )}
        <div className={`navitems ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="Services-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
            Services
              </Link>
            </li>
            <li>
              <Link to="ContactForm-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="AboutUs-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
              About Us
              </Link>
            </li>
            <li>
              <Link to="ServiceCard-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
              ServiceCard
              </Link>
            </li>
            <li>
              <Link to="Testimonial-Header" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
              Testimonial
              </Link>
            </li>
            <li>
              <Link to="Footer-section" smooth={true} duration={1000} offset={-headerHeight} onClick={this.closeNav}>
              Footer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
