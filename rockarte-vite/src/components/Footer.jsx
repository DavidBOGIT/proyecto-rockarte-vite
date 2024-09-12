import '../styles/Footer.css';

const Footer = () => (
 
    <footer className='footer'>
        <div className='footer-left'>
            <p>© 2024 RockArte. Todos los derechos reservados.</p>
        </div>
        <div className='footer-right'>
            <p className='p'>Síguenos en </p>
            <a href="https://www.facebook.com/rockartecr/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="pi pi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="pi pi-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="pi pi-twitter"></i>
            </a>
        </div>
    </footer>

  );
  
  export default Footer;
  