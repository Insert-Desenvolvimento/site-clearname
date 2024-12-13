import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./footer.scss";
import logo from "/public/variableImg/logo.png";
import { TbWorldSearch } from "react-icons/tb";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="container-img">
            <img
              className="content-img"
              src={logo.src}
              alt="Logo da Empresa Nayhara Soares"
            />
          </div>
          <div className="contact-info">
            <h2 className="footer-title">Entre em Contato</h2>

            <div className="contact-item">
              <MdEmail size={24} color="#D4AF37" />
              <a href="mailto:contato@soarescredito.com.br">
                contato@soarescredito.com.br
              </a>
            </div>
            <div className="contact-item">
              <FaInstagram size={24} color="#D4AF37" />
              <a
                href="https://www.instagram.com/soares.nayhara"
                target="_blank"
                rel="noopener noreferrer"
              >
                @soares.nayhara
              </a>
            </div>
            <div className="contact-item">
              <MdEmail size={24} color="#D4AF37" />
              <a href="mailto:sejaparceiro@soarescredito.com.br">
                sejaparceiro@soarescredito.com.br
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-footer">
        <div className="fllatech">
          <p className="footer-title">Desenvolvido & Mantido por FLLA TECH</p>
          <div className="contact-item">
            <MdEmail size={16} color="#fff" />
            <a href="mailto:administrativo@fllatech.com">
              administrativo@fllatech.com
            </a>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={16} color="#fff" />
            <a
              href="https://wa.me/5532984738948?text=Olá! Venho pelo o Site da Nayhara Soares e Tenho interesse em saber mais."
              target="_blank"
              rel="noopener noreferrer"
            >
              (32) 9 8473-8948
            </a>
          </div>
          <div className="contact-item">
            <TbWorldSearch size={16} color="#fff" />
            <a
              href="https://fllatech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              fllatech.com
            </a>
          </div>
          
        </div>
        <div className="copy-content">
            &copy; {new Date().getFullYear()} Nayhara Soares Reabilitação de
            Crédito. Todos os direitos reservados.
          </div>
      </div>
    </>
  );
};
export default Footer;
