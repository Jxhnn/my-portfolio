import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconUsers,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const RelationClientSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}><IconUsers size={32} /></ThemeIcon>
					<Title order={2}>Compétence humaine : relation client</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Traduction de besoins métiers en spécifications techniques, vulgarisation logicielle et 
					accompagnement des utilisateurs.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Pour un ingénieur logiciel, la <strong>relation client</strong> ne s'arrête pas au support après-vente. Elle réside au cœur 
					même du cycle de vie du projet : c'est l'aptitude à écouter activement les utilisateurs finaux pour traduire leurs besoins 
					métiers en spécifications techniques claires, à communiquer de manière transparente sur l'avancement des développements, et 
					à savoir vulgariser des notions d'architecture complexes pour rassurer des décisionnaires non-informaticiens.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> dans les méthodologies de développement modernes (comme Agile et Scrum), la relation 
					client est continue. Elle s'organise autour d'itérations courtes et de démonstrateurs réguliers, transformant le client d'un simple 
					"donneur d'ordres" en un véritable co-concepteur de la solution applicative.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				<Blockquote cite="– Présentations régulières et boucles d'ajustements SPFx" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors de mes développements de composants SPFx sur mesure pour les portails intranets d'entreprises clientes, j'ai participé 
						activement aux démonstrations et aux points d'avancement hebdomadaires.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> lors de ces réunions, je devais présenter les nouvelles fonctionnalités 
						développées (cartes interactives, moteurs de recherche) et expliquer simplement nos choix d'intégration technique et leurs 
						impacts visuels. En pratiquant une écoute active des équipes clientes (RH, communication), j'ai recueilli leurs suggestions 
						concrètes d'usage pour adapter l'ergonomie des formulaires. Cette communication claire a permis de créer une boucle de 
						feedback efficace d'un sprint à l'autre, rassurant pleinement le client sur le respect de ses besoins réels et garantissant 
						une adoption immédiate de l'outil par les collaborateurs lors du déploiement en production.
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
					<strong>Degré de maîtrise : débutant / intermédiaire.</strong> Je suis tout à fait à l'aise pour présenter mes travaux de 
					développement, animer des démonstrations et interagir avec les équipes clients dans un cadre collaboratif défini. 
					C'est une compétence <strong>très importante</strong> dans mon profil d'expert logiciel, car un bon développeur doit également 
					être un excellent communicant.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> a été progressive et empirique, s'affinant à chaque nouvelle réunion client chez 
					Exelys en observant la posture des consultants fonctionnels et chefs de projet de l'agence.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> la clé d'une démonstration client réussie est la préparation et l'empathie. Il ne faut jamais 
					présumer que le client possède les mêmes connaissances techniques ou le même vocabulaire que nous. Mon conseil est de toujours 
					traduire une contrainte ou une fonctionnalité technique en termes de bénéfices métiers (gain de temps, réduction d'erreurs, 
					simplicité de saisie) pour conserver l'adhésion complète du client.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="cyan" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Mon objectif professionnel à moyen terme est de devenir un interlocuteur technique de confiance pour les clients d'envergure, 
					capable non seulement de coder mais aussi de les conseiller de manière proactive sur leurs choix de solutions logicielles.
				</Text>
				<Text ta="justify">
					<strong>Perspectives :</strong> je souhaite me former de manière approfondie sur le rôle de <strong>product owner</strong> dans la 
					méthodologie Scrum, afin de maîtriser les processus de formalisation du carnet de produit (<em>product backlog</em>) et d'apprendre 
					à animer des ateliers d'idéation et de recueil de besoins métiers complexes.
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

export default RelationClientSkill;