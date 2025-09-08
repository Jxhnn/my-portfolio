
import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Accordion, List, Anchor,
	Text, Image,
	type ListStylesNames,
	type CSSProperties
} from "@mantine/core";
import {
	IconShieldCheck,
	IconBulb,
	IconListCheck,
	IconUsers,
	IconGrowth,
	IconClock,
	IconEye
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const PactHseProject: React.FC = () => {

	const navigate = useNavigate();
	const listStyles: Partial<Record<ListStylesNames, CSSProperties>> = {
		item: {
			maxWidth: 'calc(100% - 24px)'
		}
	};

	const pictures = [
		'/assets/projects/pact-hse/1.png',
		'/assets/projects/pact-hse/2.png',
		'/assets/projects/pact-hse/3.png',
		'/assets/projects/pact-hse/4.png',
		'/assets/projects/pact-hse/5.png',
	];

	const slides = pictures.map((url) => (
		<Carousel.Slide key={url}>
			<Image
				src={url}
				fit="contain"
				radius="md"
				alt="Aperçu de l'application ARMEL TMS"
				h={"100%"}
			/>
		</Carousel.Slide>
	));

	return (
		<Stack gap="xl">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Carousel withIndicators mb="xl" styles={{ viewport: { borderRadius: 20 } }} emblaOptions={{ loop: true }}>
					{slides}
				</Carousel>
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'cyan' }}><IconShieldCheck size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={2} c="teal.8">PACT HSE - Solution de gestion des risques</Title>
							<Text size="sm" c="dimmed">Application web pour la gestion de la prévention et de la conformité HSE.</Text>
						</Stack>
					</Group>
					<Badge color="teal" size="lg" variant="light">Application métier</Badge>
				</Group>
			</Paper>
			<Accordion variant="separated" defaultValue="contexte">
				<Accordion.Item value="contexte">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Objectifs et contexte</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Contexte :</b> de nombreuses entreprises gèrent leurs obligations d'Hygiène, Sécurité et Environnement (HSE) avec des outils décentralisés (Excel, emails), ce qui est source d'inefficacité et de risques de non-conformité.</Text>
						<Text mt="sm"><b>Objectif :</b> développer PACT HSE, une application web centralisée servant d' "assistant quotidien" pour piloter toutes les actions de prévention : évaluation des risques, remontée d'anomalies, et planification des contrôles.</Text>
						<Text mt="sm"><b>Enjeu & risques :</b> l'enjeu était de créer un produit commercialisable, à la fois complet fonctionnellement et simple d'utilisation pour des non-informaticiens. Le risque était de créer une interface trop complexe qui découragerait l'adoption par les équipes sur le terrain.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="etapes">
					<Accordion.Control icon={<IconListCheck size={20} />}>
						<Title order={4}>Mes étapes de réalisation</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<List spacing="sm" type="ordered" styles={listStyles}>
							<List.Item><b>Développement Full-Stack avec Laravel :</b> j'ai utilisé Laravel pour construire à la fois l'API RESTful et la logique du frontend, en gérant le routage et le rendu des vues HTML.</List.Item>
							<List.Item><b>Intégration de l'interface :</b> j'ai intégré le design en HTML, CSS et JavaScript en m'appuyant sur un kit UI acheté sur Envato pour accélérer la production d'une interface professionnelle et cohérente.</List.Item>
							<List.Item><b>Développement des modules clés :</b> j'ai développé les fonctionnalités principales vues dans la plaquette : le tableau de bord en temps réel, le module de suivi réglementaire, la gestion des fiches d'anomalies et le plan d'action unique.</List.Item>
							<List.Item><b>Mise en place de la logique métier :</b> j'ai codé la logique complexe de planification automatique des inspections et de génération des indicateurs de conformité.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="acteurs">
					<Accordion.Control icon={<IconUsers size={20} />}>
						<Title order={4}>Les acteurs et interactions</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Ce projet s'est déroulé en collaboration étroite avec :</Text>
						<List spacing="xs" mt="sm" styles={listStyles}>
							<List.Item><b>Le chef de projet :</b> pour définir les spécifications fonctionnelles de chaque module et prioriser les développements.</List.Item>
							<List.Item>
								<b>Les testeurs internes (employés de l'entreprise) :</b> j'ai participé activement à la phase de test. Mon rôle était de présenter les nouvelles fonctionnalités aux testeurs, de les guider dans leur utilisation et de centraliser leurs retours (bugs, suggestions) depuis le document partagé pour les transformer en tâches de développement.
							</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="resultats">
					<Accordion.Control icon={<IconGrowth size={20} />}>
						<Title order={4}>Résultats obtenus</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Pour l'entreprise :</b> PACT HSE est devenu un nouveau produit stratégique au catalogue d'Exelys, positionnant l'entreprise comme un acteur de la digitalisation des processus HSE.</Text>
						<Text mt="sm"><b>Pour moi :</b> ce projet a été une expérience full-stack très complète. J'ai pu construire une application métier complexe de A à Z, ce qui a solidifié ma maîtrise de Laravel et ma capacité à gérer un projet d'envergure de manière organisée.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="lendemains">
					<Accordion.Control icon={<IconClock size={20} />}>
						<Title order={4}>Les lendemains du projet</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>L'application est aujourd'hui une solution stable et commercialisée par Exelys. Elle est présentée aux clients potentiels comme une solution clé en main pour la gestion de leurs risques. Le projet continue de vivre à travers la maintenance et les futures évolutions basées sur les retours des premiers clients.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="critique">
					<Accordion.Control icon={<IconEye size={20} />}>
						<Title order={4}>Mon regard critique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>L'utilisation d'un kit UI d'Envato a été un accélérateur, mais a présenté des défis :</Text>
						<List spacing="xs" mt="sm" styles={listStyles}>
							<List.Item><b>Manque de flexibilité :</b> il était parfois complexe de customiser un composant au-delà de ce que le kit prévoyait, ce qui pouvait ralentir le développement sur des besoins spécifiques.</List.Item>
							<List.Item><b>Couplage fort :</b> le fait que le frontend (HTML/JS) et le backend (Laravel) soient dans le même projet monolithique rend l'application moins évolutive. Une approche avec une API Laravel et un frontend séparé (en React par exemple) serait plus moderne et plus facile à maintenir par des équipes distinctes.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Compétences mises en œuvre</Title>
				<Stack>
					<Anchor onClick={() => navigate('/competences/laravel')}>Laravel</Anchor>
					<Anchor onClick={() => navigate('/competences/mysql')}>MySQL</Anchor>
					<Anchor onClick={() => navigate('/competences/javascript')}>JavaScript</Anchor>
					<Anchor onClick={() => navigate('/competences/html')}>HTML</Anchor>
					<Anchor onClick={() => navigate('/competences/css')}>CSS</Anchor>
					<Anchor onClick={() => navigate('/competences/rigueur')}>Rigueur & organisation</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default PactHseProject;