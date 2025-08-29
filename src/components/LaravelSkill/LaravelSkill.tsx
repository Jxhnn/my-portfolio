
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Accordion,
	Blockquote, Anchor, Text
} from "@mantine/core";

import {
	IconBrandLaravel,
	IconTarget,
	IconBulb,
	IconTrendingUp
} from "@tabler/icons-react";

import { useNavigate } from "react-router";

const LaravelSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'red', to: 'orange' }}>
						<IconBrandLaravel size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : Laravel</Title>
				</Group>
				<Text size="lg" ta="justify">
					Laravel est le framework PHP le plus populaire au monde, réputé pour sa syntaxe élégante et sa productivité. Dans un <b>contexte professionnel</b>, il permet de construire rapidement des applications web robustes, sécurisées et maintenables. <b>Son actualité</b> est marquée par un écosystème très riche (Livewire, Inertia, Octane...) qui le positionne comme un choix de premier plan pour des projets allant de l'application monolithique à l'API performante.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Stack>
							<Blockquote cite="– Projet Phidias3 (plateforme web)">
								Le défi était de refondre entièrement un site de formation en une application web structurée et facile à maintenir.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant l'architecture <b>MVC</b> de Laravel. J'ai utilisé l'ORM <b>Eloquent</b> pour interagir avec la base de données, les <b>Contrôleurs</b> pour la logique métier, et le moteur de template <b>Blade</b> pour générer les vues. J'ai également utilisé la CLI <b>Artisan</b> pour créer les modèles, les mails et les commandes. <b>Ma valeur ajoutée a été d'appliquer la structure de Laravel pour transformer un projet vieillissant en une application moderne et organisée,</b> résolvant le problème de la maintenabilité.
							</Blockquote>
							<Anchor onClick={() => navigate('/realisations/phidias')} fz="sm" ml="md">
								Voir la réalisation Phidias3
							</Anchor>
							<Blockquote cite="– Projet ARMEL TMS (API backend)">
								Pour l'application mobile, le besoin était de fournir un backend sécurisé et performant pour gérer les utilisateurs et les données.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant Laravel en mode "API-only". J'ai développé des routes d'API pour l'authentification (avec JWT), la récupération et la sauvegarde des données. J'ai également mis en place les <b>Validateurs</b> de Laravel pour sécuriser les entrées de l'API. <b>Ma valeur ajoutée a été de construire un backend robuste et découplé du frontend,</b> prouvant ma capacité à utiliser Laravel de manière flexible pour des architectures modernes.
							</Blockquote>
							<Anchor onClick={() => navigate('/realisations/armel-tms')} fz="sm" ml="md">
								Voir la réalisation ARMEL TMS
							</Anchor>
						</Stack>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="autocritique">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Mon autocritique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							<b>Niveau de maîtrise : avancé.</b> Ayant utilisé Laravel à la fois pour des applications full-stack et comme API, je suis très à l'aise avec ses concepts fondamentaux. Laravel est ma <b>compétence principale en backend</b>, celle que je privilégie pour sa rapidité de développement et son nombre de fonctionnalités intégrées par défaut.
						</Text>
						<Text mt="sm">
							<b>Mon recul sur la compétence :</b> Laravel est un outil incroyablement puissant, mais son "apparente" simplicité peut cacher une grande complexité. Mon conseil est de toujours chercher à comprendre "comment ça marche".
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Dans mon <b>projet professionnel</b>, mon objectif est de consolider mon expertise sur Laravel pour devenir un développeur capable de construire des applications à grande échelle.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je souhaite approfondir ma connaissance des fonctionnalités avancées de Laravel. Je prévois de me former sur le <b>gestionnaire de files d'attente (Queues)</b> et le <b>planificateur de tâches (Task Scheduling)</b> pour automatiser des processus en arrière-plan. Parallèlement, je vais me concentrer sur les <b>bonnes pratiques avancées</b> et les stratégies de test efficaces pour garantir la qualité et l'évolutivité de mes projets.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisations associées à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/phidias')}>Projet Phidias3 (plateforme web)</Anchor>
					<Anchor onClick={() => navigate('/realisations/armel-tms')}>Application mobile ARMEL TMS (API)</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default LaravelSkill;