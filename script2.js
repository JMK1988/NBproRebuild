const aseguradoras = {
    "companias": [
      {
        "nombre": "Allianz",
        "contactos": {
          "WhatsApp": "+5491133141563",
          "web": null,
          "telefono": "+5491143299191",
          "telefono-": "+5408008882432"
        }
      },
      {
        "nombre": "ATM",
        "contactos": {
          "WhatsApp": "1568262355",
          "SMS": "70703",
          "telefono": "08103450492",
          "telefono-": "08002227854"
        }
      },
      {
        "nombre": "Experta ART",
        "contactos": {
          "WhatsApp": "+ 5491147041830",
          "telefono": "08007777278",
          "web": "https://www.experta.com.ar/contactenos/",
          "email": "clientes@experta.com.ar"
        }
      },
      {
        "nombre": "Federación",
        "contactos": {
          "WhatsApp": "+5492214290200",
          "SMS": "70703",
          "telefono": "08002220022",
          "telefono-": "08008000022"
        }
      },
      {
        "nombre": "Galeno ART",
        "contactos": {
          "telefono": "08007775433",
          "telefono-": "+5491138744660",
          "email": "callseguros@galenoseguros.com.ar"
        }
      },
      {
        "nombre": "HDI",
        "contactos": {
          "WhatsApp": "+5491139862669",
          "web": null,
          "sms": null,
          "telefono": "+5498003332927",
          "telefono-": "08004444587",
          "alarma": "08006662202",
          "remolque": "1141360691"
        }
      },
      {
        "nombre": "Mapfre",
        "contactos": {
          "WhatsApp": "+5491162996922",
          "telefono": "08009997424"
        }
      },
      {
        "nombre": "Mercantil",
        "contactos": {
          "WhatsApp": "1128080012",
          "web": "https://tuasistencia.redsos.com.ar/home/login",
          "sms": "70703 \"Patente\"",
          "email": "asistenciamecanica@lamercantil.com.ar",
          "telefono": "08007772634",
          "telefono-": "1143355792"
        }
      },
      {
        "nombre": "Provincia Seguros",
        "contactos": {
          "WhatsApp": "+5491121837633",
          "telefono": "08102222444",
          "telefono-": "01143313887"
        }
      },
      {
        "nombre": "Rivadavia",
        "contactos": {
          "WhatsApp": "+5491139898000",
          "web": "https://tuasistencia.redsos.com.ar/",
          "email": "info@segurosrivadavia.com"
        }
      },
      {
        "nombre": "RIO URUGUAY",
        "contactos": {
          "WhatsApp": "+5493442657777",
          "telefono": "08008887787",
          "remolque": "08004441441",
          "web": "www.rus.com.ar"
        }
      },
      {
        "nombre": "SMG",
        "contactos": {
          "telefono": "08002227854",
          "telefono-": "08103333764"
        }
      },
      {
        "nombre": "Sancor",
        "contactos": {
          "WhatsApp": "+5493493520650",
          "remolque": "08003332766",
          "telefono": "08004442850",
          "siniestros": "08007774643"
        }
      },
      {
        "nombre": "Victoria",
        "contactos": {
          "telefono": "43221100",
          "WhatsApp": "1128080012",
          "web": "www.victoria.com.ar/seguros-de-automotores-victoria"
        }
      },
      {
        "nombre": "Zurich",
        "contactos": {
          "WhatsApp": "+5491139862669",
          "web": "https://zurihelp.redsos.com.ar/home/login",
          "sms": "70 70 3 SMS con SOS+Patente",
          "telefono": "08003339874",
          "remolque": "08002221600",
          "exterior": "1141298100"
        }
      }
    ]
  };

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
    logoImg.src = `public/${nombre.toLowerCase()}.png`; // Asumiendo que el nombre de la imagen está en minúsculas
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


