import Container from 'react-bootstrap/Container';
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import logoG7 from '../assets/G7.png';  

function Footer() {
  return (
    <footer className="bg-dark text-secondary py-3 mt-auto border-top border-secondary">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        {/* Izquierda: Logo + Copyright */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={logoG7}
            alt="Logo G7 Games"
            width="24"
            height="24"
            className="rounded-circle"
          />
          <span className="small text-white fw-bold">G7 Games</span>
          <span className="small">| © {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>

        {/* Derecha: Redes Sociales + Email */}
        <div className="d-flex align-items-center gap-3 fs-5">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-secondary text-white-50-hover">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-secondary text-white-50-hover">
            <FaFacebook />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="text-secondary text-white-50-hover">
            <FaXTwitter />
          </a>
          <span className="border-start border-secondary ps-3 small text-secondary">
            contacto@g7games.com
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;