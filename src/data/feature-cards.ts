import type { ImageMetadata } from "astro";
import xRay from "../assets/images/x-ray.png";
import sameDayResults from "../assets/images/same-day-results.png";
import universalAccessibility from "../assets/images/universal-accessibility.png";
import painlessTreatment from "../assets/images/painless-treatment.png";

export type FeatureCard = {
  title: string;
  description: string;
  image: ImageMetadata;
};

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
