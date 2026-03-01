import type { ImageMetadata } from "astro";
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

export type TeamMember = {
  slug: string;
  name: string;
  specialty: string;
  image: ImageMetadata;
};

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
    specialty: "Endodoncia",
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
