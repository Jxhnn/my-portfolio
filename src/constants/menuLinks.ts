
import { projectsList } from "./projectsList";
import { humanSkillsList, technicalSkillsList } from "./skillsList";

const technicalSublinks = technicalSkillsList.map(skill => ({
	label: skill.title,
	link: `/competences/${skill.id}`,
}));

const humanSublinks = humanSkillsList.map(skill => ({
	label: skill.title,
	link: `/competences/${skill.id}`,
}));

const realisationsSublinks = projectsList.map(project => ({
	label: project.title,
	link: `/realisations/${project.id}`,
}));

const menuLinks = [
	{
		label: 'Accueil',
		link: '/'
	},
	{
		label: 'A propos de moi',
		link: '/about'
	},
	{
		label: 'Compétences',
		link: '/competences',
		sublinks: {
			technical: technicalSublinks,
			human: humanSublinks,
		}
	},
	{
		label: 'Réalisations',
		link: '/realisations',
		sublinks: realisationsSublinks
	},
	{
		label: 'Contact',
		link: '/contact'
	}
];

export default menuLinks;