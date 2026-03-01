import type { ImageMetadata } from "astro";
import placeholder from "../assets/images/service-placeholder.jpg";
import featureXRay from "../assets/images/feature-x-ray.png";
import featureLaboratory from "../assets/images/feature-laboratory.png";
import featureParking from "../assets/images/feature-parking.png";
import featurePainless from "../assets/images/feature-painless.png";

export type FeatureCard = {
  title: string;
  description: string;
  image: ImageMetadata;
};

export const featureCards: FeatureCard[] = [
  {
    title: "Mejor tecnología",
    description:
      "Sala de rayos X, scanner 3D y equipos de última generación para diagnósticos precisos.",
    image: featureXRay,
  },
  {
    title: "Laboratorio propio",
    description:
      "Laboratorio de patología oral en la misma clínica para resultados en tiempo récord.",
    image: featureLaboratory,
  },
  {
    title: "Acceso para todos",
    description:
      "Estacionamiento gratuito y acceso para personas en situación de discapacidad.",
    image: featureParking,
  },
  {
    title: "Tratamiento sin dolor",
    description:
      "Técnicas modernas y sedación consciente para que tu visita sea completamente confortable.",
    image: featurePainless,
  },
];
