
import { Accordion, Group, Paper, Stack, ThemeIcon, Title, Text, List, Code, Badge, Timeline, Blockquote, Anchor } from "@mantine/core";
import type TechnicalSkill from "../Skills/interfaces/TechnicalSkill";
import { IconAccessible, IconApi, IconArrowsShuffle, IconAspectRatio, IconBolt, IconBoxModel, IconBrain, IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandLaravel, IconBrandMongodb, IconBrandNodejs, IconBrandPhp, IconBrandReact, IconBrowser, IconBulb, IconChartDots3, IconChecklist, IconCode, IconDatabase, IconDeviceDesktop, IconDeviceGamepad2, IconDeviceMobile, IconEye, IconFileCode, IconFileText, IconFilter, IconGrowth, IconJson, IconKey, IconLayout, IconLayout2, IconLayoutGrid, IconMessage, IconMessages, IconPalette, IconPhoneCall, IconPuzzle, IconRobot, IconRocket, IconSchema, IconServer, IconTable, IconTarget, IconTerminal2, IconTools, IconTrendingUp, IconWorldWww } from "@tabler/icons-react";
import type SkillChartData from "../Skills/interfaces/SkillChartData";
import ReactSkill from "../components/ReactSkill/ReactSkill";
import JavascriptSkill from "../components/JavascriptSkill/JavascriptSkill";
import PHPSkill from "../components/PHPSkill/PHPSkill";
import HTMLSkill from "../components/HTMLSkill/HTMLSkill";
import CSSSkill from "../components/CSSSkill/CSSSkill";
import LaravelSkill from "../components/LaravelSkill/LaravelSkill";
import SQLSkill from "../components/SQLSkill/SQLSkill";

