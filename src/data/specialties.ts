import type { ImageMetadata } from 'astro';
import ortodonciaImage from '../assets/images/specialties/ortodoncia.png';

export type Specialty = {
	slug: string;
	label: string;
	description: string;
	heroDescription: string;
	teamMemberSlugs: string[];
	image?: ImageMetadata;
};

export const specialties: Specialty[] = [
	{
		slug: 'odontologia-general',
		label: 'Odontología General',
		description: 'Diagnóstico, prevención y tratamiento de problemas comunes: caries, limpiezas, blanqueamientos y derivación a especialista cuando corresponde.',
		heroDescription: 'La odontología general abarca el diagnóstico, prevención y tratamiento de problemas comunes de salud bucal: caries, limpiezas, blanqueamientos y derivación a especialista cuando corresponde. Es tu primera línea de atención dental.',
		teamMemberSlugs: ['dr-marco-guerrero-m', 'dr-felipe-guerrero', 'dr-marco-mardones'],
	},
	{
		slug: 'rehabilitacion-oral',
		label: 'Rehabilitación Oral',
		description: 'Devuelve función y estética, mejorando la apariencia de la sonrisa. Coronas, carillas, puentes, prótesis removibles y rehabilitaciones complejas.',
		heroDescription: 'La rehabilitación oral devuelve la función y la estética a tu boca, mejorando la apariencia de la sonrisa. Incluye coronas, carillas, puentes, prótesis removibles y rehabilitaciones complejas. Diseñamos cada tratamiento a medida para resultados duraderos y naturales.',
		teamMemberSlugs: ['dr-marco-guerrero', 'dr-felipe-guerrero', 'dr-marco-mardones'],
	},
	{
		slug: 'implantologia',
		label: 'Implantología',
		description: 'Reemplaza dientes perdidos con implantes de titanio. Contempla cirugía, planificación ósea y base para rehabilitaciones.',
		heroDescription: 'La implantología reemplaza dientes perdidos con implantes de titanio que actúan como raíces artificiales. Contempla cirugía, planificación ósea y la base para rehabilitaciones con coronas, puentes o prótesis. Resultados naturales y duraderos.',
		teamMemberSlugs: ['dr-marco-guerrero-m', 'dr-xavier-uriarte'],
	},
	{
		slug: 'cirugia-maxilofacial',
		label: 'Cirugía Maxilofacial',
		description: 'Técnicas quirúrgicas avanzadas en pabellón: extracciones complejas, traumatismos y patología oral.',
		heroDescription: 'La cirugía maxilofacial es la especialidad que implica técnicas quirúrgicas avanzadas en pabellón. Comprende extracciones complejas, traumatismos y patología oral. Nuestro equipo realiza cada procedimiento con la máxima precisión y seguridad.',
		teamMemberSlugs: ['dr-rene-chateau'],
	},
	{
		slug: 'ortodoncia',
		label: 'Ortodoncia',
		description: 'Corrige la posición de los dientes y mordida a través de brackets o alineadores.',
		heroDescription: 'La ortodoncia corrige la posición de los dientes y la mordida a través de brackets o alineadores. Mejora tanto la estética de tu sonrisa como la funcionalidad. Contamos con tratamientos adaptados a cada paciente y estilo de vida.',
		teamMemberSlugs: ['dr-imanol-ballesteros'],
		image: ortodonciaImage,
	},
	{
		slug: 'endodoncia',
		label: 'Endodoncia',
		description: 'Tratamiento de conducto a dientes con dolor profundo o infección, evitando extracciones innecesarias.',
		heroDescription: 'La endodoncia se dedica al tratamiento de conducto en dientes con dolor profundo o infección, evitando así extracciones dentarias innecesarias. Preservamos tu diente natural con técnicas actualizadas y un enfoque en tu comodidad.',
		teamMemberSlugs: ['dr-jose-martinez'],
	},
	{
		slug: 'patologia-oral-maxilofacial',
		label: 'Patología Oral y Maxilofacial',
		description: 'Diagnóstico, tratamiento y seguimiento de enfermedades de la cavidad oral. Biopsias y exámenes complementarios.',
		heroDescription: 'La patología oral y maxilofacial se dedica al diagnóstico, tratamiento y seguimiento de enfermedades de la cavidad oral. Realizamos biopsias y solicitamos exámenes complementarios específicos cuando corresponde.',
		teamMemberSlugs: ['dra-catalina-garcia'],
	},
	{
		slug: 'armonizacion-facial',
		label: 'Armonización Facial',
		description: 'Procedimientos para mejorar la apariencia de la piel, disminuir envejecimiento o daño solar, estimular colágeno y rellenos faciales.',
		heroDescription: 'La armonización facial comprende procedimientos que ayudan a mejorar la apariencia de la piel, disminuyendo los síntomas del envejecimiento o daño solar, estimulando la formación de colágeno, disminuyendo líneas de expresión y utilizando rellenos faciales cuando sea necesario.',
		teamMemberSlugs: ['dra-catalina-garcia'],
	},
];
