
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Accordion, List, Anchor,
	Image, Text
} from "@mantine/core";
import {
	IconBook,
	IconBulb,
	IconListCheck,
	IconUsers,
	IconGrowth,
	IconClock,
	IconEye
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const PhidiasProject: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Image src="/assets/phidias-sequence.png" height={220} radius="md" alt="Aperçu du projet Phidias3" mb="xl" />
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'yellow' }}><IconBook size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={2} c="orange.8">Plateforme pédagogique pour le BTP</Title>
							<Text size="sm" c="dimmed">Refonte complète d'une application de formation.</Text>
						</Stack>
					</Group>
					<Badge color="orange" size="lg" variant="light">Refonte technique</Badge>
				</Group>
			</Paper>
			<Accordion variant="separated" defaultValue="contexte">
				<Accordion.Item value="contexte">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Objectifs et contexte</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Contexte :</b> Phidias3 était une plateforme de formation pour le BTP vieille de plus de 10 ans. Elle était devenue non maintenable et obsolète, ne fonctionnant que sur Internet Explorer.</Text>
						<Text mt="sm"><b>Objectif :</b> réaliser une refonte technique et visuelle complète de l'application pour la rendre performante, sécurisée, compatible avec les navigateurs modernes et facile à mettre à jour.</Text>
						<Text mt="sm"><b>Enjeu & risques :</b> l'enjeu majeur était de ne perdre aucune des données pédagogiques existantes. Le risque principal résidait dans la complexité de la migration des données depuis un format XML non structuré vers une base de données relationnelle propre.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="etapes">
					<Accordion.Control icon={<IconListCheck size={20} />}>
						<Title order={4}>Mes étapes de réalisation</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<List spacing="sm" type="ordered">
							<List.Item><b>Migration des données :</b> j'ai analysé la structure des fichiers XML et écrit des scripts PHP pour extraire, nettoyer et insérer les données dans une nouvelle base de données MySQL. Ce fut un travail d'une semaine complète.</List.Item>
							<List.Item><b>Développement backend :</b> j'ai construit la nouvelle application en utilisant le framework Laravel, en créant les modèles, les contrôleurs et les routes nécessaires pour gérer le contenu pédagogique.</List.Item>
							<List.Item><b>Développement frontend :</b> j'ai intégré les premières maquettes avec le moteur de template Blade de Laravel et dynamisé certaines parties de l'interface, comme le lexique, avec des appels AJAX.</List.Item>
							<List.Item><b>Intégration de la charte graphique :</b> j'ai adapté l'ensemble du CSS de l'application pour correspondre à la nouvelle identité visuelle fournie par l'équipe multimédia.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="acteurs">
					<Accordion.Control icon={<IconUsers size={20} />}>
						<Title order={4}>Les acteurs et interactions</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Ce projet a nécessité une bonne coordination. J'ai interagi avec :</Text>
						<List spacing="xs" mt="sm">
							<List.Item><b>Mon chef de projet :</b> pour le suivi régulier, la validation des choix techniques et la définition des priorités.</List.Item>
							<List.Item><b>Le pôle multimédia d'Exelys :</b> j'ai collaboré avec eux pour recevoir la nouvelle charte graphique et m'assurer que mon intégration CSS était fidèle à leur design.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="resultats">
					<Accordion.Control icon={<IconGrowth size={20} />}>
						<Title order={4}>Résultats obtenus</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Pour l'entreprise :</b> la nouvelle plateforme est désormais stable, sécurisée et compatible avec tous les navigateurs modernes. La gestion du contenu est grandement simplifiée, permettant des mises à jour rapides.</Text>
						<Text mt="sm"><b>Pour moi :</b> ce fut mon "projet-école" sur Laravel. J'ai découvert et maîtrisé un framework backend complet, géré un défi technique majeur avec la migration de données et appris à collaborer avec une équipe de designers. Ce projet a solidifié ma passion pour le développement backend.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="lendemains">
					<Accordion.Control icon={<IconClock size={20} />}>
						<Title order={4}>Les lendemains du projet</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Contrairement à un projet ponctuel, Phidias3 est une application vivante que j'ai eu l'occasion de suivre sur le long terme.
						</Text>
						<List spacing="xs" mt="sm">
							<List.Item>
								<b>Utilisation continue :</b> la plateforme est aujourd'hui utilisée par les formateurs comme l'un des outils clés de leur catalogue pédagogique.
							</List.Item>
							<List.Item>
								<b>Maintenance et évolution (TMA) :</b> j'assure toujours la Tierce Maintenance Applicative (TMA) sur le projet, ce qui implique de corriger les bugs, d'optimiser les performances et de développer de petites évolutions.
							</List.Item>
							<List.Item>
								<b>Projet d'IA innovant :</b> actuellement, l'application est au cœur d'un projet de R&D passionnant où nous utilisons une IA pour analyser et améliorer l'ensemble du contenu pédagogique existant, ce qui prouve la pertinence et la pérennité de la refonte.
							</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="critique">
					<Accordion.Control icon={<IconEye size={20} />}>
						<Title order={4}>Mon regard critique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Étant mon premier grand projet, il y a bien sûr des points que j'améliorerais aujourd'hui :</Text>
						<List spacing="xs" mt="sm">
							<List.Item><b>Découpage des tâches :</b> j'ai parfois sous-estimé la complexité de certaines fonctionnalités. J'ai appris depuis à mieux découper mon travail pour avoir une vision plus claire de l'avancement.</List.Item>
							<List.Item><b>Tests automatisés :</b> comme pour ARMEL TMS, je n'avais pas mis en place de tests automatisés. J'aurais dû en ajouter pour sécuriser la logique métier et la migration des données.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Compétences mises en œuvre</Title>
				<Stack>
					<Anchor onClick={() => navigate("/competences/laravel")}>Laravel</Anchor>
					<Anchor onClick={() => navigate("/competences/mysql")}>MySQL</Anchor>
					<Anchor onClick={() => navigate("/competences/javascript")}>JavaScript (AJAX)</Anchor>
					<Anchor onClick={() => navigate("/competences/html")}>HTML</Anchor>
					<Anchor onClick={() => navigate("/competences/css")}>CSS</Anchor>
					<Anchor onClick={() => navigate("/competences/autonomie")}>Autonomie & proactivité</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default PhidiasProject;