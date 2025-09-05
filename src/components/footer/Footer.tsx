import type { FC } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/images/logo-CN-W.png";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Colombia Noviolenta" className="footer-logo-img" />
      </div>

      <div className="footer-socials">
        <a href="https://www.facebook.com/ColombiaNoviolenta" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/@colombianoviolenta" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
        </a>
        <a href="https://www.instagram.com/colombianoviolenta/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        <a href="https://x.com/colnoviolenta" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
        </a>
        <a href="https://www.youtube.com/@colombia_noviolenta" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
        </a>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} Colombia Noviolenta
      </div>
    </footer>
  );
};

export default Footer;
