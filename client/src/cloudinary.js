import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});

export { cloudinary };

// INSERT INTO article (libelle, description, pays, ville, quartier, nombre_pieces, nombre_chambres, nombre_salon, nombre_cuisines, nombre_toilettes, prix_loyer, prix_vente, caution, STATUS, note, localisation, categorie, user, superficie)VALUES ('Maison moderne', 'Maison moderne et spatieuse située dans un environnement accueillant, chaleureux et calme. Voisinage paisible, électricité et eau à votre disponibilité.', NULL, 'Yaounde', 'Bastos', NULL, '5', '1', '2', '2', '120000', '20000000', '1000000', '', '', '', '3', NULL, '120')

// {
//     "libelle": "Maison moderne",
//     "description": "Maison moderne et spatieuse située dans un environnement accueillant, chaleureux et calme. Voisinage paisible, électricité et eau à votre disponibilité.",
//     "pays": null,
//     "ville": "Yaounde",
//     "quartier": "Bastos",
//     "nombre_pieces": null,
//     "nombre_chambres": "5",
//     "nombre_salon": "1",
//     "nombre_cuisines": "2",
//     "nombre_toilettes": "2",
//     "prix_loyer": "120000",
//     "prix_vente": "20000000",
//     "caution": "1000000",
//     "STATUS": "",
//     "note": "",
//     "localisation": "",
//     "categorie": "3",
//     "user": null,
//     "superficie": "120",
//     "roomVideo": null,
//     "images": "[\"http://res.cloudinary.com/dqftyqt6g/image/upload/v1687648342/houseb/m4ughaxtqt3vjjrmgzvc.jpg\",\"http://res.cloudinary.com/dqftyqt6g/image/upload/v1687648355/houseb/qohid19ue2umfsedyhge.jpg\",\"http://res.cloudinary.com/dqftyqt6g/image/upload/v1687648376/houseb/fkn1aij8b9acudcrkgnt.jpg\"]"
// }
