
import { 
	Stack, Paper, Group, 
	ThemeIcon, Title, Accordion, 
	Blockquote, Anchor, Text
} from "@mantine/core";

import { 
	IconBrandCss3, 
	IconTarget, 
	IconBulb, 
	IconTrendingUp
} from "@tabler/icons-react";

import type React from "react";
import { useNavigate } from "react-router";

const CSSSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'purple' }}>
						<IconBrandCss3 size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : CSS</Title>
				</Group>
				<Text size="lg" ta="justify">
					CSS (Cascading Style Sheets) est le langage qui donne vie au web en gérant toute la présentation visuelle. Dans un <b>contexte professionnel</b>, une bonne maîtrise du CSS va bien au-delà des couleurs et des polices : elle est essentielle pour créer des expériences utilisateur (UX) engageantes, garantir la maintenabilité du style et assurer l'accessibilité. <b>Son actualité</b> est dominée par des modules puissants comme Flexbox et Grid, et par l'adoption de méthodologies (ex: CSS Modules) pour gérer la complexité des grands projets.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Stack>
							<Blockquote cite="– Projets Phidias3 et ARMEL TMS (CSS Classique)">
								Le défi sur ces projets était de créer des mises en page complexes et responsives à partir de zéro, en utilisant des fichiers CSS standards.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant intensivement <b>Flexbox</b> pour aligner les composants et <b>Grid Layout</b> pour la structure globale des pages. J'ai également utilisé les <b>Media Queries</b> pour garantir que l'affichage s'adapte correctement des grands écrans aux smartphones. <b>Ma valeur ajoutée a été d'assurer une expérience utilisateur cohérente sur tous les appareils,</b> résolvant le problème des sites non-adaptatifs.
							</Blockquote>
							<Group ml="md">
								<Anchor onClick={() => navigate('/realisations/phidias')} fz="sm">Voir Phidias3</Anchor>
								<Anchor onClick={() => navigate('/realisations/armel-tms')} fz="sm">Voir ARMEL TMS</Anchor>
							</Group>

							<Blockquote cite="– Expérience SharePoint (SCSS Modules)">
								Le problème principal sur SharePoint est d'éviter les conflits de style entre les différents composants (Web Parts) qui peuvent être ajoutés par les utilisateurs sur une même page.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant <b>SCSS</b> pour ses fonctionnalités avancées (variables, nesting) et surtout les <b>CSS Modules</b> pour encapsuler les styles. Chaque composant React avait son propre fichier de style, garantissant que les classes CSS étaient uniques et ne pouvaient pas "fuiter" pour affecter d'autres parties de la page. <b>Ma valeur ajoutée a été de construire un système de style robuste, modulaire et sans conflit,</b> résolvant ainsi le problème de la maintenabilité à long terme.
							</Blockquote>
							<Anchor onClick={() => navigate('/realisations/sharepoint-custom')} fz="sm" ml="md">
								Voir l'expérience SharePoint
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
							<b>Niveau de maîtrise : Avancé.</b> Je suis très à l'aise avec les concepts de mise en page modernes et j'ai une expérience concrète de l'utilisation de pré-processeurs comme SCSS pour des projets professionnels. Pour moi, le CSS est une <b>compétence aussi importante que JavaScript</b> dans le développement frontend.
						</Text>
						<Text mt="sm">
							<b>Mon recul sur la compétence :</b> Mon conseil, après avoir travaillé avec les deux approches, est de toujours privilégier une méthode de style "scopé" (comme les CSS Modules) pour les applications basées sur des composants. Un CSS global devient très vite ingérable. Penser "composant" dès le début, même pour le style, est un gain de temps énorme.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon objectif est d'aller au-delà de la simple écriture du CSS pour me concentrer sur l'architecture de style et l'optimisation des performances.
						</Text>
						<Text mt="sm">
							<b>Formations à venir :</b> Je prévois de me former sur des frameworks CSS "utility-first" comme <b>Tailwind CSS</b>, qui représente une approche très différente et extrêmement populaire pour le développement rapide d'interfaces. Je souhaite également explorer l'univers du <b>CSS-in-JS</b> (avec des bibliothèques comme Emotion ou Styled Components) pour comprendre comment gérer le style de manière encore plus intégrée dans mes applications React.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisations associées à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/sharepoint-custom')}>Expérience SharePoint & Power Platform (SPFx)</Anchor>
					<Anchor onClick={() => navigate('/realisations/phidias')}>Projet Phidias3</Anchor>
					<Anchor onClick={() => navigate('/realisations/armel-tms')}>Application Mobile ARMEL TMS</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default CSSSkill;