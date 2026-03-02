import type { ImageMetadata } from "astro";

// Team images
import drMarcoGuerrero from "../assets/images/team/dr-marco-guerrero.png";
import drMarcoGuerreroM from "../assets/images/team/dr-marco-guerrero-m.png";
import drFelipeGuerrero from "../assets/images/team/dr-felipe-guerrero.png";
import draCatalinaGarcia from "../assets/images/team/dra-catalina-garcia.png";
import drReneChateau from "../assets/images/team/dr-rene-chateau.png";
import drXavierUriarte from "../assets/images/team/dr-xavier-uriarte.png";
import draCamilaRusque from "../assets/images/team/dra-camila-rusque.png";
import drJoseMartinez from "../assets/images/team/dr-jose-martinez.png";
import drMarcoMardones from "../assets/images/team/dr-marco-mardones.png";
import drImanolBallesteros from "../assets/images/team/dr-imanol-ballesteros.png";

// Service images
import endodonticsImage from "../assets/images/services/endodontics.png";
import facialHarmonyImage from "../assets/images/services/facial-harmony.png";
import maxillofacialSurgeryImage from "../assets/images/services/maxillofacial-surgery.png";
import odontologyImage from "../assets/images/services/odontology.png";
import oralAndMaxillofacialPathologyImage from "../assets/images/services/oral-and-maxillofacial-pathology.png";
import oralRehabilitationImage from "../assets/images/services/oral-rehabilitation.png";
import orthodonticsImage from "../assets/images/services/orthodontics.png";
import teethImplantImage from "../assets/images/services/teeth-implant.png";

// Feature images
import xRay from "../assets/images/x-ray.png";
import sameDayResults from "../assets/images/same-day-results.png";
import universalAccessibility from "../assets/images/universal-accessibility.png";
import painlessTreatment from "../assets/images/painless-treatment.png";

// Types
export type TeamMember = {
  slug: string;
  name: string;
  specialty: string;
  image: ImageMetadata;
};

export type Specialty = {
  slug: string;
  label: string;
  description: string;
  heroDescription: string;
  teamMemberSlugs: string[];
  image?: ImageMetadata;
  offer?: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  image: ImageMetadata;
};

export type ClinicValue = {
  title: string;
  description: string;
};

