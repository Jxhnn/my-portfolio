

import { 
	Stack, Paper, Group, 
	ThemeIcon, Title, Accordion, 
	Blockquote, Code, Anchor,
	Text
} from "@mantine/core";

import { 
	IconBrandPhp, 
	IconTarget, 
	IconBulb, 
	IconTrendingUp 
} from "@tabler/icons-react";

import { Link, useNavigate } from "react-router";

const PHPSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>
						<IconBrandPhp size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : PHP</Title>
				</Group>
				<Text size="lg" ta="justify">
					PHP est l'un des langages de script côté serveur les plus répandus au monde. Dans le <b>contexte professionnel</b>, il est le moteur de plus de 75% du web, notamment via des CMS comme WordPress et des frameworks robustes comme Laravel et Symfony. <b>Son actualité</b> est marquée par des versions modernes (PHP 8+) qui ont considérablement amélioré ses performances et sa syntaxe, le maintenant comme un choix pertinent pour le développement backend.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text fz="sm" c="dimmed" mb="xs">Exemple concret de mise en œuvre :</Text>
						<Blockquote cite="– Projet site de réservation (centre de loisirs)">
							Le défi était de créer un système de réservation complet sans l'aide d'un framework, en utilisant uniquement PHP "vanilla". Il fallait gérer les inscriptions, vérifier la disponibilité des places en temps réel et interagir avec une base de données MySQL.
							<br /><br />
							<b>La compétence a été mise en œuvre</b> pour traiter les données des formulaires (<Code>$_POST</Code>), gérer les sessions utilisateur (<Code>$_SESSION</Code>) et exécuter des requêtes SQL pour mettre à jour la base de données. Conscient que le code procédural pouvait vite devenir désorganisé, <b>ma valeur ajoutée a été de commencer à structurer la logique métier en regroupant les fonctions d'accès à la base de données dans un fichier de classe dédié.</b>
							<br /><br />
							Ce premier pas vers l'organisation a permis de ne pas dupliquer le code et de rendre le projet plus maintenable, résolvant ainsi le problème d'un code "spaghetti" potentiel.
						</Blockquote>
						<Anchor component={Link} to="/realisations/site-reservation-acm" mt="sm" fz="sm">
							Voir la réalisation du site de réservation
						</Anchor>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="autocritique">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Mon autocritique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							<b>Niveau de maîtrise : intermédiaire.</b> Je suis capable de développer des fonctionnalités complexes en PHP natif, mais je reconnais que ma force réside désormais dans l'utilisation de ce savoir au sein d'un framework comme Laravel. PHP est pour moi un <b>pilier fondamental</b> qui me permet de mieux comprendre la magie derrière les frameworks.
						</Text>
						<Text mt="sm">
							<b>Mon recul sur la compétence :</b> cette expérience m'a fait comprendre par la pratique l'importance capitale des frameworks. Ils fournissent une structure qui évite de "réinventer la roue", tout en garantissant la sécurité et la maintenabilité. C'est le meilleur conseil que je pourrais donner : apprendre le PHP natif est intéressant, mais savoir utiliser un framework l'est tout autant pour des projets professionnels.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Dans mon <b>projet professionnel</b>, ma maîtrise du PHP de base est un tremplin pour devenir un expert sur son framework le plus populaire : Laravel. Mon objectif n'est pas de me spécialiser en PHP "vanilla", mais d'utiliser cette base pour construire des applications Laravel robustes, performantes et maintenables.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je souhaite approfondir ma connaissance des fonctionnalités avancées de Laravel. Je prévois de me former sur le <b>gestionnaire de files d'attente (Queues)</b> et le <b>planificateur de tâches (Task Scheduling)</b> pour automatiser des processus en arrière-plan (envoi d'emails, traitements lourds). Parallèlement, je vais me concentrer sur les <b>bonnes pratiques avancées</b> et les stratégies de test efficaces pour garantir la qualité et l'évolutivité de mes projets.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisation associée à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/site-reservation-acm')}>
						Site de réservation pour un centre de loisirs
					</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default PHPSkill;