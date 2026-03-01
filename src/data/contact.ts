export type BusinessHour = {
	day: string;
	time: string;
};

export const businessHours: BusinessHour[] = [
	{ day: 'Lunes a jueves', time: '09:00 a 19:00 hrs.' },
	{ day: 'Viernes', time: '09:00 a 18:00 hrs.' },
	{ day: 'Sábados', time: '08:00 a 13:00 hrs.' },
	{ day: 'Domingos y feriados', time: 'Cerrado' },
];
