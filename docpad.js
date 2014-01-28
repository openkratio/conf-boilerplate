module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "OKioConf 2014",
      description: "III Jornadas de Gobierno Abierto y Open Data",
      date: "21-22 Febrero de 2014",
      // If your event is free, just comment this line
      // price: "0€",
      venue: "Universidad Pablo de Olavide",
      address: " Universidad Pablo de OlavideCarretera de Utrera, km. 1",
      city: "Sevilla",
      state: "España"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Quiero ir",
        link: "https://www.ticketea.com/okioconf-2014/"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://openkratio.github.io/okioconf14",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localización",
      speakers: "Ponentes",
      schedule: "Programa",
      sponsors: "Patrocinadores",
      partners: "Organizadores",
      contact: "Contacto"
    },

    // The entire schedule
    schedule: [
      {
        name: "Recogida de Acreditaciones",
        time: "9h00"
      },
      {
        name: "Acto Inaugural",
        description: "Susana Díaz, Presidenta de la Junta de Andalucía. Vicente Guzmán Fluja, Rector de la Universidad Pablo de Olavide. Representante del patrocinador oro. Representante de OpenKratio.",
        time: "09h30"
      },
      {
        name: "David Osimo",
        photo: "themes/yellow-swan/img/davidosimo.jpg",
        bio: "",
        company: "",
        link: {
          href: "http://twitter.com/osimod",
          text: "@osimod"
        },
        presentation: {
          title: "Conferencia 1",
          description: "Open Policies, Open Data y Open Science: factores y motivaciones comunes",
          time: "10h00"
        }
      },
      {
        name: "Café",
        time: "10h45"
      },

      {
        name: "Mor Rubistein",
        photo: "themes/yellow-swan/img/morchickit.jpeg",
        bio: "Coordinadora grupo de trabajo oGov",
        company: "Open Knowledge Foundation",
        link: {
          href: "http://twitter.com/morchickit",
          text: "@morchickit"
        },
        presentation: {
          title: "Conferencia 2",
          description: "El oGov en el mundo: políticas y herramientas",
          time: "11h30"
        }
      },
      {
        name: "Mesa debate 1: ¿Qué estamos haciendo en España? Experiencias locales sobre apertura y participación",
        description: "Moderadora: Manuela Fernández, Directora General de Derechos de la Ciudadanía, Participación y Voluntariado. // Participan: Elena Biurrun (@biurrun74),  María Jesús Fernandez, José Antonio Rodríguez (@junalcalde), Daniel Ros (@_danielros)",
        time: "12h15"
      },
      {
        name: "César Nicandro",
        photo: "themes/yellow-swan/img/cesarnicandro.jpeg",
        bio: "Politólogo especializado en legitimación, políticas públicas y cambio de las políticas. Policy Process Researcher. Desarrollador web y Media-Community Manager.",
        company: "Gigapp",
        link: {
          href: "http://twitter.com/cesarncruz",
          text: "@cesarncruz"
        },
        presentation: {
          title: "Conferencia 3",
          description: "¿Qué se plantea hacer a nivel nacional? Compromisos y evaluación del Plan de Gobierno Abierto de España ante la Open Government Parnership",
          time: "13h15"
        }
      },
      {
        name: "Almuerzo",
        time: "14h00"
      },
      {
        name: "Mesa debate 2: ¿Y las universidades qué? Universidad Abierta: algo más que Gobierno Abierto y Open Data",
        description: "Moderador: Francisco Andrés Triguero, Secretario General de Universidades, Investigación y Tecnología // Participan: CRUE y OKFN-España (grupos de trabajo sobre Universidad Abierta)",
        time: "16h00"
      },
      {
        name: "Antoni Gutierrez Rubí",
        photo: "themes/yellow-swan/img/antonigr.jpg",
        bio: "Asesor de comunicación",
        company: "",
        link: {
          href: "http://twitter.com/antonigr",
          text: "@antonigr"
        },
        presentation: {
          title: "Conferencia 4",
          description: "Hablemos claro, ¿y si forzamos la apertura? Protección a los whistleblower",
          time: "17h00"
        }
      },
      {
        name: "Vicky Anderica",
        photo: "themes/yellow-swan/img/vickyanderica.jpg",
        bio: "Coordinadora de proyectos e investigadora",
        company: "Access Info Europa",
        link: {
          href: "http://twitter.com/vickyande",
          text: "@vickyande"
        },
        presentation: {
          title: "Conferencia 5",
          description: "Transparencia para la trazabilidad de la influencia Regulación de los Lobbies",
          time: "17h45"
        }
      },
      {
        name: "Mesa debate 3: La ciudadanía actúa, ¿para qué abrir los datos públicos? Open Data para una ciudadanía activa",
        description: "Moderador: Jesús Huerta, Director General de Política Digital // Participan: Vicky Bolaños (@vicky_bol), Stéphane M. Grueso (@fanetin), Juan Moreno Yagüe (@hackbogado), Representante de @openkratio, Representante de @suscuentas",
        time: "18h30"
      }
    ],
    // List of Sponsors
    sponsors: [
      // {
      //   name: "Eventick",
      //   logo: "themes/yellow-swan/img/your-logo.jpgs",
      //   url: "http://eventick.com.br"
      // }
    ],

    // List of Partners
    partners: [
      {
        name: "Openkratio",
        logo: "themes/yellow-swan/img/openkratio.png",
        url: "http://openkratio.org"
      },
      {
        name: "Universidad Pablo de Olavide",
        logo: "themes/yellow-swan/img/updo.jpg",
        url: "http://www.upo.es"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
