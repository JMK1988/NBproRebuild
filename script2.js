const aseguradoras = '/Scripts/datosContactos.json'

// Obtener el contenedor donde se agregarán las tarjetas
const cardContainer = document.getElementById("app");

// Función para abrir el modal

// Función para abrir el modal
// Función para abrir el modal
function openFileModal(aseguradora) {
  // Obtener el modal y el contenedor de archivos
  const modal = document.getElementById("fileModal");
  const fileListContainer = document.getElementById("fileList");

  // Limpiar el contenido previo del contenedor de archivos
  fileListContainer.innerHTML = "";

  // Verificar si la aseguradora tiene contactos
  if (aseguradora.contactos) {
    const contactos = aseguradora.contactos;

    // Crear elementos <p> para cada contacto y agregarlos al contenedor
    for (const tipoContacto in contactos) {
      const valorContacto = contactos[tipoContacto];

      const contactParagraph = document.createElement("p");
      const link = document.createElement("a");
      link.href = "javascript:void(0);";
      link.textContent = tipoContacto;
      link.className = "custom-button"
      link.addEventListener("click", () => handleContact(tipoContacto, valorContacto));
      contactParagraph.appendChild(link);
      fileListContainer.appendChild(contactParagraph);
    }
  } else {
    // Si la aseguradora no tiene contactos, mostrar un mensaje o realizar alguna acción
    fileListContainer.textContent = "No hay información de contacto disponible.";
  }

  // Mostrar el modal
  $(modal).modal("show");
}


// Resto del código ...

// Función para crear tarjetas
// Función para crear tarjetas
function createCard(nombre, contactos) {
  // Crear la tarjeta
  const card = document.createElement("div");
  card.className = "card-container";

  // Crear el contenedor de la imagen
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  // Crear la imagen (logo) de la aseguradora
  const logoImg = document.createElement("img");
  logoImg.src = `public/${nombre}.png`; // Asumiendo que el nombre de la imagen está en minúsculas
  logoImg.alt = nombre;
  logoImg.className = "logo-img"; // Clase personalizada para la imagen
  imageContainer.appendChild(logoImg);

  // Crear el contenedor de los botones
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  // Crear un botón personalizado
  const contactoButton = document.createElement("button");
  contactoButton.type = "button";
  contactoButton.className = "custom-button";
  contactoButton.textContent = "Contacto";

  // Cambia esta línea para pasar la aseguradora correcta a la función openFileModal
  contactoButton.addEventListener("click", () => openFileModal({ nombre, contactos }));

  // Agregar la imagen y el botón a sus respectivos contenedores
  buttonContainer.appendChild(contactoButton);

  // Agregar los contenedores al cuerpo de la tarjeta
  card.appendChild(imageContainer);
  card.appendChild(buttonContainer);

  // Agregar la tarjeta al contenedor de tarjetas
  cardContainer.appendChild(card);
}


// Iterar sobre cada aseguradora en aseguradoras.companias
aseguradoras.companias.forEach((aseguradora) => {
  createCard(aseguradora.nombre, aseguradora.contactos);
});

// Función para manejar diferentes tipos de contactos
// Función para manejar diferentes tipos de contactos
const handleContact = (type, value) => {
  switch (type) {
    case 'WhatsApp':
      window.open(`https://wa.me/${value}`, '_blank');
      break;
    case 'telefono':
      window.open(`tel:${value}`, '_blank');
      break;
    case 'email':
      window.open(`mailto:${value}`, '_blank');
      break;
    case 'GooglePlay':
    case 'AppleStore':
    case 'web':
      window.open(value, '_blank');
      break;
    case 'remolque':
    case 'alarma':
    case 'telefono_fijo':
    case 'denuncia_de_siniestros_automotores':
    case 'desde_exterior':
      if (value.match(/\d+/g)) {
        window.open(`tel:${value}`, '_blank');
      } else {
        console.log('Valor no válido para realizar llamada');
      }
      break;

    default:
      console.log('Tipo de contacto no compatible');
  }
};


