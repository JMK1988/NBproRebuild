/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const carpetaPublic = path.join(__dirname, '..', 'public'); // Ruta a la carpeta "public"
const carpetas = fs.readdirSync(carpetaPublic, { withFileTypes: true });

const datos = {};

carpetas.forEach((carpeta) => {
  if (carpeta.isDirectory()) {
    const rutaCarpeta = path.join(carpetaPublic, carpeta.name);
    const archivosEnCarpeta = fs.readdirSync(rutaCarpeta);
    datos[carpeta.name] = archivosEnCarpeta;
  }
});

fs.writeFileSync('datosArchivos.json', JSON.stringify(datos));
