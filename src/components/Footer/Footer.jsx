import './Footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>&copy; {year} LCU Events</p>
      </footer>
    );
  }
  
  export default Footer;