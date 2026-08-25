import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Anchor, Text, Image,
	Blockquote
} from "@mantine/core";
import {
	IconShieldCheck,
	IconInfoCircle,
	IconSettings,
	IconDatabase,
	IconUsers,
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
							<Title order={1} size="h2" c="teal.8">PACT'HSE : gestion de la prévention des risques</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : plateforme web SaaS et agrégation 
								de données complexes.</Text>
						</Stack>
					</Group>
					<Badge color="teal" size="lg" variant="light">Produit sur étagère</Badge>
				</Group>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconInfoCircle size={20} /></ThemeIcon>
					<Title order={3}>1. Contexte, objectifs et problématique industrielle</Title>
				</Group>
				<Text ta="justify" mb="sm">
					La gestion de la sécurité, de l'hygiène et de l'environnement (HSE) au sein des entreprises repose 
					trop souvent sur des outils hétérogènes et décentralisés (tableaux Excel, carnets de notes, e-mails). 
					Ce manque de centralisation expose les structures à des failles de suivi réglementaire et à des 
					risques réels d'accidents du travail par défaut de prévention.
				</Text>
				<Text ta="justify">
					Le projet <strong>PACT'HSE</strong> a été initié par Exelys comme un "produit sur étagère". 
					L'objectif était de concevoir de zéro une solution SaaS centralisée hautement générique, 
					destinée à être commercialisée auprès de futures entreprises clientes. Elle devait agir comme 
					un assistant quotidien pour piloter l'évaluation des risques, la remontée d'anomalies sur le 
					terrain et la planification des inspections périodiques.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconSettings size={20} /></ThemeIcon>
					<Title order={3}>2. Architecture technique et intégration de l'interface</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Pour répondre aux impératifs de rapidité de développement d'un produit destiné à la 
					commercialisation, l'architecture a été pensée autour d'un monolithe robuste 
					sous <strong>Laravel</strong>. Ce choix a permis de conserver l'ensemble de la logique 
					applicative (modélisation, contrôleurs, routage) au sein du même environnement, 
					garantissant une cohérence forte.
				</Text>
				<Text ta="justify">
					Côté frontend, j'ai pris en charge l'intégration d'un kit UI Premium (issu d'Envato). 
					Mon travail d'ingénierie a consisté à découper ce kit monolithique en composants et 
					templates Blade hautement réutilisables. J'ai également dynamisé ces interfaces en 
					JavaScript natif pour gérer les intéractions complexes et l'affichage des graphiques 
					de suivi, offrant ainsi un rendu professionnel dès la première version du produit.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconDatabase size={20} /></ThemeIcon>
					<Title order={3}>3. Le défi technique : l'algorithmique du plan d'action unifié</Title>
				</Group>
				<Text ta="justify" mb="md">
					Le véritable cœur technique du projet a été la conception du "Plan d'action unique" (PAU). 
					La difficulté majeure résidait dans la nécessité d'agréger au sein d'un même calendrier 
					global des entités aux structures de données totalement différentes : les suivis 
					réglementaires, les inspections générales planifiées et les fiches d'anomalies instantanées.
				</Text>
				<Blockquote color="teal" radius="md" py="xs" px="md">
					<strong>Preuve de réalisation :</strong> j'ai dû concevoir une logique de requêtage SQL 
					avancée via l'ORM Eloquent pour unifier ces sources disparates. L'algorithme développé 
					permet d'extraire, de normaliser à la volée, puis de fusionner chronologiquement ces événements. 
					Le rendu final se traduit par un calendrier global interactif, filtrable dynamiquement 
					(vision globale pour la direction, ou vision restreinte aux tâches d'un seul utilisateur), 
					garantissant ainsi qu'aucune action corrective ne soit oubliée.
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconUsers size={20} /></ThemeIcon>
					<Title order={3}>4. Méthodologie agile et itérations de conception</Title>
				</Group>
				<Text ta="justify">
					Le développement de cette logique complexe s'est opéré en étroite collaboration avec mon 
					chef de projet. Nous avons fonctionné par itérations courtes, validant chaque étape du 
					workflow des anomalies (de la déclaration par l'opérateur jusqu'au téléversement des 
					preuves visuelles de résolution). J'ai organisé plusieurs sessions de présentation interne 
					chez Exelys pour confronter mon algorithme de planification aux cas d'usage réels imaginés 
					par l'équipe, transformant chaque retour en optimisation technique immédiate.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder mt="xl">
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate('/competences/laravel')} size="sm" fw={500}>Laravel</Anchor> •
					<Anchor onClick={() => navigate('/competences/mysql')} size="sm" fw={500}>MySQL / Algorithmique</Anchor> •
					<Anchor onClick={() => navigate('/competences/javascript')} size="sm" fw={500}>JavaScript</Anchor> •
					<Anchor onClick={() => navigate('/competences/html')} size="sm" fw={500}>HTML / CSS</Anchor> •
					<Anchor onClick={() => navigate('/competences/rigueur')} size="sm" fw={500}>Rigueur & organisation</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default PactHseProject;