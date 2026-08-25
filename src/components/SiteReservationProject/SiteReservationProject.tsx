import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Anchor, Text, Image,
	Blockquote
} from "@mantine/core";
import {
	IconTargetArrow,
	IconInfoCircle,
	IconDatabase,
	IconLock,
	IconCode,
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SiteReservationProject: React.FC = () => {
	const navigate = useNavigate();

	const pictures = [
		'assets/projects/site-reservation/1.png',
		'assets/projects/site-reservation/2.png',
		'assets/projects/site-reservation/3.png',
		'assets/projects/site-reservation/4.png',
		'assets/projects/site-reservation/5.png'
	];

	const slides = pictures.map((url) => (
		<Carousel.Slide key={url}>
			<Image
				src={url}
				fit="contain"
				radius="md"
				alt="Aperçu de la plateforme ACM Artigueloutan"
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
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}><IconTargetArrow size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={1} size="h2" c="blue.8">Plateforme de gestion pour centre de loisirs</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : numérisation d'un processus métier et refonte UI/UX.</Text>
						</Stack>
					</Group>
					<Badge color="blue" size="lg" variant="light">Projet de Stage</Badge>
				</Group>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconInfoCircle size={20} /></ThemeIcon>
					<Title order={3}>1. Contexte, objectifs et problématique métier</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Lors de mon premier stage de BTS SIO au sein du centre de loisirs d'Artigueloutan, j'ai été confronté à une problématique administrative majeure. L'ensemble des inscriptions et des plannings de réservation des enfants était géré manuellement via des échanges d'e-mails, des fiches papier et des tableaux de suivi. Ce processus artisanal était extrêmement chronophage, générait des erreurs de saisie récurrentes et faisait peser un risque permanent de surbooking.
				</Text>
				<Text ta="justify">
					Ma mission a consisté à concevoir, développer et déployer une application web sur mesure capable de centraliser les inscriptions des familles, de permettre la réservation de créneaux en ligne, et d'offrir à la direction un back-office de pilotage en temps réel.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconDatabase size={20} /></ThemeIcon>
					<Title order={3}>2. Modélisation de la base de données relationnelle</Title>
				</Group>
				<Text ta="justify">
					Le point de départ de ce projet a été la conception d'un modèle conceptuel de données (MCD) rigoureux sous MySQL. J'ai structuré les relations complexes entre les comptes parents, les fiches enfants et les plannings de réservation. Une attention particulière a été portée sur les contraintes d'intégrité (clés étrangères) pour interdire la suppression accidentelle d'enfants liés à des séjours actifs. J'ai également implémenté une logique de verrouillage des places : le code applicatif vérifie l'état de remplissage d'un jour spécifique avant d'autoriser et d'enregistrer une nouvelle transaction.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconCode size={20} /></ThemeIcon>
					<Title order={3}>3. Le défi front-end : refonte V2.0 et génération de documents</Title>
				</Group>
				<Text ta="justify" mb="md">
					La plus grande réussite de ce projet réside dans l'évolution vers sa version 2.0. Souhaitant offrir une expérience utilisateur (UX) comparable aux applications modernes, j'ai entièrement repensé l'interface utilisateur. J'ai développé un design épuré, intégrant des bords arrondis et un système natif de bascule <strong>Mode Sombre / Mode Clair</strong>.
				</Text>
				<Blockquote color="blue" radius="md" py="xs" px="md">
					<strong>Preuve d'intégration technique :</strong> Pour atteindre ce niveau de finition, j'ai implémenté plusieurs bibliothèques JavaScript avancées. J'ai utilisé <strong>Flatpickr</strong> pour concevoir des calendriers de sélection de dates fluides, et <strong>SlimSelect</strong> pour sublimer les menus déroulants. Enfin, pour répondre au besoin d'impression de l'administration, j'ai intégré la librairie <strong>jsPDF</strong> (couplée à <em>AutoTable</em>). Cela permet au back-office de générer dynamiquement et de télécharger à la volée les fiches de présence au format PDF, directement depuis le navigateur.
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconLock size={20} /></ThemeIcon>
					<Title order={3}>4. Sécurité robuste en PHP natif</Title>
				</Group>
				<Text ta="justify">
					Développer une plateforme d'inscription sans framework impose de maîtriser chaque brique de sécurité. J'ai banni les requêtes brutes au profit de requêtes préparées avec <code>PDO</code> pour prévenir toute injection SQL. Les mots de passe des familles sont protégés par la fonction de hachage native configurée avec l'algorithme <em>bcrypt</em>. Enfin, la gestion des variables de session a été rigoureusement codée pour contrer les attaques par fixation de session.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder mt="xl">
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate('/competences/php')} size="sm" fw={500}>PHP (Backend & Sécurité)</Anchor> •
					<Anchor onClick={() => navigate("/competences/mysql")} size="sm" fw={500}>MySQL</Anchor> •
					<Anchor onClick={() => navigate("/competences/javascript")} size="sm" fw={500}>JavaScript (jsPDF, Flatpickr)</Anchor> •
					<Anchor onClick={() => navigate("/competences/html")} size="sm" fw={500}>HTML / CSS (Dark Mode)</Anchor> •
					<Anchor onClick={() => navigate("/competences/autonomie")} size="sm" fw={500}>Autonomie & proactivité</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default SiteReservationProject;