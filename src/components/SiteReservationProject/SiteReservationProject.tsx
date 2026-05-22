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
	IconUsers,
	IconAlertTriangle
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SiteReservationProject: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Image src="assets/siteReservation.png" radius="md" alt="Aperçu du site de réservation" mb="xl" />
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}><IconTargetArrow size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={1} size="h2" c="blue.8">Plateforme de gestion pour centre de loisirs</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : numérisation d'un processus métier en PHP natif et MySQL.</Text>
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
					Lors de mon premier stage de BTS SIO au sein du centre de loisirs d'Artigueloutan, j'ai été confronté à une problématique administrative majeure. 
					L'ensemble des inscriptions et des plannings de réservation des enfants était géré manuellement via des échanges d'e-mails, 
					des fiches papier et des tableaux de suivi. Ce processus artisanal était extrêmement chronophage, générait des erreurs de saisie 
					récurrentes et faisait peser un risque permanent de surbooking.
				</Text>
				<Text ta="justify">
					L'objectif de ce stage était de concevoir, développer et déployer une application web sur mesure capable de centraliser les inscriptions des familles, 
					de permettre aux parents de réserver des créneaux en ligne, et d'offrir aux administrateurs un back-office de pilotage en temps réel.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconDatabase size={20} /></ThemeIcon>
					<Title order={3}>2. Modélisation de la base de données relationnelle</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Le point de départ technique de l'application a consisté à concevoir un modèle conceptuel de données (MCD) rigoureux sous MySQL. 
					J'ai structuré les entités de manière à refléter fidèlement les règles de gestion de l'établissement :
				</Text>
				<Stack gap="sm" pl="md">
					<Text ta="justify">
						• <strong>Gestion des relations :</strong> modélisation des cardinalités entre les comptes parents (utilisateurs), les enfants à charge, 
						et les fiches d'inscriptions aux périodes.
					</Text>
					<Text ta="justify">
						• <strong>Contraintes d'intégrité :</strong> mise en place de clés primaires et de clés étrangères pour interdire la suppression accidentelle 
						de données d'enfants liées à des réservations actives.
					</Text>
					<Text ta="justify">
						• <strong>Contrôle des flux :</strong> structuration des tables de plannings hebdomadaires pour permettre au code applicatif de vérifier 
						le nombre de places restantes par jour d'activité avant de valider une nouvelle transaction.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconLock size={20} /></ThemeIcon>
					<Title order={3}>3. Rigueur de sécurité et développement backend (PHP)</Title>
				</Group>
				<Text ta="justify" mb="md">
					Développer une plateforme d'inscription sans le support d'un framework moderne (comme Laravel) impose d'écrire et de maîtriser chaque brique de sécurité. 
					J'ai apporté une rigueur absolue pour protéger les données personnelles des familles :
				</Text>
				<Stack gap="sm" pl="md" mb="md">
					<Text ta="justify">
						• <strong>Protection contre les injections SQL (PDO) :</strong> j'ai banni l'utilisation de requêtes brutes de mon code. 
						J'ai utilisé exclusivement des requêtes SQL préparées à l'aide de l'extension de base de données <code>PDO</code> pour l'ensemble 
						des opérations CRUD (écriture, lecture, modification).
					</Text>
					<Text ta="justify">
						• <strong>Hachage cryptographique fort :</strong> pour la sécurité des mots de passe des parents, j'ai utilisé la fonction native 
						de hachage <code>password_hash()</code> configurée avec l'algorithme robuste <em>bcrypt</em>. Lors de l'identification, la vérification s'opérait via
						&nbsp;<code>password_verify()</code>.
					</Text>
					<Text ta="justify">
						• <strong>Sécurisation des sessions face à la fixation :</strong> pour stocker l'état de connexion de l'utilisateur 
						(via <code>$_SESSION</code>), j'ai configuré la gestion des sessions PHP standard.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconUsers size={20} /></ThemeIcon>
					<Title order={3}>4. Collaboration, ergonomie utilisateur et résultats</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Mon interlocutrice privilégiée tout au long du stage était la directrice du centre de loisirs. Des points réguliers m'ont permis 
					d'ajuster le fonctionnement de l'application à ses contraintes réelles sur le terrain. L'ergonomie frontend a été soignée avec l'utilisation de 
					&nbsp;<strong>Bootstrap</strong> pour garantir un affichage fluide et responsive, facilitant l'accès au site depuis les smartphones des parents.
				</Text>
				<Text ta="justify">
					Une phase de test a été menée auprès de plusieurs parents volontaires afin de valider la simplicité de l'interface de réservation. 
					Le déploiement s'est avéré être un franc succès : <b>plus de 100 familles</b> ont utilisé la plateforme activement, 
					ce qui a permis d'éliminer définitivement les erreurs de surbooking et de libérer du temps de secrétariat précieux pour la direction du centre.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconAlertTriangle size={20} /></ThemeIcon>
					<Title order={3} c="orange.5">5. Analyse critique et apprentissages</Title>
				</Group>
				<Text ta="justify" mb="md">
					Ce premier projet applicatif complet m'a fait réaliser l'importance des outils structurants et a orienté la suite de mon parcours de développeur :
				</Text>
				<Blockquote color="orange" radius="md" py="xs" px="md">
					<strong>La transition nécessaire vers l'orienté objet et les frameworks :</strong> bien que le code procédural PHP natif ait été extrêmement 
					formateur pour assimiler la mécanique fondamentale de la sécurité web (PDO, sessions, hachage), il montre rapidement ses limites en termes 
					de maintenabilité et de scalabilité. Sur un projet plus complexe, la duplication de code et l'absence d'architecture structurée (comme le modèle MVC) 
					rendent la maintenance laborieuse.
				</Blockquote>
				<Text ta="justify" mt="md">
					Cette prise de conscience a été le moteur de mon apprentissage ultérieur de frameworks robustes tels que Laravel, conçus pour standardiser ces 
					problématiques de sécurité et d'organisation du code.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate('/competences/php')} size="sm" fw={500}>PHP</Anchor> •
					<Anchor onClick={() => navigate("/competences/mysql")} size="sm" fw={500}>MySQL</Anchor> •
					<Anchor onClick={() => navigate("/competences/javascript")} size="sm" fw={500}>JavaScript</Anchor> •
					<Anchor onClick={() => navigate("/competences/html")} size="sm" fw={500}>HTML</Anchor> •
					<Anchor onClick={() => navigate("/competences/css")} size="sm" fw={500}>CSS</Anchor> •
					<Anchor onClick={() => navigate("/competences/autonomie")} size="sm" fw={500}>Autonomie & proactivité</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default SiteReservationProject;