export type BusinessHour = {
  day: string;
  time: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

// Site defaults (hardcoded fallbacks for env variables)
export const siteDefaults = {
  whatsapp: {
    phone: "56948446632",
  },
  contact: {
    email: "contacto@dentalgranavenida.cl",
    phoneLandline: "56225272911",
    phoneLandlineFormatted: "+56 2 2527 2911",
  },
  social: {
    facebook: "https://facebook.com/dentalgranavenida",
    instagram: "https://instagram.com/dentalgranavenida",
  },
  location: {
    mapsUrl: "https://maps.app.goo.gl/ZuKAfvAUwmX4s5j78",
  },
  address: {
    full: "Gran Avenida 10063, El Bosque, Región Metropolitana",
    short: "Gran Avenida 10063, El Bosque",
  },
  clinic: {
    yearsExperience: 40,
  },
} as const;

// Data
export const teamMembers: TeamMember[] = [
  {
    slug: "dr-marco-guerrero",
    name: "Dr. Marco Guerrero",
    specialty: "Rehabilitación Oral",
    image: drMarcoGuerrero,
  },
  {
    slug: "dr-marco-guerrero-m",
    name: "Dr. Marco Guerrero M.",
    specialty: "Odontología General · Implantología",
    image: drMarcoGuerreroM,
  },
  {
    slug: "dr-felipe-guerrero",
    name: "Dr. Felipe Guerrero",
    specialty: "Odontología General · Rehabilitación Oral",
    image: drFelipeGuerrero,
  },
  {
    slug: "dra-catalina-garcia",
    name: "Dra. Catalina García",
    specialty: "Patología Oral y Maxilofacial · Armonización Facial",
    image: draCatalinaGarcia,
  },
  {
    slug: "dr-rene-chateau",
    name: "Dr. René Chateau",
    specialty: "Cirugía Maxilofacial",
    image: drReneChateau,
  },
  {
    slug: "dr-xavier-uriarte",
    name: "Dr. Xavier Uriarte",
    specialty: "Implantología",
    image: drXavierUriarte,
  },
  {
    slug: "dra-camila-rusque",
    name: "Dra. Camila Rusque",
    specialty: "Ortodoncia",
    image: draCamilaRusque,
  },
  {
    slug: "dr-jose-martinez",
    name: "Dr. José Martínez",
    specialty: "Endodoncia",
    image: drJoseMartinez,
  },
  {
    slug: "dr-marco-mardones",
    name: "Dr. Marco Mardones",
    specialty: "Odontología General · Rehabilitación Oral",
    image: drMarcoMardones,
  },
  {
    slug: "dr-imanol-ballesteros",
    name: "Dr. Imanol Ballesteros",
    specialty: "Ortodoncia",
    image: drImanolBallesteros,
  },
];

export const specialties: Specialty[] = [
  {
    slug: "odontologia-general",
    label: "Odontología General",
    description:
      "Diagnóstico, prevención y tratamiento de problemas comunes: caries, limpiezas, blanqueamientos y derivación a especialista cuando corresponde.",
    heroDescription:
      "La odontología general abarca el diagnóstico, prevención y tratamiento de problemas comunes de salud bucal: caries, limpiezas, blanqueamientos y derivación a especialista cuando corresponde. Es tu primera línea de atención dental.",
    teamMemberSlugs: [
      "dr-marco-guerrero-m",
      "dr-felipe-guerrero",
      "dr-marco-mardones",
    ],
    image: odontologyImage,
    offer: "20% dscto.",
  },
  {
    slug: "ortodoncia",
    label: "Ortodoncia",
    description:
      "Corrige la posición de los dientes y mordida a través de brackets o alineadores.",
    heroDescription:
      "La ortodoncia corrige la posición de los dientes y la mordida a través de brackets o alineadores. Mejora tanto la estética de tu sonrisa como la funcionalidad. Contamos con tratamientos adaptados a cada paciente y estilo de vida.",
    teamMemberSlugs: ["dr-imanol-ballesteros"],
    image: orthodonticsImage,
  },
  {
    slug: "endodoncia",
    label: "Endodoncia",
    description:
      "Tratamiento de conducto a dientes con dolor profundo o infección, evitando extracciones innecesarias.",
    heroDescription:
      "La endodoncia se dedica al tratamiento de conducto en dientes con dolor profundo o infección, evitando así extracciones dentarias innecesarias. Preservamos tu diente natural con técnicas actualizadas y un enfoque en tu comodidad.",
    teamMemberSlugs: ["dr-jose-martinez"],
    image: endodonticsImage,
  },
  {
    slug: "rehabilitacion-oral",
    label: "Rehabilitación Oral",
    description:
      "Devuelve función y estética, mejorando la apariencia de la sonrisa. Coronas, carillas, puentes, prótesis removibles y rehabilitaciones complejas.",
    heroDescription:
      "La rehabilitación oral devuelve la función y la estética a tu boca, mejorando la apariencia de la sonrisa. Incluye coronas, carillas, puentes, prótesis removibles y rehabilitaciones complejas. Diseñamos cada tratamiento a medida para resultados duraderos y naturales.",
    teamMemberSlugs: [
      "dr-marco-guerrero",
      "dr-felipe-guerrero",
      "dr-marco-mardones",
    ],
    image: oralRehabilitationImage,
  },
  {
    slug: "implantologia",
    label: "Implantología",
    description:
      "Reemplaza dientes perdidos con implantes de titanio. Contempla cirugía, planificación ósea y base para rehabilitaciones.",
    heroDescription:
      "La implantología reemplaza dientes perdidos con implantes de titanio que actúan como raíces artificiales. Contempla cirugía, planificación ósea y la base para rehabilitaciones con coronas, puentes o prótesis. Resultados naturales y duraderos.",
    teamMemberSlugs: ["dr-marco-guerrero-m", "dr-xavier-uriarte"],
    image: teethImplantImage,
  },
  {
    slug: "cirugia-maxilofacial",
    label: "Cirugía Maxilofacial",
    description:
      "Técnicas quirúrgicas avanzadas en pabellón: extracciones complejas, traumatismos y patología oral.",
    heroDescription:
      "La cirugía maxilofacial es la especialidad que implica técnicas quirúrgicas avanzadas en pabellón. Comprende extracciones complejas, traumatismos y patología oral. Nuestro equipo realiza cada procedimiento con la máxima precisión y seguridad.",
    teamMemberSlugs: ["dr-rene-chateau"],
    image: maxillofacialSurgeryImage,
  },
  {
    slug: "patologia-oral",
    label: "Patología Oral",
    description:
      "Diagnóstico, tratamiento y seguimiento de enfermedades de la cavidad oral. Biopsias y exámenes complementarios.",
    heroDescription:
      "La patología oral se dedica al diagnóstico, tratamiento y seguimiento de enfermedades de la cavidad oral y maxilofacial. Realizamos biopsias y solicitamos exámenes complementarios específicos cuando corresponde.",
    teamMemberSlugs: ["dra-catalina-garcia"],
    image: oralAndMaxillofacialPathologyImage,
  },
  {
    slug: "armonizacion-facial",
    label: "Armonización Facial",
    description:
      "Procedimientos para mejorar la apariencia de la piel, disminuir envejecimiento o daño solar, estimular colágeno y rellenos faciales.",
    heroDescription:
      "La armonización facial comprende procedimientos que ayudan a mejorar la apariencia de la piel, disminuyendo los síntomas del envejecimiento o daño solar, estimulando la formación de colágeno, disminuyendo líneas de expresión y utilizando rellenos faciales cuando sea necesario.",
    teamMemberSlugs: ["dra-catalina-garcia"],
    image: facialHarmonyImage,
  },
];

export const featureCards: FeatureCard[] = [
  {
    title: "Tratamientos inmediatos",
    description:
      "En Dental Gran Avenida obtienes tratamientos con la urgencia que necesitas.",
    image: sameDayResults,
  },
  {
    title: "Mejor tecnología",
    description:
      "Sala de rayos X, scanner 3D y equipos de última generación para diagnósticos precisos.",
    image: xRay,
  },
  {
    title: "Acceso para todos",
    description:
      "Estacionamiento gratuito y acceso para personas en situación de discapacidad.",
    image: universalAccessibility,
  },
  {
    title: "Tratamiento sin dolor",
    description:
      "Técnicas modernas y sedación consciente para que tu visita sea completamente confortable.",
    image: painlessTreatment,
  },
];

export const clinicValues: ClinicValue[] = [
  {
    title: "Misión",
    description:
      "Brindar atención odontológica integral de alta calidad, centrada en el paciente y su familia, con tecnología de vanguardia, profesionales altamente capacitados y un trato humano y cercano.",
  },
  {
    title: "Visión",
    description:
      "Ser la clínica dental de referencia en El Bosque y Gran Avenida, reconocida por la excelencia clínica, la innovación continua y el compromiso con el bienestar y la sonrisa de nuestros pacientes.",
  },
];

export const businessHours: BusinessHour[] = [
  { day: "Lunes a jueves", time: "09:00 a 19:00 hrs." },
  { day: "Viernes", time: "09:00 a 18:00 hrs." },
  { day: "Sábados", time: "08:00 a 13:00 hrs." },
  { day: "Domingos y feriados", time: "Cerrado" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"El equipo de Dental Gran Avenida es increíble. Me trataron con mucho profesionalismo y el resultado fue exactamente lo que esperaba."',
    name: "María González",
    detail: "Paciente desde 2021",
  },
  {
    quote:
      '"Tenía mucho miedo al dentista, pero aquí me explicaron cada paso. El tratamiento fue completamente sin dolor. Los recomiendo al 100%."',
    name: "Carlos Muñoz",
    detail: "Paciente desde 2022",
  },
  {
    quote:
      '"La tecnología que tienen es de primer nivel. Me hicieron el scanner 3D y los implantes quedaron perfectos. Excelente atención."',
    name: "Ana Pérez",
    detail: "Paciente desde 2020",
  },
  {
    quote:
      '"Llevo a toda mi familia aquí. La atención es personalizada y los precios son justos. Muy contentos con los resultados."',
    name: "Roberto Silva",
    detail: "Paciente desde 2019",
  },
  {
    quote:
      '"Me hicieron un blanqueamiento y quedó espectacular. El proceso fue rápido y sin molestias. Totalmente recomendado."',
    name: "Carmen Rojas",
    detail: "Paciente desde 2023",
  },
  {
    quote:
      '"La ortodoncia que me pusieron cambió mi sonrisa. El equipo es muy profesional y siempre dispuesto a resolver dudas."',
    name: "Diego Fernández",
    detail: "Paciente desde 2021",
  },
  {
    quote:
      '"Atendieron a mi hijo con mucha paciencia. Ahora va contento al dentista. Gracias por la excelente labor."',
    name: "Patricia López",
    detail: "Paciente desde 2022",
  },
  {
    quote:
      '"Urgencia dental en la noche y me atendieron al día siguiente. Eso habla del compromiso con sus pacientes."',
    name: "Andrés Martínez",
    detail: "Paciente desde 2020",
  },
];
