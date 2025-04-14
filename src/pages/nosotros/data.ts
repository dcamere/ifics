const PageHeader =
  'https://s3-alpha-sig.figma.com/img/849d/ea2c/221c7319c6ea86b3a75fe3eecc55a070?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lyIJjy9i1-Fipa9jpLtNUJIVGNvxniaEZSXf~gAacBNk~NOZ~9r-NMYX0gTuPtwklOwUU8cbQoJMHbyhQrTu39pSJgurMTm2dYJTUHkmfzmC2YJmGSrQhXXfSHFxVXLDVhvuOVhrNiqRsmawNwYfxNRgUBJfhZggocuX-iykA70gnmmIlxaSO7cwieg2vk-cnqCPxa2lZ50LsuzSDnxPMJx5n~9L2pXXYNNV7SVtZibwhMkeRVv4ZvMzGj~eKXa9XjLZFw9uisjxBBtrEOm2AuR3KHwFowhRboOwFH7czAWLaf8Fr34Q0AmbEiRM~jDzj7iZKg21RA9Vjgl-NEwTvA__'

import egarcia from '../../assets/Nosotros/team/egarcia.jpg'
import apaza from '../../assets/Nosotros/team/apaza.jpg'
import alindley from '../../assets/Nosotros/team/alindley.jpg'
import ladrianzen from '../../assets/Nosotros/team/ladrianzen.jpg'

