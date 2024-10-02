import React from "react";
//import ImagenFooter from "../img/footer.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Imagen from "../img/lo.png";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){

    return(
      <div className="footer" >
      <div className="container">
      <div className="logotipo">
      <img className="logoeco" src={Imagen} alt="EcoEcho" width="100" height="100" />
      </div>
    <div className="Informacion">
      <Link to="/contacto" className="links">
        <p>Contacto</p>
      </Link>
    </div>
  <div className="social-links">
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <WhatsAppIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "0rem" }}
        />
        </div>
  </a>
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <FacebookIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "0rem" }}
        />
        </div>
  </a>
    <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <InstagramIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "0rem" }}
        />
        </div>
  </a>
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
  </a>
  </div>

  </div>
  <p className="rights">
      &copy; 2024 Cabañas Nahuel | Villa Berna | Cordoba | Argentina | All Rights Reserved
    </p>
    
</div>
    )
}


