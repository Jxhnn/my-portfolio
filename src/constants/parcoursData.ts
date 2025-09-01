
import type ParcoursItem from "../interfaces/ParcoursItem";

export const parcoursList: ParcoursItem[] = [
	{
		type: 'experience',
		period: 'Depuis septembre 2022',
		title: 'Développeur web en alternance',
		company: {
			name: 'Exelys - Digital partner',
			logo: '/assets/logos/exelys.jpg',
			link: 'https://www.exelys.net/'
		},
		details: {
			status: 'alternant (mastère & licence pro.)',
			missions: [
				"Développement de composants React sur mesure pour des intranets SharePoint (SPFx).",
				"Modernisation et maintenance d'applications web existantes (TMA sur Phidias3).",
				"Création d'API RESTful avec Laravel pour des applications mobiles (ARMEL TMS).",
				"Collaboration en équipe via des outils de gestion de projet et Git."
			],
			vision: "Mon rôle chez Exelys m'a permis de passer de la théorie à la pratique sur des projets clients concrets, en me confrontant à des problématiques de maintenabilité et de travail d'équipe.",
			relatedProjects: [
				{ id: 'sharepoint-custom', label: 'Rélisations sur SharePoint Online' },
				{ id: 'phidias', label: 'Projet Phidias' },
				{ id: 'armel-tms', label: 'Projet ARMEL TMS' },
			],
			relatedSkills: [
				{ id: 'html', label: 'HTML' },
				{ id: 'css', label: 'CSS' },
				{ id: 'css', label: 'JavaScript' },
				{ id: 'react', label: 'React' },
				{ id: 'laravel', label: 'Laravel' },
				{ id: 'rigueur', label: 'Rigueur & organisation' },
				{ id: 'relation-client', label: 'Relation client' },
				{ id: 'curiosite', label: 'Curiosité & apprentissage' },
				{ id: 'rigueur', label: 'Rigueur & organisation' },
			]
		}
	},
	{
		type: 'experience',
		period: 'Mai 2021 - juin 2021',
		title: 'Stage en développement informatique',
		company: {
			name: 'Centre de loisirs d\'Artigueloutan',
			logo: '/assets/logos/lespep64.jpg',
			link: 'https://www.pep64.org/'
		},
		details: {
			status: 'stagiaire (BTS SIO)',
			missions: [
				"Analyse du besoin et conception de la base de données MySQL.",
				"Développement de l'application de A à Z en PHP, HTML, CSS et JavaScript.",
			],
			vision: "Ce fut ma première expérience de A à Z, un véritable apprentissage accéléré qui a confirmé ma passion pour la création de solutions web.",
			relatedProjects: [
				{ id: 'site-reservation-acm', label: 'Plateforme de gestion pour centre de loisirs' }
			],
			relatedSkills: [
				{ id: 'html', label: 'HTML' },
				{ id: 'javascript', label: 'JavaScript' },
				{ id: 'php', label: 'PHP' },
				{ id: 'mysql', label: 'MySQL' },
				{ id: 'autonomie', label: 'Autonomie & proactivité' },
			]
		}
	},
	{
		type: 'experience',
		period: '2020 (30 jours)',
		title: 'Stage de maintenance d\'infrastructure',
		company: { 
			name: 'GFI Informatique, Pau', 
			logo: '/assets/logos/gfi.jpeg',
			link: 'https://www.inetum.com/fr'
		},
		details: {
			status: 'stagiaire (bac pro.)',
			missions: ["Maintenance d'infrastructure informatique en environnement professionnel (observation).", "Développement de petits logiciels et scripts pour des besoins internes."],
			relatedProjects: [],
			relatedSkills: [{ id: 'curiosite', label: 'Curiosité & apprentissage' }]
		}
	},
	{
		type: 'experience',
		period: '2019 (30 jours)',
		title: 'Stage de développement informatique',
		company: { 
			name: 'SDIS64, Pau', 
			logo: '/assets/logos/sdis64.png',
			link: 'https://www.sdis64.fr/'
		},
		details: {
			status: 'stagiaire (bac pro.)',
			missions: ["Développement logiciel sur du matériel informatique spécifique (hardware dédié).", "Découverte des contraintes du développement bas-niveau."],
			relatedProjects: [],
			relatedSkills: [{ id: 'curiosite', label: 'Curiosité & apprentissage' }]
		}
	},
	{
		type: 'experience',
		period: '2019 (30 jours)',
		title: 'Stage de réparation d\'ordinateurs',
		company: { 
			name: 'IDV64, Assat', 
			logo: '/assets/logos/idv64.png',
			link: 'https://www.idv64.fr/'
		},
		details: {
			status: 'stagiaire (bac pro.)',
			missions: ["Diagnostic de pannes hardware et software.", "Maintenance et réparation d'ordinateurs et d'objets connectés."],
			relatedProjects: [],
			relatedSkills: [{ id: 'autonomie', label: 'Autonomie & Proactivité' }]
		}
	},
	{
		type: 'formation',
		period: 'Depuis septembre 2023',
		title: 'Mastère expert en ingénierie logicielle',
		company: {
			name: 'ISCOD',
			logo: '/assets/logos/iscod.jpg',
			link: 'https://www.iscod.fr/',
		},
		details: {
			status: 'étudiant en alternance',
			missions: [
				"Architecture logicielle avancée.",
				"Gestion de projet.",
				"Sécurité des applications et des infrastructures.",
			],
			vision: "L'ISCOD me permet d'acquérir une vision de haut niveau sur la conception de logiciels, en complément de mon expérience technique en entreprise.",
			relatedProjects: [],
			relatedSkills: []
		}
	},
	{
		type: 'formation',
		period: '2022 - 2023',
		title: 'Licence professionnelle DAWIN',
		company: {
			name: 'IUT de Bordeaux, Gradignan',
			logo: '/assets/logos/iut-bordeaux.jpg',
			link: 'https://www.iut.u-bordeaux.fr/info/',
		},
		details: {
			status: 'étudiant en alternance',
			missions: [
				"Développement en application web et innovation numérique.",
				"Approfondissement des languages web (JavaScript, SQL, ...).",
				"Projets tuteurés en équipe.",
			],
			relatedProjects: [],
			relatedSkills: []
		}
	},
	{
		type: 'formation',
		period: '2020 - 2022',
		title: 'BTS SIO - Option SLAM',
		company: {
			name: 'Lycée Saint John Perse, Pau',
			logo: '/assets/logos/sjp.jpeg',
			link: 'https://www.lycee-saint-john-perse.fr/',
		},
		details: {
			status: 'étudiant',
			missions: [
				"Algorithmique et programmation (Java).",
				"Conception de bases de données (SQL).",
				"Développement web (PHP, JavaScript, SQL).",
			],
			relatedProjects: [],
			relatedSkills: []
		}
	},
	{
		type: 'formation',
		period: '2017 - 2020',
		title: 'Baccalauréat pro. Systèmes Numériques (option RISC) (mention bien)',
		company: { name: 'Lycée Saint Cricq, Pau', logo: '/assets/logos/saint-cricq.png', link: 'https://www.lycee-saint-cricq.org/' },
		details: {
			status: 'lycéen',
			missions: ["Administration des systèmes et des réseaux.", "Bases de la programmation et de l'électronique."],
			vision: "Cette formation a été la porte d'entrée de ma passion pour l'informatique, en me donnant des bases solides sur le fonctionnement des réseaux et des systèmes.",
			relatedProjects: [],
			relatedSkills: []
		}
	},
];