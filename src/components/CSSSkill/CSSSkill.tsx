import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconBrandCss3,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const CSSSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'purple' }}><IconBrandCss3 size={32} /></ThemeIcon>
					<Title order={2}>Compétence : CSS</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Fiche d'évaluation détaillée de la compétence de mise en page web responsive, d'encapsulation de styles et d'intégration moderne.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Le langage <strong>CSS (Cascading Style Sheets)</strong> est le garant de la présentation visuelle et de l'ergonomie (UX) 
					d'un projet web. Maîtriser le CSS de manière professionnelle va bien au-delà de l'application de couleurs et de polices d'écriture. 
					Il s'agit d'exploiter les techniques de mise en page modernes (comme <em>Flexbox</em> pour l'alignement précis de composants 
					et <em>Grid Layout</em> pour la structure globale) afin de concevoir des grilles responsives fluides, de structurer des feuilles 
					de style pour assurer leur maintenabilité sur le long terme, et d'optimiser l'affichage sur tous types de terminaux.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> l'évolution des styles web se concentre sur l'encapsulation modulaire des propriétés 
					graphiques, la réduction du poids des feuilles de style et l'exploitation de variables CSS natives pour faciliter l'intégration 
					de thèmes dynamiques (comme le mode sombre / clair) directement au sein des navigateurs.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				
				<Blockquote cite="– Encapsulation par SCSS Modules sur SharePoint SPFx" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors du développement de composants web sur mesure dans SharePoint, le risque de collision est élevé : nos classes de styles 
						personnalisées peuvent entrer en conflit avec les feuilles de style de base éditées par Microsoft, déformant l'interface.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> pour éliminer ce risque, j'ai configuré les styles en combinant la puissance 
						de la syntaxe <strong>SCSS</strong> (variables, imbrication) et la modularisation via les <strong>CSS Modules</strong>. 
						Chaque composant possède sa feuille de style SCSS isolée, compilée avec des hachages uniques appliqués aux classes. 
						Le résultat est l'assurance d'un rendu visuel totalement étanche, robuste et protégé contre toute modification externe du portail client.
					</Text>
					<Anchor onClick={() => navigate("/realisations/sharepoint-custom")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (SharePoint Framework)
					</Anchor>
				</Blockquote>

				<Blockquote cite="– Structure adaptative Flexbox et Grid sur Phidias 3 et ARMEL TMS" py="xs" px="md">
					<Text ta="justify" mb="sm">
						Pour ces deux applications métiers, il était obligatoire d'offrir une mise en page s'adaptant aussi bien aux larges 
						écrans d'ordinateurs qu'aux smartphones.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai conçu la structure de l'application en combinant 
						&nbsp;<strong>Grid Layout</strong> pour la grille structurelle générale des pages, et <strong>Flexbox</strong> pour 
						l'alignement et la répartition de l'espace au sein des cartes d'exercices et formulaires. 
						En utilisant les <strong>Media queries</strong> classiques de manière rigoureuse, j'ai assuré la parfaite 
						réadaptation de l'affichage sur tous les écrans, éliminant les défauts d'utilisabilité pour les personnels 
						de bureau et de terrain.
					</Text>
					<Group ml="md" mt="sm">
						<Anchor onClick={() => navigate('/realisations/phidias')} size="sm" fw={600}>Voir Phidias 3</Anchor> •
						<Anchor onClick={() => navigate('/realisations/armel-tms')} size="sm" fw={600}>Voir ARMEL TMS</Anchor>
					</Group>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="purple" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : avancé.</strong> Je possède une excellente autonomie en CSS, me permettant d'intégrer 
					des structures d'interfaces complexes en grid ou flex sans dépendre d'un kit UI tiers. CSS est pour moi 
					une <strong>compétence prioritaire</strong>, au même niveau que le JavaScript dans le développement d'applications 
					frontend soignées.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est consolidée continuellement sur l'ensemble de mes projets, s'affirmant 
					de manière décisive lors de la refonte du site PACT HSE, où j'ai dû adapter l'ensemble de la charte graphique d'un kit 
					de manière à correspondre exactement aux retours des testeurs.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> l'écriture de CSS global devient très vite impossible à maintenir sur de grands projets. 
					Mon conseil, issu de mon expérience professionnelle, est de toujours adopter une stratégie de scope (comme les CSS Modules 
					ou les architectures de composants isolés) afin d'assurer l'évolution sereine des styles d'une plateforme.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="purple" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans le cadre de mon projet professionnel d'expert logiciel, je souhaite explorer les nouvelles manières d'écrire des 
					configurations CSS et de standardiser les designs à grande échelle.
				</Text>
				<Text ta="justify">
					<strong>Formations et perspectives :</strong> je prévois de me former activement sur des outils de configuration 
					CSS modernes orientés utilitaires comme <strong>Tailwind CSS</strong> afin d'optimiser ma vitesse de prototypage 
					d'applications et de rationaliser la taille finale de nos fichiers d'intégration d'entreprise.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/sharepoint-custom")} size="sm">• Développement sur SharePoint & Power Platform (SPFx)</Anchor>
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm">• Projet Phidias 3 : Plateforme pédagogique BTP</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate("/realisations/pact-hse")} size="sm">• PACT HSE - Solution de gestion des risques</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default CSSSkill;