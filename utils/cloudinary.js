require("dotenv").config();
const cloudinary = require('cloudinary').v2;  // Asegúrate de usar v2 directamente

// Configurar Cloudinary con las variables de entorno
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

// Función para subir un archivo a Cloudinary
const uploadFile = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, { folder: "productsDev"});
        return result;
    } catch (error) {
        console.error("Error al subir archivo a Cloudinary:", error);
        throw error;
    }
};

module.exports = { uploadFile };
