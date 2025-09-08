

import { Carousel } from "@mantine/carousel";
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Badge,
	Accordion, List, Anchor,
	Image, Text,
	type ListStylesNames,
	type CSSProperties
} from "@mantine/core";
import {
	IconRun,
	IconBulb,
	IconListCheck,
	IconUsers,
	IconGrowth,
	IconClock,
	IconEye
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const ArmelTmsProject: React.FC = () => {

	const navigate = useNavigate();
	const listStyles: Partial<Record<ListStylesNames, CSSProperties>> = {
		item: {
			maxWidth: 'calc(100% - 24px)'
		}
	};

	const pictures = [
		'/assets/projects/armel-tms/1.png',
		'/assets/projects/armel-tms/2.png',
		'/assets/projects/armel-tms/3.png',
		'/assets/projects/armel-tms/4.png',
		'/assets/projects/armel-tms/5.png',
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
		<Stack gap="xl">
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Carousel withIndicators mb="xl" styles={{ viewport: { borderRadius: 20 } }} emblaOptions={{ loop: true }}>
					{slides}
				</Carousel>
				<Group justify="space-between" align="flex-start">
					<Group align="center" gap="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'green', to: 'teal' }}><IconRun size={32} /></ThemeIcon>
						<Stack gap={0}>
							<Title order={2} c="green.8">Application de prévention des TMS</Title>
							<Text size="sm" c="dimmed">Développement d'une application multi-plateforme pour le bien-être en entreprise.</Text>
						</Stack>
					</Group>
					<Badge color="green" size="lg" variant="light">Projet "sur étagère"</Badge>
				</Group>
			</Paper>
			<Accordion variant="separated" defaultValue="contexte">
				<Accordion.Item value="contexte">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Objectifs et contexte</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Contexte :</b> ce projet a été développé "sur étagère", c'est-à-dire sans client initial, pour répondre à une problématique de santé publique croissante en entreprise : les troubles musculo-squelettiques (TMS).</Text>
						<Text mt="sm"><b>Objectif :</b> créer une application mobile et de bureau simple d'utilisation pour aider les employés à prévenir les douleurs via des rappels et des exercices ciblés.</Text>
						<Text mt="sm"><b>Enjeu & risques :</b> l'enjeu était de créer un produit complet et suffisamment attractif pour être proposé par la suite à des clients. Le risque était de développer des fonctionnalités qui ne correspondraient pas à un réel besoin du marché.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="etapes">
					<Accordion.Control icon={<IconListCheck size={20} />}>
						<Title order={4}>Mes étapes de réalisation</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<List spacing="sm" type="ordered" styles={listStyles}>
							<List.Item><b>Développement du backend :</b> j'ai conçu et développé une API RESTful avec Laravel pour gérer les utilisateurs, les entreprises et les exercices.</List.Item>
							<List.Item><b>Développement du frontend :</b> j'ai créé l'interface de l'application avec Framework7, en me concentrant sur une expérience utilisateur de type "native".</List.Item>
							<List.Item><b>Sécurisation :</b> j'ai mis en place un système d'authentification basé sur les tokens JWT pour sécuriser les échanges entre l'application et l'API.</List.Item>
							<List.Item><b>Portage multi-plateforme :</b> j'ai utilisé CapacitorJS pour transformer l'application web en application mobile (iOS/Android) et Electron pour la version de bureau (Windows/MacOS).</List.Item>
							<List.Item><b>Refonte technique :</b> j'ai pris l'initiative de migrer le frontend de Materialize vers Framework7 pour améliorer la qualité de l'expérience mobile.</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="acteurs">
					<Accordion.Control icon={<IconUsers size={20} />}>
						<Title order={4}>Les acteurs et interactions</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Bien qu'étant un projet principalement individuel dans son développement, la phase de validation a été très collaborative. J'ai interagi avec :</Text>
						<List spacing="xs" mt="sm" styles={listStyles}>
							<List.Item>
								<b>Mon chef de projet :</b> pour la définition des objectifs, les validations des choix techniques majeurs et le suivi global de l'avancement.
							</List.Item>
							<List.Item>
								<b>Les employés de l'entreprise (en tant que testeurs) :</b> une phase de test interne a été organisée. Mon rôle était de présenter l'application, d'expliquer comment l'utiliser et de centraliser tous les retours (bugs, suggestions d'amélioration) qui étaient remontés dans un document partagé.
							</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="resultats">
					<Accordion.Control icon={<IconGrowth size={20} />}>
						<Title order={4}>Résultats obtenus</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text><b>Pour l'entreprise :</b> l'application est devenue un produit viable dans le catalogue de l'entreprise, prête à être commercialisée. Elle a servi de démonstration de notre capacité à créer des solutions multi-plateformes modernes.</Text>
						<Text mt="sm"><b>Pour moi :</b> ce projet a été une formidable montée en compétences. J'ai découvert et maîtrisé des technologies clés comme Capacitor, Electron et l'authentification JWT. J'ai également géré une refonte technique de manière autonome.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="lendemains">
					<Accordion.Control icon={<IconClock size={20} />}>
						<Title order={4}>Les lendemains du projet</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>À la fin de mon intervention, l'application était stable et fonctionnelle. Elle a été intégrée au portefeuille de produits de l'entreprise. Aujourd'hui, elle sert de base pour d'éventuelles customisations pour des clients intéressés par une solution de bien-être au travail.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="critique">
					<Accordion.Control icon={<IconEye size={20} />}>
						<Title order={4}>Mon regard critique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>Avec le recul, le point principal d'amélioration de ce projet réside dans la stratégie de test :</Text>
						<List spacing="xs" mt="sm" styles={listStyles}>
							<List.Item>
								<b>Absence de tests automatisés :</b> l'intégralité des tests a été réalisée manuellement, que ce soit par moi-même ou lors de la phase de test interne. Bien que cela ait permis de valider les fonctionnalités, ce n'est pas une approche robuste sur le long terme.
							</List.Item>
							<List.Item>
								<b>Risque de régression :</b> sans tests unitaires ou d'intégration, chaque nouvelle modification ou correction de bug faisait courir le risque d'introduire de nouvelles régressions ailleurs dans l'application. Cela rend la maintenance plus lente et plus risquée.
							</List.Item>
						</List>
						<Text mt="sm">
							Si je devais refaire ce projet aujourd'hui, j'intégrerais des tests automatisés (avec Pest ou PHPUnit côté Laravel) dès le début du développement.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Compétences mises en œuvre</Title>
				<Stack>
					<Anchor onClick={() => navigate("/competences/laravel")}>Laravel (API)</Anchor>
					<Anchor onClick={() => navigate("/competences/mysql")}>MySQL</Anchor>
					<Anchor onClick={() => navigate("/competences/javascript")}>JavaScript</Anchor>
					<Anchor onClick={() => navigate("/competences/html")}>HTML</Anchor>
					<Anchor onClick={() => navigate("/competences/css")}>CSS</Anchor>
					<Anchor onClick={() => navigate("/competences/autonomie")}>Autonomie & proactivité</Anchor>
					<Anchor onClick={() => navigate("/competences/curiosite")}>Curiosité & apprentissage</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default ArmelTmsProject;