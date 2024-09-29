import React from "react";
//import ImagenFooter from "../img/footer.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Imagen from "../img/lo.png";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){

    return(
      <div className="footer" >
      <div className="container">
      <div className="logotipo">
      <img className="logoeco" src={Imagen} alt="EcoEcho" width="200" height="200" />
      </div>
    <div className="Informacion">
      {/* <h3>INFORMACION</h3> */}
      <Link to="/nosotros" className="links">
        <p>Nosotros</p>
        </Link>
      <Link to="/contacto" className="links">
        <p>Contacto</p>
      </Link>
    </div>
    <div className="Contacto">
      {/* <h3>CONTACTO</h3> */}
      <p>
         Arq. Maria Paula Ramos Landa
      </p>
      <p>
         Mpaula.ramoslanda@gmail.com
      </p>
      <p>
        +54 998 844 022
      </p>
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
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
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
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
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
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
  </a>
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <LinkedInIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
  </a>
  </div>

  </div>
  <p className="rights">
      &copy; 2024 Cabañas | Villa Berna | Cordoba | Argentina | All Rights Reserved
    </p>
    
</div>
    )
}


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import img from "../img/lo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);

//   return (
//     <div className={color ? "header header-bg" : "header"}>

//       <div className="logo-container">
//         <Link to="/" className="logo">
//           <img className="logoeco" src={img} alt="EcoEcho" width="130" height="130" />
//         </Link>
//         <p className="tagline">Cabañas | Villa Berna | Córdoba | Argentina</p>
//       </div>

//       <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <li>
//           <Link to="/" onClick={handleClick}>Home</Link>
//         </li>
//         <li>
//           <Link to="/nosotros" onClick={handleClick}>Nosotros</Link>
//         </li>
//         <li>
//           <Link to="/servicios" onClick={handleClick}>Servicios</Link>
//         </li>
//         <li>
//           <Link to="/clientes" onClick={handleClick}>Clientes</Link>
//         </li>
//         <li>
//           <Link to="/contacto" onClick={handleClick}>Contacto</Link>
//         </li>
//       </ul>

//       <div className="icons">
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <WhatsAppIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//         </a>
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <FacebookIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//         </a>
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <InstagramIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//         </a>
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <LinkedInIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//         </a>
//       </div>

//       {/* Barra del menú hamburguesa visible solo en pantallas pequeñas */}
//       <div className="menu-bar-mobile">
//         <p>Menú</p>
//         <div className="hamburguer" onClick={handleClick}>
//           {click ? (
//             <CloseIcon size={30} style={{ color: "#fff" }} />
//           ) : (
//             <MenuIcon size={30} style={{ color: "#fff" }} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;