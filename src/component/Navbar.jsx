import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img from "../img/lo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color || click ? "header header-bg expanded" : "header"}>
      <div className="logo-container">
        <Link to="/" className="logo">
          <img className="logoeco" src={img} alt="EcoEcho" width="130" height="130" />
        </Link>
        <p className="tagline">Cabañas | Villa Berna | Córdoba | Argentina</p>
      </div>

      <div className="right">
        {/* Cambiamos el onClick para la barra entera */}
        <div className="menu-bar-mobile" onClick={handleClick}>
          <p>Menú</p>
          <div className="hamburguer">
            {click ? (
              <CloseIcon size={30} style={{ color: "#fff" }} />
            ) : (
              <MenuIcon size={30} style={{ color: "#fff" }} />
            )}
          </div>
        </div>

        {click && (
          <ul className="nav-menu-mobile">
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={handleClick}>Nosotros</Link>
            </li>
            <li>
              <Link to="/servicios" onClick={handleClick}>Servicios</Link>
            </li>
            <li>
              <Link to="/clientes" onClick={handleClick}>Clientes</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={handleClick}>Contacto</Link>
            </li>
          </ul>
        )}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={handleClick}>Nosotros</Link>
          </li>
          <li>
            <Link to="/servicios" onClick={handleClick}>Servicios</Link>
          </li>
          <li>
            <Link to="/clientes" onClick={handleClick}>Clientes</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleClick}>Contacto</Link>
          </li>
        </ul>
        {/* Iconos sociales */}
        <div className="icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
