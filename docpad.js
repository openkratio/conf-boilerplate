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
      googleanalytics: "UA-33656081-1"
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
        name: "Recogida de acreditaciones",
        time: "9h00"
      },
      {
        name: "Acto Inaugural",
        description: "-",
        time: "10h00"
      },
      {
        name: "Café",
        time: "11h00"
      },
      {
        name: "Miembro de la OKFN",
        photo: "themes/yellow-swan/img/okfn.jpg",
        bio: "",
        company: "Open Knowledge Foundation",
        link: {
          href: "http://twitter.com/okfn",
          text: "@okfn"
        },
        presentation: {
          title: "Evaluación sobre Indicadores OpenData",
          description: "",
          time: "11h30"
        }
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
          title: "OGP Spain: Compromisos y Evaluacion",
          description: "",
          time: "12h30"
        }
      },
      {
        name: "Mesa sobre Experiencias de Participación Local",
        description: "@xsancliment (Tarrasa) MJ Fernandez (Zaragoza) @junalcalde, Ciudadanos Torrelodones",
        time: "13h30"
      },
      {
        name: "Almuerzo",
        time: "14h30"
      },
      {
        name: "Emilio García",
        photo: "themes/yellow-swan/img/emiliogarcia.jpg",
        bio: "Jefe de Área en Ministerio de Industria, Energía y Turismo",
        company: "MINETUR (Gobierno de España)",
        link: {
          href: "http://twitter.com/egarciagarcia",
          text: "@egarciagarcia"
        },
        presentation: {
          title: "Protección a los whistleblower",
          description: "",
          time: "16h00"
        }
      },
      {
        name: "Vicky Anderica",
        photo: "themes/yellow-swan/img/vickyanderica.jpg",
        bio: "Coordinadora de proyectos e investigadora en Acces Info Europe",
        company: "Access Info",
        link: {
          href: "http://twitter.com/vickyande",
          text: "@vickyande"
        },
        presentation: {
          title: "Regulacción de Lobbies",
          description: "",
          time: "17h00"
        }
      },
      {
        name: "Mesa sobre Ciudadanía Activa",
        description: "@hackbogado @vicky_bol @fanetin @openkratio @suscuentas",
        time: "18h00"
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