export const dataNosotros = {
  ES: {
    pageHeader: {
      bg: PageHeader,
      text: '¿Quiénes somos?',
    },
    quote: {
      text: 'La palabra "facilitar" significa hacer simple o más simple, y este es precisamente el objetivo de la facilitación del comercio - hacer los procesos y procedimientos del comercio internacional tan simple y eficiente como sea posible para comerciantes, autoridades y gobiernos.',
      sub: 'Centro de Facilitación de Negocios y Comercio Electrónico de las Naciones Unidas',
    },
    innovacionEficiencia: {
      titleOne: 'Innovación y Eficiencia',
      titleTwo: 'en el Comercio Internacional',
      text: [
        'IFICS es una organización privada independiente dedicada a promover la facilitación del comercio y los servicios logísticos, mediante la investigación, consultoría y la capacitación. Implementamos procesos comercio exterior eficientes que disminuyan los costos de internacionalización de las empresas.',

        'Para IFICS las medidas de facilitación del comercio mejoran la regulación estatal, aportando enfoques críticos a la necesidad de permisos, certificados o autorizaciones para el ejercicio del comercio, buscando proporcionalidad con el interés público, basada en la evidencia.',

        'Fomentamos el comercio sin papeles y la aplicación de herramientas tecnológicas de vanguardia, entrenando al recurso humano del sector público el cual debe concentrarse en actividades con valor agregado, priorizando el control posterior y la gestión de riesgos como elementos necesarios para reducir tiempos de atención. Buscamos la adecuación a prácticas internacionales aceptadas, estandarizando procesos que permitan una integración comercial eficiente.',
      ],
      image1:
        'https://s3-alpha-sig.figma.com/img/1f56/f94a/5f07755f38b05bacc78e494234272789?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GKc5zxOAiaB7f1WW5f~TcCUO3H4ZCbF8~M9SV3gaA~ISgGJCD0piHwXsheB-CVcF-RnlmRluBdeg0~91-V5mnjh28hRjdZ~7AFYfItSy1RNV28QB6AbLDUZXoOsFTEugsGSfOmA5I8zVoe3JnQubpTY1vYvU-gLPhZ8-4WJ8bvda0fVZJ6DxNF1R5IUC4OxYV5W4g6OimG8Z20rdQr7Jxt5OxVrXgT-ElmGpeGTbS37YV8bGvsARWKSKyNoNRbfXI4hKqDbWr1MQuMXYP-~xg5Ybkg8DOtTBWBxBugs8rI8C3yXgAXgtegMeGRCNhIPyNgyzfAqwhgk31DNsFS3PIQ__',
      image2:
        'https://s3-alpha-sig.figma.com/img/a527/ddf8/d21b852e0737895094e188369cc02de3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U8qy-xkfGO6UkDG5A~oCU9sL5v7Vy9XT0d8Z2avXR6PIKh-jSuUw3UnG1Yrc95b648A3~UGeJP6~A3idOBjH3-PlBrU37-MTvHxGI1jq6DrGzTBBZ4bg5gdJi3fBj7b0awUhM6PZgf4wO~Kvgd~YAaLpLx6LtpHos6ESR4rPTIc~kNap16FQR3zQ3zUvGMmjBF7Cfmof7h~JWpl3I93fbhdrBGc7vSWKDkD37Bc5FFI4UJgkQ8tuyv03CIbANqQMzqbKRYSlQUL9ZGY6NuCfzJDie4xKC~w3pYknof3cRngzRcnI7dA7bVWytc20VotrBAi365MFpFsWZB1o3VRYsA__',
    },
    expertosEnFacilitacion: {
      title: 'Expertos en Facilitación',
      titleTwo: 'del Comercio Internacional',
      description:
        'IFICS está conformada por profesionales de lograda trayectoria en la gestión, investigación y docencia del comercio internacional desde distintos roles, dedicada a promover la implementación de instrumentos de facilitación del comercio que den fluidez a las transacciones y el intercambio de información armonizada y simplificada.',
      descriptionTwo:
        'Las economías emergentes deben pasar a una segunda generación de reformas de comercio exterior que promueva reglas transparentes, predecibles y alineadas a estándares internacionales. Las regulaciones del comercio exterior deben ser accesibles para empresas sin experiencia especializada creando un ambiente de mutua confianza con espacios de dialogo entre las entidades regulatorias y los administrados o usuarios.',
    },
    team: {
      titleOne: 'Conoce a Nuestros',
      titleTwo: 'Expertos en Comercio Internacional',
      sub: 'Contamos con profesionales altamente especializados que trabajan en áreas estratégicas para garantizar soluciones de alto impacto.',
      team: [
        {
          img: egarcia,
          name: 'Eduardo García-Godos',
          role: 'CEO',
          desc: 'Abogado por la Universidad Católica del Perú. Máster en Derecho Internacional Económico por la University of Warwick (UK), con estudios de Post grado en Buenos Aires, Seúl y Ginebra y economía en el Mises Institute (Alabama). Socio fundador de García-Godos, Lindley Russo & Adrianzén abogados y Director del Instituto de Facilitación del Comercio Sostenible. Vicepresidente del Comité de Comercio Exterior del ICC Perú y Experto certificado en Incoterms 2020 por el ICC. Ex funcionario del Ministerio del Comercio Exterior de Perú y Ex miembro de la Comisión de Barreras Burocráticas del Indecopi de Perú. Consultor para la CAF, IFC, BID, USAID, UNCTAD y Global Alliance for Trade Facilitation. Expositor en Conferencias sobre Facilitación del Comercio de la Organización Mundial de Aduanas.',
        },
        {
          img: alindley,
          name: 'Alfredo Lindley-Russo',
          role: 'Líder mejora regulatoria',
          desc: 'Abogado por la Universidad Peruana de Ciencias Aplicadas y Máster en Propiedad Intelectual y Derecho de la Competencia por la PUCP. Especialista en simplificación administrativa internacional, barreras burocráticas, barreras comerciales no arancelarias, obstáculos técnicos al comercio, propiedad intelectual, derecho de la competencia y regulación sanitaria. En la práctica privada ha formado parte de distintos estudios de abogados y entre el 2008 y el 2015, prestó servicios en diversas comisiones del Indecopi. Es profesor de Posgrado de la UPC, Pontificia Universidad Católica del Perú, Universidad del Pacífico y Universidad San Martín de Porres. Asimismo, es Profesor de la Escuela Nacional de Competencia y Propiedad Intelectual del Indecopi y autor de diversos artículos vinculados a los temas de su especialidad.',
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/d6c9/8b5a/f3fd5e9f9bbe0b9c3a159c294f8445ac?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DtmnHiZmfYqFMKmjOW0ZULi0m4SRyj1PCH3ufPHP5ygerBbwlAxt7T~DrDJNwIyUyW3ZM1YWRbTTP2GI7PkJy2bUW366mTaUvnsxNLeangBIUc9qlgis8fCGEx2FAhVTbV9vzg~nU0zQ6IDt3k-Y~rKvCE7FzPOVhvDblCN1A1pMZJt1oqdXcdIoFMaBndROqoeBeTzA~7bZW4bUv-UgcV8DLIlHjX69us-ArdqTkU2ph875LGOUDxLWf2rrlFly5aunF8XUXHIsQaSmeI8QEcOT3gCFDesMt0mr9us584Ug5xEsp40WWm-TaFMg8dlVTEZwFrkIKBo98aaoMzh7cg__',
          name: 'Carlos Gómez',
          role: 'Líder de procesos de negocio y transformación digital',
          desc: 'Ingeniero Industrial por la Universidad Nacional de Ingeniería y estudios completos de Maestría en Administración de Negocios en la Universidad Peruana Unión, con estudios de Post grado en Planeamiento Estratégico del Sector Público, Gestión de la Innovación, Profesional en Administración de Negocios y Six Sigma Black Belt. Experto en gestión por procesos, cadena logística de comercio exterior, gestión de la calidad total y planeamiento estratégico. Fue Coordinador Técnico del Proyecto de la Ventanilla Única de Comercio del Perú - VUCE 2.0). Consultor de Trade Facilitation Office Canada. Ex directivo de empresas privadas líderes de los sectores de alimentos y agroquímicos. Profesor de posgrado en gestión y mejora de procesos en la Universidad Nacional de Ingeniería y en la Escuela Nacional de Administración Pública de Perú.',
        },
        {
          img: apaza,
          name: 'Brenda Apaza',
          role: 'Experta facilitación del comercio y logística',
          desc: 'Licenciada en Administración de Negocios Internacionales por la Universidad Nacional Mayor de San Marcos. Realizó un programa de intercambio en la Universidad de Chile, para la Alianza del Pacífico. Con estudios de especialización en Despacho Aduanero, políticas públicas, negociaciones comerciales, cooperación internacional, comercio sostenible e inversión. Experta en Comercio Internacional, Gestión Pública y Life Sciences. Ha dado asesoría de empresas así como consultorías para el sector público a nivel nacional e internacional. Ha formado parte del equipo de consultores para el Mincetur, Promperú, Produce, Senasa, Sanipes, Digesa y Sunat,  y para organismos internacionales como el IICA, USAID, APEC, TFO Canada, Global Alliance for Trade Facilitation, UNCTAD, Helvetas Cooperación Suiza (SECOMPETITIVO - SUIZA), CAF y CEPAL.',
        },
        {
          img: ladrianzen,
          name: 'Luis Adrianzén',
          role: 'Experto mejora regulatoria',
          desc: 'Abogado Pontificia Universidad Católica del Perú, y Máster en Derecho por la Katholieke Universiteit Leuven (Bélgica). Experto en análisis económico del derecho, políticas regulatorias, reestructuración empresarial, derecho de la competencia y propiedad intelectual. Ha sido Secretario Técnico de la Comisión de Procedimientos Concursales del Indecopi Sede Lima Norte, Coordinador Legal de la Gerencia de Estudios Económicos de la misma institución y asesor del Grupo Especial para la reforma legislativa gestado por Indecopi en 2008. En el sector privado ha trabajado en firmas de abogados y se ha desempeñado como Gerente Legal en Unión de Cervecerías Peruanas Backus y Johnston S.A.A. y Telefónica del Perú S.A.A. Becario de la Cooperación Técnica Belga y del Programa Alban de la Unión Europea. Ha sido docente del curso Análisis Económico del Derecho en diversas facultades y escuelas de post grado, y del curso de competencia del sector farmacéutico en la Universidad Cayetano Heredia.',
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/ad5a/19c7/c8c563ad121e6a5fbace3b06cb4e161e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hIUaGFLLrihp88x-BZpocYXEA29U3Ki6cxkhmiTNr4FfteT~P7xAqPhs7Iv5Y0s7kvgT~wy-BPN3wwBIakgraqut05m5OvtY7fwdoERno~PX7FX2hHeck-DyeYzRW~LK4dCCM9c6JGJ3xq4joE52NIu80Gm4bhDhpRQSHJbIrdkAXuZ9XDeWCS9kLMFfWCNPVKMM0C8BJLHuL-TE9MUnM6jmsBO87pmgfEXyT7BPORCn6xx-TC~EG6OaM7SlcsmQSo7424LDEVWPV8lfaTiMfZouXBg4d909lv6BidQ-TIR3hdm-WZYsJNC8D2IC4s1fb~tAdU3PiqyU5wkLjOr2ug__',
          name: 'Ana Sofía del Solar',
          role: 'Especialista facilitación del comercio',
          desc: 'Abogado Pontificia Universidad Católica del Perú, y Máster en Derecho por la Katholieke Universiteit Leuven (Bélgica). Experto en análisis económico del derecho, políticas regulatorias, reestructuración empresarial, derecho de la competencia y propiedad intelectual. Ha sido Secretario Técnico de la Comisión de Procedimientos Concursales del Indecopi Sede Lima Norte, Coordinador Legal de la Gerencia de Estudios Económicos de la misma institución y asesor del Grupo Especial para la reforma legislativa gestado por Indecopi en 2008. En el sector privado ha trabajado en firmas de abogados y se ha desempeñado como Gerente Legal en Unión de Cervecerías Peruanas Backus y Johnston S.A.A. y Telefónica del Perú S.A.A. Becario de la Cooperación Técnica Belga y del Programa Alban de la Unión Europea. Ha sido docente del curso Análisis Económico del Derecho en diversas facultades y escuelas de post grado, y del curso de competencia del sector farmacéutico en la Universidad Cayetano Heredia.',
        },
      ],
    },
  },
  EN: {
    pageHeader: {
      bg: PageHeader,
      text: 'Who are we?',
    },
    quote: {
      text: 'The word "facilitate" means to make simple or simpler, and this is precisely the objective of trade facilitation – to make the processes and procedures of international trade as simple and efficient as possible for traders, authorities, and governments.',
      sub: 'United Nations Centre for Trade Facilitation and Electronic Business',
    },
    innovacionEficiencia: {
      titleOne: 'Innovation and Efficiency',
      titleTwo: 'in International Trade',
      text: [
        'IFICS is an independent private organization dedicated to promoting trade facilitation and logistics services through research, consulting, and training. We implement efficient foreign trade processes that reduce the internationalization costs for businesses.',

        'For IFICS, trade facilitation measures improve state regulation by providing critical approaches to the need for permits, certificates, or authorizations for conducting trade, seeking proportionality with public interest, and being evidence-based.',

        'We promote paperless trade and the use of cutting-edge technological tools, training human resources in the public sector who should focus on value-added activities, prioritizing post-clearance audits and risk management as essential elements to reduce processing times. We strive to align with accepted international practices, standardizing processes that allow for efficient trade integration.',
      ],
      image1:
        'https://s3-alpha-sig.figma.com/img/1f56/f94a/5f07755f38b05bacc78e494234272789?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GKc5zxOAiaB7f1WW5f~TcCUO3H4ZCbF8~M9SV3gaA~ISgGJCD0piHwXsheB-CVcF-RnlmRluBdeg0~91-V5mnjh28hRjdZ~7AFYfItSy1RNV28QB6AbLDUZXoOsFTEugsGSfOmA5I8zVoe3JnQubpTY1vYvU-gLPhZ8-4WJ8bvda0fVZJ6DxNF1R5IUC4OxYV5W4g6OimG8Z20rdQr7Jxt5OxVrXgT-ElmGpeGTbS37YV8bGvsARWKSKyNoNRbfXI4hKqDbWr1MQuMXYP-~xg5Ybkg8DOtTBWBxBugs8rI8C3yXgAXgtegMeGRCNhIPyNgyzfAqwhgk31DNsFS3PIQ__',
      image2:
        'https://s3-alpha-sig.figma.com/img/a527/ddf8/d21b852e0737895094e188369cc02de3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U8qy-xkfGO6UkDG5A~oCU9sL5v7Vy9XT0d8Z2avXR6PIKh-jSuUw3UnG1Yrc95b648A3~UGeJP6~A3idOBjH3-PlBrU37-MTvHxGI1jq6DrGzTBBZ4bg5gdJi3fBj7b0awUhM6PZgf4wO~Kvgd~YAaLpLx6LtpHos6ESR4rPTIc~kNap16FQR3zQ3zUvGMmjBF7Cfmof7h~JWpl3I93fbhdrBGc7vSWKDkD37Bc5FFI4UJgkQ8tuyv03CIbANqQMzqbKRYSlQUL9ZGY6NuCfzJDie4xKC~w3pYknof3cRngzRcnI7dA7bVWytc20VotrBAi365MFpFsWZB1o3VRYsA__',
    },
    expertosEnFacilitacion: {
      title: 'Experts in Facilitation',
      titleTwo: 'of International Trade',
      description:
        'IFICS is made up of professionals with proven experience in the management, research, and teaching of international trade from various roles, dedicated to promoting the implementation of trade facilitation instruments that streamline transactions and the exchange of harmonized and simplified information.',
      descriptionTwo:
        'Emerging economies must move to a second generation of foreign trade reforms that promote transparent, predictable rules aligned with international standards. Foreign trade regulations should be accessible to companies without specialized experience, creating an environment of mutual trust with spaces for dialogue between regulatory entities and the regulated parties or users.',
    },
    team: {
      titleOne: 'Meet Our',
      titleTwo: 'International Trade Experts',
      sub: 'We have highly specialized professionals working in strategic areas to guarantee high-impact solutions.',
      team: [
        {
          img: egarcia,
          name: 'Eduardo García-Godos',
          role: 'CEO',
          desc: "Lawyer from the Catholic University of Peru. Master's Degree in International Economic Law from the University of Warwick (UK), with postgraduate studies in Buenos Aires, Seoul, and Geneva, and economics at the Mises Institute (Alabama). Founding partner of García-Godos, Lindley Russo & Adrianzén lawyers and Director of the Institute for Sustainable Trade Facilitation. Vice President of the Foreign Trade Committee of the ICC Peru and certified Expert in Incoterms 2020 by the ICC. Former official of the Ministry of Foreign Trade of Peru and former member of the Commission on Bureaucratic Barriers of Indecopi of Peru. Consultant for CAF, IFC, IDB, USAID, UNCTAD, and the Global Alliance for Trade Facilitation. Speaker at Conferences on Trade Facilitation of the World Customs Organization.",
        },
        {
          img: alindley,
          name: 'Alfredo Lindley-Russo',
          role: 'Regulatory Improvement Leader',
          desc: "Lawyer from the Catholic University of Peru. Master's Degree in International Economic Law from the University of Warwick (UK), with postgraduate studies in Buenos Aires, Seoul, and Geneva, and economics at the Mises Institute (Alabama). Founding partner of García-Godos, Lindley Russo & Adrianzén lawyers and Director of the Institute for Sustainable Trade Facilitation. Vice President of the Foreign Trade Committee of the ICC Peru and certified Expert in Incoterms 2020 by the ICC. Former official of the Ministry of Foreign Trade of Peru and former member of the Commission on Bureaucratic Barriers of Indecopi of Peru. Consultant for CAF, IFC, IDB, USAID, UNCTAD, and the Global Alliance for Trade Facilitation. Speaker at Conferences on Trade Facilitation of the World Customs Organization.",
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/d6c9/8b5a/f3fd5e9f9bbe0b9c3a159c294f8445ac?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DtmnHiZmfYqFMKmjOW0ZULi0m4SRyj1PCH3ufPHP5ygerBbwlAxt7T~DrDJNwIyUyW3ZM1YWRbTTP2GI7PkJy2bUW366mTaUvnsxNLeangBIUc9qlgis8fCGEx2FAhVTbV9vzg~nU0zQ6IDt3k-Y~rKvCE7FzPOVhvDblCN1A1pMZJt1oqdXcdIoFMaBndROqoeBeTzA~7bZW4bUv-UgcV8DLIlHjX69us-ArdqTkU2ph875LGOUDxLWf2rrlFly5aunF8XUXHIsQaSmeI8QEcOT3gCFDesMt0mr9us584Ug5xEsp40WWm-TaFMg8dlVTEZwFrkIKBo98aaoMzh7cg__',
          name: 'Carlos Gómez',
          role: 'Business process and digital transformation leader',
          desc: "Lawyer from the Catholic University of Peru. Master's Degree in International Economic Law from the University of Warwick (UK), with postgraduate studies in Buenos Aires, Seoul, and Geneva, and economics at the Mises Institute (Alabama). Founding partner of García-Godos, Lindley Russo & Adrianzén lawyers and Director of the Institute for Sustainable Trade Facilitation. Vice President of the Foreign Trade Committee of the ICC Peru and certified Expert in Incoterms 2020 by the ICC. Former official of the Ministry of Foreign Trade of Peru and former member of the Commission on Bureaucratic Barriers of Indecopi of Peru. Consultant for CAF, IFC, IDB, USAID, UNCTAD, and the Global Alliance for Trade Facilitation. Speaker at Conferences on Trade Facilitation of the World Customs Organization.",
        },
        {
          img: apaza,
          name: 'Brenda Apaza',
          role: 'Trade facilitation and logistics expert',
          desc: "Lawyer from the Catholic University of Peru. Master's Degree in International Economic Law from the University of Warwick (UK), with postgraduate studies in Buenos Aires, Seoul, and Geneva, and economics at the Mises Institute (Alabama). Founding partner of García-Godos, Lindley Russo & Adrianzén lawyers and Director of the Institute for Sustainable Trade Facilitation. Vice President of the Foreign Trade Committee of the ICC Peru and certified Expert in Incoterms 2020 by the ICC. Former official of the Ministry of Foreign Trade of Peru and former member of the Commission on Bureaucratic Barriers of Indecopi of Peru. Consultant for CAF, IFC, IDB, USAID, UNCTAD, and the Global Alliance for Trade Facilitation. Speaker at Conferences on Trade Facilitation of the World Customs Organization.",
        },
        {
          img: ladrianzen,
          name: 'Luis Adrianzén',
          role: 'Regulatory Improvement Expert',
          desc: 'Lawyer from Pontificia Universidad Católica del Perú, and Master in Law from Katholieke Universiteit Leuven (Belgium). Expert in law and economics, regulatory policies, corporate restructuring, competition law, and intellectual property. He has served as Technical Secretary of the Bankruptcy Procedures Commission of Indecopi Lima Norte, Legal Coordinator of the Economic Studies Management of the same institution, and advisor to the Special Group for legislative reform created by Indecopi in 2008. In the private sector, he has worked in law firms and served as Legal Manager at Unión de Cervecerías Peruanas Backus y Johnston S.A.A. and Telefónica del Perú S.A.A. He was a scholarship holder of the Belgian Technical Cooperation and the Alban Program of the European Union. He has taught the Law and Economics course at various faculties and postgraduate schools, and the pharmaceutical sector competition course at Universidad Cayetano Heredia.',
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/ad5a/19c7/c8c563ad121e6a5fbace3b06cb4e161e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hIUaGFLLrihp88x-BZpocYXEA29U3Ki6cxkhmiTNr4FfteT~P7xAqPhs7Iv5Y0s7kvgT~wy-BPN3wwBIakgraqut05m5OvtY7fwdoERno~PX7FX2hHeck-DyeYzRW~LK4dCCM9c6JGJ3xq4joE52NIu80Gm4bhDhpRQSHJbIrdkAXuZ9XDeWCS9kLMFfWCNPVKMM0C8BJLHuL-TE9MUnM6jmsBO87pmgfEXyT7BPORCn6xx-TC~EG6OaM7SlcsmQSo7424LDEVWPV8lfaTiMfZouXBg4d909lv6BidQ-TIR3hdm-WZYsJNC8D2IC4s1fb~tAdU3PiqyU5wkLjOr2ug__',
          name: 'Ana Sofía del Solar',
          role: 'Trade Facilitation Specialist',
          desc: 'Lawyer from Pontificia Universidad Católica del Perú, and Master in Law from Katholieke Universiteit Leuven (Belgium). Expert in law and economics, regulatory policies, corporate restructuring, competition law, and intellectual property. She has served as Technical Secretary of the Bankruptcy Procedures Commission of Indecopi Lima Norte, Legal Coordinator of the Economic Studies Management of the same institution, and advisor to the Special Group for legislative reform created by Indecopi in 2008. In the private sector, she has worked in law firms and served as Legal Manager at Unión de Cervecerías Peruanas Backus y Johnston S.A.A. and Telefónica del Perú S.A.A. She was a scholarship holder of the Belgian Technical Cooperation and the Alban Program of the European Union. She has taught the Law and Economics course at various faculties and postgraduate schools, and the pharmaceutical sector competition course at Universidad Cayetano Heredia.',
        },
      ],
    },
  },
}
