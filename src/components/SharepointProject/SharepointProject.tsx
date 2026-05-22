import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Anchor, Text, SimpleGrid,
	Blockquote
} from "@mantine/core";
import {
	IconBuildingCommunity,
	IconInfoCircle,
	IconBrandReact,
	IconDeviceDesktop,
	IconUsers,
	IconAlertTriangle
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SharepointProject: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'teal' }}><IconBuildingCommunity size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={1} size="h2" c="blue.8">Modernisation d'intranets sur Microsoft 365</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : développement SPFx (React/TypeScript) et extension Power Platform.</Text>
						</Stack>
					</Group>
					<Badge color="blue" size="lg" variant="light">Expérience professionnelle</Badge>
				</Group>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconInfoCircle size={20} /></ThemeIcon>
					<Title order={3}>1. Contexte, objectifs et contraintes d'intégration</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans le cadre de mes fonctions chez Exelys, je suis régulièrement intervenu auprès de divers clients d'envergure dont les espaces intranets SharePoint Online 
					étaient sous-utilisés. Les fonctionnalités d'origine (out-of-the-box) de Microsoft 365 s'avérant trop restrictives pour répondre 
					à leurs besoins métiers spécifiques, l'objectif était de concevoir et de déployer des composants sur mesure hautement interactifs.
				</Text>
				<Text ta="justify">
					L'enjeu majeur de ces projets résidait dans l'adhésion des collaborateurs et l'intégration transparente. Il était indispensable de concevoir des outils qui 
					s'intègrent parfaitement à la charte graphique de chaque entreprise, tout en respectant scrupuleusement les contraintes de sécurité et d'authentification imposées 
					par l'environnement Microsoft de nos clients.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconBrandReact size={20} /></ThemeIcon>
					<Title order={3}>2. Architecture technique frontend : SPFx, React et TypeScript</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Pour étendre l'expérience SharePoint sans dégrader les performances, j'ai développé des extensions de composants appelées 
					&nbsp;<strong>WebParts</strong> en exploitant le <strong>SharePoint Framework (SPFx)</strong>. 
					Ma démarche technique s'est structurée autour des bonnes pratiques de l'écosystème React :
				</Text>
				<Stack gap="sm" pl="md">
					<Text ta="justify">
						• <strong>Abstraction et custom hooks :</strong> afin de séparer la couche d'affichage de la logique de récupération des données, 
						j'ai développé des <em>custom hooks React</em>. Ces hooks encapsulent l'appel aux sources de données, 
						tout en orchestrant de manière centralisée les états de chargement (<code>loading</code>), de gestion des erreurs (<code>error</code>), 
						et la mise à jour des états locaux.
					</Text>
					<Text ta="justify">
						• <strong>Consommation des APIs Microsoft 365 :</strong> pour interroger les listes SharePoint et les données 
						d'annuaire, j'ai exploité de manière intensive la bibliothèque <code>@pnp/sp</code>. Dès que le besoin exigeait 
						d'interagir avec les services Office (comme Outlook ou Teams), j'ai configuré des connexions sécurisées vers l'API 
						Microsoft Graph en utilisant <code>@pnp/graph</code> ou l'objet natif d'SPFx <code>MSGraphClientFactory</code>.
					</Text>
					<Text ta="justify">
						• <strong>Encapsulation des styles (SCSS modules) :</strong> pour éviter les conflits d'affichage entre mes composants 
						sur mesure et les styles globaux de la page SharePoint, j'ai encapsulé la mise en forme de chaque Web Part à l'aide 
						des <em>CSS modules</em> en SCSS.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconDeviceDesktop size={20} /></ThemeIcon>
					<Title order={3}>3. Conception de composants métiers sur mesure</Title>
				</Group>
				<Text ta="justify" mb="md">
					Mon rôle m'a amené à concevoir plusieurs solutions applicatives complexes répondant à des besoins très divers :
				</Text>
				<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Carte interactive (World Map)</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Développement d'une carte du monde interactive affichant des fiches d'informations dynamiques sur les différents projets 
							d'un client, connectée en temps réel à des listes SharePoint.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Organigrammes dynamiques</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Conception d'organigrammes interactifs affichant la structure hiérarchique d'une équipe. Le composant génère l'affichage en exploitant 
							de manière récursive les relations "Manager/Collaborateur" déclarées dans Microsoft Graph.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Moteurs de recherche sur mesure</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Création d'interfaces de recherche avancées dotées de filtres multi-critères synchronisés. Ces outils permettent aux collaborateurs 
							de retrouver rapidement des documents ou des procédures clés.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Intégration d'agents IA</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Développement de WebParts dédiées permettant d'encapsuler et d'ouvrir de manière transparente des agents IA personnalisés 
							(Copilot Studio) directement au sein des pages de l'intranet.
						</Text>
					</Paper>
				</SimpleGrid>
				<Text ta="justify" mt="md">
					En complément de ces WebParts en code pur, j'ai étendu les capacités de la <strong>Power Platform</strong>. J'ai notamment utilisé
					&nbsp;<strong>Power Apps</strong> pour concevoir des formulaires de saisie SharePoint complexes enrichis de logique conditionnelle 
					(visibilité de champs en fonction du profil de l'utilisateur), et configuré des flux de travail automatisés via <strong>Power Automate</strong> 
					&nbsp;pour sécuriser le traitement des données et notifier automatiquement les équipes par courriel.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconUsers size={20} /></ThemeIcon>
					<Title order={3}>4. Suivi de projet, posture et relation client</Title>
				</Group>
				<Text ta="justify" mb="sm">
					La modernisation d'intranets est un exercice qui requiert d'excellentes compétences en communication. J'ai participé activement aux points de suivi 
					hebdomadaires avec les clients. Mon rôle consistait à présenter les avancées visuelles et fonctionnelles de l'application, mais surtout à vulgariser 
					nos contraintes techniques auprès d'interlocuteurs non-informaticiens (directions des ressources humaines ou de la communication).
				</Text>
				<Text ta="justify">
					Cette posture d'écoute m'a permis de créer une véritable boucle de feedback : chaque démonstration était l'occasion de confronter notre travail aux 
					usages réels des collaborateurs, de noter leurs suggestions d'ergonomie et de réajuster notre planification dans un esprit d'agilité pour garantir 
					le succès de la livraison.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconAlertTriangle size={20} /></ThemeIcon>
					<Title order={3} c="orange.5">5. Analyse critique et adaptabilité face aux contraintes</Title>
				</Group>
				<Text ta="justify" mb="md">
					Le travail au sein de l'environnement Cloud fermé de Microsoft impose de composer avec des contraintes de sécurité d'infrastructure souvent infranchissables :
				</Text>
				<Blockquote color="orange" radius="md" py="xs" px="md">
					<strong>Faire avec les contraintes d'administration et de sécurité :</strong> Les politiques de sécurité très strictes de nos 
					clients interdisent généralement d'approuver ou d'accorder de nouveaux droits d'accès généraux 
					(comme de nouveaux scopes d'API Microsoft Graph étendus au locataire entier). Plutôt que de formuler des demandes d'accès 
					complexes qui se heurtent aux exigences de sécurité internes, j'ai appris à composer intelligemment avec les droits d'API 
					déjà accordés par défaut. Cela m'a poussé à être créatif techniquement, par exemple en exploitant de manière ciblée les requêtes d'API SharePoint REST 
					d'origine pour contourner les limitations de permissions sans jamais amoindrir le niveau de sécurité imposé par le client.
				</Blockquote>
				<Text ta="justify" mt="md">
					Cette "gymnastique technique" est essentielle en entreprise : elle permet de livrer des solutions fonctionnelles et dynamiques tout 
					en respectant scrupuleusement le cadre de sécurité existant du client.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate("/competences/react")} size="sm" fw={500}>React (SPFx)</Anchor> •
					<Anchor onClick={() => navigate("/competences/css")} size="sm" fw={500}>CSS (SCSS Modules)</Anchor> •
					<Anchor onClick={() => navigate("/competences/relation-client")} size="sm" fw={500}>Relation Client</Anchor> •
					<Anchor onClick={() => navigate("/competences/rigueur")} size="sm" fw={500}>Rigueur & Organisation</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default SharepointProject;