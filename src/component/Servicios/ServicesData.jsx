import img from "../../img/4.jpg";
import im from "../../img/5.jpg";


const ServicesData = [
  {
    id: 1,
    imgsrc: [img, im],
    title: "Proyecto 1",
    text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.",
    deploy: "fg", // Mantén solo una instancia de la clave deploy
    git: "",
    video: "videoEco",
    technological: "JavaScript, React, NodeJS, PostgresSQL, Express, Sequelize, Bootstrap, Git, GitHub, CSS, Trello.",
  },
      {
        id: 2,
        imgsrc: [im],
        title: "Proyecto 2",
        text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.",
        git: "https://github.com/Nahueabasto/Polleria-Olivia",
        video: "videoPolleria",
        deploy: "https://polleria-olivia.vercel.app/",
        technological: "JavaScript, React, Git, CSS.",
      },
    {
    id: 3,
    imgsrc: [img],
    title: "Proyecto 3",
    text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.",
    git: "https://github.com/Nahueabasto/Economia",
    video: "videoEconomia",
    deploy: "https://economia-theta.vercel.app/",
    technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  },
];

export default ServicesData;