import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconDatabase,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SQLSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'teal' }}><IconDatabase size={32} /></ThemeIcon>
					<Title order={2}>Compétence : MySQL / MariaDB</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Fiche d'évaluation détaillée de la compétence de modélisation relationnelle de données, de requêtage avancé et d'optimisation 
					de bases de données.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Dans le génie logiciel, la base de données est la clé de voûte de toute application solide. Maîtriser <strong>MySQL / MariaDB</strong> 
					&nbsp;consiste à savoir concevoir des schémas relationnels normalisés (respectant les formes normales de base) pour éliminer la 
					redondance d'informations, à définir des clés primaires et étrangères assurant l'intégrité référentielle, à optimiser l'accès 
					aux données grâce à des index pertinents, et à analyser la rapidité d'exécution des requêtes afin d'éviter les goulots 
					d'étranglement de production.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> bien que les SGBD de type NoSQL (comme MongoDB) soient populaires pour certains types 
					de données semi-structurées, la robustesse, la cohérence transactionnelle <em>ACID</em> et l'efficacité des bases relationnelles 
					comme MySQL restent le standard de l'industrie pour plus de 80% des applications métiers de gestion.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				<Blockquote cite="– Conception du schéma et migration de Phidias 3" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Pour le projet Phidias 3, j'ai fait face à un défi de taille : migrer un ensemble instable de fichiers XML disparates et 
						corrompus vers une base relationnelle structurée.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> avant d'écrire la moindre ligne de code d'import, j'ai modélisé 
						l'ensemble du schéma relationnel MySQL (clés primaires, étrangères, tables associatives et indexation). 
						J'ai ensuite écrit des scripts Python de parsing pour lire les fichiers XML et générer des requêtes SQL 
						d'insertions massives de données nettoyées. Ce plan méthodique a permis d'isoler les anciennes erreurs de données 
						orphelines et d'importer l'intégralité du patrimoine applicatif du client en garantissant une base cible d'une propreté irréprochable.
					</Text>
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (Phidias 3)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : avancé.</strong> Je suis très à l'aise pour modéliser des bases de données de A à Z et manipuler 
					des relations complexes sous MySQL. Cette compétence est <strong>fondamentale</strong> dans mon profil d'expert logiciel, 
					car une mauvaise base de données détruit l'évolutivité d'un projet, quelle que soit la qualité du code backend.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est consolidée très tôt, lors de mon stage de BTS SIO où j'ai dû modéliser "from scratch" 
					la base du centre de loisirs en écrivant du SQL natif à la main. Cela a agi comme un excellent tremplin technique.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> l'utilisation d'un ORM (comme Eloquent) simplifie la vie des développeurs mais peut masquer 
					des requêtes terriblement inefficaces (comme le problème classique du <code>N+1 Select</code>). Mon conseil est de toujours 
					analyser le SQL généré en arrière-plan et de savoir utiliser la commande <code>EXPLAIN</code> sous MySQL pour optimiser 
					l'indexation de sa base de données.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="blue" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Mon objectif est de repousser mes compétences de requêtage pour concevoir des bases encore plus optimisées et découpler la logique métier directement au niveau de la couche d'accès aux données.
				</Text>
				<Text ta="justify">
					<strong>Formations et perspectives :</strong> je prévois de me former sur l'écriture de <strong>procédures stockées</strong>, de <strong>triggers</strong> et de <strong>vues (virtual tables)</strong> sous MySQL pour décharger certains calculs applicatifs lourds directement sur le moteur SQL.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm">• Projet Phidias 3 : Plateforme pédagogique BTP</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate("/realisations/site-reservation-acm")} size="sm">• Site de réservation pour un centre de loisirs</Anchor>
					<Anchor onClick={() => navigate("/realisations/pact-hse")} size="sm">• PACT HSE - Solution de gestion des risques</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default SQLSkill;