module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "OKioConf 2014",
      realname: "III Jornadas de Gobierno Abierto y Open Data",
      organizedby: "Openkratio",
      organizedurl: "http://openkratio.org",
      description: "III Jornadas de Gobierno Abierto y Open Data",
      date: "21-22 Febrero de 2014",
      // If your event is free, just comment this line
      price: "0€",
      venue: "Paraninfo Universidad Pablo de Olavide",
      address: "Universidad Pablo de Olavide, de Sevilla. Carretera Utrera, km. 1, Sevilla España",
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
        description: "Representante de la Junta de Andalucía. Vicente Guzmán Fluja, Rector de la Universidad Pablo de Olavide. Representante del patrocinador oro. Representante de OpenKratio.",
        time: "09h30"
      },
      {
        name: "David Osimo",
        photo: "themes/yellow-swan/img/davidosimo.jpg",
        bio: "Analista de políticas de innovación basadas en TICs, Director de Open Evidence, ha sido responsable científico en el Instituto de Prospectiva Tecnológica de la Comisión Europea",
        company: "Open Evidence",
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
        bio: "Open Government working group coordinator",
        company: "Open Knowledge Foundation",
        link: {
          href: "http://twitter.com/morchickit",
          text: "@morchickit"
        },
        presentation: {
          title: "Conferencia 2 (english)",
          description: "Open Government Data - a world view",
          time: "11h30"
        }
      },
      {
        name: "Mesa debate 1: ¿Qué estamos haciendo en España? Experiencias locales sobre apertura y participación",
        description: "Moderador/a: Dirección General de Derechos de la Ciudadanía, Participación y Voluntariado (Junta de Andalucía). // Participan: Elena Biurrun (@biurrun74),  María Jesús Fernandez, José Antonio Rodríguez (@junalcalde), Antonio Díaz Méndez | @adiazmendez",
        time: "12h15"
      },
      {
        name: "César Nicandro",
        photo: "themes/yellow-swan/img/cesarnicandro.jpeg",
        bio: "Politólogo especializado en políticas públicas y legitimación. Community manager e Investigador Asociado",
        company: "GIGAPP-IUOG",
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
        description: "Moderador: Secretaría General de Universidades, Investigación y Tecnología (Junta de Andalucía) // Participan: CRUE y OKFN-España (grupos de trabajo sobre Universidad Abierta)",
        time: "16h00"
      },
      {
        name: "Antoni Gutierrez Rubí",
        photo: "themes/yellow-swan/img/antonigr.jpg",
        bio: "Experto en comunicación política, director de Ideograma, columnista habitual en diversos medios y autor de varias publicaciones",
        company: "Ideograma",
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
        bio: "Coordinadora de proyectos en Access Info Europe, responsable del ranking mundial de leyes de acceso a la información Global Right to Inforation Rating. ",
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
        description: "Moderador: Dirección General de Política Digital (Junta de Andalucía) // Participan: Vicky Bolaños (@vicky_bol), Stéphane M. Grueso (@fanetin), Juan Moreno Yagüe (@hackbogado), Representante de @openkratio, Representante de @suscuentas",
        time: "18h30"
      },
      {
        name: "Fin primera jornada",
        time: "19h30"
      }
    ],
    // List of Sponsors
    sponsors: [
      {
        name: "Consejería de Administración Local y Relaciones Institucionales de la Junta de Andalucía",
        logo: "themes/yellow-swan/img/calri.gif",
        type: "gold",
        url: "http://www.juntadeandalucia.es/administracionlocalyrelacionesinstitucionales/cms/ocms/portal/index.html"
      },
      {
        name: "Escuela Técnica Superior de Ingeniería Informática de la Universidad Politécnica de Valencia",
        logo: "themes/yellow-swan/img/esiupv.png",
        type: "bronze",
        url: "http://www.upv.es/entidades/ETSINF/indexc.html"
      },
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
