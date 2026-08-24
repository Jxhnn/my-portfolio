import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconChecklist,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const OrganisationSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}><IconChecklist size={32} /></ThemeIcon>
					<Title order={2}>Compétence humaine : rigueur & organisation</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Pilotage rigoureux des workflows de développement, maîtrise du versionnage (Git) et intégration 
					de pratiques CI/CD.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					La <strong>rigueur</strong> est le fondement de la qualité d'un logiciel. Elle se manifeste par l'écriture d'un code propre, 
					documenté, standardisé (respect des conventions) et testé. L'<strong>organisation</strong>, quant à elle, est l'aptitude à 
					structurer rationnellement son temps, à planifier ses tâches au travers d'outils de suivi (méthodes Agiles / Scrum) et à 
					collaborer de manière transparente en utilisant les workflows de gestion de versions (Git).
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> l'accélération des cycles de déploiement (CI/CD) exige une discipline de fer de 
					la part des ingénieurs logiciels. La rigueur dans la gestion des branches de code (Git flow, pull requests documentées) 
					et l'écriture de commits explicites sont indispensables pour éviter l'introduction d'anomalies en production.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				
				<Blockquote cite="– Collaboration structurée sur SharePoint et Power Platform" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors du développement collaboratif d'applications et d'extensions SharePoint SPFx, nous étions plusieurs ingénieurs 
						à intervenir simultanément sur les dépôts de code.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai appliqué une rigueur absolue dans l'organisation de mon travail. 
						J'ai découpé mes tâches fonctionnelles en tâches techniques élémentaires au sein de notre outil de gestion, et j'ai 
						scrupuleusement appliqué la convention de nommage de l'équipe. De plus, j'ai opéré un suivi de versionnage Git 
						rigoureux (création de branches dédiées par tâche, rédaction de messages de commits clairs et documentés, et 
						soumission de pull requests commentées pour relecture). Cette discipline organisationnelle a permis d'éliminer 
						les conflits de fusion (merge conflicts) de code et d'assurer des intégrations applicatives sereines et prévisibles.
					</Text>
					<Anchor onClick={() => navigate("/realisations/sharepoint-custom")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (SharePoint Framework)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="cyan" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : intermédiaire.</strong> J'applique quotidiennement des processus rigoureux dans mon travail 
					individuel et je maîtrise parfaitement le flux de collaboration au sein d'une équipe. C'est une compétence
					&nbsp;<strong>essentielle et structurante</strong> de mon profil, garante de la maintenabilité des projets sur lesquels j'interviens.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est accélérée de façon remarquable à mon entrée chez Exelys, où la confrontation 
					à des projets multi-développeurs m'a fait assimiler instantanément l'obligation d'une discipline de versionnage irréprochable.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> le manque de rigueur est une dette technique qui se paie toujours cher lors des phases de 
					maintenance. Mon conseil est de toujours s'imposer d'écrire du code "auto-documenté" (noms de variables explicites, 
					fonctions courtes à responsabilité unique) et de ne jamais soumettre de code non relu ou non testé localement, car le 
					respect de l'équipe commence par la propreté de son code.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="cyan" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Mon objectif professionnel à moyen terme est de passer d'une rigueur d'exécution individuelle à la capacité d'impulser et de 
					configurer des standards organisationnels pour un projet d'envergure.
				</Text>
				<Text ta="justify">
					<strong>Perspectives :</strong> je souhaite me former de manière approfondie sur la conception et la configuration de pipelines 
					d'intégration et de déploiement continus (<strong>CI/CD</strong>) sous GitHub Actions, afin d'automatiser le contrôle de qualité 
					et de sécurité de notre code en amont des livraisons de production.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/sharepoint-custom")} size="sm">• Développement sur SharePoint & Power Platform (SPFx)</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default OrganisationSkill;