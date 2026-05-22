import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Anchor, Text, Image,
	SimpleGrid, Blockquote
} from "@mantine/core";
import {
	IconShieldCheck,
	IconInfoCircle,
	IconSettings,
	IconDatabase,
	IconUsers,
	IconAlertTriangle
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const PactHseProject: React.FC = () => {
	const navigate = useNavigate();

	const pictures = [
		'assets/projects/pact-hse/1.png',
		'assets/projects/pact-hse/2.png',
		'assets/projects/pact-hse/3.png',
		'assets/projects/pact-hse/4.png',
		'assets/projects/pact-hse/5.png',
	];

	const slides = pictures.map(url => (
		<Carousel.Slide key={url}>
			<Image
				src={url}
				fit="contain"
				radius="md"
				alt="Aperçu de l'application PACT HSE"
				h={"100%"}
			/>
		</Carousel.Slide>
	));

	return (
		<Stack gap="xl" mx="auto">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Carousel withIndicators mb="xl" styles={{ viewport: { borderRadius: 20 } }} emblaOptions={{ loop: true }}>
					{slides}
				</Carousel>
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'cyan' }}><IconShieldCheck size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={1} size="h2" c="teal.8">PACT'HSE : gestion globale de la prévention des risques</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : plateforme web métier pour la conformité et la sécurité au travail.</Text>
						</Stack>
					</Group>
					<Badge color="teal" size="lg" variant="light">Application métier</Badge>
				</Group>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconInfoCircle size={20} /></ThemeIcon>
					<Title order={3}>1. Contexte, objectifs et problématique industrielle</Title>
				</Group>
				<Text ta="justify" mb="sm">
					La gestion de la sécurité, de l'hygiène et de l'environnement (HSE) au sein des moyennes et grandes entreprises repose trop souvent sur des 
					outils hétérogènes et décentralisés (tableaux Excel partagés, carnets de notes, échanges d'e-mails). 
					Ce manque de centralisation expose les structures à des failles de suivi réglementaire, à des lenteurs dans le traitement 
					des anomalies et à des risques réels d'accidents du travail par défaut de prévention.
				</Text>
				<Text ta="justify">
					Le projet <strong>PACT'HSE</strong> a été conçu comme une solution SaaS centralisée, agissant comme un "assistant quotidien" pour 
					piloter les processus HSE : évaluation des risques professionnels, remontée d'anomalies sur le terrain et planification automatique 
					des inspections périodiques.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconSettings size={20} /></ThemeIcon>
					<Title order={3}>2. Architecture technique et intégration de l'interface</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Pour répondre aux objectifs de rapidité de développement d'un produit commercialisable, nous avons opté pour une architecture 
					monolithique robuste sous <strong>Laravel</strong> :
				</Text>
				<Stack gap="sm" pl="md">
					<Text ta="justify">
						• <strong>Structure monolithe Laravel :</strong> l'ensemble de l'application (modélisation de données, contrôleurs de logique métier, 
						routage et rendu des interfaces via Blade) est hébergé au sein du même projet, garantissant une cohérence globale forte et simplifiant 
						les déploiements initiaux.
					</Text>
					<Text ta="justify">
						• <strong>Kit UI Premium (Envato) :</strong> pour accélérer la production d'une interface d'envergure professionnelle et cohérente, 
						j'ai intégré et adapté un kit UI acheté sur Envato. J'ai pris en charge son découpage en templates Blade réutilisables et sa dynamisation 
						en JavaScript natif (manipulation du DOM, graphiques dynamiques).
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconDatabase size={20} /></ThemeIcon>
					<Title order={3}>3. Conception de la base de données et logique métier complexe</Title>
				</Group>
				<Text ta="justify" mb="md">
					Mon travail full-stack a consisté à concevoir l'architecture de la base de données MySQL et à programmer l'ensemble de la logique applicative 
					sous Laravel pour les modules fondamentaux de la plateforme :
				</Text>
				<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Tableau de bord de conformité</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Création d'un dashboard en temps réel agrégeant les données des anomalies et des inspections pour calculer automatiquement les indicateurs 
							de performance et de conformité réglementaire de l'entreprise.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Plan d'action unique (PAU)</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Développement d'un module centralisé de gestion des tâches correctives. Chaque anomalie validée génère une action assignée à un collaborateur, 
							dotée d'une date d'échéance et d'un système de relance automatique.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Fiches d'anomalies</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Conception du workflow complet des fiches d'anomalies : déclaration simplifiée par l'opérateur de terrain, notification par e-mail au 
							responsable HSE de zone, et suivi de la résolution avec téléversement de preuves visuelles.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Planification des inspections</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Algorithme complexe de planification récurrente des contrôles et audits sécurité, calculant automatiquement les prochaines dates 
							d'inspection réglementaire de chaque équipement ou bâtiment.
						</Text>
					</Paper>
				</SimpleGrid>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconUsers size={20} /></ThemeIcon>
					<Title order={3}>4. Méthodologie agile, collaboration et phase de tests</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Le développement s'est opéré sous la supervision de mon chef de projet, avec qui j'ai collaboré étroitement pour affiner les spécifications 
					fonctionnelles de chaque écran de saisie. En fin de sprint, j'ai joué un rôle moteur dans l'organisation de la phase de bêta-test en interne. 
				</Text>
				<Text ta="justify">
					J'ai présenté les fonctionnalités développées aux testeurs internes, recueilli leurs retours concernant d'éventuels cas d'usage non couverts 
					ou bugs ergonomiques, et géré l'analyse et la transformation de leurs signalements en tâches de développement concrètes dans notre tableau 
					de suivi de projet. Cette méthodologie a permis d'optimiser l'expérience utilisateur avant l'intégration du produit final au catalogue d'Exelys.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconAlertTriangle size={20} /></ThemeIcon>
					<Title order={3} c="orange.5">5. Regard critique et opportunités d'amélioration</Title>
				</Group>
				<Text ta="justify" mb="md">
					Avec le recul technique, la conception de PACT'HSE présente deux axes majeurs de réflexion :
				</Text>
				<Blockquote color="orange" radius="md" py="xs" px="md">
					<strong>Le couplage fort du monolithe et les limites du kit UI :</strong> le choix d'intégrer un kit UI d'Envato a été un excellent accélérateur 
					initial, mais a complexifié la personnalisation fine de composants spécifiques sortant du cadre pré-établi. De plus, la structure monolithique 
					(Blade couplé à Laravel) limite l'évolutivité du produit. Pour un projet d'une telle envergure, concevoir une API RESTful Laravel asynchrone 
					découplée d'un frontend moderne autonome (en React par exemple) aurait offert une meilleure modularité et facilité le travail collaboratif 
					à l'échelle de l'équipe de développement.
				</Blockquote>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate('/competences/laravel')} size="sm" fw={500}>Laravel</Anchor> •
					<Anchor onClick={() => navigate('/competences/mysql')} size="sm" fw={500}>MySQL</Anchor> •
					<Anchor onClick={() => navigate('/competences/javascript')} size="sm" fw={500}>JavaScript</Anchor> •
					<Anchor onClick={() => navigate('/competences/html')} size="sm" fw={500}>HTML</Anchor> •
					<Anchor onClick={() => navigate('/competences/css')} size="sm" fw={500}>CSS</Anchor> •
					<Anchor onClick={() => navigate('/competences/rigueur')} size="sm" fw={500}>Rigueur & organisation</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default PactHseProject;