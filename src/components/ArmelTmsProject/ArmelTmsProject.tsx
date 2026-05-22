import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Anchor, Image, Text,
	SimpleGrid, Blockquote
} from "@mantine/core";
import {
	IconRun,
	IconInfoCircle,
	IconSettings,
	IconUsers,
	IconDeviceDesktop,
	IconAlertTriangle
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const ArmelTmsProject: React.FC = () => {
	const navigate = useNavigate();

	const pictures = [
		'assets/projects/armel-tms/1.png',
		'assets/projects/armel-tms/2.png',
		'assets/projects/armel-tms/3.png',
		'assets/projects/armel-tms/4.png',
		'assets/projects/armel-tms/5.png',
	];

	const slides = pictures.map((url) => (
		<Carousel.Slide key={url}>
			<Image
				src={url}
				fit="cover"
				alt="Aperçu de l'application ARMEL TMS"
				h={'100%'}
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
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'green', to: 'teal' }}><IconRun size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={1} size="h2" c="green.8">ARMEL TMS : prévention des risques en entreprise</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : conception et distribution d'une application multi-plateforme.</Text>
						</Stack>
					</Group>
					<Badge color="green" size="lg" variant="light">Projet "sur étagère"</Badge>
				</Group>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="green" variant="light"><IconInfoCircle size={20} /></ThemeIcon>
					<Title order={3}>1. Contexte, objectifs et enjeux du projet</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Le projet <strong>ARMEL TMS</strong> s'inscrit dans une démarche 
					proactive de santé publique au travail. Conçu "sur étagère" par 
					Exelys, c'est-à-dire sans commande initiale d'un client unique. 
					Ce produit vise à répondre à la hausse constante des troubles 
					musculo-squelettiques (TMS) dans les environnements de bureau. 
					L'enjeu principal était de concevoir un outil ergonomique, 
					capable d'inciter quotidiennement les employés à adopter de 
					bonnes postures et à réaliser des micro-exercices d'étirement 
					directement à leur poste de travail.
				</Text>
				<Text ta="justify">
					Le risque majeur d'un développement sur étagère réside dans 
					l'adéquation au marché. Pour s'assurer que l'outil soit adopté 
					par de futurs clients, il était capital de concevoir une solution 
					extrêmement accessible techniquement, multi-plateforme 
					(mobile et desktop) et visuellement irréprochable.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="green" variant="light"><IconSettings size={20} /></ThemeIcon>
					<Title order={3}>2. Architecture technique et sécurité</Title>
				</Group>
				<Text ta="justify" mb="md">
					Pour répondre aux contraintes multi-plateformes, j'ai opté pour une 
					architecture découplée, séparant de manière étanche le backend et 
					le frontend applicatif :
				</Text>
				<Stack gap="sm" pl="md">
					<Text>
						• <strong>Un backend d'API RESTful (Laravel) :</strong> développé 
						en PHP, ce serveur gère l'ensemble du modèle de données 
						(entreprises clientes, comptes utilisateurs, programmations d'exercices et statistiques). 
						Pour garantir l'intégrité des données reçues, l'ensemble des 
						requêtes d'écriture est filtré par des classes de validation 
						personnalisées.
					</Text>
					<Text>
						• <strong>Une sécurité renforcée par l'authentification JWT :</strong> 
						&nbsp;la communication entre le serveur et les différents terminaux 
						s'effectue de manière asynchrone (stateless). 
						Afin de sécuriser ces échanges, j'ai implémenté le protocole 
						&nbsp;<strong>JSON Web Token (JWT)</strong> via le package 
						&nbsp;<code>tymon/jwt-auth</code> côté API.
					</Text>
					<Text>
						• <strong>Sécurisation et stockage natif du jeton (mobile & desktop) :</strong> 
						&nbsp;afin de prémunir l'application contre le vol de session, 
						j'ai banni le stockage en clair (comme le <code>localStorage</code> 
						&nbsp;classique ou des fichiers de configuration non sécurisés) :
						<Stack gap="xs" pl="md" mt="xs">
							<Text size="sm">
								- Sur <strong>mobile</strong>, la persistance du jeton 
								s'effectue au sein du stockage chiffré matériel natif 
								de l'appareil (Keystore sur Android et Keychain sur iOS) 
								via le plugin <code>capacitor-secure-storage</code>.
							</Text>
							<Text size="sm">
								- Sur <strong>desktop (Electron)</strong>, j'ai intégré la 
								bibliothèque <code>node-keytar</code>. 
								Ce choix technique permet à l'application de communiquer 
								directement avec les gestionnaires de mots de passe 
								natifs du système d'exploitation hôte (le Trousseau 
								d'accès sur macOS, le gestionnaire d'identification sur 
								Windows, et libsecret/Secret Service API sur Linux). 
								Le jeton de l'utilisateur n'est donc jamais écrit en 
								clair sur le disque dur, mais est entièrement délégué 
								à la sécurité de l'OS.
							</Text>
						</Stack>
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="green" variant="light"><IconDeviceDesktop size={20} /></ThemeIcon>
					<Title order={3}>3. Choix de l'interface et logique de distribution</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Le choix de l'interface frontend s'est porté sur 
					&nbsp;<strong>Framework7</strong>. À cette période de mon parcours, 
					n'ayant pas encore assimilé React ou Flutter, Framework7 s'est 
					imposé comme une solution pragmatique : elle offrait une bibliothèque 
					complète de composants graphiques préconçus en <em>Material Design 3</em>, 
					alors que les autres outils du marché en restaient au Material Design 2. 
					Ce framework m'a permis d'implémenter des interfaces mobiles fluides, 
					réactives et calquées sur le comportement natif des smartphones.
				</Text>
				<Text ta="justify" mb="md">
					Pour la distribution, le même code source web unifié a été exploité 
					pour cibler simultanément plusieurs environnements de production :
				</Text>
				<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Portage mobile (Capacitor)</Text>
						<Text size="sm" c="dimmed" ta="justify">
							Capacitor a encapsulé le code de la Single Page Application (SPA). 
							Il m'a permis d'établir une passerelle robuste vers les SDK 
							d'Android et iOS afin d'obtenir des applications compilées 
							prêtes à l'installation.
						</Text>
					</Paper>
					<Paper withBorder p="md" radius="md" bg="dark.8">
						<Text fw={600} mb="xs">Portage bureau (Electron)</Text>
						<Text size="sm" c="dimmed" ta="justify">
							En intégrant <code>@capacitor-community/electron</code>, 
							j'ai porté l'application sur desktop. 
							J'ai développé une logique d'affichage spécifique : une 
							fenêtre d'overlay flottante pour afficher les rappels visuels 
							des exercices, complétée par un menu d'icône système 
							(System Tray) permettant à l'utilisateur de couper les 
							alertes à tout moment.
						</Text>
					</Paper>
				</SimpleGrid>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="green" variant="light"><IconUsers size={20} /></ThemeIcon>
					<Title order={3}>4. Collaboration, retours d'utilisateurs et livraison</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Bien que j'aie mené seul le développement de l'application, 
					l'ensemble des choix majeurs s'est fait en synergie avec mon 
					chef de projet. Une fois la première version stable assemblée, 
					nous avons organisé une phase de bêta-test en interne auprès 
					des employés d'Exelys.
				</Text>
				<Text ta="justify">
					J'ai pris en charge la présentation de l'outil auprès des 
					collaborateurs, la rédaction d'un guide d'utilisation rapide et la 
					centralisation de l'ensemble de leurs retours 
					(problèmes de réactivité, suggestions d'ajustements ergonomiques) 
					au sein d'un document de suivi collaboratif. 
					Ces précieux retours m'ont permis d'affiner l'expérience globale 
					avant l'intégration finale du produit dans notre catalogue commercial.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconAlertTriangle size={20} /></ThemeIcon>
					<Title order={3} c="orange.5">5. Analyse critique et retour d'expérience</Title>
				</Group>
				<Text ta="justify" mb="md">
					L'analyse de cette réalisation met en lumière deux points cruciaux 
					d'apprentissage pour la suite de ma carrière de développeur :
				</Text>
				<Blockquote color="orange" radius="md" py="xs" px="md">
					<strong>La problématique des tests manuels :</strong> 
					&nbsp;l'intégralité des validations fonctionnelles et de non-régression 
					a été réalisée à la main, que ce soit lors du développement ou 
					pendant la phase de bêta-test. Cette approche est fragile et 
					chronophage. L'absence de tests automatisés 
					(unitaires et d'intégration) fait peser un risque constant de 
					régression lors de l'ajout de nouvelles fonctionnalités.
				</Blockquote>
				<Text ta="justify" mt="md">
					Si je devais concevoir cette application aujourd'hui, j'intégrerais 
					une suite de tests automatisés dès le début du projet 
					(comme PHPUnit ou Pest pour l'API Laravel) afin de sécuriser 
					l'évolutivité et la maintenance à long terme de la solution.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate("/competences/laravel")} size="sm" fw={500}>Laravel (API)</Anchor> •
					<Anchor onClick={() => navigate("/competences/mysql")} size="sm" fw={500}>MySQL</Anchor> •
					<Anchor onClick={() => navigate("/competences/javascript")} size="sm" fw={500}>JavaScript</Anchor> •
					<Anchor onClick={() => navigate("/competences/html")} size="sm" fw={500}>HTML</Anchor> •
					<Anchor onClick={() => navigate("/competences/css")} size="sm" fw={500}>CSS</Anchor> •
					<Anchor onClick={() => navigate("/competences/autonomie")} size="sm" fw={500}>Autonomie & proactivité</Anchor> •
					<Anchor onClick={() => navigate("/competences/curiosite")} size="sm" fw={500}>Curiosité & apprentissage</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default ArmelTmsProject;