export const technicalSkillsList: TechnicalSkill[] = [
	{
		id: 'react',
		title: 'React',
		projects: [],
		picture: 'assets/react.svg',
		level: 'Intermédiaire',
		description: (<ReactSkill />)
	},
	{
		id: 'javascript',
		title: 'JavaScript',
		projects: [],
		picture: 'assets/js.svg',
		level: 'Avancé',
		description: (<JavascriptSkill />)
	},
	{
		id: 'php',
		title: 'PHP',
		projects: [],
		picture: 'assets/php.svg',
		level: 'Intermédiaire',
		description: (<PHPSkill />)
	},
	{
		id: 'html',
		title: 'HTML',
		projects: [],
		picture: 'assets/html.svg',
		level: 'Avancé',
		description: (<HTMLSkill />)
	},
	{
		id: 'css',
		title: 'CSS',
		projects: [],
		picture: 'assets/css.svg',
		level: 'Avancé',
		description: (<CSSSkill />)
	},
	{
		id: 'laravel',
		title: 'Laravel',
		level: 'Avancé',
		picture: 'assets/laravel.svg',
		projects: [],
		description: (<LaravelSkill />)
	},
	{
		id: 'mysql',
		title: 'MySQL',
		projects: [],
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

export const humanSkillsList: TechnicalSkill[] = [
	{
		id: 'autonomie',
		title: "Autonomie & proactivité",
		level: "Intermédiaire",
		picture: "/assets/autonomy.png",
		projects: [],
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
							<IconRocket size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence humaine : autonomie & proactivité</Title>
					</Group>
					<Text size="lg">
						Au-delà de la simple capacité à travailler seul, l'autonomie est la prise d'initiative et l'appropriation des sujets. La proactivité consiste à anticiper les besoins et à proposer des solutions avant même que les problèmes ne surviennent.
					</Text>
				</Paper>
				<Accordion variant="separated" defaultValue="manifestation">
					<Accordion.Item value="manifestation">
						<Accordion.Control icon={<IconBulb size={20} color="var(--mantine-color-yellow-6)" />}>
							<Title order={4}>Manifestation au quotidien</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="sm">
								<List.Item><b>Recherche de solutions :</b> explorer la documentation et tester des approches avant de solliciter de l'aide.</List.Item>
								<List.Item><b>Prise d'initiative :</b> suggérer des améliorations (performance, UX, qualité de code) qui n'étaient pas explicitement demandées.</List.Item>
								<List.Item><b>Anticipation des risques :</b> identifier les points de blocage potentiels ou la dette technique et alerter l'équipe en amont.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="impact">
						<Accordion.Control icon={<IconTarget size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Impact sur un projet</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>Un développeur autonome et proactif est un moteur pour l'équipe. Il accélère le développement, améliore la qualité globale du projet et libère du temps pour le reste de l'équipe.</Text>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">Pourquoi cette compétence est essentielle ?</Title>
					<Group>
						<Badge color="blue" variant="outline">Efficacité</Badge>
						<Badge color="grape" variant="outline">Prise d'initiative</Badge>
						<Badge color="teal" variant="outline">Fiabilité</Badge>
					</Group>
				</Paper>
			</Stack>
		),
	},
	{
		id: 'relation-client',
		title: "Relation client",
		level: "Débutant",
		picture: "/assets/public-relation.png",
		projects: [],
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
							<IconPhoneCall size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence humaine : relation client</Title>
					</Group>
					<Text size="lg">
						La relation client pour un développeur consiste à comprendre les besoins de l'utilisateur final, à communiquer clairement l'avancement technique et à gérer les attentes pour garantir que le produit final correspond à la vision du client. C'est une compétence que je suis activement en train de développer.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="manifestation">
					<Accordion.Item value="manifestation">
						<Accordion.Control icon={<IconMessage size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Mise en pratique</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="sm">
								<List.Item><b>Écoute active :</b> comprendre en profondeur les demandes et les problématiques du client lors des réunions de brief.</List.Item>
								<List.Item><b>Vulgarisation technique :</b> expliquer des concepts complexes de manière simple à des interlocuteurs non-techniques.</List.Item>
								<List.Item><b>Réactivité :</b> apporter des réponses claires et rapides aux questions du client sur l'avancement du projet.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="impact">
						<Accordion.Control icon={<IconTarget size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Impact sur un projet</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>Une bonne relation client est cruciale : elle assure l'adéquation entre le besoin et la solution développée, renforce la confiance et garantit la satisfaction finale, menant à des collaborations sur le long terme.</Text>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">Pourquoi cette compétence est importante ?</Title>
					<Group>
						<Badge color="blue" variant="outline">Écoute & Compréhension</Badge>
						<Badge color="grape" variant="outline">Communication Claire</Badge>
						<Badge color="teal" variant="outline">Confiance & Satisfaction</Badge>
					</Group>
				</Paper>
			</Stack>
		),
	},
	{
		id: 'curiosite',
		title: "Curiosité & apprentissage",
		level: "Avancé",
		picture: "/assets/curiosity.png",
		projects: [],
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
							<IconGrowth size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence humaine : curiosité & apprentissage</Title>
					</Group>
					<Text size="lg">
						Dans un domaine en perpétuelle évolution comme l'informatique, la curiosité n'est pas une option, c'est une nécessité. C'est le moteur qui pousse à la veille technologique, à l'expérimentation et à la remise en question pour toujours progresser.
					</Text>
				</Paper>
				<Accordion variant="separated" defaultValue="manifestation">
					<Accordion.Item value="manifestation">
						<Accordion.Control icon={<IconBrain size={20} color="var(--mantine-color-pink-6)" />}>
							<Title order={4}>Manifestation au quotidien</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="sm">
								<List.Item><b>Veille technologique active :</b> suivre des blogs, des newsletters et des conférences pour se tenir informé des nouvelles tendances.</List.Item>
								<List.Item><b>Expérimentation :</b> tester de nouvelles bibliothèques ou de nouveaux langages sur des projets personnels pour évaluer leur pertinence.</List.Item>
								<List.Item><b>Partage de connaissances :</b> présenter ses découvertes à l'équipe pour faire monter tout le monde en compétence.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="impact">
						<Accordion.Control icon={<IconTarget size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Impact sur un projet</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>La curiosité permet d'éviter la stagnation technologique d'un projet. Elle favorise l'innovation, l'adoption d'outils plus performants et maintient une dynamique de progrès au sein de l'équipe.</Text>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">Pourquoi cette compétence est essentielle ?</Title>
					<Group>
						<Badge color="blue" variant="outline">Innovation</Badge>
						<Badge color="grape" variant="outline">Adaptabilité</Badge>
						<Badge color="teal" variant="outline">Performance</Badge>
					</Group>
				</Paper>
			</Stack>
		),
	},
	{
		id: 'rigueur',
		title: "Rigueur & organisation",
		level: "Intermédiaire",
		picture: "/assets/discipline.png",
		projects: [],
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
							<IconChecklist size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence humaine : rigueur & organisation</Title>
					</Group>
					<Text size="lg">
						La rigueur est le fondement de la qualité logicielle. Elle se traduit par une attention aux détails, le respect des bonnes pratiques et des conventions établies. L'organisation permet de gérer ses tâches efficacement et de livrer un travail structuré.
					</Text>
				</Paper>
				<Accordion variant="separated" defaultValue="manifestation">
					<Accordion.Item value="manifestation">
						<Accordion.Control icon={<IconChecklist size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Manifestation au quotidien</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="sm">
								<List.Item><b>Qualité du code :</b> écrire un code lisible, commenté et respectant les standards de l'équipe (linting, conventions de nommage).</List.Item>
								<List.Item><b>Tests :</b> mettre en place des tests (unitaires, d'intégration) pour garantir la non-régression et la fiabilité des fonctionnalités.</List.Item>
								<List.Item><b>Gestion des tâches :</b> découper son travail en tâches claires et suivre leur avancement dans l'outil de gestion de projet.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="impact">
						<Accordion.Control icon={<IconTarget size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Impact sur un projet</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>Un développeur rigoureux réduit considérablement le nombre de bugs, facilite la maintenance du code et rend le projet plus facile à appréhender pour les nouveaux arrivants. Cela garantit la pérennité de l'application.</Text>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">Pourquoi cette compétence est essentielle ?</Title>
					<Group>
						<Badge color="blue" variant="outline">Qualité du Code</Badge>
						<Badge color="grape" variant="outline">Maintenabilité</Badge>
						<Badge color="teal" variant="outline">Fiabilité</Badge>
					</Group>
				</Paper>
			</Stack>
		),
	},
];

export const humanSkillsChartData: SkillChartData[] = [
	{ skill: "Autonomie", level: 65 },
	{ skill: "Relation Client", level: 30 },
	{ skill: "Curiosité", level: 85 },
	{ skill: "Rigueur", level: 65 },
];
