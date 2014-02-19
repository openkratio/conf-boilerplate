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
      venue: "Openkratio y Universidad Pablo de Olavide",
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
      collaborators: "Colaboradores",
      collaborators_media: "Medios colaboradores",
      contact: "Contacto"
    },
		//Speakers
		speakers: [
			{
        name: "David Osimo",
        photo: "themes/yellow-swan/img/davidosimo.jpg",
        bio: "Asesor de la Comisión Europea y las Naciones Unidas en materia de Open policies, Open Data y Open Science. Fundador de Open Evidence",
				talk: "",
        company: "Open Evidence",
        link: {
          href: "http://twitter.com/osimod",
          text: "@osimod"
        }
      },
			{
        name: "Mor Rubistein",
        photo: "themes/yellow-swan/img/morchickit.jpeg",
        bio: "Coordinadora del Grupo de Trabajo de Open Government de la OKFN",
        company: "Open Knowledge Foundation",
				talk: "",
        link: {
          href: "http://twitter.com/morchickit",
          text: "@morchickit"
        }
      },
			{
        name: "César Nicandro",
        photo: "themes/yellow-swan/img/cesarnicandro.jpeg",
        bio: "Politólogo especializado en políticas públicas y legitimación. Community manager e Investigador Asociado",
        company: "GIGAPP-IUOG",
				talk: "",
        link: {
          href: "http://twitter.com/cesarncruz",
          text: "@cesarncruz"
        }
      },
			{
        name: "Antoni Gutierrez Rubí",
        photo: "themes/yellow-swan/img/antonigr.jpg",
        bio: "Experto en comunicación política, director de Ideograma, columnista habitual en diversos medios y autor de varias publicaciones",
        company: "Ideograma",
				talk: "",
        link: {
          href: "http://twitter.com/antonigr",
          text: "@antonigr"
        },
      },
			{
        name: "Vicky Anderica",
        photo: "themes/yellow-swan/img/vickyanderica.jpg",
        bio: "Coordinadora de proyectos en Access Info Europe, responsable del ranking mundial de leyes de acceso a la información Global Right to Inforation Rating.",
        company: "Access Info Europa",
				talk: "",
        link: {
          href: "http://twitter.com/vickyande",
          text: "@vickyande"
        }
      },
			{
        name: "Elena Biurrun",
        photo: "themes/yellow-swan/img/elenabiurrum.jpeg",
        bio: "Alcaldesa de Torrelodones",
        company: "Ayuntamiento de Torrelodones (Madrid)",
				talk: "",
        link: {
          href: "http://twitter.com/biurrun74",
          text: "@biurrun74"
        }
      },
			{
        name: "María Jesús Fernández",
        photo: "themes/yellow-swan/img/mjfernandez.jpg",
        bio: "Directora de la Unidad de Gestión de la Sede Electrónica",
        company: "Ayuntamiento de Zaragoza",
				talk: "",
        link: {
          href: "",
          text: ""
        }
      },
			{
        name: "José Antonio Rodríguez",
        photo: "themes/yellow-swan/img/joseantoniojun.png",
        bio: "Alcalde de Jun",
        company: "Ayuntamiento de Jun (Granada)",
				talk: "",
        link: {
          href: "http://twitter.com/JoseantonioJun",
          text: "@JoseantonioJun"
        }
      },
			{
        name: "Antonio Díaz Méndez",
        photo: "themes/yellow-swan/img/adiazmendez.jpg",
        bio: "Experto en Estrategia, Gestión pública y Administración Inteligente.",
        company: "Ayuntamiento de Alcobendas (Madrid)",
				talk: "",
        link: {
          href: "http://twitter.com/adiazmendez",
          text: "@adiazmendez"
        }
      },
			{
        name: "Vicky Bolaños",
        photo: "themes/yellow-swan/img/vickybol.jpeg",
        bio: "Periodista digital en RTVE y fundadora de QueHacenLosDiputados.net, iniciativa ciudadana de monitorización de la actividad parlamentaria del Congreso de los Diputados.",
        company: "Qué hacen los diputados",
				talk: "",
        link: {
          href: "http://twitter.com/vickybol",
          text: "@vickybol"
        }
      },
			{
        name: "Stéphane M. Grueso",
        photo: "themes/yellow-swan/img/fanetin.png",
        bio: "Director y productor de documentales,  'narrador' de #acampadasol y del #15M en general, tendiendo un 'puente informativo' entre los que podían estar presentes y los que no.",
        company: "",
				talk: "",
        link: {
          href: "http://twitter.com/fanetin",
          text: "@fanetin"
        }
      },
			{
        name: "Juan Moreno Yagüe",
        photo: "themes/yellow-swan/img/hackbogado.jpeg",
        bio: "Abogado independiente, lidera iniciativas ciudadanas como #15MpaRato y #OpEuribor",
        company: "",
				talk: "",
        link: {
          href: "http://twitter.com/hackbogado",
          text: "@hackbogado"
        }
      },
	  {
        name: "Miguel Ongil",
        photo: "themes/yellow-swan/img/miguelongil.jpg",
        bio: "Gestor de campañas e investigador. Promotor #CuentasClaras. Transparencia, financiación de partidos, UE.",
        company: "",
				talk: "",
        link: {
          href: "http://twitter.com/Migs_Bru",
          text: "@Migs_Bru"
        }
      },
      {
        name: "Enrique Teruel",
        photo: "themes/yellow-swan/img/eteruel.jpg",
        bio: "Coordinador del subgrupo de Gobierno Abierto en la CRUE,  Delegado del Rector para los Servicios de Informática y Comunicaciones.",
        company: "Universidad de Zaragoza",
		talk: "",
        link: {
          href: "http://twitter.com/TeruelEnrique",
          text: "@TeruelEnrique"
        }
      },
      {
        name: "Diego Álvarez",
        photo: "themes/yellow-swan/img/diegoalsan.png",
        bio: "Coordinador del grupo Universidad Abierta de OKFN-Spain, Director del Máster en Gestión de la Información y Subdirector de Gobierno Abierto, Comunicación y Cultura ETS Ingeniería Informática UPV.",
        company: "Universidad Politécnica de Valencia",
				talk: "",
        link: {
          href: "http://twitter.com/diegoalsan",
          text: "@diegoalsan"
        }
      },
      {
        name: "Fernanda Peset Mancebo",
        photo: "themes/yellow-swan/img/fp.png",
        bio: "Coordinadora del proyecto Datasea.",
        company: "Universidad Politécnica de Valencia",
				talk: "",
        link: {
            href: "",
          text: ""
        }
      },
      {
        name: "María Dácil Marín García",
        photo: "themes/yellow-swan/img/dacil_marin.jpg",
        bio: "Directora de Comunicación Institucional",
        company: "Universidad de Alcalá de Henares",
				talk: "",
        link: {
          href: "http://twitter.com/UAHes",
          text: "@UAHes"
        }
      },
	],
    // The entire schedule
    schedule: [
      {
        name: "Recogida de Acreditaciones",
        time: "9h00"
      },
      {
        name: "Acto Inaugural",
        description: "Vicente Guzmán Fluja, Rector de la Universidad Pablo de Olavide. Manuel Jiménez Barrios, Consejero de la Presidencia de la Junta de Andalucía. Dolores Muñoz Carrasco, Secretaria General de Consumo de la Junta de Andalucía. Jesús Huerta Almendro, Director General de Política Digital de la Junta de Andalucía. María Jesús Almazor, Directora Territorial Sur de Telefónica.",
        time: "09h30"
      },
      {
        name: "David Osimo",
        photo: "themes/yellow-swan/img/davidosimo.jpg",
        presentation: {
          title: "Conferencia 1",
          description: "Open Policies, Open Data y Open Science: factores y motivaciones comunes",
          time: "10h00"
        }
      },
      {
        name: "Mor Rubistein",
        photo: "themes/yellow-swan/img/morchickit.jpeg",
        presentation: {
          title: "Conferencia 2 (english)",
          description: "Open Government Data - a world view",
          time: "10h45"
        }
      },
      {
        name: "Café",
        time: "11h30"
      },

      {
        name: "Mesa debate 1: ¿Qué estamos haciendo en España? Experiencias locales sobre apertura y participación",
        description: "Moderador/a: Luisa María Saavedra, Asesora Técnica de la Dirección General de Derechos de la Ciudadanía, Participación y Voluntariado (Junta de Andalucía). // Participan: Elena Biurrun (@biurrun74),  María Jesús Fernandez, José Antonio Rodríguez (@JoseantonioJun), Antonio Díaz Méndez (@adiazmendez)",
        time: "12h15"
      },
      {
        name: "César Nicandro",
        photo: "themes/yellow-swan/img/cesarnicandro.jpeg",
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
        description: "Moderador: Manuel Torralbo Rodríguez, Director General de Universidades (Junta de Andalucía) // Participan: Enrique Teruel (CRUE), Diego Álvarez (OKFN-España), Fernanda Peset (UPV) y María Dácil Marín (UAH)",
        time: "16h00"
      },
      {
        name: "Antoni Gutierrez Rubí",
        photo: "themes/yellow-swan/img/antonigr.jpg",
        presentation: {
          title: "Conferencia 4",
          description: "Hablemos claro, ¿y si forzamos la apertura? Protección a los whistleblower",
          time: "17h00"
        }
      },
      {
        name: "Vicky Anderica",
        photo: "themes/yellow-swan/img/vickyanderica.jpg",
        presentation: {
          title: "Conferencia 5",
          description: "Transparencia para la trazabilidad de la influencia Regulación de los Lobbies",
          time: "17h45"
        }
      },
      {
        name: "Mesa debate 3: La ciudadanía actúa, ¿para qué abrir los datos públicos? Open Data para una ciudadanía activa",
        description: "Moderador:Juan Leal Zubiete, Jefe de Servicio de Innovación y Prospectiva de la Dirección General de Política Digital (Junta de Andalucía) // Participan: Vicky Bolaños (@vickybol), Stéphane M. Grueso (@fanetin), Juan Moreno Yagüe (@hackbogado), Pablo Martín de Openkratio (@edipotrebol), Miguel Ongil (@Migs_Bru - @suscuentas)",
        time: "18h30"
      },
      {
        name: "Fin primera jornada",
        time: "19h30"
      }
    ],
		// Schedule saturday oGov
		schedule_saturday_ogov: [
      {
        name: "Recogida de acreditaciones",
        description: "",
        time: "09h30"
      },
		  {
        name: "Situación actual y perspectivas para un parlamento abierto.",
        description: "Miguel Angel Gonzalo, webmaster del Congreso de los Diputados.",
        time: "10h00"
      },
			{
        name: "El Consejo de la ciudadanía ¿y ahora qué?",
        description: "Jacinto Mateos Fernández, responsable medios audiovisuales y nuevas tecnologías del Parlamento de Extremadura.",
        time: "10h30"
      },
      {
        name: "Presentación analizo.info, participación ciudadana para el análisis de información.",
        description: "Diego Álvarez, Director del Máster en Gestión de la Información y Subdirector de Gobierno Abierto, Comunicación y Cultura ETS Ingeniería Informática UPV.",
        time: "11h00"
      },
			{
        name: "Descanso",
        description: "",
        time: "11h30"
      },
      {
        name: "Net neutrality y gobierno abierto.",
        description: "Fernando Martínez Cabezudo y Rafael Rodríguez Prieto, Profesores de Filosofía del Derecho y Política de la UPO. Miembros del LIPPO. Investigadores del I+D sobre censura y restricción de contenidos y la protección de derechos fundamentales en Internet.",
        time: "12h00"
      },
			{
        name: "Hacia un modelo de Gobierno Abierto en la nube.",
        description: "Mario Canivell. CLARITIC.",
        time: "12h30"
      },
      {
        name: "Agenda del Henares y proyecto CitYsens.",
        description: "Pedro Prieto Martín, Asociación Kyopol - Ciudad Simbiótica.",
        time: "13h00"
      },
      {
        name: "Cierre de las jornadas. Breve repaso: OKioConf, Actividad de OpenKratio en 2013, ¿Y ahora qué? Roadmap 2014",
        description: "OpenKratio",
        time: "13h30"
      },
		],
		// Schedule saturday openata
		schedule_saturday_opendata: [
      {
        name: "Recogida de acreditaciones",
        description: "",
        time: "09h30"
      },

			{
        name: "Nuevos servicios Open Data. La experiencia de Aragón Open Data.",
        description: "Jose M Subero, coordinador de Aragón Open Data.",
        time: "10h00"
      },
			{
        name: "Infraestructura de Open Data desde la Nube.",
        description: "Guillermo Conde Heredia,  Consultor Senior de Administración Electrónica y Gobierno Abierto en Telefónica.",
        time: "10h30"
      },
			{
        name: "Linked Open Data & Ximdex CMS.",
        description: "Juan Prieto, CEO de Ximdex (semantic & open CMS)",
        time: "11h00"
      },
      {
        name: "Descanso",
        description: "",
        time: "11h30"
      },

			{
        name: "Estrategias Open Government Data.",
        description: "Carlos Iglesias. Miembro de Openkratio.",
        time: "12h00"
      },
			{
        name: "Open Spending e Historias del Gasto.",
        description: "Félix Ontañón. Miembro de Openkratio.",
        time: "12h30"
      },
			{
        name: "El proyecto HOMER, de armonización legal y tecnológica para la reutilización de la información pública en los países del Mediterráneo.",
        description: "Javier Calvo Fernández, Agencia de Gestión Agraria y Pesquera de Andalucía.",
        time: "13h00"
      },
		],
    // List of Sponsors
    sponsors: [
      {
        name: "Telefónica",
        logo: "themes/yellow-swan/img/telefonica.jpg",
        type: "gold",
        url: "http://www.telefonica.es/portada/index.html"
      },
      {
        name: "Consejería de Administración Local y Relaciones Institucionales de la Junta de Andalucía",
        logo: "themes/yellow-swan/img/calri.gif",
        type: "gold",
        url: "http://www.juntadeandalucia.es/administracionlocalyrelacionesinstitucionales/cms/ocms/portal/index.html"
      },
      {
        name: "Isotrol",
        logo: "themes/yellow-swan/img/isotrol.png",
        type: "silver",
        url: "https://www.isotrol.com/web/"
      },
      {
        name: "Lippo",
        logo: "themes/yellow-swan/img/lippo.png",
        type: "bronze",
        url: "http://lippo.es"
      },

      {
        name: "Claritic - Herramientas para Organizaciones Abiertas",
        logo: "themes/yellow-swan/img/claritic.png",
        type: "bronze",
        url: "https://www.claritic.com/"
      },
      {
        name: "Cooperativa Enreda - Tecnología, Comunicación y Sociedad",
        logo: "themes/yellow-swan/img/enreda.png",
        type: "bronze",
        url: "http://www.enreda.coop/"
      },
      {
        name: "Escuela Técnica Superior de Ingeniería Informática de la Universidad Politécnica de Valencia",
        logo: "themes/yellow-swan/img/esiupv.png",
        type: "bronze",
        url: "http://www.upv.es/entidades/ETSINF/indexc.html"
      },
      {
        name: "Ximdex",
        logo: "themes/yellow-swan/img/ximdex.png",
        type: "bronze",
        url: "http://www.ximdex.com"
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
    
    // List of Media Collaborators
    collaborators_media: [ 
      {
        name: "eldiario.es Andalucía",
        logo: "themes/yellow-swan/img/eldiario.png",
        url: "http://www.eldiario.es/andalucia/"
      },
      {
        name: "Gaceta Tecnológica",
        logo: "themes/yellow-swan/img/gacetatecnologica.jpg",
        url: "http://www.gacetatecnologica.com/"
      },
    ],

    // List of Collaborators
    collaborators: [
      {
        name: "Hackandalus",
        logo: "themes/yellow-swan/img/logoha.png",
        url: "http://www.hackandalus.net/"
      },

      {
        name: "Escuela Politécnica Superior Universidad Pablo de Olavide",
        logo: "themes/yellow-swan/img/logo_eps.jpeg",
        url: "http://www.upo.es/eps/portal/"
      },
      {
        name: "Mala Practik",
        logo: "themes/yellow-swan/img/malapractik.png",
        url: "http://www.practik.es/"
      },
      {
        name: "KadozKreaccion",
        logo: "themes/yellow-swan/img/kadozkreaccion.png",
        url: "http://kadozkreaccion.es"
      },
      {
        name: "Fundación Civiliter",
        logo: "themes/yellow-swan/img/civiliter.png",
        url: "http://www.civiliter.es"
      },
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
