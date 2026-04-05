import type { AppMessages } from "./types";

export const messages: AppMessages = {
  nav: {
    home: "Inicio",
    report: "Presentar un informe",
    status: "Tu caso",
    resources: "Recursos",
    privacy: "Privacidad",
    language: "Idioma",
    langEn: "English",
    langEs: "Español",
  },
  landing: {
    kicker: "Hecho para inquilinos de los cinco condados",
    title: "On Record NYC",
    subtitle:
      "Cuando se va la calefacción en pleno invierno o el moho trepa detrás de la pintura, no deberías pelear solo con un cuaderno y una oración. Documenta qué pasa, deja constancia por escrito y mantente listo—sin fingir que la ciudad o el casero están de tu lado.",
    ctaPrimary: "Empezar informe",
    ctaSecondary: "Ver cómo avanza un caso",
    valueDocTitle: "Pruebas, no suposiciones",
    valueDocBody:
      "Fotos, fechas y lenguaje claro—para que si alguien pregunta “¿qué pasó?” ya tengas los comprobantes.",
    valueNoticeTitle: "Avisos que pesan",
    valueNoticeBody:
      "Un registro claro para el casero o la administración. Tono profesional, firmeza de inquilino.",
    valueFollowTitle: "Seguimientos que no desaparecen",
    valueFollowBody:
      "Recordatorios estructurados para que el silencio no sea solo tu problema.",
    valuePacketTitle: "Paquete listo para escalar",
    valuePacketBody:
      "Si nada se mueve, sales con un PDF ordenado—no un montón de capturas y estrés.",
    disclaimerShort:
      "On Record NYC no es asesoría legal, no es un bufete ni un sitio gubernamental. No presenta 311 ni HPD por ti.",
    dividerLabel: "Por qué existe",
  },
  report: {
    pageTitle: "Presentar un informe",
    pageIntro:
      "Goteras lentas, cerradura rota, sin agua caliente—sea lo que sea, ponle nombre aquí. Cuanto más específico seas, más difícil es desestimarlo.",
    section1Title: "Tu información",
    section2Title: "Tu apartamento",
    section3Title: "Casero / administración",
    section4Title: "El problema",
    section5Title: "Evidencia",
    section5Lead:
      "Aquí está tu palanca. Fotos claras convierten el “dijo / dijo” en algo que un funcionario puede leer sin forzar la vista.",
    section5Hint:
      "Toma planos generales y primeros planos. Incluye marca de tiempo si tu teléfono la añade. Hasta 3 imágenes.",
    section6Title: "Consentimiento",
    labels: {
      fullName: "Nombre completo",
      phone: "Teléfono",
      email: "Correo (opcional)",
      contactPref: "Mejor forma de contactarte",
      contactPrefPhone: "Teléfono",
      contactPrefEmail: "Correo",
      contactPrefText: "SMS",
      street: "Dirección",
      unit: "Apartamento",
      borough: "Condado",
      zip: "Código postal",
      landlordName: "Nombre del casero o administración",
      landlordContact: "Dirección postal o correo para el aviso",
      issueDescription: "Describe qué está pasando",
      dateNoticed: "¿Cuándo lo notaste por primera vez?",
    },
    placeholders: {
      fullName: "p. ej. Alex Rivera",
      phone: "Tu número",
      email: "tu@correo.com",
      street: "Calle y número",
      unit: "Apto / piso",
      landlordName: "Nombre en tu contrato o portal de pago",
      landlordContact: "Dónde debe ir un aviso formal",
      issueDescription:
        "¿Qué habitación? ¿Qué está roto? ¿Qué ya dijiste al edificio?",
    },
    boroughs: {
      manhattan: "Manhattan",
      brooklyn: "Brooklyn",
      queens: "Queens",
      bronx: "Bronx",
      staten: "Staten Island",
    },
    issues: {
      noHeat: "Sin calefacción",
      noHotWater: "Sin agua caliente",
      leak: "Filtración / plomería",
      pests: "Plagas",
      electrical: "Electricidad",
      mold: "Moho",
      structural: "Estructural",
      gas: "Gas / olor",
      sewage: "Alcantarillado / saneamiento",
      other: "Otro",
    },
    consent: {
      accurate:
        "Comparto información que, a mi leal saber y entender, es precisa.",
      notLegal:
        "Entiendo que esta herramienta no es asesoría legal y no crea relación abogado–cliente.",
      process:
        "Consiento que esta aplicación procese lo que ingreso para ayudarme a documentar y organizar mi caso.",
    },
    photoAdd: "Añadir foto",
    photoRemove: "Quitar",
    photoSlotEmpty: "Espacio libre",
    submit: "Enviar informe",
    submitting: "Guardando…",
    previewBanner:
      "Modo vista previa: aún no se envía correo ni se presenta nada. El ID de caso es real en esta sesión para que veas el flujo completo.",
    selectIssueHint: "Elige un tipo de problema para continuar.",
    checkConsentHint: "Marca todas las casillas para enviar.",
  },
  status: {
    pageTitle: "Tu caso",
    liveKicker: "Expediente activo",
    liveHeading: "Así está tu situación",
    dismissWelcome: "Cerrar",
    demoTitle: "Caso de ejemplo",
    demoKicker: "Línea de ejemplo",
    demoSubtitle:
      "Esta línea de tiempo muestra cómo On Record NYC mantiene el hilo—desde el primer aviso hasta la documentación para escalar.",
    liveSubtitle:
      "Ya quedaste registrado. Así está la situación y lo que suele venir después.",
    caseLabel: "Caso",
    filed: "Presentado",
    sampleNote: "Línea de tiempo de muestra",
    welcomeBanner: "Informe recibido. Abrimos un expediente para ti.",
    nowLabel: "Ahora",
    secondaryLabel: "Estado del caso",
    states: {
      inProgress: "En curso",
      paused: "En pausa",
      expired: "Vencido",
    },
    steps: {
      submitted: "Enviado",
      notified: "Notificado",
      followup1: "Seguimiento 1",
      followup2: "Seguimiento 2",
      escalation: "Listo para escalar",
      resolved: "Resuelto",
    },
    stepHints: {
      submitted: "Tu informe quedó registrado con evidencia adjunta.",
      notified: "El aviso formal está en cola o enviado—guarda tu copia.",
      followup1: "Primer recordatorio estructurado si no hay respuesta real.",
      followup2: "Segundo seguimiento—el patrón de silencio importa.",
      escalation: "Armado del paquete si el problema sigue abierto.",
      resolved: "Cierre una vez verificadas las reparaciones o archivas el caso.",
    },
    nextActionsTitle: "Qué puedes hacer ahora",
    nextActionsBody:
      "Guarda capturas de tickets en portales. Si viene el super, anota la fecha y qué vio. Los detalles pequeños ganan cuando la memoria falla.",
  },
  privacy: {
    title: "Privacidad",
    lead: "Lenguaje claro, sin niebla corporativa.",
    sections: [
      {
        title: "Lo que escribes aquí",
        body: "Tú lo escribes; en esta demo lo mantenemos en la sesión del navegador. Cuando haya backend, explicaremos retención, cifrado y borrado con el mismo tono—no un muro de letra pequeña.",
      },
      {
        title: "No somos bufete",
        body: "Nada aquí es asesoría legal. Para representación, habla con un abogado de inquilinos o servicios legales.",
      },
      {
        title: "No vendemos tu historia",
        body: "Este producto no existe para monetizar tu crisis de vivienda. Sin anuncios de caseros. Sin corredores de datos.",
      },
    ],
  },
  resources: {
    title: "Recursos",
    eyebrow: "Ayuda independiente",
    lead:
      "La confianza no es un enlace al pie. Estos son sitios independientes que los neoyorquinos usan cuando no hay calor o el techo gotea.",
    intro:
      "Guarda lo que encaje con tu situación. On Record NYC ayuda a documentar; estas organizaciones ayudan a luchar, aprender y organizarse.",
    links: {
      hpd: "Departamento de Preservación y Desarrollo de Vivienda de NYC (HPD): normas oficiales y contexto de quejas.",
      metcouncil: "Metropolitan Council on Housing: organización de inquilinos y materiales de derechos.",
      justfix: "JustFix: herramientas y guía para inquilinos de NYC con reparaciones y acoso.",
      lawhelp: "LawHelpNY: conexión con ayuda legal y clínicas.",
    },
    ctaReport: "Empezar un informe con On Record",
    openExternal: "Abrir sitio",
  },
  footer: {
    disclaimer:
      "On Record NYC no ofrece asesoría legal, no es un bufete, no está afiliado a la Ciudad de Nueva York y no presenta quejas 311 ni HPD en tu nombre.",
    builtTitle: "Quién lo hizo",
    builtBody:
      "Diseñado por Edgar Ferguson para ayudar a los neoyorquinos a documentar problemas de vivienda con claridad, constancia y dignidad.",
  },
};
