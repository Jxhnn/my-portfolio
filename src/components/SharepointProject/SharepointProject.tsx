
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Accordion, List, Anchor,
	Image, Text
} from "@mantine/core";
import {
	IconBuildingCommunity,
	IconBulb,
	IconListCheck,
	IconUsers,
	IconGrowth,
	IconClock,
	IconEye
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SharepointProject: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Image src="/assets/sharepoint-project.png" height={220} radius="md" alt="Illustration de l'écosystème Microsoft 365" mb="xl" />
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'teal' }}><IconBuildingCommunity size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={2} c="blue.8">Modernisation d'intranets sur Microsoft 365</Title>
							<Text size="sm" c="dimmed">Développement de solutions sur mesure avec SharePoint & Power Platform.</Text>
						</Stack>
					</Group>
					<Badge color="blue" size="lg" variant="light">Expérience professionnelle</Badge>
				</Group>
			</Paper>
			<Accordion variant="separated" defaultValue="contexte">
				<Accordion.Item value="contexte">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Objectifs et contexte</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Contexte :</b> intervention continue auprès de divers clients dont les intranets SharePoint Online étaient sous-utilisés car limités aux fonctionnalités standard.</Text>
						<Text mt="sm"><b>Objectif :</b> concevoir et développer des solutions personnalisées pour transformer ces intranets en véritables outils de travail collaboratifs, en créant des applications métiers interactives et en automatisant des processus manuels.</Text>
						<Text mt="sm"><b>Enjeu & risques :</b> l'enjeu était de maximiser l'adoption par les employés. Les risques étaient techniques (contraintes de l'écosystème Microsoft) et humains (résistance au changement).</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="etapes">
					<Accordion.Control icon={<IconListCheck size={20} />}>
						<Title order={4}>Mes étapes de réalisation (missions types)</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<List spacing="sm" type="ordered">
							<List.Item><b>Développement de Web Parts React (SPFx) :</b> j'ai créé des composants sur mesure connectés aux listes SharePoint via les API REST et Microsoft Graph pour afficher des données dynamiques.</List.Item>
							<List.Item><b>Personnalisation des formulaires :</b> j'ai utilisé Power Apps pour améliorer les formulaires de saisie des listes SharePoint, en ajoutant de la logique conditionnelle pour une expérience plus intuitive.</List.Item>
							<List.Item><b>Automatisation des processus :</b> j'ai mis en place des flux de travail avec Power Automate pour automatiser des tâches comme les notifications par email ou la manipulation de listes SharePoint automatisée pour la sécurité.</List.Item>
							<List.Item><b>Suivi et démonstration :</b> j'ai assuré les points de suivi réguliers avec les clients pour présenter les avancées et recueillir les retours.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="acteurs">
					<Accordion.Control icon={<IconUsers size={20} />}>
						<Title order={4}>Les acteurs et interactions</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Mon travail s'est inscrit dans un cadre collaboratif avec :</Text>
						<List spacing="xs" mt="sm">
							<List.Item><b>Les chefs de projet et consultants fonctionnels :</b> pour traduire les besoins métiers en spécifications techniques.</List.Item>
							<List.Item><b>Les équipes clientes (RH, communication...) :</b> lors des ateliers de recueil du besoin et des démonstrations pour m'assurer que la solution correspondait à leurs attentes.</List.Item>
							<List.Item><b>Les autres développeurs de l'équipe :</b> pour la coordination sur les développements communs.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="resultats">
					<Accordion.Control icon={<IconGrowth size={20} />}>
						<Title order={4}>Résultats obtenus</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Pour les clients :</b> des processus internes plus fluides, un meilleur accès à l'information et un taux d'engagement des collaborateurs sur l'intranet significativement amélioré.</Text>
						<Text mt="sm"><b>Pour moi :</b> cette expérience a été un formidable accélérateur. J'ai maîtrisé React dans un cadre d'entreprise et j'ai surtout appris à orchestrer plusieurs technologies (SPFx, Power Platform, API Graph) pour créer une solution complète, bien au-delà du simple développement d'interface.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="lendemains">
					<Accordion.Control icon={<IconClock size={20} />}>
						<Title order={4}>Les lendemains des projets</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Les composants que j'ai développés sont aujourd'hui en production et utilisés quotidiennement par les employés des entreprises clientes. Mon travail s'inscrit souvent dans une démarche de Tierce Maintenance Applicative (TMA), où j'assure le suivi, la correction des bugs et les évolutions futures de ces solutions.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="critique">
					<Accordion.Control icon={<IconEye size={20} />}>
						<Title order={4}>Mon regard critique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Travailler dans l'écosystème Microsoft 365 est très formateur mais présente des défis :</Text>
						<List spacing="xs" mt="sm">
							<List.Item><b>La courbe d'apprentissage :</b> l'environnement SPFx est assez lourd à mettre en place et le déploiement peut être complexe par rapport à un projet web classique.</List.Item>
							<List.Item><b>Les limites de la plateforme :</b> on doit parfois composer avec les contraintes imposées par SharePoint. Cela m'a appris à être créatif pour trouver des solutions tout en respectant le cadre technique.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Compétences mises en œuvre</Title>
				<Stack>
					<Anchor onClick={() => navigate("/competences/react")}>React (SPFx)</Anchor>
					<Anchor onClick={() => navigate("/competences/css")}>CSS (SCSS Modules)</Anchor>
					<Anchor onClick={() => navigate("/competences/relation-client")}>Relation Client</Anchor>
					<Anchor onClick={() => navigate("/competences/rigueur")}>Rigueur & Organisation</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default SharepointProject;