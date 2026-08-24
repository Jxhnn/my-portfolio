import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Anchor, Image, Text,
	Blockquote
} from "@mantine/core";
import {
	IconBook,
	IconInfoCircle,
	IconDatabase,
	IconUsers,
	IconRotate,
	IconAlertTriangle,
	IconClock,
	IconServer
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const PhidiasProject: React.FC = () => {
	const navigate = useNavigate();
	const pictures = [
		'assets/projects/phidias/1.png',
		'assets/projects/phidias/2.png',
		'assets/projects/phidias/3.png',
		'assets/projects/phidias/4.png',
		'assets/projects/phidias/5.png',
		'assets/projects/phidias/6.png',
		'assets/projects/phidias/7.png',
	];
	const slides = pictures.map((url) => (
		<Carousel.Slide key={url}>
			<Image
				src={url}
				fit="contain"
				radius="md"
				alt="Aperçu de la plateforme Phidias 3"
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
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'yellow' }}><IconBook size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={1} size="h2" c="orange.8">Phidias 3 : plateforme pédagogique pour le BTP</Title>
							<Text size="sm" c="dimmed">Étude de cas technique : migration de données héritées et refonte applicative complète.</Text>
						</Stack>
					</Group>
					<Badge color="orange" size="lg" variant="light">Refonte technique</Badge>
				</Group>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconInfoCircle size={20} /></ThemeIcon>
					<Title order={3}>1. Contexte, objectifs et contraintes de l'existant</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Le projet <strong>Phidias 3</strong> consistait en la refonte technique et ergonomique 
					complète d'une plateforme de formation spécialisée dans les métiers du BTP. 
					L'ancienne plateforme, vieille de plus d'une décennie, reposait sur des architectures 
					obsolètes et restrictives qui contraignaient son utilisation à l'ancien navigateur 
					Internet Explorer, bloquant de ce fait l'évolution du catalogue de cours des formateurs.
				</Text>
				<Text ta="justify">
					L'enjeu technique majeur de ce projet résidait dans l'intégrité des données pédagogiques 
					accumulées au fil des années. Il était impensable pour notre client de perdre ce patrimoine 
					intellectuel. Le risque principal reposait sur la nature des fichiers d'origine : un ensemble 
					complexe de documents XML non normalisés et confus, qu'il fallait extraire, restructurer et 
					insérer proprement dans une base de données relationnelle moderne.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconDatabase size={20} /></ThemeIcon>
					<Title order={3}>2. Gestion de la migration et refonte du schéma de données</Title>
				</Group>
				<Text ta="justify" mb="md">
					Pour mener à bien cette migration délicate sans ressaisie manuelle, j'ai découpé mon 
					intervention en plusieurs phases structurées :
				</Text>
				<Stack gap="md" pl="md" mb="md">
					<Text ta="justify">
						• <strong>Conception préalable et modélisation du schéma MySQL :</strong>
						&nbsp;avant d'initier la moindre migration de données, j'ai procédé à la
						modélisation complète du nouveau schéma relationnel sous MySQL. J'ai conçu
						la structure de l'ensemble des tables (cours, chapitres, lexique, utilisateurs),
						défini rigoureusement les clés primaires, configuré les clés étrangères pour
						garantir l'intégrité référentielle de la plateforme, et planifié les index
						nécessaires pour optimiser les performances des futures requêtes applicatives.
					</Text>
					<Text ta="justify">
						• <strong>Scripts d'extraction et de génération SQL (Python) :</strong>
						&nbsp;ce n'est qu'une fois la base de données cible figée et fonctionnelle
						que j'ai écrit mes scripts d'automatisation en Python. Ces outils parseurs
						ont analysé les fichiers XML d'origine pour en extraire le contenu et le formater.
						Ils généraient ensuite des fichiers texte regroupant l'ensemble des requêtes SQL
						d'insertion brute (<code>INSERT INTO</code>) nécessaires, construites par
						concaténation et formatage de chaînes de caractères.
					</Text>
					<Text ta="justify">
						• <strong>Nettoyage et résolution des incohérences relationnelles :</strong>
						&nbsp;j'ai dû traiter de nombreuses données manquantes, des balises de cours
						orphelines, ainsi que des liaisons cassées vers des images qui n'existaient qu'à
						moitié dans l'ancien système de fichiers. Le script Python a permis de nettoyer et
						d'adapter ces données avant leur insertion finale.
					</Text>
				</Stack>
				<Blockquote color="orange" radius="md" py="xs" px="md">
					<strong>Impact métier :</strong> l'opération s'est soldée par la migration de <strong>plus de 3 Go de données brutes sans aucune perte</strong>, permettant d'onboarder avec succès plus d'une centaine d'utilisateurs actifs. Les scripts Python se sont révélés extrêmement performants pour traiter ce volume, et l'indexation de la base de données en amont a garanti des requêtes SQL ultra-rapides dès la mise en production.
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconRotate size={20} /></ThemeIcon>
					<Title order={3}>3. Architecture MVC et dynamisation de l'interface utilisateur</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Le nouveau backend applicatif a été développé en utilisant l'architecture
					&nbsp;<strong>Model-View-Controller (MVC)</strong> de Laravel. Ce choix m'a offert un
					environnement de travail solide et unifié pour gérer à la fois la logique métier
					des cours, la sécurité des accès et le routage des pages.
				</Text>
				<Text ta="justify" mb="md">
					Pour l'interface utilisateur, j'ai intégré la charte graphique transmise par le
					pôle multimédia en utilisant le moteur de template Blade de Laravel et du CSS structuré.
					J'ai dynamisé l'expérience utilisateur en développant des appels asynchrones (AJAX)
					basés sur l'API native <code>Fetch</code> en JavaScript natif. Cela permet notamment
					de modifier instantanément des informations (comme le titre d'un lexique)
					sans jamais subir de rechargement complet de la page.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconServer size={20} /></ThemeIcon>
					<Title order={3}>4. Déploiement et infrastructure</Title>
				</Group>
				<Text ta="justify">
					Au-delà du développement logiciel, j'ai pris en charge le déploiement de la plateforme sur nos serveurs. 
					L'application est hébergée de manière isolée sur des <strong>conteneurs Proxmox</strong> propulsés par 
					un serveur web Apache2. J'y ai configuré l'environnement d'exécution de Laravel (PHP, droits d'accès, variables d'environnement) 
					et géré la mise en production de manière manuelle, ce qui m'a permis d'acquérir une excellente maîtrise et un contrôle total 
					sur la configuration système et la sécurité des environnements.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconUsers size={20} /></ThemeIcon>
					<Title order={3}>5. Travail collaboratif et boucle de validation</Title>
				</Group>
				<Text ta="justify" mb="sm">
					La réussite de cette refonte reposait sur une collaboration étroite entre plusieurs pôles 
					d'Exelys. J'ai travaillé de manière continue avec les graphistes et intégrateurs du pôle 
					multimédia afin de m'assurer que mes intégrations de vues et de style respectaient 
					rigoureusement les maquettes graphiques et l'identité visuelle moderne définies pour 
					le client.
				</Text>
				<Text ta="justify">
					Les points d'avancement hebdomadaires menés avec mon chef de projet ont permis de valider 
					étape par étape les livraisons des modules (création des séquences, format du contenu, ...) 
					et d'ajuster l'ordre de priorité des développements en fonction des contraintes de planning.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconClock size={20} /></ThemeIcon>
					<Title order={3}>6. Les lendemains du projet : maintenance et R&D IA</Title>
				</Group>
				<Text ta="justify" mb="sm">
					La livraison de Phidias 3 n'a pas signé la fin de mon implication sur ce projet. 
					J'assure aujourd'hui le suivi technique régulier de la plateforme dans le 
					cadre de sa Tierce Maintenance Applicative (TMA), en corrigeant les 
					éventuelles anomalies en production et en développant des fonctionnalités 
					d'optimisation mineures.
				</Text>
				<Text ta="justify">
					De plus, la plateforme sert aujourd'hui de terrain d'expérimentation pour un 
					projet de R&D innovant au sein d'Exelys. Nous travaillons sur l'intégration 
					d'une intelligence artificielle basée sur une API (comme OpenAI ChatGPT, ou Google Gemini). 
					Grâce à une architecture de recherche augmentée <strong>RAG 
					(Retrieval Augmented Generation)</strong>, l'objectif est d'offrir aux formateurs
					 un assistant virtuel d'aide à la conception de parcours d'apprentissage, 
					 capable d'interagir intelligemment avec le catalogue de données pédagogiques 
					 hébergées en base de données.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconAlertTriangle size={20} /></ThemeIcon>
					<Title order={3} c="orange.5">7. Regard critique et apprentissages</Title>
				</Group>
				<Text ta="justify" mb="md">
					Ce projet, qui a été ma première grande immersion professionnelle dans 
					l'écosystème Laravel, m'a permis d'identifier deux axes d'amélioration 
					personnelle majeurs :
				</Text>
				<Blockquote color="orange" radius="md" py="xs" px="md">
					<strong>La gestion de l'estimation du développement full-stack avec Laravel :</strong>
					&nbsp;s'agissant de ma première expérience d'envergure sur un framework 
					complet, j'ai sous-estimé au départ la charge de travail globale induite 
					par un développement full-stack (modélisation des structures relationnelles 
					complexes avec Eloquent, gestion étanche des contrôleurs et du routage, 
					et intégration minutieuse des vues via le moteur Blade). 
					Cette sous-estimation globale a légèrement impacté la planification de 
					livraison. J'ai appris depuis qu'un développement de cette ampleur 
					nécessite un découpage de tâches extrêmement fin pour assurer des 
					estimations réalistes.
				</Blockquote>
				<Text ta="justify" mt="md">
					L'absence de tests automatisés lors de la migration des données pédagogiques 
					a également représenté un facteur de stress technique, car chaque 
					modification du code exigeait une validation manuelle. L'écriture de 
					tests de validation d'intégrité de schéma SQL (via PHPUnit par exemple) aurait été un atout précieux.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">Compétences techniques & humaines mises en œuvre</Title>
				<Group gap="xs">
					<Anchor onClick={() => navigate("/competences/laravel")} size="sm" fw={500}>Laravel</Anchor> •
					<Anchor onClick={() => navigate("/competences/mysql")} size="sm" fw={500}>MySQL / Bases de données</Anchor> •
					<Anchor onClick={() => navigate("/competences/javascript")} size="sm" fw={500}>JavaScript (AJAX)</Anchor> •
					<Anchor onClick={() => navigate("/competences/html")} size="sm" fw={500}>HTML / CSS</Anchor> •
					<Anchor onClick={() => navigate("/competences/python")} size="sm" fw={500}>Python (Scripts Data)</Anchor> •
					<Anchor onClick={() => navigate("/competences/autonomie")} size="sm" fw={500}>Autonomie & proactivité</Anchor>
				</Group>
			</Paper>
		</Stack>
	);
}

export default PhidiasProject;