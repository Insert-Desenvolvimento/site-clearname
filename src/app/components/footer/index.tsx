import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./footer.scss";
import Image from "next/image";
import logo from "/public/logo.png";


const Footer: React.FC = () => {
  return (
    <>
    <footer className="footer">
      
      <div className="footer-content">
        <div className="container-img">
      <Image className="content-img" src={logo} alt="Logo da Empresa Nayhara Soares"/>
      

      </div>
      <div className="contact-info">
            <h2 className="footer-title">Entre em Contato</h2>
          
          <div className="contact-item">
            
            <MdEmail size={24} color="#D4AF37"/>
            <a href="mailto:contato@soarescredito.com.br">contato@soarescredito.com.br</a>
          </div>
          <div className="contact-item">
            
            <FaInstagram size={24} color="#D4AF37"/>
            <a
              href="https://www.instagram.com/soares.nayhara"
              target="_blank"
              rel="noopener noreferrer"
            >
              @soares.nayhara
            </a>
          </div>
          <div className="contact-item">
            
            <MdEmail size={24} color="#D4AF37"/>
            <a href="mailto:sejaparceiro@soarescredito.com.br">sejaparceiro@soarescredito.com.br</a>
          </div>
        </div>
      </div>
      
    </footer>
    <div className="fllatech">
    <p className="footer-title">Desenvolvido & Mantido por FLLA TECH</p>
        
        <div className="contact-item">
          
          <MdEmail size={24} color="#D4AF37"/>
          <a href="mailto:contato@soarescredito.com.br">flavio.pasantos@gmail.com</a>
        </div>
        <div className="contact-item">
          
          <FaInstagram size={24} color="#D4AF37"/>
          <a
            href="https://www.instagram.com/eu_flaviosantos"
            target="_blank"
            rel="noopener noreferrer"
          >
            @eu_flaviosantos
          </a>
        </div>
    </div>
  </>
  );
};
export default Footer;
