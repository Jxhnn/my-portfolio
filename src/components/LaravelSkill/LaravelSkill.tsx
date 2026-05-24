import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconBrandLaravel,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const LaravelSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'red', to: 'orange' }}><IconBrandLaravel size={32} /></ThemeIcon>
					<Title order={2}>Compétence : Laravel</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Fiche d'évaluation détaillée de la compétence de conception d'architectures applicatives web et d'API RESTful.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Dans le domaine du développement backend, <strong>Laravel</strong> est le framework PHP de référence, conçu pour optimiser la 
					productivité et la robustesse des applications métiers. Maîtriser Laravel signifie savoir articuler l'ensemble des modules d'une 
					architecture MVC (Modèle-Vue-Contrôleur) : structurer des migrations de bases de données, manipuler l'ORM 
					&nbsp;<em>Eloquent</em> pour exécuter des requêtes fluides et sécurisées, configurer des files d'attente (queues) pour déporter les 
					traitements lourds, et développer des APIs découplées et hautement sécurisées.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité (Laravel 13) :</strong> l'actualité de l'écosystème est marquée par la sortie récente de 
					&nbsp;<strong>Laravel 13</strong>, qui exige désormais <strong>PHP 8.3</strong> au minimum. Cette version simplifie considérablement 
					la configuration grâce à l'introduction de 36 nouveaux attributs PHP natifs 
					(tels que <code>#[Middleware]</code> ou <code>#[Authorize]</code>), évitant d'éparpiller les configurations de classes. 
					De plus, Laravel 13 intègre un premier <strong>AI SDK officiel</strong> unifiant les interactions asynchrones avec les LLMs 
					ainsi que le support natif pour la recherche sémantique et vectorielle (vector search).
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				<Blockquote cite="– Conception de l'API RESTful d'ARMEL TMS" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Pour l'application de prévention des TMS, j'ai développé l'intégralité du backend sous forme de serveur d'API stateless. J'ai 
						utilisé l'ORM Eloquent pour requêter les structures relationnelles (programmes d'exercices, structures d'entreprises et 
						comptes utilisateurs) de notre base de données MySQL.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> afin de sécuriser la transmission asynchrone des données, j'ai configuré 
						l'authentification par jeton JWT via <code>tymon/jwt-auth</code>. J'ai de plus programmé des classes de validation d'entrées 
						(<em>Form Requests</em>) personnalisées pour filtrer et nettoyer systématiquement chaque payload JSON reçu par le serveur. 
						Cette rigueur m'a permis de fournir un backend robuste, protégé contre les failles d'injection ou de mauvaise structuration 
						de requêtes.
					</Text>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (ARMEL TMS)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="red" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : avancé.</strong> Ayant manipulé Laravel à la fois pour concevoir des applications monolithiques de 
					gestion (PACT'HSE, Phidias 3) et des API découplées (ARMEL TMS), je maîtrise parfaitement le cycle de vie d'une requête Laravel. 
					C'est l'un des piliers majeurs de mon profil d'expert logiciel.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est consolidée de manière remarquable lors de la refonte technique complexe de Phidias 3, 
					où la migration de bases de données héritées et instables vers une structure Eloquent a agi comme un accélérateur d'apprentissage.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> bien que Laravel offre une "magie" syntaxique extrêmement séduisante via ses Façades et ses méthodes magiques, 
					il est crucial d'en comprendre le fonctionnement sous-jacent. Mon conseil est de toujours s'intéresser aux mécanismes internes de l'injection 
					de dépendances et du conteneur de services (service container) pour conserver la maîtrise de ses structures de code lors de projets à 
					grande échelle.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="red" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans mon projet professionnel, je souhaite consolider mon expertise sur Laravel pour concevoir des architectures backend robustes de niveau 
					industriel, prêtes pour la production à fort trafic.
				</Text>
				<Text ta="justify">
					<strong>Formations et perspectives :</strong> je prévois de me former en profondeur sur les modules avancés d'orchestration de tâches 
					asynchrones, notamment la gestion des files d'attente (<em>queues</em>) sous Redis pour le traitement de tâches d'arrière-plan lourdes. 
					Parallèlement, j'affinerai mes stratégies de couverture de code en me formant aux tests unitaires automatisés avec le framework 
					&nbsp;<strong>Pest</strong>.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm">• Projet Phidias 3 : plateforme pédagogique BTP</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate("/realisations/pact-hse")} size="sm">• PACT HSE - solution de gestion des risques</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default LaravelSkill;