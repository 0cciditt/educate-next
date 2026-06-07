// Contenido de la Política de Tratamiento y Protección de Datos Personales
// de EDUCATE LEARNING CENTER S.A.S. Estructurado como datos para renderizado
// fiel del documento corporativo oficial (Versión 1.0).

export type Node =
  | { k: "p"; t: string }
  | { k: "h3"; t: string }
  | { k: "h4"; t: string }
  | { k: "ul"; items: string[] };

export type Chapter = {
  id: string;
  n: string;
  title: string;
  body: Node[];
};

export const policyMeta = {
  company: "EDUCATE LEARNING CENTER S.A.S.",
  nit: "NIT 901.719.129-7",
  title: "Política de Tratamiento y Protección de Datos Personales",
  version: "Versión 1.0",
  city: "Santiago de Cali, Valle del Cauca",
  effectiveDate: "6 de junio de 2026",
  email: "educatelearningcentersas@gmail.com",
  phone: "311 716 3442",
  address: "Calle 33AN #2BN 49, Santiago de Cali, Valle del Cauca, Colombia.",
};

export const chapters: Chapter[] = [
  {
    id: "preambulo",
    n: "",
    title: "Preámbulo",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S., sociedad por acciones simplificada legalmente constituida bajo las leyes de la República de Colombia, identificada con el Número de Identificación Tributaria (NIT) 901.719.129-7, con domicilio principal en la Calle 33AN #2BN 49 de la ciudad de Santiago de Cali, Departamento del Valle del Cauca, en su condición de Responsable del Tratamiento de Datos Personales, en estricto cumplimiento de las obligaciones que le imponen la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012, la Ley 1266 de 2008, el Decreto Único Reglamentario 1074 de 2015 y los lineamientos impartidos por la Superintendencia de Industria y Comercio en su calidad de autoridad nacional de protección de datos personales, expide la presente Política de Tratamiento y Protección de Datos Personales (en adelante, la \"Política\").",
      },
      {
        k: "p",
        t: "La presente Política constituye la manifestación expresa del compromiso institucional de EDUCATE LEARNING CENTER S.A.S. con el respeto, garantía y protección efectiva del derecho fundamental al habeas data, a la intimidad personal y familiar, al buen nombre y a la autodeterminación informativa de todas las personas naturales cuya información personal sea objeto de Tratamiento por parte de la institución, en el marco del desarrollo de sus actividades educativas, comerciales, administrativas, laborales y contractuales.",
      },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S., como institución dedicada a la enseñanza del idioma inglés en sus diferentes modalidades —presencial, virtual e híbrida— y a través de los distintos programas que componen su oferta formativa —clases regulares para niños, adolescentes y adultos, tutorías personalizadas, cursos corporativos, campamentos vacacionales, Summer Camp, programas culturales, programas académicos complementarios, intercambios nacionales e internacionales, actividades extracurriculares y plataformas educativas digitales—, reconoce que el adecuado tratamiento de los datos personales de los Titulares constituye un elemento esencial de la confianza institucional y un pilar fundamental de su gobierno corporativo.",
      },
      {
        k: "p",
        t: "En desarrollo del Principio de Responsabilidad Demostrada (Accountability), consagrado en el artículo 26 del Decreto 1377 de 2013, hoy compilado en el Decreto 1074 de 2015, y desarrollado por la Superintendencia de Industria y Comercio mediante la Guía para la Implementación del Principio de Responsabilidad Demostrada, EDUCATE LEARNING CENTER S.A.S. adopta la presente Política como instrumento idóneo para evidenciar el cumplimiento efectivo, oportuno, suficiente y verificable de las obligaciones derivadas del régimen general de protección de datos personales.",
      },
      {
        k: "p",
        t: "La presente Política se entenderá conocida, aceptada y vinculante para todos los Titulares cuyos datos personales sean tratados por EDUCATE LEARNING CENTER S.A.S., así como para todos los Encargados, proveedores, contratistas, aliados estratégicos, empleados, directivos y demás terceros que intervengan, directa o indirectamente, en las actividades de Tratamiento de Datos Personales realizadas por la institución.",
      },
    ],
  },
  {
    id: "cap-1",
    n: "1",
    title: "Objetivo",
    body: [
      {
        k: "p",
        t: "La presente Política tiene por objeto establecer los lineamientos, principios, criterios, procedimientos, mecanismos, controles y demás disposiciones aplicables al Tratamiento de Datos Personales que EDUCATE LEARNING CENTER S.A.S. realiza, directamente o por intermedio de Encargados, en cumplimiento del régimen general de protección de datos personales vigente en la República de Colombia.",
      },
      {
        k: "p",
        t: "De manera particular, la Política persigue los siguientes objetivos específicos:",
      },
      {
        k: "ul",
        items: [
          "Garantizar la protección integral y efectiva del derecho fundamental al habeas data de los Titulares cuyos datos personales sean objeto de Recolección, Almacenamiento, Uso, Circulación, Transmisión, Transferencia o Supresión por parte de EDUCATE LEARNING CENTER S.A.S.",
          "Establecer las finalidades específicas, explícitas, legítimas y proporcionales para las cuales EDUCATE LEARNING CENTER S.A.S. realiza el Tratamiento de Datos Personales en el desarrollo de su objeto social.",
          "Definir los derechos que asisten a los Titulares y los mecanismos, canales y procedimientos disponibles para el ejercicio efectivo de los mismos, incluidos los derechos de acceso, conocimiento, actualización, rectificación, supresión y revocación de la autorización.",
          "Determinar los deberes que corresponden a EDUCATE LEARNING CENTER S.A.S. en su calidad de Responsable del Tratamiento, así como a los Encargados, empleados, contratistas y demás terceros que intervengan en las operaciones de Tratamiento.",
          "Desarrollar e implementar las medidas técnicas, humanas, administrativas y jurídicas necesarias para asegurar la confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad de los datos personales bajo administración de la institución.",
          "Establecer los procedimientos para la atención oportuna y eficaz de consultas, reclamos, peticiones, quejas y solicitudes presentadas por los Titulares o sus causahabientes en relación con el Tratamiento de sus datos personales.",
          "Evidenciar, en el marco del Principio de Responsabilidad Demostrada (Accountability), el cumplimiento efectivo, oportuno, suficiente y verificable por parte de EDUCATE LEARNING CENTER S.A.S. de las obligaciones derivadas de la normatividad aplicable.",
          "Establecer las disposiciones especiales aplicables al Tratamiento de Datos Personales de menores de edad, en atención a su condición de sujetos de especial protección constitucional, así como al Tratamiento de Datos Sensibles, datos biométricos, datos académicos, datos de salud y demás categorías reforzadas.",
          "Regular las Transferencias y Transmisiones, nacionales e internacionales, de Datos Personales que EDUCATE LEARNING CENTER S.A.S. realice en desarrollo de sus actividades, en particular aquellas asociadas a plataformas tecnológicas, proveedores en la nube, intercambios académicos y aliados internacionales.",
          "Prever, mediante cláusulas preventivas, el adecuado Tratamiento de Datos Personales en escenarios futuros vinculados a la adopción de Sistemas de Gestión del Aprendizaje (Learning Management Systems – LMS), herramientas de analítica educativa, herramientas de inteligencia artificial aplicadas a la educación y demás tecnologías emergentes.",
        ],
      },
    ],
  },
  {
    id: "cap-2",
    n: "2",
    title: "Alcance",
    body: [
      {
        k: "p",
        t: "La presente Política se aplica a todos los Datos Personales registrados, almacenados, recopilados, usados, compartidos o transmitidos en cualquier Base de Datos, archivo físico, archivo electrónico, plataforma tecnológica, sistema de información, repositorio en la nube o cualquier otro medio o soporte —análogo o digital— bajo administración o control, directo o indirecto, de EDUCATE LEARNING CENTER S.A.S., independientemente de que el Tratamiento sea realizado de manera directa por la institución o por intermedio de Encargados debidamente vinculados.",
      },
      {
        k: "p",
        t: "La Política aplica de manera vinculante a las siguientes personas, dependencias y actores:",
      },
      {
        k: "ul",
        items: [
          "Todos los Titulares de Datos Personales cuya información sea objeto de Tratamiento por parte de EDUCATE LEARNING CENTER S.A.S., entendidos como estudiantes, padres de familia, representantes legales, participantes de Summer Camp y demás campamentos, participantes de intercambios nacionales e internacionales, empleados, docentes, contratistas, aspirantes laborales, proveedores, clientes —personas naturales y representantes legales de personas jurídicas—, empresas clientes, aliados estratégicos, visitantes y usuarios de las plataformas digitales de la institución.",
          "Todos los directivos, administradores, accionistas, representantes legales, empleados de planta, empleados temporales, practicantes, aprendices SENA, monitores, instructores, docentes ocasionales y demás personal vinculado a EDUCATE LEARNING CENTER S.A.S. por cualquier modalidad de vinculación, quienes, en el ejercicio de sus funciones, accedan o lleguen a acceder a Datos Personales bajo administración de la institución.",
          "Todos los Encargados del Tratamiento contratados por EDUCATE LEARNING CENTER S.A.S., así como los proveedores, contratistas, aliados estratégicos, instituciones educativas asociadas, organizaciones nacionales o extranjeras, plataformas tecnológicas y, en general, cualquier tercero que, en virtud de un vínculo contractual, comercial, institucional o de cualquier otra naturaleza con la institución, realice operaciones de Tratamiento sobre Datos Personales de titularidad de la institución.",
          "Todas las áreas, dependencias, unidades administrativas, comités, programas y proyectos de EDUCATE LEARNING CENTER S.A.S., incluyendo, sin limitarse a, las áreas académica, administrativa, financiera, contable, de talento humano, comercial, mercadeo, comunicaciones, tecnología, atención al cliente, calidad y servicios educativos especiales (Summer Camp, intercambios, campamentos vacacionales y programas corporativos).",
        ],
      },
      {
        k: "p",
        t: "La Política se aplica a la totalidad del ciclo de vida de los Datos Personales, desde el momento de su Recolección hasta su Supresión definitiva, comprendiendo todas las operaciones intermedias de Almacenamiento, Conservación, Uso, Circulación, Bloqueo, Actualización, Rectificación, Transferencia, Transmisión y demás operaciones que puedan efectuarse sobre ellos.",
      },
      {
        k: "p",
        t: "Quedan comprendidas dentro del alcance de la presente Política todas las Bases de Datos administradas por EDUCATE LEARNING CENTER S.A.S., independientemente del medio en el que se encuentren contenidas (físico, electrónico, virtual, en la nube, mixto o cualquier otro) y del territorio en el que se encuentren alojadas, siempre y cuando el Tratamiento se realice en territorio colombiano o, encontrándose en el exterior, le sea aplicable la legislación colombiana en virtud de las normas nacionales o de los tratados internacionales suscritos por Colombia.",
      },
    ],
  },
  {
    id: "cap-3",
    n: "3",
    title: "Glosario",
    body: [
      {
        k: "p",
        t: "Para la correcta interpretación, aplicación y ejecución de la presente Política, los términos y expresiones que se relacionan a continuación tendrán el significado que se les asigna, sin perjuicio de las definiciones contenidas en la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás disposiciones concordantes:",
      },
      {
        k: "ul",
        items: [
          "Autorización: Consentimiento previo, expreso, libre e informado del Titular para llevar a cabo el Tratamiento de sus Datos Personales por parte de EDUCATE LEARNING CENTER S.A.S. La Autorización podrá constar por escrito, en forma oral, mediante mecanismos electrónicos o por conductas inequívocas del Titular que permitan concluir, de manera razonable, que otorgó la Autorización.",
          "Aviso de Privacidad: Comunicación verbal o escrita generada por EDUCATE LEARNING CENTER S.A.S. dirigida al Titular para informarle acerca de la existencia de las políticas de tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las finalidades del Tratamiento que se pretende dar a los Datos Personales.",
          "Base de Datos: Conjunto organizado de Datos Personales que sea objeto de Tratamiento por parte de EDUCATE LEARNING CENTER S.A.S., independientemente del soporte —físico, electrónico, en la nube, mixto o de cualquier otra naturaleza— en el que se encuentre contenida.",
          "Causahabiente: Persona que ha sucedido a otra por causa del fallecimiento de ésta (heredero) o cualquier otro título, en los términos previstos en la legislación civil colombiana.",
          "Dato Personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.",
          "Dato Público: Dato que no sea semiprivado, privado o sensible. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público.",
          "Dato Semiprivado: Dato que no tiene naturaleza íntima, reservada ni pública, y cuyo conocimiento o divulgación puede interesar no solo a su Titular, sino a cierto sector o grupo de personas, o a la sociedad en general.",
          "Dato Privado: Dato que por su naturaleza íntima o reservada solo es relevante para el Titular.",
          "Dato Sensible: Aquel que afecta la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y los datos biométricos.",
          "Dato Biométrico: Información personal derivada de las características físicas, fisiológicas o conductuales de una persona natural que permite o confirma su identificación única, tales como fotografías, videos, voz, huella dactilar, iris, rostro y patrones de conducta. Para efectos de la presente Política se incluyen en esta categoría las fotografías, videos y grabaciones institucionales que permitan identificar a una persona.",
          "Dato Académico: Información asociada al desempeño, evaluación, progreso, asistencia, calificaciones, niveles alcanzados, certificaciones, historial formativo y demás aspectos relacionados con la prestación del servicio educativo a cargo de EDUCATE LEARNING CENTER S.A.S.",
          "Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento, en este caso, EDUCATE LEARNING CENTER S.A.S.",
          "Habeas Data: Derecho fundamental que tiene toda persona para conocer, actualizar, rectificar y suprimir las informaciones que se hayan recogido sobre ella en bancos de datos y en archivos de entidades públicas y privadas, conforme al artículo 15 de la Constitución Política.",
          "LMS (Learning Management System): Sistema de Gestión del Aprendizaje. Plataforma tecnológica destinada a la administración, documentación, seguimiento, evaluación y entrega de cursos, programas formativos y procesos educativos en línea o híbridos.",
          "Menor de Edad: Toda persona natural que no haya cumplido dieciocho (18) años de edad, sujeta a especial protección constitucional, legal y de la presente Política.",
          "Política: La presente Política de Tratamiento y Protección de Datos Personales de EDUCATE LEARNING CENTER S.A.S.",
          "Principio de Responsabilidad Demostrada (Accountability): Principio conforme al cual el Responsable del Tratamiento debe ser capaz de demostrar, a petición de la autoridad de control o del Titular, que ha implementado medidas apropiadas y efectivas para cumplir con las obligaciones establecidas en la Ley 1581 de 2012 y demás normas concordantes.",
          "Recolección: Acción mediante la cual EDUCATE LEARNING CENTER S.A.S. obtiene Datos Personales de los Titulares, ya sea de manera directa o a través de terceros debidamente autorizados.",
          "Responsable del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos. Para los efectos de la presente Política, el Responsable del Tratamiento es EDUCATE LEARNING CENTER S.A.S.",
          "RNBD (Registro Nacional de Bases de Datos): Directorio público administrado por la Superintendencia de Industria y Comercio en el cual los Responsables del Tratamiento deben inscribir las bases de datos sujetas a Tratamiento que operan en el país.",
          "SIC: Superintendencia de Industria y Comercio, autoridad nacional de protección de datos personales en la República de Colombia.",
          "Supresión: Eliminación, total o parcial, de los Datos Personales del Titular de las Bases de Datos de EDUCATE LEARNING CENTER S.A.S., de conformidad con los términos de Ley.",
          "Titular: Persona natural cuyos Datos Personales sean objeto de Tratamiento por parte de EDUCATE LEARNING CENTER S.A.S.",
          "Transferencia: Operación mediante la cual el Responsable o Encargado del Tratamiento de Datos Personales, ubicado en Colombia, envía la información o los Datos Personales a un receptor —que a su vez es Responsable del Tratamiento— ubicado dentro o fuera del país.",
          "Transmisión: Tratamiento de Datos Personales que implica la comunicación de los mismos dentro o fuera del territorio colombiano cuando tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable.",
          "Tratamiento: Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación, transmisión, transferencia o supresión.",
          "Videovigilancia: Sistema de captación, registro, almacenamiento y, en su caso, transmisión de imágenes a través de cámaras de seguridad instaladas en las instalaciones físicas de EDUCATE LEARNING CENTER S.A.S., con finalidades de seguridad y protección de personas, bienes e instalaciones.",
        ],
      },
    ],
  },
  {
    id: "cap-4",
    n: "4",
    title: "Marco Normativo",
    body: [
      {
        k: "p",
        t: "La presente Política se expide en cumplimiento, desarrollo y armonización con las disposiciones constitucionales, legales y reglamentarias vigentes en la República de Colombia en materia de protección de datos personales, habeas data e información asociada a la persona natural. En particular, constituyen fuentes normativas de la presente Política las siguientes:",
      },
      { k: "h3", t: "4.1. Normas constitucionales" },
      {
        k: "ul",
        items: [
          "Constitución Política de Colombia de 1991, en particular sus artículos 15 (derecho a la intimidad personal y familiar, al buen nombre y al habeas data), 20 (libertad de expresión e información) y 44 (derechos fundamentales de los niños, niñas y adolescentes).",
        ],
      },
      { k: "h3", t: "4.2. Normas legales y reglamentarias" },
      {
        k: "ul",
        items: [
          "Ley Estatutaria 1266 de 2008, por la cual se dictan las disposiciones generales del habeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países.",
          "Ley Estatutaria 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales en Colombia.",
          "Decreto 1377 de 2013, por el cual se reglamenta parcialmente la Ley 1581 de 2012, compilado en el Decreto Único Reglamentario 1074 de 2015.",
          "Decreto 886 de 2014, por el cual se reglamenta el artículo 25 de la Ley 1581 de 2012 (Registro Nacional de Bases de Datos), compilado en el Decreto Único Reglamentario 1074 de 2015.",
          "Decreto Único Reglamentario 1074 de 2015 del Sector Comercio, Industria y Turismo, que compila las disposiciones reglamentarias sobre la materia.",
          "Ley 1098 de 2006, Código de la Infancia y la Adolescencia, en lo concerniente al tratamiento especial y reforzado de los datos personales de menores de edad.",
          "Ley 1437 de 2011, Código de Procedimiento Administrativo y de lo Contencioso Administrativo, en lo aplicable al derecho de petición.",
          "Ley 1755 de 2015, por medio de la cual se regula el Derecho Fundamental de Petición.",
          "Ley 527 de 1999, sobre comercio electrónico, mensajes de datos, firma electrónica y validez probatoria de los documentos electrónicos.",
          "Ley 1273 de 2009, por medio de la cual se modifica el Código Penal y se crea un nuevo bien jurídico tutelado denominado «de la protección de la información y de los datos».",
          "Ley 1480 de 2011, Estatuto del Consumidor.",
        ],
      },
      { k: "h3", t: "4.3. Jurisprudencia" },
      {
        k: "ul",
        items: [
          "Sentencias de la Honorable Corte Constitucional en materia de habeas data, autodeterminación informativa, intimidad personal y familiar, derechos del menor y protección de datos personales. Se destacan, entre otras, las sentencias C-1011 de 2008, C-748 de 2011, T-414 de 1992, SU-082 de 1995, T-176A de 2014 y la línea jurisprudencial subsiguiente.",
        ],
      },
      { k: "h3", t: "4.4. Doctrina y lineamientos de autoridad" },
      {
        k: "ul",
        items: [
          "Circulares Externas, Conceptos, Resoluciones, Lineamientos y demás actos administrativos expedidos por la Superintendencia de Industria y Comercio en su calidad de autoridad nacional de protección de datos personales.",
          "Guía para la Implementación del Principio de Responsabilidad Demostrada (Accountability) expedida por la Superintendencia de Industria y Comercio.",
          "Guía para el Tratamiento de Datos Personales de Niños, Niñas y Adolescentes expedida por la Superintendencia de Industria y Comercio.",
          "Guía sobre el Tratamiento de Datos Personales en Cámaras de Videovigilancia expedida por la Superintendencia de Industria y Comercio.",
        ],
      },
      { k: "h3", t: "4.5. Instrumentos internacionales" },
      {
        k: "ul",
        items: [
          "Declaración Universal de los Derechos Humanos.",
          "Pacto Internacional de Derechos Civiles y Políticos.",
          "Convención Americana sobre Derechos Humanos (Pacto de San José).",
          "Convención sobre los Derechos del Niño.",
          "Estándares Internacionales de Protección de Datos Personales y la Privacidad emitidos por la Conferencia Internacional de Autoridades de Protección de Datos y Privacidad.",
        ],
      },
      {
        k: "p",
        t: "En el evento en que, durante la vigencia de la presente Política, se expidan nuevas normas que modifiquen, adicionen, sustituyan o complementen el marco normativo aquí descrito, EDUCATE LEARNING CENTER S.A.S. se acogerá íntegramente a las nuevas disposiciones, sin perjuicio de la respectiva actualización formal del presente documento.",
      },
    ],
  },
  {
    id: "cap-5",
    n: "5",
    title: "Principios Generales",
    body: [
      {
        k: "p",
        t: "El Tratamiento de Datos Personales que EDUCATE LEARNING CENTER S.A.S. realiza, directamente o por intermedio de Encargados, se rige por los principios rectores consagrados en el artículo 4 de la Ley 1581 de 2012, los cuales constituyen criterios obligatorios de interpretación y aplicación de la presente Política. Los principios generales son los siguientes:",
      },
      { k: "h3", t: "5.1. Principio de Legalidad" },
      {
        k: "p",
        t: "El Tratamiento de Datos Personales realizado por EDUCATE LEARNING CENTER S.A.S. es una actividad reglada que se sujeta de manera estricta a lo previsto en la Ley 1581 de 2012, sus decretos reglamentarios, demás disposiciones concordantes y los lineamientos impartidos por la Superintendencia de Industria y Comercio. Toda operación de Tratamiento tendrá fundamento jurídico claro, sea la autorización del Titular o cualquiera de las excepciones legalmente reconocidas.",
      },
      { k: "h3", t: "5.2. Principio de Finalidad" },
      {
        k: "p",
        t: "El Tratamiento de Datos Personales obedecerá a una finalidad legítima, específica, explícita y proporcional, de acuerdo con la Constitución y la Ley, la cual será informada de manera previa, expresa y suficiente al Titular al momento de obtener su autorización. EDUCATE LEARNING CENTER S.A.S. no realizará Tratamiento incompatible con las finalidades informadas al Titular.",
      },
      { k: "h3", t: "5.3. Principio de Libertad" },
      {
        k: "p",
        t: "El Tratamiento solo puede ejercerse con el consentimiento previo, expreso e informado del Titular. Los Datos Personales no podrán ser obtenidos o divulgados sin previa Autorización, o en ausencia de mandato legal, judicial o administrativo que releve el consentimiento.",
      },
      { k: "h3", t: "5.4. Principio de Veracidad o Calidad" },
      {
        k: "p",
        t: "La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error. EDUCATE LEARNING CENTER S.A.S. adoptará las medidas razonables para garantizar la calidad y exactitud de los datos.",
      },
      { k: "h3", t: "5.5. Principio de Transparencia" },
      {
        k: "p",
        t: "En el Tratamiento se garantiza el derecho del Titular a obtener del Responsable o del Encargado, en cualquier momento y sin restricciones, información acerca de la existencia de los datos que le conciernan, en los términos de la Ley.",
      },
      { k: "h3", t: "5.6. Principio de Acceso y Circulación Restringida" },
      {
        k: "p",
        t: "El Tratamiento se sujeta a los límites que se derivan de la naturaleza de los Datos Personales, de las disposiciones legales y de la Constitución. Los Datos Personales no podrán estar disponibles en internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido únicamente a los Titulares o a terceros autorizados.",
      },
      { k: "h3", t: "5.7. Principio de Seguridad" },
      {
        k: "p",
        t: "La información sujeta a Tratamiento por EDUCATE LEARNING CENTER S.A.S., en su calidad de Responsable, o por los Encargados, se debe manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.",
      },
      { k: "h3", t: "5.8. Principio de Confidencialidad" },
      {
        k: "p",
        t: "Todas las personas que intervengan en el Tratamiento de Datos Personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento, pudiendo sólo realizar suministro o comunicación de Datos Personales cuando ello corresponda al desarrollo de las actividades autorizadas en la Ley.",
      },
    ],
  },
  {
    id: "cap-6",
    n: "6",
    title: "Principios Específicos",
    body: [
      {
        k: "p",
        t: "Sin perjuicio de los principios generales consagrados en la Ley 1581 de 2012, y en atención a su condición de institución dedicada a la prestación de servicios educativos, EDUCATE LEARNING CENTER S.A.S. adopta, como criterios rectores adicionales para el Tratamiento de Datos Personales, los siguientes principios específicos:",
      },
      { k: "h3", t: "6.1. Principio del Interés Superior del Menor" },
      {
        k: "p",
        t: "En todas las operaciones de Tratamiento que involucren Datos Personales de niños, niñas y adolescentes, EDUCATE LEARNING CENTER S.A.S. observará de manera prevalente el principio del interés superior del menor consagrado en el artículo 44 de la Constitución Política, la Convención sobre los Derechos del Niño y la Ley 1098 de 2006. En consecuencia, todas las decisiones relacionadas con el Tratamiento de datos de menores se adoptarán bajo criterios reforzados de protección, prudencia, finalidad académica o pedagógica y respeto absoluto a su dignidad y desarrollo integral.",
      },
      { k: "h3", t: "6.2. Principio de Responsabilidad Demostrada (Accountability)" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. asume el deber de adoptar, implementar, documentar y verificar de manera permanente las medidas apropiadas, útiles, eficaces y demostrables para cumplir con las obligaciones legales en materia de protección de datos personales, así como para evidenciar dicho cumplimiento ante la autoridad de control, los Titulares y demás partes interesadas, en cualquier momento y a su requerimiento.",
      },
      { k: "h3", t: "6.3. Principio de Privacidad desde el Diseño y por Defecto" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. incorporará la protección de datos personales como criterio rector en el diseño, desarrollo, implementación, mantenimiento y operación de procesos, productos, servicios, programas académicos, plataformas tecnológicas y demás iniciativas institucionales, asegurando que, por defecto, solo se traten los Datos Personales estrictamente necesarios para la finalidad declarada.",
      },
      { k: "h3", t: "6.4. Principio de Minimización" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. recolectará y tratará únicamente los Datos Personales que resulten adecuados, pertinentes y limitados a lo necesario en relación con las finalidades específicas para las cuales se recolectan. Se evitará la recolección, almacenamiento y conservación de datos personales innecesarios, excesivos o ajenos a las finalidades informadas.",
      },
      { k: "h3", t: "6.5. Principio de Proporcionalidad" },
      {
        k: "p",
        t: "El Tratamiento de Datos Personales será proporcional a las finalidades perseguidas, ponderando los derechos del Titular frente a los intereses legítimos del Responsable, de los Encargados y de terceros, y privilegiando, en caso de duda, los derechos fundamentales del Titular.",
      },
      { k: "h3", t: "6.6. Principio de No Discriminación" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. se abstendrá de realizar Tratamientos que tengan por finalidad o por efecto discriminar a los Titulares por razón de su origen racial o étnico, género, orientación sexual, convicciones religiosas o filosóficas, pertenencia a sindicatos u organizaciones sociales, estado de salud, discapacidad o cualquier otra categoría protegida.",
      },
      { k: "h3", t: "6.7. Principio de Mejora Continua" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. revisará, evaluará y actualizará de manera periódica sus políticas, procedimientos, controles y prácticas de Tratamiento, con el propósito de elevar progresivamente el estándar de protección, incorporar nuevas herramientas tecnológicas, atender las nuevas exigencias regulatorias y robustecer las medidas de seguridad.",
      },
      { k: "h3", t: "6.8. Principio de Trazabilidad" },
      {
        k: "p",
        t: "Todas las operaciones de Tratamiento realizadas sobre Datos Personales por EDUCATE LEARNING CENTER S.A.S., directamente o por intermedio de Encargados, serán susceptibles de ser reconstruidas, documentadas y evidenciadas a través de los registros, bitácoras, contratos, autorizaciones y demás soportes que permitan la verificación de su licitud, oportunidad y finalidad.",
      },
    ],
  },
  {
    id: "cap-7",
    n: "7",
    title: "Categorías de Titulares",
    body: [
      {
        k: "p",
        t: "Para efectos de la aplicación de la presente Política, EDUCATE LEARNING CENTER S.A.S. identifica, sin que la enumeración sea taxativa, las siguientes categorías de Titulares de Datos Personales sobre los cuales realiza Tratamiento en el marco del desarrollo de su objeto social:",
      },
      { k: "h3", t: "7.1. Titulares vinculados a la prestación del servicio educativo" },
      { k: "h4", t: "7.1.1. Estudiantes" },
      {
        k: "p",
        t: "Personas naturales, mayores o menores de edad, que se encuentran matriculadas o han manifestado intención de matricularse en cualquiera de los programas, cursos, talleres, clases o actividades formativas ofrecidos por EDUCATE LEARNING CENTER S.A.S., incluidas las clases presenciales, virtuales o híbridas, las tutorías personalizadas, los programas culturales, los programas académicos complementarios y las demás modalidades de prestación del servicio.",
      },
      { k: "h4", t: "7.1.2. Padres de familia y representantes legales" },
      {
        k: "p",
        t: "Personas naturales que, en calidad de padres, madres, tutores o representantes legales de un estudiante menor de edad, otorgan la autorización para el Tratamiento de los datos personales del menor, sufragan los costos de los servicios educativos, suscriben los contratos correspondientes o intervienen, por cualquier título, en la relación académica del menor con la institución.",
      },
      { k: "h4", t: "7.1.3. Participantes de Summer Camp" },
      {
        k: "p",
        t: "Menores de edad entre los cuatro (4) y los diecisiete (17) años de edad —o personas naturales de otras edades, en caso de que se ofrezcan modalidades específicas— que se inscriben y participan en los programas de Summer Camp organizados por EDUCATE LEARNING CENTER S.A.S., así como sus padres de familia y/o representantes legales.",
      },
      { k: "h4", t: "7.1.4. Participantes de campamentos vacacionales y programas culturales" },
      {
        k: "p",
        t: "Personas naturales que se inscriben en los campamentos vacacionales, programas culturales, programas académicos complementarios y demás actividades de carácter formativo y recreativo ofrecidas por la institución.",
      },
      { k: "h4", t: "7.1.5. Participantes de intercambios nacionales e internacionales" },
      {
        k: "p",
        t: "Personas naturales que, por sí mismas o por intermedio de sus representantes legales, se inscriben en programas de intercambio académico, cultural o lingüístico, organizados por EDUCATE LEARNING CENTER S.A.S. directamente o en alianza con instituciones nacionales o extranjeras.",
      },
      { k: "h4", t: "7.1.6. Usuarios de plataformas digitales" },
      {
        k: "p",
        t: "Personas naturales que acceden a los sitios web, aplicaciones móviles, plataformas educativas, Sistemas de Gestión del Aprendizaje (LMS), aulas virtuales, herramientas de evaluación, repositorios de contenido y demás canales digitales administrados o utilizados por EDUCATE LEARNING CENTER S.A.S. para la prestación de sus servicios.",
      },
      { k: "h3", t: "7.2. Titulares vinculados a la relación laboral o contractual" },
      { k: "h4", t: "7.2.1. Empleados y docentes" },
      {
        k: "p",
        t: "Personas naturales que se encuentran vinculadas a EDUCATE LEARNING CENTER S.A.S. mediante contrato de trabajo, en cualquier modalidad (a término fijo, indefinido, por obra o labor, de aprendizaje, entre otros), incluidos los directivos, administrativos, instructores, docentes, monitores, practicantes y aprendices.",
      },
      { k: "h4", t: "7.2.2. Contratistas" },
      {
        k: "p",
        t: "Personas naturales que prestan servicios a EDUCATE LEARNING CENTER S.A.S. bajo la modalidad de prestación de servicios profesionales, técnicos o de cualquier otra naturaleza, sin subordinación jurídica, mediante contratos civiles o comerciales.",
      },
      { k: "h4", t: "7.2.3. Aspirantes laborales" },
      {
        k: "p",
        t: "Personas naturales que postulan sus hojas de vida, participan en procesos de selección, entrevistas, pruebas técnicas, psicotécnicas o de cualquier otra naturaleza, con miras a vincularse laboral o contractualmente con la institución.",
      },
      { k: "h3", t: "7.3. Titulares vinculados a la relación comercial" },
      { k: "h4", t: "7.3.1. Clientes personas naturales" },
      {
        k: "p",
        t: "Personas naturales que adquieren los servicios ofrecidos por EDUCATE LEARNING CENTER S.A.S., ya sea para sí mismas o para terceros, en cualquiera de las modalidades disponibles.",
      },
      { k: "h4", t: "7.3.2. Empresas clientes y representantes legales" },
      {
        k: "p",
        t: "Personas jurídicas que adquieren servicios educativos corporativos para sus empleados o colaboradores, así como las personas naturales que actúan como representantes legales, contactos comerciales, contactos administrativos o autorizados para tramitar la relación contractual con la institución.",
      },
      { k: "h4", t: "7.3.3. Proveedores" },
      {
        k: "p",
        t: "Personas naturales o personas jurídicas (a través de sus representantes legales y/o contactos autorizados) que suministran bienes o servicios a EDUCATE LEARNING CENTER S.A.S., incluyendo proveedores de bienes, servicios profesionales, tecnología, transporte, alimentación, logística, entre otros.",
      },
      { k: "h4", t: "7.3.4. Aliados estratégicos" },
      {
        k: "p",
        t: "Personas naturales o jurídicas con las cuales EDUCATE LEARNING CENTER S.A.S. mantiene relaciones de cooperación, alianza, convenio o acuerdo institucional, sea para la prestación conjunta de servicios, la organización de actividades, el desarrollo de programas de intercambio o cualquier otra finalidad lícita.",
      },
      { k: "h3", t: "7.4. Otros Titulares" },
      { k: "h4", t: "7.4.1. Visitantes" },
      {
        k: "p",
        t: "Personas naturales que acceden, de manera permanente u ocasional, a las instalaciones físicas de EDUCATE LEARNING CENTER S.A.S., cuya información puede ser registrada en los controles de acceso o captada por los sistemas de videovigilancia instalados.",
      },
      { k: "h4", t: "7.4.2. Prospectos y leads comerciales" },
      {
        k: "p",
        t: "Personas naturales que, sin tener la condición de clientes, han manifestado interés en los servicios ofrecidos por la institución a través de los canales habilitados al efecto (formularios web, redes sociales, ferias, contacto telefónico, referidos, entre otros) y cuyos datos son tratados con finalidades comerciales y de mercadeo, previa Autorización.",
      },
      { k: "h4", t: "7.4.3. Causahabientes" },
      {
        k: "p",
        t: "Personas naturales que, en virtud de su condición de herederos, sucesores o cualquier otra prevista en la ley civil, pueden ejercer los derechos del Titular fallecido frente a EDUCATE LEARNING CENTER S.A.S.",
      },
    ],
  },
  {
    id: "cap-8",
    n: "8",
    title: "Tipología de Datos Tratados",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. realiza Tratamiento sobre diferentes tipologías de Datos Personales, las cuales se describen a continuación, sin que la enumeración resulte taxativa o exhaustiva. La tipología efectivamente tratada respecto de cada Titular dependerá de la naturaleza de la relación, de las finalidades del Tratamiento y de la autorización otorgada.",
      },
      { k: "h3", t: "8.1. Datos de identificación" },
      {
        k: "ul",
        items: [
          "Nombres y apellidos completos.",
          "Tipo y número de documento de identidad (cédula de ciudadanía, tarjeta de identidad, registro civil, cédula de extranjería, pasaporte, permiso especial de permanencia).",
          "Lugar y fecha de expedición del documento de identidad.",
          "Fecha y lugar de nacimiento.",
          "Edad.",
          "Género.",
          "Estado civil.",
          "Nacionalidad.",
          "Firma manuscrita o electrónica.",
        ],
      },
      { k: "h3", t: "8.2. Datos de contacto" },
      {
        k: "ul",
        items: [
          "Dirección de residencia y/o correspondencia.",
          "Ciudad, departamento y país de residencia.",
          "Teléfono fijo, celular y/o WhatsApp.",
          "Correo electrónico personal y/o corporativo.",
          "Redes sociales utilizadas como canal de comunicación con la institución.",
        ],
      },
      { k: "h3", t: "8.3. Datos académicos del estudiante" },
      {
        k: "ul",
        items: [
          "Colegio o institución educativa de origen.",
          "Nivel educativo cursado o en curso.",
          "Nivel de inglés inicial y progresión a lo largo del programa.",
          "Resultados de pruebas de clasificación (placement tests).",
          "Calificaciones, evaluaciones, exámenes y reportes académicos.",
          "Asistencia, puntualidad y observaciones disciplinarias.",
          "Historial de participación en programas, cursos, campamentos, intercambios y actividades complementarias.",
          "Certificados, diplomas, constancias y reconocimientos académicos otorgados.",
          "Información de acceso a plataformas educativas y bitácora de uso (registro de inicios de sesión, tiempos de conexión, entregas, evaluaciones).",
          "Comunicaciones académicas con docentes y personal de la institución.",
        ],
      },
      { k: "h3", t: "8.4. Datos de padres de familia y representantes legales" },
      {
        k: "ul",
        items: [
          "Nombres y apellidos completos.",
          "Documento de identidad.",
          "Parentesco con el estudiante.",
          "Ocupación o actividad económica.",
          "Empresa donde labora.",
          "Dirección de residencia y correspondencia.",
          "Correo electrónico.",
          "Teléfono(s) de contacto.",
          "Datos para facturación electrónica.",
          "Información de medios de pago utilizados (no incluyendo, salvo autorización expresa y con las medidas de seguridad correspondientes, datos financieros completos).",
        ],
      },
      { k: "h3", t: "8.5. Datos sensibles" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. solo trata Datos Sensibles cuando ello sea estrictamente necesario para el cumplimiento de las finalidades del Tratamiento, previa Autorización explícita del Titular o de su representante legal en el caso de menores de edad, y observando las salvaguardas reforzadas previstas en la Ley 1581 de 2012 y en el Decreto 1074 de 2015. Dentro de los Datos Sensibles tratados por la institución se encuentran:",
      },
      {
        k: "ul",
        items: [
          "Alergias e intolerancias.",
          "Condiciones médicas relevantes (diabetes, asma, epilepsia, condiciones cardiacas, entre otras).",
          "Medicamentos de uso permanente o esporádico relevantes para la prestación del servicio.",
          "Restricciones alimenticias por motivos de salud, religión o convicción.",
          "Discapacidades físicas, sensoriales, intelectuales o psicosociales.",
          "Información de salud general relevante para la prestación del servicio educativo o para la participación en actividades específicas (Summer Camp, intercambios, salidas pedagógicas).",
          "Datos de contactos de emergencia y autorizaciones para atención médica urgente.",
          "Información sobre orientación religiosa o filosófica, únicamente cuando ello sea necesario para atender restricciones alimenticias o actividades específicas, previa autorización.",
        ],
      },
      { k: "h3", t: "8.6. Datos biométricos y audiovisuales" },
      {
        k: "ul",
        items: [
          "Fotografías individuales o grupales tomadas en el desarrollo de actividades académicas, culturales o institucionales.",
          "Videos institucionales, registros audiovisuales de clases, eventos, presentaciones y actividades.",
          "Grabaciones de sesiones realizadas en plataformas tecnológicas (Google Meet u otras), cuando sean autorizadas con fines pedagógicos.",
          "Imágenes captadas por los sistemas de videovigilancia instalados en las instalaciones físicas, las cuales únicamente registran video y no incluyen audio.",
        ],
      },
      { k: "h3", t: "8.7. Datos de empleados, docentes, contratistas y aspirantes" },
      {
        k: "ul",
        items: [
          "Hojas de vida con información académica y profesional.",
          "Certificaciones laborales, académicas y de competencias.",
          "Referencias laborales y personales.",
          "Información sobre cargo, funciones, salario o honorarios, horario y jornada.",
          "Información de afiliación al Sistema General de Seguridad Social (salud, pensión, riesgos laborales, caja de compensación).",
          "Datos bancarios y financieros para el pago de nómina, honorarios y prestaciones.",
          "Información de antecedentes disciplinarios, judiciales, fiscales y de policía, cuando ello sea aplicable y proporcional al cargo.",
          "Resultados de exámenes médicos ocupacionales, en los términos previstos por la normativa de seguridad y salud en el trabajo.",
          "Información de capacitaciones, desempeño y evaluaciones.",
          "Datos de beneficiarios para efectos prestacionales y de seguridad social.",
        ],
      },
      { k: "h3", t: "8.8. Datos comerciales y de facturación" },
      {
        k: "ul",
        items: [
          "Información sobre productos y servicios adquiridos.",
          "Historial de compras, pagos y facturación.",
          "Información tributaria y de facturación electrónica (responsabilidades tributarias, régimen, etc.).",
          "Medios de pago utilizados (PSE, Aval Pay Center, tarjetas, efectivo, transferencias) en los términos pertinentes.",
          "Datos de cuentas bancarias para devoluciones, cuando aplique.",
          "Reclamos, quejas, sugerencias y solicitudes presentadas.",
        ],
      },
      { k: "h3", t: "8.9. Datos de navegación y plataformas digitales" },
      {
        k: "ul",
        items: [
          "Direcciones IP.",
          "Identificadores de dispositivo.",
          "Datos de navegación y cookies (en los términos de la política específica de cookies).",
          "Registros de actividad en plataformas, aulas virtuales y LMS.",
          "Información sobre dispositivos utilizados para acceder a los servicios digitales.",
        ],
      },
    ],
  },
  {
    id: "cap-9",
    n: "9",
    title: "Responsable y Encargado del Tratamiento",
    body: [
      { k: "h3", t: "9.1. Identificación del Responsable del Tratamiento" },
      {
        k: "p",
        t: "De conformidad con lo dispuesto en el literal e) del artículo 3 de la Ley 1581 de 2012, el Responsable del Tratamiento de los Datos Personales objeto de la presente Política es:",
      },
      {
        k: "ul",
        items: [
          "Razón social: EDUCATE LEARNING CENTER S.A.S.",
          "Número de Identificación Tributaria (NIT): 901.719.129-7",
          "Domicilio principal: Calle 33AN #2BN 49, Santiago de Cali, Valle del Cauca, Colombia.",
          "Correo electrónico institucional: educatelearningcentersas@gmail.com",
          "Teléfono de contacto: 311 716 3442",
        ],
      },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S., en su calidad de Responsable del Tratamiento, decide sobre la conformación de las Bases de Datos, las finalidades del Tratamiento, los Encargados que ejecutan el Tratamiento, las medidas técnicas y administrativas implementadas y, en general, asume las responsabilidades, deberes y obligaciones que la ley impone al Responsable del Tratamiento.",
      },
      { k: "h3", t: "9.2. Responsable de Protección de Datos al interior de la organización" },
      {
        k: "p",
        t: "Para garantizar el cumplimiento efectivo de las obligaciones derivadas de la presente Política y de la normativa aplicable, EDUCATE LEARNING CENTER S.A.S. designa al Director Administrativo como Responsable de Protección de Datos al interior de la organización, sin perjuicio de la facultad de delegar funciones específicas en otros funcionarios o de constituir un Comité de Protección de Datos.",
      },
      {
        k: "p",
        t: "Son funciones del Responsable de Protección de Datos, entre otras:",
      },
      {
        k: "ul",
        items: [
          "Velar por el cumplimiento de la presente Política y de la normatividad aplicable en materia de protección de datos personales.",
          "Atender, directamente o por delegación, las consultas, reclamos, peticiones, quejas y solicitudes presentadas por los Titulares en relación con el Tratamiento de sus Datos Personales.",
          "Servir como punto único de contacto frente a la Superintendencia de Industria y Comercio y demás autoridades competentes en la materia.",
          "Asesorar al representante legal y a las áreas en la implementación de medidas técnicas, humanas y administrativas para la protección de los datos personales.",
          "Coordinar las evaluaciones de impacto a la privacidad y la gestión del riesgo de privacidad.",
          "Coordinar la respuesta a incidentes de seguridad que afecten Datos Personales.",
          "Mantener actualizado el Registro Nacional de Bases de Datos (RNBD) ante la Superintendencia de Industria y Comercio cuando ello sea exigible.",
          "Promover y articular las jornadas de capacitación, sensibilización y cultura organizacional en materia de protección de datos personales.",
        ],
      },
      { k: "h3", t: "9.3. Canal único de atención a Titulares" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. dispone como canal único oficial de atención a los Titulares para el ejercicio de sus derechos —incluidos los derechos de conocer, actualizar, rectificar, suprimir, conocer el uso y revocar la autorización— el correo electrónico: educatelearningcentersas@gmail.com, sin perjuicio de la posibilidad de presentar las solicitudes de manera presencial en la sede principal ubicada en la Calle 33AN #2BN 49 de la ciudad de Santiago de Cali, en los horarios de atención que la institución divulgue para tal efecto.",
      },
      { k: "h3", t: "9.4. Encargados del Tratamiento" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá designar Encargados del Tratamiento para que, por cuenta y bajo las instrucciones precisas de la institución, realicen total o parcialmente las operaciones de Tratamiento de los Datos Personales. La relación entre EDUCATE LEARNING CENTER S.A.S. y los Encargados se regirá por contratos de Transmisión de Datos Personales o por las cláusulas contractuales que se incorporen en los respectivos acuerdos comerciales, los cuales contendrán, como mínimo, los siguientes elementos:",
      },
      {
        k: "ul",
        items: [
          "Identificación precisa de las partes y descripción del Tratamiento delegado.",
          "Finalidades específicas para las cuales se autoriza el Tratamiento.",
          "Tipología y categorías de Datos Personales objeto del Tratamiento.",
          "Obligación de confidencialidad, incluso con posterioridad a la terminación del vínculo contractual.",
          "Deber del Encargado de implementar medidas técnicas, humanas y administrativas idóneas para garantizar la seguridad de los datos.",
          "Prohibición de realizar Tratamientos no autorizados o incompatibles con las finalidades definidas por el Responsable.",
          "Restricciones para la subcontratación y/o subdelegación del Tratamiento.",
          "Obligación de devolver o suprimir los Datos Personales a la terminación del contrato.",
          "Mecanismos para la atención de derechos de los Titulares cuando los datos se encuentren bajo administración del Encargado.",
          "Auditorías y mecanismos de verificación del cumplimiento.",
        ],
      },
    ],
  },
  {
    id: "cap-10",
    n: "10",
    title: "Finalidades del Tratamiento",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. realiza el Tratamiento de Datos Personales para finalidades específicas, explícitas, legítimas y proporcionales relacionadas con el desarrollo de su objeto social y de las actividades conexas, complementarias y de apoyo. A continuación se establecen las finalidades generales que comprenden, sin perjuicio del desarrollo específico por categoría de Titular previsto en el Capítulo 11.",
      },
      { k: "h3", t: "10.1. Finalidades misionales (educativas)" },
      {
        k: "ul",
        items: [
          "Prestar de manera adecuada, efectiva y oportuna los servicios educativos contratados, en cualquiera de sus modalidades —presencial, virtual o híbrida— y para cualquier rango etario (niños, adolescentes, adultos).",
          "Llevar a cabo procesos de admisión, matrícula, clasificación, evaluación, seguimiento y promoción académica de los estudiantes.",
          "Diseñar, programar, ejecutar, monitorear y evaluar planes de estudio, currículos, contenidos, actividades académicas, evaluaciones y certificaciones.",
          "Administrar la asistencia, la puntualidad, las novedades académicas y disciplinarias y los aspectos pedagógicos del proceso formativo.",
          "Expedir constancias, certificados, diplomas y demás documentos que acrediten la participación o terminación de los programas.",
          "Organizar y ejecutar tutorías personalizadas, cursos corporativos, campamentos vacacionales, Summer Camp, programas culturales, programas académicos complementarios e intercambios.",
          "Habilitar el acceso, uso y aprovechamiento de las plataformas educativas digitales, Sistemas de Gestión del Aprendizaje (LMS), aplicaciones móviles, aulas virtuales y demás herramientas tecnológicas.",
        ],
      },
      { k: "h3", t: "10.2. Finalidades administrativas" },
      {
        k: "ul",
        items: [
          "Adelantar los procesos de inscripción, matrícula, contratación, cobro, facturación, gestión de cartera y conciliación contable.",
          "Cumplir con las obligaciones tributarias, contables, fiscales, comerciales y de seguridad social a cargo de la institución.",
          "Gestionar los archivos institucionales —físicos y digitales— y mantener la trazabilidad documental de la relación con cada Titular.",
          "Atender solicitudes, peticiones, quejas, reclamos, consultas, sugerencias y felicitaciones presentadas por los Titulares.",
          "Gestionar la seguridad de las instalaciones, los bienes y las personas, incluyendo la operación de los sistemas de videovigilancia.",
        ],
      },
      { k: "h3", t: "10.3. Finalidades comerciales y de mercadeo" },
      {
        k: "ul",
        items: [
          "Realizar la gestión comercial de captación, fidelización y retención de clientes, estudiantes y empresas clientes.",
          "Enviar comunicaciones promocionales, informativas, publicitarias y comerciales sobre los productos y servicios de EDUCATE LEARNING CENTER S.A.S., así como sobre los de sus aliados estratégicos cuando ello esté expresamente autorizado.",
          "Adelantar estudios de mercado, satisfacción, percepción y demás investigaciones que permitan mejorar la oferta institucional, previa anonimización siempre que sea posible.",
          "Administrar programas de referidos, lealtad, descuentos, becas y promociones.",
          "Realizar la prospección comercial y el contacto con leads, manifestantes de interés y antiguos clientes.",
        ],
      },
      { k: "h3", t: "10.4. Finalidades laborales y contractuales" },
      {
        k: "ul",
        items: [
          "Adelantar procesos de selección, contratación, vinculación, ejecución y terminación de relaciones laborales y contractuales.",
          "Administrar la nómina, prestaciones sociales, vacaciones, novedades y desempeño del personal vinculado.",
          "Cumplir con las obligaciones derivadas de la seguridad social integral y la seguridad y salud en el trabajo.",
          "Adelantar procesos disciplinarios laborales y aplicar el reglamento interno de trabajo cuando ello corresponda.",
          "Suministrar referencias, expedir constancias y certificaciones a empleados activos y retirados.",
        ],
      },
      { k: "h3", t: "10.5. Finalidades de cumplimiento normativo" },
      {
        k: "ul",
        items: [
          "Cumplir con la normatividad vigente en Colombia, incluyendo las obligaciones tributarias, contables, laborales, fiscales, comerciales, de protección al consumidor, de seguridad social, de seguridad y salud en el trabajo y de protección de datos personales.",
          "Atender requerimientos, órdenes y solicitudes de autoridades administrativas, judiciales, policivas, de control y de vigilancia.",
          "Implementar políticas, controles y procedimientos antifraude, antilavado de activos y antifinanciación del terrorismo en los términos exigidos por la regulación.",
        ],
      },
      { k: "h3", t: "10.6. Finalidades de mejora y aseguramiento de la calidad" },
      {
        k: "ul",
        items: [
          "Adelantar auditorías internas y externas a los procesos académicos, administrativos, comerciales y tecnológicos.",
          "Implementar acciones de mejora, retroalimentación y aprendizaje organizacional.",
          "Realizar evaluaciones de impacto a la privacidad, análisis de riesgos y gestión de incidentes.",
        ],
      },
      { k: "h3", t: "10.7. Finalidades de seguridad" },
      {
        k: "ul",
        items: [
          "Garantizar la seguridad de los Titulares, las instalaciones, los bienes y la información administrada por EDUCATE LEARNING CENTER S.A.S.",
          "Operar los sistemas de videovigilancia, controles de acceso y demás mecanismos de protección física y lógica.",
          "Prevenir, detectar y atender incidentes de seguridad que afecten Datos Personales.",
        ],
      },
      { k: "h3", t: "10.8. Finalidades tecnológicas" },
      {
        k: "ul",
        items: [
          "Operar, administrar y mantener los sistemas de información, plataformas tecnológicas, aplicaciones móviles, aulas virtuales, LMS y demás herramientas digitales.",
          "Realizar respaldos (backups), restauraciones, migraciones y actualizaciones de los sistemas que almacenan Datos Personales.",
          "Implementar herramientas de analítica educativa, métricas de aprendizaje y, eventualmente, herramientas de inteligencia artificial aplicadas a la educación, con las salvaguardas previstas en el Capítulo 18.",
        ],
      },
    ],
  },
  {
    id: "cap-11",
    n: "11",
    title: "Finalidades por Categoría de Titular",
    body: [
      {
        k: "p",
        t: "En desarrollo de las finalidades generales previstas en el Capítulo anterior, EDUCATE LEARNING CENTER S.A.S. realiza el Tratamiento de Datos Personales de cada categoría de Titular para las finalidades específicas que se detallan a continuación:",
      },
      { k: "h3", t: "11.1. Estudiantes" },
      {
        k: "ul",
        items: [
          "Adelantar el proceso de admisión, inscripción, matrícula y clasificación en los programas y cursos.",
          "Aplicar pruebas diagnósticas, exámenes de clasificación y evaluaciones de seguimiento.",
          "Asignar grupos, horarios, docentes, salones físicos o virtuales.",
          "Programar y desarrollar las actividades académicas, las prácticas, las evaluaciones y las certificaciones.",
          "Registrar la asistencia, la participación, las calificaciones y demás aspectos del desempeño académico.",
          "Habilitar el acceso a plataformas educativas, aulas virtuales, herramientas digitales y LMS.",
          "Emitir constancias, certificaciones, diplomas y reconocimientos.",
          "Realizar comunicaciones académicas, administrativas y de servicio relacionadas con el programa o curso en el que se encuentre inscrito.",
          "Atender solicitudes, peticiones, quejas, reclamos y sugerencias formuladas por el estudiante o por su representante legal cuando sea menor de edad.",
          "Conservar el historial académico y la información necesaria para futuras certificaciones, conforme a la política de retención.",
        ],
      },
      { k: "h3", t: "11.2. Padres de familia y representantes legales" },
      {
        k: "ul",
        items: [
          "Establecer la relación contractual con la institución para la prestación de los servicios al menor representado.",
          "Realizar el cobro, la facturación electrónica y la gestión de cartera asociada a los servicios.",
          "Comunicar información académica, comportamental, disciplinaria, administrativa y de servicio relacionada con el menor.",
          "Coordinar el ingreso, salida, transporte (cuando aplique) y participación del menor en actividades extracurriculares, salidas pedagógicas, campamentos e intercambios.",
          "Recibir y gestionar autorizaciones específicas (uso de imagen, salidas, transporte, atención médica de urgencia).",
          "Atender solicitudes, peticiones, quejas, reclamos y sugerencias formuladas por el padre o representante legal.",
          "Recibir información comercial y promocional sobre nuevos programas y servicios, previa autorización.",
        ],
      },
      { k: "h3", t: "11.3. Participantes de Summer Camp, campamentos e intercambios" },
      {
        k: "ul",
        items: [
          "Adelantar la inscripción, registro y verificación de requisitos para la participación en el programa.",
          "Recolectar y administrar la información médica, alergias, restricciones alimenticias, medicamentos y demás datos sensibles necesarios para garantizar el bienestar del participante durante la actividad.",
          "Coordinar la logística operativa: transporte (cuando aplique, con empresas externas debidamente autorizadas), alimentación (con empresas externas debidamente autorizadas), alojamiento, actividades recreativas, salidas pedagógicas y atención de emergencias.",
          "Compartir datos estrictamente necesarios con instituciones, organizaciones, aliados nacionales o extranjeros y proveedores logísticos para la ejecución del programa.",
          "Mantener comunicación permanente con los padres o representantes legales durante el desarrollo del programa.",
          "Atender emergencias médicas, accidentes y situaciones de riesgo conforme a los protocolos institucionales.",
          "Cumplir con los requisitos migratorios, sanitarios, de seguros y demás exigencias en el caso de intercambios internacionales.",
        ],
      },
      { k: "h3", t: "11.4. Empleados, docentes y contratistas" },
      {
        k: "ul",
        items: [
          "Adelantar los procesos de selección, vinculación, ejecución, evaluación y terminación de la relación laboral o contractual.",
          "Cumplir con las obligaciones legales y reglamentarias derivadas del contrato de trabajo o de prestación de servicios.",
          "Realizar la afiliación y los reportes ante el Sistema General de Seguridad Social.",
          "Administrar la nómina, los pagos de honorarios, las prestaciones sociales, las vacaciones, las incapacidades, las licencias y demás novedades.",
          "Adelantar programas de capacitación, formación, bienestar, salud ocupacional y seguridad y salud en el trabajo.",
          "Realizar evaluaciones de desempeño y procesos disciplinarios laborales.",
          "Suministrar referencias laborales y certificaciones a quienes hayan estado vinculados con la institución.",
          "Atender requerimientos de autoridades laborales, judiciales y administrativas.",
        ],
      },
      { k: "h3", t: "11.5. Aspirantes laborales" },
      {
        k: "ul",
        items: [
          "Recibir, registrar y evaluar hojas de vida y postulaciones.",
          "Adelantar procesos de selección, incluyendo entrevistas, pruebas técnicas, psicotécnicas, exámenes médicos y verificaciones.",
          "Verificar referencias laborales, académicas y personales suministradas por el aspirante.",
          "Contactar al aspirante para informar sobre el estado del proceso y eventuales vacantes futuras, previa autorización.",
          "Conservar la información del aspirante por el término señalado en la política de retención (un (1) año, salvo nueva autorización).",
        ],
      },
      { k: "h3", t: "11.6. Proveedores y aliados estratégicos" },
      {
        k: "ul",
        items: [
          "Adelantar los procesos de evaluación, selección, contratación, ejecución y liquidación de contratos con proveedores y aliados.",
          "Realizar pagos, conciliaciones y cumplir con las obligaciones tributarias y comerciales.",
          "Verificar el cumplimiento de las obligaciones contractuales, legales y de protección de datos personales por parte del proveedor.",
          "Mantener comunicación operativa, comercial y contractual.",
          "Adelantar auditorías y procesos de verificación de cumplimiento.",
        ],
      },
      { k: "h3", t: "11.7. Clientes y empresas clientes" },
      {
        k: "ul",
        items: [
          "Formalizar la relación contractual y los términos del servicio.",
          "Realizar la facturación, el cobro y la gestión de cartera.",
          "Coordinar la prestación de los servicios contratados, en particular los cursos corporativos.",
          "Enviar comunicaciones de servicio, satisfacción, renovación y nuevas ofertas, previa autorización.",
          "Atender solicitudes, peticiones, quejas, reclamos y sugerencias.",
        ],
      },
      { k: "h3", t: "11.8. Visitantes y usuarios de plataformas digitales" },
      {
        k: "ul",
        items: [
          "Garantizar la seguridad de las personas, los bienes y las instalaciones de EDUCATE LEARNING CENTER S.A.S.",
          "Llevar control de acceso a las instalaciones.",
          "Habilitar el uso de las plataformas digitales, sitios web y aplicaciones móviles.",
          "Personalizar y mejorar la experiencia de usuario, en los términos de la política específica de cookies y de las autorizaciones otorgadas.",
          "Realizar analítica web, mejoramiento del servicio y prevención de fraudes y abusos.",
        ],
      },
    ],
  },
  {
    id: "cap-12",
    n: "12",
    title: "Gestión Académica",
    body: [
      {
        k: "p",
        t: "La gestión académica constituye el eje misional de EDUCATE LEARNING CENTER S.A.S. y, en consecuencia, el Tratamiento de Datos Personales asociado a esta gestión se realiza bajo estrictos criterios de finalidad pedagógica, proporcionalidad, calidad de la información y respeto a los derechos del Titular.",
      },
      { k: "h3", t: "12.1. Recolección de información académica" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. recolecta información académica del estudiante a través de los siguientes mecanismos:",
      },
      {
        k: "ul",
        items: [
          "Formularios de inscripción y matrícula (físicos o digitales).",
          "Pruebas diagnósticas y de clasificación (placement tests) aplicadas presencial o virtualmente.",
          "Plataformas educativas y aulas virtuales en las que el estudiante desarrolla actividades académicas.",
          "Información suministrada por el docente o el área académica en relación con la asistencia, participación y desempeño.",
          "Documentos académicos suministrados por el estudiante o su representante legal.",
        ],
      },
      { k: "h3", t: "12.2. Uso de la información académica" },
      {
        k: "p",
        t: "La información académica es utilizada por EDUCATE LEARNING CENTER S.A.S. para los siguientes fines:",
      },
      {
        k: "ul",
        items: [
          "Definir el nivel inicial del estudiante y planificar su ruta de aprendizaje.",
          "Programar grupos, horarios y docentes asignados.",
          "Aplicar evaluaciones formativas y sumativas y comunicar los resultados.",
          "Generar reportes académicos para el estudiante y, en el caso de menores, para sus padres o representantes legales.",
          "Expedir certificaciones, constancias y diplomas.",
          "Recomendar la continuidad en el programa o el cambio de nivel.",
          "Realizar acciones de retroalimentación, retroalimentación pedagógica y refuerzo académico.",
        ],
      },
      { k: "h3", t: "12.3. Acceso a la información académica" },
      {
        k: "p",
        t: "Solo tendrán acceso a la información académica del estudiante: (i) el propio estudiante, cuando sea mayor de edad; (ii) los padres o representantes legales del estudiante menor de edad; (iii) el personal docente y administrativo de EDUCATE LEARNING CENTER S.A.S. que requiera la información para el ejercicio de sus funciones; (iv) los Encargados del Tratamiento contratados para soportar la gestión académica, en los términos del respectivo contrato; (v) las autoridades competentes en los casos previstos por la ley.",
      },
      { k: "h3", t: "12.4. Conservación de la información académica" },
      {
        k: "p",
        t: "La información académica se conservará durante el tiempo en que el estudiante mantenga vínculo activo con la institución y, una vez terminado dicho vínculo, por un período de diez (10) años para efectos de la expedición de certificaciones, atención de requerimientos de autoridades y trazabilidad académica, conforme a la política de retención del Capítulo 34.",
      },
    ],
  },
  {
    id: "cap-13",
    n: "13",
    title: "Gestión Administrativa",
    body: [
      {
        k: "p",
        t: "La gestión administrativa de EDUCATE LEARNING CENTER S.A.S. comprende el conjunto de actividades de soporte que permiten el funcionamiento institucional, incluida la facturación, la gestión documental, la atención al usuario, la seguridad y la administración general.",
      },
      { k: "h3", t: "13.1. Facturación electrónica" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. expide factura electrónica en cumplimiento de las disposiciones de la Dirección de Impuestos y Aduanas Nacionales (DIAN). Para tal efecto, recolecta y trata los datos necesarios del adquirente del servicio (estudiante mayor de edad, padre de familia, representante legal o empresa cliente), incluyendo nombres, documento, dirección, correo electrónico, responsabilidad tributaria y demás datos exigidos por la normativa fiscal vigente.",
      },
      {
        k: "p",
        t: "Los datos suministrados para efectos de facturación electrónica serán tratados por EDUCATE LEARNING CENTER S.A.S. directamente y por los proveedores tecnológicos de facturación electrónica con los que la institución mantenga vínculos contractuales en calidad de Encargados, los cuales cumplen con las exigencias normativas en materia de seguridad y protección de datos.",
      },
      { k: "h3", t: "13.2. Gestión documental" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. mantiene un sistema de gestión documental físico y digital que garantiza la trazabilidad, integridad, confidencialidad y disponibilidad de los Datos Personales tratados. Los archivos físicos se conservan en espacios restringidos con controles de acceso, y los archivos digitales se almacenan en sistemas con medidas de cifrado, copias de seguridad y restricciones de acceso por rol.",
      },
      { k: "h3", t: "13.3. Atención al usuario" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. cuenta con canales habilitados para la atención de los Titulares, incluyendo el correo electrónico educatelearningcentersas@gmail.com, el teléfono 311 716 3442 y la atención presencial en sus instalaciones. Las consultas, peticiones, quejas y reclamos se atienden en los términos previstos en los Capítulos 28 y 29 de la presente Política.",
      },
      { k: "h3", t: "13.4. Pagos electrónicos" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. puede recibir pagos a través de pasarelas y plataformas de pago electrónico, incluidos sin limitarse a, PSE y Aval Pay Center. La información financiera asociada a los medios de pago no es almacenada por la institución, sino que es procesada directamente por las entidades autorizadas para tal efecto, las cuales operan en su calidad de Responsables independientes o de Encargados, según corresponda, bajo los estándares de seguridad PCI DSS u homologables.",
      },
    ],
  },
  {
    id: "cap-14",
    n: "14",
    title: "Gestión Comercial",
    body: [
      {
        k: "p",
        t: "La gestión comercial de EDUCATE LEARNING CENTER S.A.S. comprende las actividades de captación, fidelización, comunicación y mercadeo orientadas a la promoción y comercialización de los servicios educativos. Esta gestión se realiza con estricta observancia del régimen general de protección de datos personales y, en particular, del régimen de Habeas Data Comercial cuando ello sea aplicable.",
      },
      { k: "h3", t: "14.1. Recolección de datos con fines comerciales" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. recolecta datos de personas naturales con fines comerciales a través de formularios web, redes sociales, ferias educativas, eventos institucionales, referidos, contacto telefónico, alianzas estratégicas con instituciones educativas y demás canales habilitados al efecto. En todos los casos se informará al Titular acerca de la finalidad comercial del Tratamiento y se solicitará la autorización correspondiente.",
      },
      { k: "h3", t: "14.2. Comunicaciones comerciales" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá enviar a los Titulares que hayan otorgado autorización expresa, comunicaciones comerciales, publicitarias, promocionales e informativas sobre nuevos cursos, programas, descuentos, eventos, campamentos, intercambios y demás actividades. Las comunicaciones se enviarán por los canales autorizados (correo electrónico, mensajes de texto, WhatsApp, llamadas, notificaciones push, redes sociales) y siempre incluirán un mecanismo claro y accesible para que el Titular revoque su consentimiento o solicite no recibir más comunicaciones.",
      },
      { k: "h3", t: "14.3. Programas de fidelización, referidos y descuentos" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá implementar programas de fidelización, referidos, descuentos, becas y promociones, en cuyo marco realizará Tratamiento de Datos Personales con la finalidad de administrar los beneficios otorgados y comunicarlos a los Titulares.",
      },
      { k: "h3", t: "14.4. Estudios de mercado, satisfacción y mejora" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá realizar estudios de mercado, encuestas de satisfacción, focus groups y análisis estadísticos con la finalidad de mejorar la calidad de los servicios, identificar oportunidades de innovación y atender de mejor manera las necesidades de los Titulares. Cuando ello sea técnicamente posible, los estudios se realizarán con información anonimizada o agregada.",
      },
      { k: "h3", t: "14.5. Conservación de datos comerciales" },
      {
        k: "p",
        t: "Los Datos Personales de prospectos comerciales se conservarán por un período máximo de dos (2) años contados a partir del último contacto efectivo, salvo nueva autorización del Titular. Los Datos Personales de clientes activos se conservarán durante toda la relación comercial y por los términos legales aplicables una vez finalizada esta.",
      },
    ],
  },
  {
    id: "cap-15",
    n: "15",
    title: "Gestión Laboral",
    body: [
      {
        k: "p",
        t: "La gestión laboral de EDUCATE LEARNING CENTER S.A.S. comprende el conjunto de actividades de Tratamiento de Datos Personales necesarias para la administración del talento humano vinculado a la institución, incluyendo procesos de selección, vinculación, ejecución, evaluación y terminación de la relación laboral o contractual.",
      },
      { k: "h3", t: "15.1. Procesos de selección" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. recolecta hojas de vida y datos personales de aspirantes laborales a través de los canales habilitados (correo institucional, formularios, portales de empleo, referidos). Los Datos Personales del aspirante serán tratados exclusivamente para los fines del proceso de selección y, previa autorización expresa, podrán conservarse para futuros procesos por un término no superior a un (1) año.",
      },
      {
        k: "p",
        t: "Durante el proceso de selección, EDUCATE LEARNING CENTER S.A.S. podrá verificar la información suministrada por el aspirante mediante la consulta de referencias laborales, académicas y personales, así como mediante la realización de exámenes, pruebas técnicas y psicotécnicas y la verificación de antecedentes disciplinarios, judiciales y fiscales en bases públicas, en los términos de la autorización otorgada y de manera proporcional al cargo al que se aspira.",
      },
      { k: "h3", t: "15.2. Vinculación y ejecución del contrato" },
      {
        k: "p",
        t: "Una vez seleccionado el candidato, EDUCATE LEARNING CENTER S.A.S. recolectará los datos adicionales necesarios para formalizar la vinculación, incluidos los datos de identificación complementarios, datos bancarios, información de seguridad social, beneficiarios y demás exigidos por la normatividad laboral, fiscal y de seguridad social.",
      },
      {
        k: "p",
        t: "Durante la ejecución del contrato, EDUCATE LEARNING CENTER S.A.S. realizará Tratamiento sobre los datos relacionados con la nómina, la asistencia, el desempeño, las novedades de seguridad social, las capacitaciones, las evaluaciones, las incapacidades y las licencias del trabajador o contratista.",
      },
      { k: "h3", t: "15.3. Salud y seguridad en el trabajo" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. realiza Tratamiento de datos relacionados con la salud de los empleados en el marco del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), incluyendo exámenes médicos ocupacionales, accidentes de trabajo, enfermedades laborales, incapacidades, recomendaciones médicas y demás aspectos asociados, con estricta observancia de las salvaguardas reforzadas previstas para los Datos Sensibles.",
      },
      { k: "h3", t: "15.4. Terminación de la relación" },
      {
        k: "p",
        t: "A la terminación de la relación laboral o contractual, EDUCATE LEARNING CENTER S.A.S. conservará los Datos Personales del trabajador o contratista por los términos legales aplicables (diez (10) años, según los términos de la legislación laboral y comercial, sin perjuicio de plazos especiales) con la finalidad de atender requerimientos de autoridades, expedir certificaciones, atender procesos judiciales o administrativos y cumplir con las obligaciones legales subsistentes.",
      },
    ],
  },
  {
    id: "cap-16",
    n: "16",
    title: "Capítulo Especial: Summer Camp",
    body: [
      {
        k: "p",
        t: "En atención a la naturaleza especial del programa Summer Camp ofrecido por EDUCATE LEARNING CENTER S.A.S. y a la condición de sujetos de especial protección constitucional de los menores de edad que participan en este, se establece un capítulo específico dedicado al Tratamiento de los Datos Personales asociados a este programa.",
      },
      { k: "h3", t: "16.1. Participantes" },
      {
        k: "p",
        t: "El programa Summer Camp está dirigido a menores de edad entre los cuatro (4) y los diecisiete (17) años de edad, sin perjuicio de que la institución pueda definir, en cada edición, rangos etarios específicos por grupo, actividad o programa. La participación del menor está sujeta a la autorización expresa, previa, libre e informada del padre de familia o representante legal, otorgada conforme a los protocolos institucionales.",
      },
      { k: "h3", t: "16.2. Información recolectada" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. recolecta del padre o representante legal del menor, con la única finalidad de garantizar el bienestar, la seguridad y la adecuada atención durante el desarrollo del programa, la siguiente información:",
      },
      {
        k: "ul",
        items: [
          "Datos de identificación del menor (nombre, edad, documento de identidad, fecha de nacimiento).",
          "Datos de identificación del padre o representante legal.",
          "Información médica del menor: alergias (medicamentos, alimentos, picaduras, entre otras), condiciones médicas relevantes (diabetes, asma, epilepsia, cardiopatías, entre otras), tratamientos en curso y medicamentos de uso permanente o esporádico.",
          "Restricciones alimenticias por motivos de salud, religión o convicción.",
          "Información sobre discapacidades, condiciones especiales y requerimientos de apoyo.",
          "Datos de contactos de emergencia (mínimo dos contactos).",
          "Información sobre el médico tratante y EPS.",
          "Autorizaciones específicas: para atención médica de urgencia, para administración de medicamentos, para participación en salidas pedagógicas y actividades recreativas, para uso del transporte (cuando aplique), entre otras.",
          "Autorización de uso de imagen, en documento independiente a la matrícula (ver Capítulo 27).",
        ],
      },
      { k: "h3", t: "16.3. Transporte" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. puede ofrecer, como servicio opcional, el transporte de los menores hacia y desde las sedes del Summer Camp y los lugares en los que se desarrollen actividades. Dicho transporte podrá ser prestado por empresas externas con las que la institución mantenga convenios, las cuales actuarán en calidad de Encargados del Tratamiento o, según el caso, de Responsables independientes. En cualquier caso, EDUCATE LEARNING CENTER S.A.S. exigirá a las empresas de transporte:",
      },
      {
        k: "ul",
        items: [
          "Suscribir cláusulas de confidencialidad y protección de datos.",
          "Implementar medidas de seguridad para el manejo de los datos compartidos.",
          "Limitar el uso de los datos a las finalidades estrictamente operativas del servicio.",
          "Cumplir con la normativa de transporte escolar y especial.",
        ],
      },
      { k: "h3", t: "16.4. Alimentación" },
      {
        k: "p",
        t: "Durante el Summer Camp, EDUCATE LEARNING CENTER S.A.S. puede contratar empresas externas de alimentación para garantizar la prestación del servicio. Las restricciones alimenticias y alergias informadas por el padre o representante legal serán comunicadas a estas empresas estrictamente para garantizar la seguridad del menor, bajo cláusulas contractuales que aseguren la confidencialidad y el adecuado manejo de los datos.",
      },
      { k: "h3", t: "16.5. Salidas pedagógicas y actividades recreativas" },
      {
        k: "p",
        t: "Las salidas pedagógicas, actividades recreativas, deportivas, culturales y demás integradas al programa Summer Camp requieren la autorización escrita expresa del padre o representante legal del menor. Dicha autorización contendrá la información sobre la actividad, el lugar, la hora, los responsables, los medios de transporte y los protocolos de seguridad.",
      },
      { k: "h3", t: "16.6. Atención de emergencias" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. cuenta con protocolos específicos para la atención de emergencias médicas, accidentes y situaciones de riesgo durante el Summer Camp. En desarrollo de estos protocolos, la institución podrá:",
      },
      {
        k: "ul",
        items: [
          "Activar los servicios de emergencia médica (118, EPS, ambulancia).",
          "Trasladar al menor a centros asistenciales.",
          "Comunicar de inmediato la situación al padre o representante legal y a los contactos de emergencia.",
          "Compartir con el personal médico los datos relevantes del menor (alergias, medicamentos, condiciones).",
          "Adelantar las gestiones necesarias para la atención integral del menor.",
        ],
      },
      { k: "h3", t: "16.7. Confidencialidad reforzada" },
      {
        k: "p",
        t: "Toda la información personal y sensible de los menores participantes del Summer Camp es objeto de un régimen reforzado de confidencialidad. Solamente accederán a esta información el personal estrictamente necesario para el desarrollo del programa y bajo expresos compromisos de confidencialidad.",
      },
      { k: "h3", t: "16.8. Conservación" },
      {
        k: "p",
        t: "La información del Summer Camp se conservará durante el desarrollo del programa y, una vez finalizado, por los plazos previstos en la política de retención. La información médica sensible se suprimirá una vez cumpla su finalidad, salvo aquella que deba conservarse por exigencia legal o contractual.",
      },
    ],
  },
  {
    id: "cap-17",
    n: "17",
    title: "Intercambios Nacionales e Internacionales",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. organiza, ofrece y/o promueve programas de intercambio académico, cultural y lingüístico, nacionales e internacionales. Dada la naturaleza de estos programas, que implican la circulación de Datos Personales hacia terceros, autoridades migratorias, instituciones extranjeras y aliados estratégicos, el Tratamiento de Datos Personales asociado a los intercambios se sujeta a las siguientes reglas especiales.",
      },
      { k: "h3", t: "17.1. Información recolectada" },
      {
        k: "p",
        t: "Para la inscripción y desarrollo de los programas de intercambio, EDUCATE LEARNING CENTER S.A.S. podrá recolectar y tratar la siguiente información:",
      },
      {
        k: "ul",
        items: [
          "Datos de identificación del participante (nombre, documento, pasaporte, visa, fecha de nacimiento).",
          "Información académica y nivel de inglés.",
          "Información de los padres o representantes legales (cuando el participante sea menor de edad).",
          "Información médica relevante para el intercambio (alergias, condiciones, medicamentos, vacunas).",
          "Información de seguros de viaje, asistencia médica internacional y demás coberturas.",
          "Información migratoria, consular y de visados.",
          "Datos de contactos de emergencia.",
          "Autorizaciones específicas para el intercambio (salidas, transporte, atención médica, uso de imagen).",
        ],
      },
      { k: "h3", t: "17.2. Compartición de datos con terceros" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá compartir los Datos Personales del participante con las instituciones educativas receptoras (nacionales o extranjeras), organizaciones organizadoras del intercambio, aliados estratégicos, autoridades migratorias, consulados, aerolíneas, empresas de transporte terrestre, empresas de alojamiento, familias anfitrionas (cuando aplique), proveedores de seguros y autoridades competentes, en cuanto ello sea estrictamente necesario para la ejecución del programa.",
      },
      { k: "h3", t: "17.3. Transferencias y transmisiones internacionales" },
      {
        k: "p",
        t: "Las transferencias y transmisiones internacionales de datos personales asociadas a los programas de intercambio se rigen por el Capítulo 21 de la presente Política y por las salvaguardas allí previstas, incluida la verificación del nivel adecuado de protección en el país de destino o, en su defecto, la suscripción de cláusulas contractuales que garanticen el cumplimiento de los estándares mínimos exigidos por la normativa colombiana.",
      },
      { k: "h3", t: "17.4. Autorización reforzada" },
      {
        k: "p",
        t: "Dado el carácter sensible de la información médica y la condición de menores de edad de muchos participantes, EDUCATE LEARNING CENTER S.A.S. exige autorización expresa, escrita e informada del titular o de su representante legal para realizar las transferencias y transmisiones internacionales asociadas al intercambio, indicando los destinos, finalidades y categorías de datos involucrados.",
      },
      { k: "h3", t: "17.5. Conservación" },
      {
        k: "p",
        t: "La información asociada a los programas de intercambio se conservará por los plazos previstos en la política de retención y por los plazos exigidos por las autoridades migratorias, consulares y educativas competentes en los países de origen y destino.",
      },
    ],
  },
  {
    id: "cap-18",
    n: "18",
    title: "Plataformas Tecnológicas, LMS e Inteligencia Artificial Aplicada a la Educación",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. utiliza y, en el futuro, podrá utilizar diversas plataformas tecnológicas para la prestación de sus servicios educativos. El presente Capítulo regula, de manera preventiva y prospectiva, el Tratamiento de Datos Personales asociado a dichas plataformas, con el propósito de que la Política permanezca vigente ante la evolución tecnológica sin necesidad de modificaciones constantes.",
      },
      { k: "h3", t: "18.1. Plataformas actualmente utilizadas" },
      {
        k: "p",
        t: "A la fecha de expedición de la presente Política, EDUCATE LEARNING CENTER S.A.S. utiliza, entre otras herramientas, Google Meet (en su versión institucional o gratuita) para el desarrollo de clases virtuales, reuniones, tutorías y demás actividades sincrónicas. Dicha herramienta es operada por Google LLC, sociedad domiciliada en los Estados Unidos de América, y su Tratamiento de Datos Personales se rige adicionalmente por las políticas de privacidad de dicho proveedor, las cuales se encuentran disponibles en sus canales oficiales.",
      },
      { k: "h3", t: "18.2. Plataformas y tecnologías futuras" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. anticipa la adopción progresiva de las siguientes tecnologías:",
      },
      {
        k: "ul",
        items: [
          "Sistemas de Gestión del Aprendizaje (LMS) institucionales o de terceros.",
          "Sistemas académicos para la administración de matrículas, calificaciones, certificaciones y reportes.",
          "Sistemas de evaluación, pruebas en línea y simuladores.",
          "Aplicaciones móviles institucionales.",
          "Plataformas educativas de terceros (proveedores de contenido y de práctica).",
          "Herramientas de analítica educativa (learning analytics).",
          "Herramientas de inteligencia artificial aplicadas a la educación (corrección automática, retroalimentación inteligente, tutores virtuales, asistentes conversacionales, sistemas de recomendación de contenidos, traducción automática, evaluación del progreso, entre otros).",
        ],
      },
      { k: "h3", t: "18.3. Cláusulas preventivas para tecnologías emergentes" },
      {
        k: "p",
        t: "Toda nueva tecnología que EDUCATE LEARNING CENTER S.A.S. incorpore en sus procesos educativos deberá ajustarse a los siguientes criterios:",
      },
      {
        k: "ul",
        items: [
          "Realización previa de un análisis de impacto a la privacidad cuando la tecnología implique tratamiento sistemático, masivo o sensible de datos personales.",
          "Selección de proveedores que ofrezcan garantías adecuadas en materia de seguridad y protección de datos, evidenciadas mediante certificaciones, contratos y cláusulas específicas.",
          "Suscripción de Contratos de Transmisión de Datos Personales con los proveedores que actúen en calidad de Encargados.",
          "Aplicación de los principios de minimización, finalidad, proporcionalidad y privacidad desde el diseño y por defecto.",
          "Información clara, comprensible y oportuna a los Titulares sobre la incorporación de la nueva tecnología, las finalidades y los riesgos asociados.",
          "Obtención de autorización específica cuando la tecnología implique tratamiento de Datos Sensibles, biométricos, decisiones automatizadas con efectos significativos para el Titular o transferencias internacionales no cubiertas por las autorizaciones existentes.",
        ],
      },
      { k: "h3", t: "18.4. Inteligencia artificial aplicada a la educación" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. reconoce el potencial pedagógico de las herramientas de inteligencia artificial, así como los riesgos específicos que estas herramientas pueden representar para los derechos de los Titulares. En consecuencia, el uso de inteligencia artificial en los procesos educativos de la institución se sujetará a los siguientes principios complementarios:",
      },
      {
        k: "ul",
        items: [
          "Supervisión humana significativa de las decisiones que afecten al estudiante o al usuario.",
          "Transparencia respecto del uso de herramientas de inteligencia artificial, incluida la información sobre su funcionalidad general, las decisiones que apoya y los efectos en el proceso educativo.",
          "Garantía del derecho del Titular a oponerse a decisiones automatizadas con efectos jurídicos o significativos y a solicitar revisión humana.",
          "No utilización de los datos de los menores para entrenamiento de modelos generales de terceros sin autorización expresa y específica.",
          "Evaluación periódica de sesgos, riesgos y resultados de los sistemas.",
          "Adopción de medidas técnicas y organizativas para evitar discriminaciones, errores sistemáticos o afectaciones injustificadas a los Titulares.",
        ],
      },
      { k: "h3", t: "18.5. Cookies y tecnologías de seguimiento" },
      {
        k: "p",
        t: "Los sitios web, aplicaciones y plataformas digitales de EDUCATE LEARNING CENTER S.A.S. podrán utilizar cookies, píxeles, identificadores y tecnologías similares con finalidades técnicas, analíticas, de personalización y, previa autorización del usuario, publicitarias. La institución mantendrá disponible una Política específica de Cookies que detalle el tipo, la finalidad, la duración y los mecanismos para administrar las preferencias.",
      },
    ],
  },
  {
    id: "cap-19",
    n: "19",
    title: "Videovigilancia",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. cuenta con un sistema de videovigilancia instalado en sus instalaciones físicas, cuya operación se rige por las disposiciones de la Ley 1581 de 2012, los lineamientos de la Superintendencia de Industria y Comercio en materia de cámaras de videovigilancia y las disposiciones de la presente Política.",
      },
      { k: "h3", t: "19.1. Finalidades" },
      {
        k: "p",
        t: "El sistema de videovigilancia de EDUCATE LEARNING CENTER S.A.S. tiene las siguientes finalidades:",
      },
      {
        k: "ul",
        items: [
          "Garantizar la seguridad de los Titulares (estudiantes, padres de familia, empleados, contratistas, proveedores, visitantes) que ingresan a las instalaciones.",
          "Proteger los bienes muebles e inmuebles de la institución y los de los Titulares mientras se encuentran al interior de las instalaciones.",
          "Prevenir, detectar y, en su caso, registrar conductas que puedan constituir riesgos para la seguridad personal o patrimonial.",
          "Servir como medio probatorio en eventuales procesos administrativos, disciplinarios, civiles, laborales o penales.",
          "Atender requerimientos de autoridades competentes en los casos previstos por la ley.",
        ],
      },
      { k: "h3", t: "19.2. Características técnicas" },
      {
        k: "p",
        t: "El sistema de videovigilancia de EDUCATE LEARNING CENTER S.A.S. presenta las siguientes características:",
      },
      {
        k: "ul",
        items: [
          "Las cámaras únicamente captan imágenes en formato de video. No graban ni registran audio bajo ninguna circunstancia.",
          "Las cámaras se encuentran ubicadas en accesos, recepción y espacios comunes de las instalaciones.",
          "No se instalan cámaras en espacios privados, baños, vestuarios, lactarios o cualquier otro lugar donde exista expectativa razonable de privacidad.",
          "Las cámaras cuentan con sistemas de almacenamiento local y/o en la nube, conforme a los estándares de seguridad institucional.",
        ],
      },
      { k: "h3", t: "19.3. Información al Titular" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. informa, mediante avisos visibles colocados en los accesos y áreas vigiladas, sobre la existencia del sistema de videovigilancia, la finalidad de la captación y el canal a través del cual el Titular puede ejercer sus derechos. La inscripción al programa, el ingreso a las instalaciones o la permanencia en las áreas vigiladas conllevará el conocimiento del sistema y la presunción de no oposición, sin perjuicio del derecho del Titular a presentar consultas o reclamos.",
      },
      { k: "h3", t: "19.4. Acceso a las imágenes" },
      {
        k: "p",
        t: "El acceso a las imágenes captadas por el sistema de videovigilancia se restringe a las personas expresamente autorizadas por EDUCATE LEARNING CENTER S.A.S. (representante legal, Director Administrativo, personal de seguridad designado) y a las autoridades competentes en los casos previstos por la ley. Toda consulta o entrega de imágenes a terceros se documentará en bitácora indicando la fecha, hora, motivo, autoridad o tercero y responsable.",
      },
      { k: "h3", t: "19.5. Conservación de las imágenes" },
      {
        k: "p",
        t: "Las imágenes captadas por el sistema de videovigilancia se conservarán por un período comprendido entre treinta (30) y noventa (90) días contados a partir de su captación, salvo que deban conservarse por más tiempo en virtud de requerimiento de autoridad competente, investigación en curso o necesidad probatoria. Una vez vencido el plazo de conservación, las imágenes serán suprimidas mediante mecanismos seguros que impidan su recuperación.",
      },
      { k: "h3", t: "19.6. Derechos del Titular respecto de las imágenes" },
      {
        k: "p",
        t: "Sin perjuicio de las restricciones derivadas de la finalidad de seguridad y de la protección de los derechos de terceros, el Titular podrá presentar solicitudes para conocer si su imagen ha sido captada, los términos del Tratamiento y, cuando ello sea procedente, solicitar la supresión o el acceso a las imágenes. Las solicitudes se atenderán por los canales y en los plazos previstos en los Capítulos 28 y 29 de la presente Política.",
      },
    ],
  },
  {
    id: "cap-20",
    n: "20",
    title: "Transferencias Nacionales",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá realizar Transferencias nacionales de Datos Personales a terceros ubicados en el territorio colombiano cuando ello sea necesario para el cumplimiento de las finalidades autorizadas o para el cumplimiento de obligaciones legales o contractuales.",
      },
      { k: "h3", t: "20.1. Destinatarios potenciales" },
      {
        k: "p",
        t: "Los destinatarios potenciales de Transferencias nacionales incluyen, entre otros:",
      },
      {
        k: "ul",
        items: [
          "Proveedores tecnológicos nacionales, como pasarelas de pago electrónico (PSE, Aval Pay Center) y plataformas de facturación electrónica.",
          "Empresas de transporte que prestan servicios para los programas educativos y campamentos.",
          "Empresas de alimentación contratadas para Summer Camp y eventos.",
          "Instituciones educativas, universidades y aliados estratégicos nacionales.",
          "Entidades del sistema financiero para efectos de gestión de pagos, cobros y conciliaciones.",
          "Autoridades administrativas, judiciales, policivas, de control y de vigilancia que requieran la información en ejercicio de sus competencias legales.",
          "Entidades del Sistema General de Seguridad Social, operadores de información de la PILA y demás entidades vinculadas a la gestión laboral.",
        ],
      },
      { k: "h3", t: "20.2. Garantías exigidas" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. exige a los destinatarios de Transferencias nacionales el cumplimiento de los siguientes requisitos:",
      },
      {
        k: "ul",
        items: [
          "Acreditación del cumplimiento del régimen general de protección de datos personales.",
          "Suscripción de cláusulas o acuerdos contractuales que regulen la confidencialidad, la finalidad limitada del Tratamiento, las medidas de seguridad y las consecuencias del incumplimiento.",
          "Compromiso de devolver o suprimir los Datos Personales una vez cumplida la finalidad de la Transferencia.",
          "Tratamiento únicamente para las finalidades expresamente informadas y autorizadas por el Titular.",
        ],
      },
    ],
  },
  {
    id: "cap-21",
    n: "21",
    title: "Transferencias Internacionales",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. realiza Transferencias y Transmisiones internacionales de Datos Personales en desarrollo de actividades como la prestación de servicios educativos digitales, el uso de plataformas tecnológicas internacionales, la organización de intercambios académicos en el exterior, las alianzas con instituciones extranjeras, el uso de proveedores en la nube y demás operaciones que impliquen la salida de datos del territorio colombiano.",
      },
      { k: "h3", t: "21.1. Marco jurídico aplicable" },
      {
        k: "p",
        t: "Las Transferencias y Transmisiones internacionales se sujetan a lo previsto en el artículo 26 de la Ley 1581 de 2012, los artículos pertinentes del Decreto 1074 de 2015 y los lineamientos impartidos por la Superintendencia de Industria y Comercio, en particular en lo relacionado con (i) el listado de países considerados con nivel adecuado de protección de datos, (ii) las salvedades previstas en la ley para autorizar la Transferencia cuando el país destinatario no cuente con nivel adecuado de protección y (iii) los Contratos de Transmisión de Datos Personales.",
      },
      { k: "h3", t: "21.2. Países y proveedores destinatarios" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. podrá realizar Transferencias y Transmisiones internacionales, entre otros, en los siguientes escenarios:",
      },
      {
        k: "ul",
        items: [
          "Uso de Google Meet, operado por Google LLC con domicilio en los Estados Unidos de América.",
          "Eventual contratación de LMS, plataformas educativas, herramientas de evaluación y aplicaciones móviles cuyos proveedores se encuentren domiciliados en el exterior.",
          "Eventual contratación de proveedores de servicios en la nube (cloud computing) cuyos centros de procesamiento estén ubicados fuera de Colombia.",
          "Compartición de datos con instituciones educativas extranjeras, organizaciones organizadoras de intercambios, autoridades migratorias y consulares, y familias anfitrionas, en el marco de los programas de intercambio.",
          "Uso de herramientas de inteligencia artificial educativa cuyos servidores y procesamientos se realicen en el exterior.",
        ],
      },
      { k: "h3", t: "21.3. Salvaguardas adoptadas" },
      {
        k: "p",
        t: "Para asegurar que las Transferencias y Transmisiones internacionales se realicen con un nivel adecuado de protección, EDUCATE LEARNING CENTER S.A.S. adopta las siguientes salvaguardas:",
      },
      {
        k: "ul",
        items: [
          "Verificación previa del nivel de protección de datos del país destinatario, conforme al listado oficial emitido por la autoridad colombiana.",
          "Cuando el país destinatario no se encuentre en el listado de países con nivel adecuado de protección, la institución verificará la existencia de alguna de las salvedades previstas en la ley (autorización expresa e inequívoca del Titular, intercambios de datos médicos por motivos de salud, transferencias bancarias o bursátiles, transferencias acordadas en virtud de tratados internacionales, transferencias necesarias para la ejecución de un contrato con el Titular, transferencias legalmente exigidas para la salvaguardia del interés público, entre otras).",
          "Suscripción de Contratos de Transmisión de Datos Personales que incorporen, como mínimo, las cláusulas previstas por la regulación colombiana.",
          "Verificación de las certificaciones y los estándares internacionales de seguridad ofrecidos por los proveedores extranjeros.",
          "Información clara al Titular sobre la existencia de las Transferencias internacionales y obtención de la autorización correspondiente cuando ello sea exigible.",
        ],
      },
      { k: "h3", t: "21.4. Transmisiones internacionales" },
      {
        k: "p",
        t: "Cuando la operación internacional tenga la naturaleza de Transmisión —es decir, cuando el receptor extranjero actúe en calidad de Encargado del Tratamiento por cuenta de EDUCATE LEARNING CENTER S.A.S.— la institución exigirá la suscripción de un Contrato de Transmisión de Datos Personales con el contenido mínimo previsto en el artículo 25 del Decreto 1377 de 2013, hoy compilado en el Decreto 1074 de 2015.",
      },
      { k: "h3", t: "21.5. Autorización del Titular" },
      {
        k: "p",
        t: "Cuando la Transferencia o Transmisión internacional requiera autorización expresa e inequívoca del Titular, EDUCATE LEARNING CENTER S.A.S. la solicitará informando: (i) los países o regiones destinatarias, (ii) las categorías de datos transferidos, (iii) las finalidades del Tratamiento por parte del receptor, (iv) los derechos del Titular y los mecanismos para ejercerlos.",
      },
    ],
  },
  {
    id: "cap-22",
    n: "22",
    title: "Derechos de los Titulares",
    body: [
      {
        k: "p",
        t: "De conformidad con el artículo 8 de la Ley 1581 de 2012, los Titulares de Datos Personales objeto de Tratamiento por parte de EDUCATE LEARNING CENTER S.A.S. tienen, en relación con sus datos, los siguientes derechos, los cuales podrán ejercer en cualquier momento a través del canal único de atención previsto en la presente Política:",
      },
      { k: "h3", t: "22.1. Derecho de conocimiento (acceso)" },
      {
        k: "p",
        t: "El Titular tiene derecho a conocer, de manera gratuita, en cualquier momento y sin restricciones, los Datos Personales suyos que se encuentren almacenados en las Bases de Datos administradas por EDUCATE LEARNING CENTER S.A.S., así como las finalidades para las cuales son tratados.",
      },
      { k: "h3", t: "22.2. Derecho de actualización" },
      {
        k: "p",
        t: "El Titular tiene derecho a solicitar la actualización de los Datos Personales que se encuentren incompletos, fraccionados o desactualizados, presentando la información que permita realizar la actualización correspondiente.",
      },
      { k: "h3", t: "22.3. Derecho de rectificación" },
      {
        k: "p",
        t: "El Titular tiene derecho a solicitar la rectificación de los Datos Personales que sean inexactos, erróneos, equívocos o que no correspondan a la realidad, presentando la información veraz y completa que permita realizar la corrección.",
      },
      { k: "h3", t: "22.4. Derecho de supresión" },
      {
        k: "p",
        t: "El Titular tiene derecho a solicitar la supresión de sus Datos Personales cuando: (i) considere que estos no están siendo tratados conforme a los principios, deberes y obligaciones legales; (ii) los datos hayan dejado de ser necesarios o pertinentes para la finalidad para la cual fueron recolectados; (iii) se haya superado el período necesario para el cumplimiento de los fines del Tratamiento; o (iv) haya revocado la autorización y no exista deber legal o contractual que justifique la conservación. La supresión podrá no ser procedente cuando exista un deber legal o contractual de conservación o cuando los datos sean necesarios para el cumplimiento de obligaciones legales.",
      },
      { k: "h3", t: "22.5. Derecho de revocación de la autorización" },
      {
        k: "p",
        t: "El Titular tiene derecho a revocar, en cualquier momento, la autorización otorgada para el Tratamiento de sus Datos Personales, total o parcialmente respecto de finalidades específicas. La revocación podrá ser improcedente cuando exista un deber legal o contractual que imponga al Titular permanecer en la Base de Datos.",
      },
      { k: "h3", t: "22.6. Derecho a conocer el uso" },
      {
        k: "p",
        t: "El Titular tiene derecho a conocer el uso que se ha dado a sus Datos Personales, incluyendo las finalidades específicas, los Encargados que han realizado Tratamiento, los Terceros a los que se ha transferido y demás aspectos relevantes.",
      },
      { k: "h3", t: "22.7. Derecho a presentar quejas ante la Superintendencia de Industria y Comercio" },
      {
        k: "p",
        t: "Una vez agotado el trámite de consulta o reclamo ante EDUCATE LEARNING CENTER S.A.S., el Titular tendrá derecho a presentar queja ante la Superintendencia de Industria y Comercio por presunta vulneración de su derecho al habeas data.",
      },
      { k: "h3", t: "22.8. Derecho a solicitar prueba de la autorización" },
      {
        k: "p",
        t: "El Titular podrá solicitar a EDUCATE LEARNING CENTER S.A.S. prueba de la autorización otorgada para el Tratamiento de sus Datos Personales, salvo en los casos en que la ley establezca que la autorización no es necesaria.",
      },
      { k: "h3", t: "22.9. Derechos en relación con decisiones automatizadas" },
      {
        k: "p",
        t: "Cuando EDUCATE LEARNING CENTER S.A.S. utilice herramientas que adopten decisiones basadas en tratamiento automatizado (incluida la inteligencia artificial) que produzcan efectos jurídicos o significativos para el Titular, este tendrá derecho a solicitar revisión humana, a oponerse y a obtener una explicación razonable sobre la lógica aplicada.",
      },
      { k: "h3", t: "22.10. Ejercicio de derechos por terceros" },
      {
        k: "p",
        t: "Los derechos de los Titulares menores de edad podrán ser ejercidos por sus padres o representantes legales. Los derechos del Titular fallecido podrán ser ejercidos por sus Causahabientes mediante la acreditación de su condición. Cuando un tercero pretenda ejercer derechos en nombre del Titular, deberá acreditar la representación mediante poder otorgado conforme a la ley.",
      },
    ],
  },
  {
    id: "cap-23",
    n: "23",
    title: "Deberes del Responsable",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S., en su calidad de Responsable del Tratamiento, asume y se obliga a cumplir los deberes previstos en el artículo 17 de la Ley 1581 de 2012 y demás disposiciones concordantes. En particular, son deberes de EDUCATE LEARNING CENTER S.A.S. los siguientes:",
      },
      {
        k: "ul",
        items: [
          "Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de habeas data.",
          "Solicitar y conservar, en las condiciones previstas en la ley, copia de la respectiva autorización otorgada por el Titular.",
          "Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten en virtud de la autorización otorgada.",
          "Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.",
          "Garantizar que la información que se suministre al Encargado del Tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible.",
          "Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento, todas las novedades respecto de los datos que previamente le haya suministrado.",
          "Rectificar la información cuando sea incorrecta y comunicar lo pertinente al Encargado del Tratamiento.",
          "Suministrar al Encargado del Tratamiento, según el caso, únicamente datos cuyo Tratamiento esté previamente autorizado, salvo las excepciones legales.",
          "Exigir al Encargado del Tratamiento, en todo momento, el respeto a las condiciones de seguridad y privacidad de la información del Titular.",
          "Tramitar las consultas y reclamos formulados en los términos señalados en la Ley 1581 de 2012 y en la presente Política.",
          "Adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de la ley y, en especial, para la atención de consultas y reclamos.",
          "Informar al Encargado del Tratamiento cuando determinada información se encuentre en discusión por parte del Titular.",
          "Informar a solicitud del Titular sobre el uso dado a sus datos.",
          "Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares, dentro de los plazos previstos por la regulación.",
          "Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio.",
        ],
      },
    ],
  },
  {
    id: "cap-24",
    n: "24",
    title: "Deberes de los Empleados",
    body: [
      {
        k: "p",
        t: "Todos los empleados, docentes, contratistas, practicantes, aprendices y demás personal vinculado a EDUCATE LEARNING CENTER S.A.S. que en el ejercicio de sus funciones accedan, manejen o lleguen a manejar Datos Personales bajo administración de la institución asumen, como deberes propios de su vinculación, los siguientes:",
      },
      {
        k: "ul",
        items: [
          "Conocer, comprender y aplicar la presente Política y los procedimientos asociados.",
          "Tratar los Datos Personales con estricta confidencialidad, incluso con posterioridad a la terminación de su vínculo con la institución, y abstenerse de divulgar, comunicar o entregar información a terceros no autorizados.",
          "Tratar los Datos Personales únicamente para las finalidades autorizadas y propias de las funciones asignadas, evitando usos personales, comerciales no autorizados o ajenos al objeto institucional.",
          "Adoptar las medidas de seguridad física y lógica establecidas por la institución (uso adecuado de contraseñas, bloqueo de equipos, almacenamiento seguro, uso autorizado de medios extraíbles, entre otras).",
          "Reportar de manera inmediata al Director Administrativo o al canal correspondiente cualquier sospecha, indicio o evidencia de incidente de seguridad, acceso no autorizado o vulneración de Datos Personales.",
          "Participar en las jornadas de capacitación y sensibilización organizadas por la institución en materia de protección de datos personales.",
          "Suscribir acuerdos de confidencialidad y cláusulas específicas en los contratos individuales.",
          "Abstenerse de descargar, copiar, transmitir o almacenar Datos Personales en dispositivos personales o en plataformas no autorizadas por la institución.",
          "Entregar a la institución, a la terminación del vínculo, toda la información y documentación que contenga Datos Personales, sin retener copias.",
        ],
      },
      {
        k: "p",
        t: "El incumplimiento de estos deberes podrá dar lugar a las sanciones disciplinarias previstas en el Reglamento Interno de Trabajo, así como a las acciones civiles, penales o administrativas que correspondan.",
      },
    ],
  },
  {
    id: "cap-25",
    n: "25",
    title: "Obligaciones de Proveedores y Encargados",
    body: [
      {
        k: "p",
        t: "Los proveedores, contratistas, aliados estratégicos y, en general, todo tercero que actúe como Encargado del Tratamiento por cuenta de EDUCATE LEARNING CENTER S.A.S. asumen, en virtud de los respectivos contratos y de la presente Política, las siguientes obligaciones:",
      },
      {
        k: "ul",
        items: [
          "Cumplir estrictamente la Ley 1581 de 2012, el Decreto 1074 de 2015, los lineamientos de la Superintendencia de Industria y Comercio y la presente Política.",
          "Tratar los Datos Personales únicamente para las finalidades expresamente autorizadas por EDUCATE LEARNING CENTER S.A.S. y conforme a las instrucciones impartidas.",
          "Implementar las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de la información, incluyendo controles de acceso, cifrado, copias de seguridad, gestión de incidentes y demás controles aplicables.",
          "Mantener la confidencialidad de los Datos Personales, incluso con posterioridad a la terminación del vínculo contractual, y exigir a su personal el cumplimiento de las mismas obligaciones.",
          "Abstenerse de subcontratar, subdelegar o ceder el Tratamiento de los Datos Personales sin autorización expresa y previa de EDUCATE LEARNING CENTER S.A.S.",
          "Notificar de inmediato a EDUCATE LEARNING CENTER S.A.S. cualquier incidente de seguridad, vulneración o sospecha que afecte los Datos Personales, suministrando toda la información necesaria para su atención.",
          "Facilitar el ejercicio de los derechos de los Titulares cuando los datos se encuentren bajo administración del Encargado, redirigiendo las solicitudes al Responsable o atendiéndolas conforme a las instrucciones impartidas.",
          "Devolver o suprimir, según indicación de EDUCATE LEARNING CENTER S.A.S., los Datos Personales una vez cumplida la finalidad de la contratación o a la terminación del vínculo.",
          "Permitir auditorías, inspecciones y verificaciones por parte de EDUCATE LEARNING CENTER S.A.S. o de terceros independientes designados al efecto.",
          "Suscribir, cuando ello sea exigido, Contratos de Transmisión de Datos Personales con el contenido mínimo previsto por la normativa colombiana.",
        ],
      },
      {
        k: "p",
        t: "La selección, contratación y monitoreo de proveedores y Encargados se realizará bajo criterios de debida diligencia, considerando, entre otros aspectos, la idoneidad técnica, la solvencia jurídica, el respaldo financiero y la trayectoria del proveedor en materia de seguridad y protección de datos personales.",
      },
    ],
  },
  {
    id: "cap-26",
    n: "26",
    title: "Protección Especial de Menores de Edad",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S., dada la naturaleza de los servicios educativos que presta a niños, niñas y adolescentes, reconoce la condición de sujetos de especial protección constitucional, legal y jurisprudencial de los menores de edad, y asume un compromiso reforzado con la protección de sus Datos Personales.",
      },
      { k: "h3", t: "26.1. Marco aplicable" },
      {
        k: "p",
        t: "El Tratamiento de Datos Personales de menores de edad se rige por el artículo 7 de la Ley 1581 de 2012, el artículo 12 del Decreto 1377 de 2013 (hoy compilado en el Decreto 1074 de 2015), la Constitución Política de Colombia (en particular el artículo 44), la Ley 1098 de 2006 (Código de la Infancia y la Adolescencia), la Convención sobre los Derechos del Niño, los lineamientos de la Superintendencia de Industria y Comercio en la materia y la jurisprudencia constitucional aplicable.",
      },
      { k: "h3", t: "26.2. Principios reforzados" },
      {
        k: "p",
        t: "El Tratamiento de Datos Personales de menores de edad se sujeta, además de los principios generales y específicos previstos en la presente Política, a los siguientes principios reforzados:",
      },
      {
        k: "ul",
        items: [
          "Interés superior del menor como criterio rector de todas las decisiones de Tratamiento.",
          "Respeto por la dignidad y los derechos fundamentales del menor.",
          "Finalidad estrictamente educativa, pedagógica, administrativa o de seguridad, sin Tratamientos comerciales no autorizados.",
          "Proporcionalidad reforzada entre los datos recolectados y la finalidad.",
          "Garantía del derecho del menor a ser oído y a que su opinión sea valorada conforme a su edad y madurez.",
        ],
      },
      { k: "h3", t: "26.3. Autorización" },
      {
        k: "p",
        t: "La autorización para el Tratamiento de los Datos Personales de un menor de edad debe ser otorgada por sus padres o representantes legales, conforme a las siguientes reglas:",
      },
      {
        k: "ul",
        items: [
          "La autorización debe ser previa, expresa, libre, informada e inequívoca.",
          "La autorización debe constar por escrito o por cualquier medio que permita su consulta posterior.",
          "La autorización debe indicar las finalidades específicas para las cuales se otorga.",
          "Cuando ello sea posible y conforme al grado de madurez del menor, se atenderá su opinión respecto del Tratamiento.",
        ],
      },
      { k: "h3", t: "26.4. Datos Sensibles de menores" },
      {
        k: "p",
        t: "El Tratamiento de Datos Sensibles de menores de edad —en particular, datos de salud, alergias, condiciones médicas, discapacidades y demás— se sujeta a salvaguardas adicionales:",
      },
      {
        k: "ul",
        items: [
          "Recolección estrictamente limitada a lo necesario para garantizar el bienestar del menor.",
          "Acceso restringido al personal estrictamente necesario.",
          "Conservación por el tiempo estrictamente necesario.",
          "Compartición con terceros únicamente cuando ello sea indispensable para la atención del menor y bajo cláusulas de confidencialidad.",
        ],
      },
      { k: "h3", t: "26.5. Uso de imagen de menores" },
      {
        k: "p",
        t: "El uso de la imagen de menores de edad para fines distintos al estricto registro académico interno requiere autorización expresa, escrita e independiente, otorgada por el padre o representante legal. La autorización es revocable en cualquier momento. EDUCATE LEARNING CENTER S.A.S. extrema las precauciones para evitar la exposición de menores en contextos que puedan afectar su intimidad, dignidad, seguridad o desarrollo integral.",
      },
      { k: "h3", t: "26.6. Plataformas tecnológicas e inteligencia artificial" },
      {
        k: "p",
        t: "El uso de plataformas tecnológicas, LMS, aplicaciones móviles y herramientas de inteligencia artificial para el Tratamiento de Datos Personales de menores se sujeta a salvaguardas reforzadas que incluyen:",
      },
      {
        k: "ul",
        items: [
          "Selección de proveedores con políticas específicas para protección de menores.",
          "Configuración por defecto orientada a la máxima privacidad.",
          "Restricciones al perfilamiento comercial y publicitario.",
          "Prohibición de utilizar datos de menores para entrenamiento de modelos de inteligencia artificial de terceros, salvo autorización expresa y específica.",
          "Mecanismos efectivos para que padres y representantes ejerzan los derechos del menor.",
        ],
      },
    ],
  },
  {
    id: "cap-27",
    n: "27",
    title: "Obtención de Autorizaciones",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. obtiene las autorizaciones de los Titulares para el Tratamiento de sus Datos Personales de manera previa, expresa, libre e informada, conforme a los siguientes lineamientos:",
      },
      { k: "h3", t: "27.1. Forma de la autorización" },
      {
        k: "p",
        t: "La autorización podrá constar en:",
      },
      {
        k: "ul",
        items: [
          "Documentos físicos firmados por el Titular o por su representante legal.",
          "Formularios electrónicos que incorporen casillas de aceptación o mecanismos equivalentes.",
          "Mensajes de datos, grabaciones telefónicas o cualquier otro medio que permita verificar la inequívoca manifestación de voluntad del Titular.",
          "Conductas inequívocas del Titular que permitan concluir, de manera razonable, que otorgó la autorización.",
        ],
      },
      { k: "h3", t: "27.2. Contenido mínimo de la autorización" },
      {
        k: "p",
        t: "La autorización solicitada por EDUCATE LEARNING CENTER S.A.S. contendrá, como mínimo, la siguiente información:",
      },
      {
        k: "ul",
        items: [
          "Identificación del Responsable del Tratamiento (EDUCATE LEARNING CENTER S.A.S.).",
          "Finalidades específicas para las cuales se solicita el Tratamiento.",
          "Categorías de Datos Personales objeto del Tratamiento, con mención expresa cuando se trate de Datos Sensibles.",
          "Identificación de los Encargados y/o destinatarios cuando ello sea aplicable.",
          "Carácter facultativo de la entrega de Datos Sensibles.",
          "Derechos del Titular y mecanismos para ejercerlos.",
          "Información sobre el canal de atención (educatelearningcentersas@gmail.com).",
        ],
      },
      { k: "h3", t: "27.3. Autorización de uso de imagen como autorización independiente" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. establece de manera expresa que la autorización para el uso de la imagen (fotografías, videos y demás registros audiovisuales) de los Titulares —y, en especial, de menores de edad— NO HACE PARTE AUTOMÁTICA DEL CONTRATO DE MATRÍCULA, DEL FORMULARIO DE INSCRIPCIÓN, NI DE LA AUTORIZACIÓN GENERAL DE TRATAMIENTO DE DATOS PERSONALES. En consecuencia:",
      },
      {
        k: "ul",
        items: [
          "La autorización de uso de imagen es un acto independiente, expreso, específico y libre.",
          "La negativa a otorgar la autorización de uso de imagen no afectará la prestación del servicio educativo contratado.",
          "La autorización de uso de imagen indicará de manera específica los usos autorizados (redes sociales institucionales, página web, material institucional, brochures, campañas digitales, publicidad).",
          "Cuando se trate de menores de edad, la autorización debe ser otorgada por el padre o representante legal y, en lo posible, atender la opinión del menor.",
          "La autorización es revocable en cualquier momento; la revocación operará hacia el futuro y no afectará la legalidad de los usos realizados con anterioridad.",
          "EDUCATE LEARNING CENTER S.A.S. adoptará medidas razonables para retirar, dentro de los medios bajo su control, los materiales en los que aparezca la imagen del Titular tras la revocación, sin perjuicio de los usos en publicaciones físicas ya distribuidas o publicaciones digitales realizadas por terceros.",
        ],
      },
      { k: "h3", t: "27.4. Casos en que no se requiere autorización" },
      {
        k: "p",
        t: "De conformidad con el artículo 10 de la Ley 1581 de 2012, no se requerirá la autorización del Titular en los siguientes casos:",
      },
      {
        k: "ul",
        items: [
          "Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial.",
          "Datos de naturaleza pública.",
          "Casos de urgencia médica o sanitaria.",
          "Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos.",
          "Datos relacionados con el Registro Civil de las Personas.",
        ],
      },
      { k: "h3", t: "27.5. Conservación de la autorización" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. conservará prueba de la autorización otorgada por el Titular por el tiempo en que se mantenga el Tratamiento y, una vez finalizado este, por el término exigido por la regulación.",
      },
    ],
  },
  {
    id: "cap-28",
    n: "28",
    title: "Procedimiento de Consultas",
    body: [
      {
        k: "p",
        t: "De conformidad con el artículo 14 de la Ley 1581 de 2012, el Titular o sus causahabientes podrán consultar la información personal del Titular que repose en cualquier Base de Datos administrada por EDUCATE LEARNING CENTER S.A.S. La consulta es el mecanismo mediante el cual el Titular obtiene información acerca de los Datos Personales suyos que se encuentran en las Bases de Datos.",
      },
      { k: "h3", t: "28.1. Presentación de la consulta" },
      {
        k: "p",
        t: "Las consultas podrán presentarse por escrito a través del correo electrónico educatelearningcentersas@gmail.com o de manera presencial en la sede principal de EDUCATE LEARNING CENTER S.A.S. ubicada en la Calle 33AN #2BN 49 de la ciudad de Santiago de Cali, Valle del Cauca.",
      },
      { k: "h3", t: "28.2. Contenido de la consulta" },
      {
        k: "p",
        t: "La consulta deberá contener, como mínimo, la siguiente información:",
      },
      {
        k: "ul",
        items: [
          "Identificación completa del Titular (nombres y apellidos, tipo y número de documento de identidad).",
          "Datos de contacto para recibir respuesta (correo electrónico, dirección física, teléfono).",
          "Descripción clara y precisa de la información que se desea consultar.",
          "Documentos que acrediten la identidad del Titular y, cuando aplique, la representación (en caso de menores de edad o de personas que actúan en nombre del Titular).",
        ],
      },
      { k: "h3", t: "28.3. Trámite y plazo de respuesta" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. atenderá las consultas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.",
      },
      { k: "h3", t: "28.4. Respuesta" },
      {
        k: "p",
        t: "La respuesta a la consulta contendrá, según corresponda, los Datos Personales solicitados, las finalidades del Tratamiento, los Encargados que han realizado Tratamiento, los terceros a los que se ha transferido y demás aspectos relevantes. La respuesta se remitirá por el mismo medio por el cual se presentó la consulta o por el medio que indique el Titular.",
      },
      { k: "h3", t: "28.5. Gratuidad" },
      {
        k: "p",
        t: "La consulta y el suministro de la información correspondiente serán gratuitos para el Titular, con la frecuencia que la normativa permita y conforme a los lineamientos de la Superintendencia de Industria y Comercio.",
      },
    ],
  },
  {
    id: "cap-29",
    n: "29",
    title: "Procedimiento de Reclamos",
    body: [
      {
        k: "p",
        t: "De conformidad con el artículo 15 de la Ley 1581 de 2012, el Titular o sus causahabientes que consideren que la información contenida en una Base de Datos debe ser objeto de corrección, actualización o supresión, o cuando adviertan el presunto incumplimiento de cualquiera de los deberes contenidos en la ley, podrán presentar un reclamo ante EDUCATE LEARNING CENTER S.A.S.",
      },
      { k: "h3", t: "29.1. Presentación del reclamo" },
      {
        k: "p",
        t: "Los reclamos podrán presentarse por escrito a través del correo electrónico educatelearningcentersas@gmail.com o de manera presencial en la sede principal de EDUCATE LEARNING CENTER S.A.S. ubicada en la Calle 33AN #2BN 49 de la ciudad de Santiago de Cali, Valle del Cauca.",
      },
      { k: "h3", t: "29.2. Contenido del reclamo" },
      {
        k: "p",
        t: "El reclamo deberá contener, como mínimo, la siguiente información:",
      },
      {
        k: "ul",
        items: [
          "Identificación completa del Titular (nombres y apellidos, tipo y número de documento de identidad).",
          "Descripción clara y precisa de los hechos que dan lugar al reclamo.",
          "Petición concreta (corrección, actualización, supresión, revocación de autorización, etc.).",
          "Dirección física y/o correo electrónico para notificaciones.",
          "Documentos que soporten el reclamo y acrediten la identidad del Titular.",
        ],
      },
      { k: "h3", t: "29.3. Trámite" },
      {
        k: "p",
        t: "El trámite del reclamo se sujetará al siguiente procedimiento:",
      },
      {
        k: "ul",
        items: [
          "Recibido el reclamo, EDUCATE LEARNING CENTER S.A.S. verificará que cumpla con los requisitos mínimos. Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días hábiles siguientes a su recepción para que subsane las falencias. Si el interesado no subsana las falencias dentro de los dos (2) meses siguientes a la fecha del requerimiento, se entenderá desistido el reclamo.",
          "Una vez recibido el reclamo completo, se incluirá en la Base de Datos correspondiente una leyenda que diga \"reclamo en trámite\" y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Dicha leyenda se mantendrá hasta que el reclamo sea decidido.",
          "El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.",
        ],
      },
      { k: "h3", t: "29.4. Respuesta" },
      {
        k: "p",
        t: "La respuesta al reclamo se comunicará al Titular indicando las decisiones adoptadas y, cuando ello sea procedente, se ejecutarán las acciones correspondientes (corrección, actualización, supresión, revocación, entre otras).",
      },
      { k: "h3", t: "29.5. Requisito de procedibilidad" },
      {
        k: "p",
        t: "De conformidad con el artículo 16 de la Ley 1581 de 2012, el Titular o causahabiente solo podrá elevar queja ante la Superintendencia de Industria y Comercio una vez haya agotado el trámite de consulta o reclamo ante EDUCATE LEARNING CENTER S.A.S.",
      },
    ],
  },
  {
    id: "cap-30",
    n: "30",
    title: "Gestión de Incidentes de Seguridad",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. cuenta con un procedimiento institucional para la prevención, detección, contención, atención, mitigación, comunicación y aprendizaje frente a incidentes de seguridad que afecten o puedan afectar los Datos Personales bajo su administración.",
      },
      { k: "h3", t: "30.1. Definición de incidente" },
      {
        k: "p",
        t: "Se entiende por incidente de seguridad todo evento, intencional o accidental, que comprometa o pueda comprometer la confidencialidad, integridad o disponibilidad de los Datos Personales, incluyendo, sin limitarse a, accesos no autorizados, fugas o filtraciones de información, pérdida o robo de equipos o medios de almacenamiento, ataques cibernéticos, alteración no autorizada de información, errores humanos con consecuencias relevantes y fallas técnicas significativas.",
      },
      { k: "h3", t: "30.2. Fases del procedimiento" },
      {
        k: "p",
        t: "El procedimiento de gestión de incidentes contempla las siguientes fases:",
      },
      { k: "h4", t: "30.2.1. Prevención" },
      {
        k: "p",
        t: "Implementación de controles técnicos y organizativos: políticas de contraseñas, gestión de accesos por rol, cifrado de información sensible, copias de seguridad, antivirus y antimalware, segmentación de red, pruebas de seguridad, capacitación al personal, entre otros.",
      },
      { k: "h4", t: "30.2.2. Detección" },
      {
        k: "p",
        t: "Mecanismos para la identificación temprana de incidentes: monitoreo, alertas, reportes del personal y de los Titulares, auditorías y revisiones periódicas.",
      },
      { k: "h4", t: "30.2.3. Contención" },
      {
        k: "p",
        t: "Acciones inmediatas para limitar el impacto del incidente: aislamiento de sistemas afectados, revocación de accesos, suspensión de cuentas, entre otras.",
      },
      { k: "h4", t: "30.2.4. Análisis y evaluación" },
      {
        k: "p",
        t: "Identificación del alcance, las causas, los Datos Personales y los Titulares afectados, los riesgos para los derechos de los Titulares y las consecuencias del incidente.",
      },
      { k: "h4", t: "30.2.5. Comunicación" },
      {
        k: "p",
        t: "Cuando el incidente comprometa información de los Titulares y existan riesgos relevantes, EDUCATE LEARNING CENTER S.A.S. informará a la Superintendencia de Industria y Comercio en los términos y dentro de los plazos exigidos por la regulación vigente, así como, en los casos procedentes, a los Titulares afectados, indicando la naturaleza del incidente, los datos afectados, las medidas adoptadas y las recomendaciones aplicables.",
      },
      { k: "h4", t: "30.2.6. Remediación y aprendizaje" },
      {
        k: "p",
        t: "Adopción de medidas correctivas, fortalecimiento de los controles, actualización de procedimientos y capacitación al personal, con base en las lecciones aprendidas.",
      },
      { k: "h3", t: "30.3. Registro de incidentes" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. mantiene un registro interno de los incidentes de seguridad que afecten Datos Personales, el cual incluye al menos: fecha y hora del incidente y de su detección, descripción, causas, alcance, medidas de contención y remediación, comunicaciones realizadas y conclusiones.",
      },
    ],
  },
  {
    id: "cap-31",
    n: "31",
    title: "Principio de Responsabilidad Demostrada (Accountability)",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. asume el Principio de Responsabilidad Demostrada (Accountability) como pilar de su gobierno de protección de datos personales. En desarrollo de este principio, la institución implementa, documenta, evalúa y actualiza un Programa Integral de Protección de Datos Personales (en adelante, el \"Programa\") con los siguientes componentes:",
      },
      { k: "h3", t: "31.1. Compromiso institucional" },
      {
        k: "ul",
        items: [
          "Manifestación expresa del compromiso de la alta dirección con la protección de datos personales.",
          "Asignación de recursos humanos, técnicos y financieros suficientes.",
          "Designación del Director Administrativo como Responsable de Protección de Datos.",
        ],
      },
      { k: "h3", t: "31.2. Políticas y procedimientos" },
      {
        k: "ul",
        items: [
          "La presente Política de Tratamiento y Protección de Datos Personales.",
          "Avisos de Privacidad para los distintos canales y procesos.",
          "Procedimientos para la atención de consultas, reclamos e incidentes.",
          "Procedimiento para la suscripción de Contratos de Transmisión y cláusulas de protección de datos con proveedores.",
          "Procedimientos para la gestión documental y la conservación de la información.",
        ],
      },
      { k: "h3", t: "31.3. Inventario y mapeo de Bases de Datos" },
      {
        k: "ul",
        items: [
          "Identificación de las Bases de Datos administradas por EDUCATE LEARNING CENTER S.A.S.",
          "Documentación de las finalidades, categorías de Titulares, tipologías de datos, Encargados, transferencias y plazos de conservación.",
          "Mantenimiento del Registro Nacional de Bases de Datos (RNBD) cuando ello sea exigible.",
        ],
      },
      { k: "h3", t: "31.4. Gestión de riesgos" },
      {
        k: "ul",
        items: [
          "Identificación, análisis, evaluación y tratamiento de los riesgos para los derechos de los Titulares.",
          "Evaluaciones de impacto a la privacidad (PIA) para los tratamientos de alto riesgo.",
        ],
      },
      { k: "h3", t: "31.5. Formación y cultura" },
      {
        k: "ul",
        items: [
          "Capacitación periódica al personal en materia de protección de datos personales.",
          "Comunicación interna y promoción de la cultura de privacidad.",
        ],
      },
      { k: "h3", t: "31.6. Auditoría y mejora continua" },
      {
        k: "ul",
        items: [
          "Revisión periódica del cumplimiento de la Política y de los procedimientos.",
          "Auditorías internas y, en su caso, externas.",
          "Acciones de mejora derivadas de hallazgos, incidentes y cambios normativos.",
        ],
      },
      { k: "h3", t: "31.7. Evidencia y trazabilidad" },
      {
        k: "ul",
        items: [
          "Documentación suficiente de las medidas adoptadas para evidenciar el cumplimiento ante la autoridad de control, los Titulares y demás partes interesadas.",
        ],
      },
    ],
  },
  {
    id: "cap-32",
    n: "32",
    title: "Gestión del Riesgo de Privacidad",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. implementa una metodología de gestión del riesgo de privacidad con el propósito de identificar, evaluar y tratar los riesgos asociados a las operaciones de Tratamiento de Datos Personales, en el marco del Principio de Responsabilidad Demostrada.",
      },
      { k: "h3", t: "32.1. Identificación de riesgos" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. identifica los riesgos atendiendo, entre otros, los siguientes criterios:",
      },
      {
        k: "ul",
        items: [
          "Naturaleza, alcance, contexto y finalidades del Tratamiento.",
          "Categorías de Datos Personales tratadas, con énfasis en los Datos Sensibles y los datos de menores de edad.",
          "Tecnologías utilizadas, incluidas las plataformas digitales, los servicios en la nube y las herramientas de inteligencia artificial.",
          "Transferencias y transmisiones nacionales e internacionales.",
          "Volumen de Titulares afectados y de datos tratados.",
          "Existencia de decisiones automatizadas con efectos significativos.",
        ],
      },
      { k: "h3", t: "32.2. Evaluación" },
      {
        k: "p",
        t: "Los riesgos se evalúan considerando su probabilidad de ocurrencia y la severidad de los impactos potenciales sobre los derechos y libertades de los Titulares. La evaluación arroja un nivel de riesgo (bajo, medio, alto o crítico) que orienta el tratamiento del riesgo.",
      },
      { k: "h3", t: "32.3. Tratamiento del riesgo" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. adopta medidas para el tratamiento del riesgo, las cuales pueden consistir en:",
      },
      {
        k: "ul",
        items: [
          "Eliminación del riesgo (cuando ello sea posible y proporcional).",
          "Mitigación mediante la implementación de controles técnicos, humanos o administrativos.",
          "Transferencia del riesgo a un tercero (a través de pólizas, contratos o convenios).",
          "Aceptación del riesgo residual, debidamente documentada y monitoreada.",
        ],
      },
      { k: "h3", t: "32.4. Monitoreo" },
      {
        k: "p",
        t: "Los riesgos identificados, las medidas adoptadas y los resultados obtenidos son objeto de monitoreo permanente. La institución revisa periódicamente la efectividad de los controles y realiza los ajustes necesarios.",
      },
    ],
  },
  {
    id: "cap-33",
    n: "33",
    title: "Evaluaciones de Impacto a la Privacidad",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. adopta como herramienta institucional la Evaluación de Impacto a la Privacidad (Privacy Impact Assessment – PIA), entendida como el proceso sistemático y documentado mediante el cual se identifican, evalúan y tratan los impactos potenciales sobre los derechos de los Titulares derivados de un proyecto, sistema, tecnología o proceso que implique Tratamiento de Datos Personales.",
      },
      { k: "h3", t: "33.1. Casos en que se realiza" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. realiza Evaluaciones de Impacto, entre otros, en los siguientes casos:",
      },
      {
        k: "ul",
        items: [
          "Implementación de nuevas plataformas tecnológicas, LMS, aplicaciones móviles o herramientas de evaluación que impliquen tratamiento sistemático o masivo de Datos Personales.",
          "Adopción de herramientas de inteligencia artificial aplicada a la educación que adopten o apoyen decisiones con efectos relevantes para los Titulares.",
          "Tratamiento sistemático o masivo de Datos Sensibles, en particular de menores de edad.",
          "Implementación de programas o proyectos que impliquen Transferencias internacionales a países sin nivel adecuado de protección.",
          "Cambios significativos en los procesos, finalidades o medios de Tratamiento ya existentes.",
        ],
      },
      { k: "h3", t: "33.2. Contenido" },
      {
        k: "p",
        t: "La Evaluación de Impacto contempla, como mínimo:",
      },
      {
        k: "ul",
        items: [
          "Descripción detallada del tratamiento, sus finalidades, categorías de datos y Titulares afectados.",
          "Análisis de la necesidad y la proporcionalidad.",
          "Identificación y evaluación de riesgos para los derechos de los Titulares.",
          "Medidas previstas para mitigar los riesgos.",
          "Conclusión y aprobación por la instancia competente.",
        ],
      },
      { k: "h3", t: "33.3. Documentación" },
      {
        k: "p",
        t: "Las Evaluaciones de Impacto se documentan y se conservan como parte del Programa Integral de Protección de Datos Personales.",
      },
    ],
  },
  {
    id: "cap-34",
    n: "34",
    title: "Conservación y Eliminación de Datos Personales",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. conservará los Datos Personales únicamente durante el tiempo necesario para el cumplimiento de las finalidades autorizadas, las obligaciones legales y los términos de prescripción aplicables. Una vez vencido el plazo de conservación, los datos serán suprimidos o anonimizados de manera segura.",
      },
      { k: "h3", t: "34.1. Plazos generales de conservación" },
      {
        k: "p",
        t: "Sin perjuicio de los plazos especiales previstos en la regulación, EDUCATE LEARNING CENTER S.A.S. adopta los siguientes plazos generales de conservación:",
      },
      {
        k: "ul",
        items: [
          "Datos de estudiantes activos: durante toda la vigencia de la relación académica.",
          "Datos de exalumnos: por un término de diez (10) años contados a partir de la terminación de la relación, para efectos de expedición de certificaciones, atención de requerimientos y trazabilidad académica.",
          "Información contable, fiscal y comercial: por el término mínimo previsto por la normativa, que en términos generales es de diez (10) años contados a partir de la fecha del último asiento, documento o comprobante, conforme al Código de Comercio y la regulación tributaria.",
          "Datos de aspirantes laborales no seleccionados: por un término de un (1) año contado a partir del último contacto, salvo nueva autorización.",
          "Datos de empleados y contratistas retirados: por el término previsto por la regulación laboral, fiscal y de seguridad social, en términos generales no inferior a diez (10) años contados a partir de la terminación del vínculo.",
          "Datos de prospectos comerciales: por un término máximo de dos (2) años contados a partir del último contacto efectivo, salvo nueva autorización del Titular.",
          "Imágenes de videovigilancia: por un término entre treinta (30) y noventa (90) días contados a partir de la captación, salvo necesidad de conservación por requerimiento de autoridad o investigación.",
          "Información de Summer Camp e intercambios: durante la ejecución del programa y, una vez finalizado, por los plazos previstos en la presente Política y por los exigidos por las autoridades competentes; la información médica sensible se suprimirá una vez cumpla su finalidad, salvo exigencia legal.",
        ],
      },
      { k: "h3", t: "34.2. Excepciones a la supresión" },
      {
        k: "p",
        t: "La supresión de Datos Personales no será procedente cuando:",
      },
      {
        k: "ul",
        items: [
          "Exista un deber legal o contractual de conservación.",
          "Los datos sean necesarios para el cumplimiento de obligaciones legales, judiciales o administrativas vigentes.",
          "Los datos resulten necesarios para la defensa o ejercicio de derechos en procesos judiciales o administrativos.",
          "La conservación sea exigida por la autoridad competente.",
        ],
      },
      { k: "h3", t: "34.3. Mecanismos de eliminación" },
      {
        k: "p",
        t: "Los Datos Personales se suprimirán mediante mecanismos seguros que garanticen la imposibilidad de su recuperación, incluyendo el borrado seguro, la destrucción física de soportes y la anonimización irreversible, según corresponda.",
      },
    ],
  },
  {
    id: "cap-35",
    n: "35",
    title: "Modificaciones de la Política",
    body: [
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. se reserva el derecho de modificar la presente Política, total o parcialmente, en cualquier momento, con el propósito de atender las necesidades institucionales, adoptar las mejores prácticas, incorporar nuevas tecnologías o ajustar la Política a los cambios regulatorios.",
      },
      { k: "h3", t: "35.1. Comunicación de las modificaciones" },
      {
        k: "p",
        t: "Las modificaciones serán comunicadas a los Titulares mediante los canales habituales de comunicación institucional, incluyendo el sitio web, las plataformas digitales y, cuando ello sea procedente, el envío de comunicaciones específicas. Las modificaciones que impliquen cambios sustanciales en las finalidades del Tratamiento o en categorías de datos tratadas serán comunicadas con anterioridad razonable a su entrada en vigencia.",
      },
      { k: "h3", t: "35.2. Nueva autorización" },
      {
        k: "p",
        t: "Cuando las modificaciones impliquen un cambio sustancial en las finalidades del Tratamiento que requiera una nueva manifestación de voluntad del Titular, EDUCATE LEARNING CENTER S.A.S. solicitará la autorización correspondiente.",
      },
      { k: "h3", t: "35.3. Control de versiones" },
      {
        k: "p",
        t: "EDUCATE LEARNING CENTER S.A.S. mantendrá un control de versiones de la presente Política que permita identificar la fecha de cada modificación, los cambios introducidos y la versión vigente.",
      },
    ],
  },
  {
    id: "cap-36",
    n: "36",
    title: "Vigencia",
    body: [
      {
        k: "p",
        t: "La presente Política de Tratamiento y Protección de Datos Personales de EDUCATE LEARNING CENTER S.A.S. entra en vigencia el día seis (6) de junio del año dos mil veintiséis (2026) y permanecerá vigente hasta tanto sea modificada, sustituida o derogada expresamente por la institución.",
      },
      {
        k: "p",
        t: "Las Bases de Datos administradas por EDUCATE LEARNING CENTER S.A.S. se conservarán y tratarán conforme a los plazos previstos en el Capítulo 34 de la presente Política y a las disposiciones legales aplicables.",
      },
      {
        k: "p",
        t: "La presente Política deroga cualquier disposición interna anterior que le sea contraria y se entiende incorporada a los contratos, autorizaciones y comunicaciones institucionales suscritas por EDUCATE LEARNING CENTER S.A.S. con sus Titulares.",
      },
      {
        k: "p",
        t: "Dada en la ciudad de Santiago de Cali, Valle del Cauca, República de Colombia, a los seis (6) días del mes de junio del año dos mil veintiséis (2026).",
      },
    ],
  },
];
