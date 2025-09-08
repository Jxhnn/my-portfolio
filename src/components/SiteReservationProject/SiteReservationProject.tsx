
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Accordion, List, Anchor,
	Text, Image,
	type ListStylesNames,
	type CSSProperties
} from "@mantine/core";
import {
	IconTargetArrow,
	IconBulb,
	IconListCheck,
	IconUsers,
	IconThumbUp,
	IconClock,
	IconEye
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SiteReservationProject: React.FC = () => {

	const navigate = useNavigate();
	const listStyles: Partial<Record<ListStylesNames, CSSProperties>> = {
		item: {
			maxWidth: 'calc(100% - 24px)'
		}
	};

	return (
		<Stack gap="xl">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Image src="/assets/siteReservation.png" radius="md" alt="Aperçu du site de réservation" mb="xl" />
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}><IconTargetArrow size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={2} c="blue.8">Plateforme de gestion pour centre de loisirs</Title>
							<Text size="sm" c="dimmed">Développement d'une application web de réservation sur mesure.</Text>
						</Stack>
					</Group>
					<Badge color="blue" size="lg" variant="light">Projet de Stage</Badge>
				</Group>
			</Paper>
			<Accordion variant="separated" defaultValue="contexte">
				<Accordion.Item value="contexte">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Objectifs et contexte</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Contexte :</b> le centre de loisirs d'Artigueloutan gérait toutes ses inscriptions via des échanges d'e-mails et des tableaux sur des feuilles, un processus long et source d'erreurs.</Text>
						<Text mt="sm"><b>Objectif :</b> digitaliser et centraliser l'ensemble du processus de réservation via une application web intuitive pour les parents et un back-office performant pour les administrateurs.</Text>
						<Text mt="sm"><b>Enjeu & risques :</b> l'enjeu principal était l'adoption de l'outil par les parents, peu habitués au numérique. Le risque était de créer une solution trop complexe qui aurait été rejetée.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="etapes">
					<Accordion.Control icon={<IconListCheck size={20} />}>
						<Title order={4}>Mes étapes de réalisation</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<List spacing="sm" type="ordered" styles={listStyles}>
							<List.Item><b>Analyse du besoin :</b> j'ai commencé par des entretiens avec la direction pour définir les fonctionnalités clés.</List.Item>
							<List.Item><b>Conception de la base de données :</b> j'ai modélisé et créé le schéma MySQL pour gérer les utilisateurs, les enfants, les plannings et les réservations.</List.Item>
							<List.Item><b>Développement backend :</b> j'ai écrit toute la logique en PHP "vanilla" pour traiter les inscriptions, vérifier les places disponibles et interagir avec la base de données.</List.Item>
							<List.Item><b>Développement frontend :</b> j'ai intégré l'interface en HTML/CSS/JavaScript avec Bootstrap pour la rendre responsive.</List.Item>
							<List.Item><b>Déploiement et tests :</b> Une version bêta a été mis en place avec plusieurs parents de familles volontaires pour tester la plateforme.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="acteurs">
					<Accordion.Control icon={<IconUsers size={20} />}>
						<Title order={4}>Les acteurs et interactions</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Ce projet n'était pas solitaire. J'ai interagi principalement avec :</Text>
						<List spacing="xs" mt="sm" styles={listStyles}>
							<List.Item><b>La directrice du centre :</b> mon interlocutrice principale pour définir le cahier des charges et valider les fonctionnalités lors de points hebdomadaires.</List.Item>
							<List.Item><b>Quelques parents "testeurs" :</b> pour recueillir les premiers retours sur la simplicité d'utilisation de l'interface d'inscription.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="resultats">
					<Accordion.Control icon={<IconThumbUp size={20} />}>
						<Title order={4}>Résultats obtenus</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Pour l'entreprise :</b> l'application a permis un gain de temps administratif considérable, une réduction de 100% des erreurs de surbooking et une image modernisée du service. <b>Plus de 100 familles l'ont utilisée.</b></Text>
						<Text mt="sm"><b>Pour moi :</b> ce fut mon premier projet complet de A à Z. J'ai énormément appris sur la gestion de projet, la conception d'une base de données et l'importance de l'UX. C'est ce projet qui a confirmé ma passion pour le développement web.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="lendemains">
					<Accordion.Control icon={<IconClock size={20} />}>
						<Title order={4}>Les lendemains du projet</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>À la fin de mon stage, l'application était entièrement fonctionnelle. Elle a été <b>utilisée avec succès pendant plus d'un an</b> par le centre de loisirs. Aujourd'hui, bien que le site ayant été remplacé, ce projet reste une référence de réussite qui a prouvé l'intérêt de la digitalisation pour leur structure.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="critique">
					<Accordion.Control icon={<IconEye size={20} />}>
						<Title order={4}>Mon regard critique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Avec le recul et l'expérience que j'ai aujourd'hui, je ferais plusieurs choses différemment :</Text>
						<List spacing="xs" mt="sm" styles={listStyles}>
							<List.Item><b>Utiliser un framework :</b> j'utiliserais Laravel pour structurer le code backend. Le PHP "vanilla" était formateur mais n'est pas idéal pour la maintenabilité à long terme.</List.Item>
							<List.Item><b>Conception de la BDD :</b> je concevrais un schéma de base de données plus flexible pour anticiper plus facilement des évolutions futures (ex: gestion de plusieurs centres).</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Compétences mises en œuvre</Title>
				<Stack>
					<Anchor onClick={() => navigate('/competences/php')}>PHP</Anchor>
					<Anchor onClick={() => navigate("/competences/mysql")}>MySQL</Anchor>
					<Anchor onClick={() => navigate("/competences/javascript")}>JavaScript</Anchor>
					<Anchor onClick={() => navigate("/competences/html")}>HTML</Anchor>
					<Anchor onClick={() => navigate("/competences/css")}>CSS</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default SiteReservationProject;