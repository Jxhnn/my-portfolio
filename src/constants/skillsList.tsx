
import type Skill from "../interfaces/Skill";
import type SkillChartData from "../interfaces/SkillChartData";
import ReactSkill from "../components/ReactSkill/ReactSkill";
import JavascriptSkill from "../components/JavascriptSkill/JavascriptSkill";
import PHPSkill from "../components/PHPSkill/PHPSkill";
import HTMLSkill from "../components/HTMLSkill/HTMLSkill";
import CSSSkill from "../components/CSSSkill/CSSSkill";
import LaravelSkill from "../components/LaravelSkill/LaravelSkill";
import SQLSkill from "../components/SQLSkill/SQLSkill";
import AutonomySkill from "../components/AutonomySkill/AutonomySkill";
import RelationClientSkill from "../components/RelationClientSkill/RelationClientSkill";
import CuriositySkill from "../components/CuriositySkill/CuriositySkill";
import OrganisationSkill from "../components/OrganisationSkill/OrganisationSkill";

export const technicalSkillsList: Skill[] = [
	{
		id: 'react',
		title: 'React',
		picture: 'assets/react.svg',
		level: 'Intermédiaire',
		description: (<ReactSkill />)
	},
	{
		id: 'javascript',
		title: 'JavaScript',
		picture: 'assets/js.svg',
		level: 'Avancé',
		description: (<JavascriptSkill />)
	},
	{
		id: 'php',
		title: 'PHP',
		picture: 'assets/php.svg',
		level: 'Intermédiaire',
		description: (<PHPSkill />)
	},
	{
		id: 'html',
		title: 'HTML',
		picture: 'assets/html.svg',
		level: 'Avancé',
		description: (<HTMLSkill />)
	},
	{
		id: 'css',
		title: 'CSS',
		picture: 'assets/css.svg',
		level: 'Avancé',
		description: (<CSSSkill />)
	},
	{
		id: 'laravel',
		title: 'Laravel',
		level: 'Avancé',
		picture: 'assets/laravel.svg',
		description: (<LaravelSkill />)
	},
	{
		id: 'mysql',
		title: 'MySQL',
		level: 'Avancé',
		picture: 'assets/mysql.svg',
		description: (<SQLSkill />)
	},
];

export const technicalSkillsChartData: SkillChartData[] = [
	{ skill: "React", level: 65 },
	{ skill: "JavaScript", level: 85 },
	{ skill: "PHP", level: 65 },
	{ skill: "HTML", level: 85 },
	{ skill: "CSS", level: 85 },
	{ skill: "Laravel", level: 85 },
	{ skill: "MySQL", level: 85 },
];

export const humanSkillsList: Skill[] = [
	{
		id: 'autonomie',
		title: "Autonomie & proactivité",
		level: "Intermédiaire",
		picture: "/assets/autonomy.png",
		description: (<AutonomySkill />),
	},
	{
		id: 'relation-client',
		title: "Relation client",
		level: "Débutant",
		picture: "/assets/public-relation.png",
		description: (<RelationClientSkill />),
	},
	{
		id: 'curiosite',
		title: "Curiosité & apprentissage",
		level: "Avancé",
		picture: "/assets/curiosity.png",
		description: (<CuriositySkill />),
	},
	{
		id: 'rigueur',
		title: "Rigueur & organisation",
		level: "Intermédiaire",
		picture: "/assets/discipline.png",
		description: (<OrganisationSkill />),
	},
];

export const humanSkillsChartData: SkillChartData[] = [
	{ skill: "Autonomie", level: 65 },
	{ skill: "Relation Client", level: 30 },
	{ skill: "Curiosité", level: 85 },
	{ skill: "Rigueur", level: 65 },
];
