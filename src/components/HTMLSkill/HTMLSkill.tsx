
import { 
	Stack, Paper, Group, 
	ThemeIcon, Title, Accordion, 
	Blockquote, Code, Anchor,
	Text
} from "@mantine/core";

import { 
	IconBrandHtml5, 
	IconTarget, 
	IconBulb, 
	IconTrendingUp
} from "@tabler/icons-react";

import type React from "react";
import { useNavigate } from "react-router";

const HTMLSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
						<IconBrandHtml5 size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : HTML</Title>
				</Group>
				<Text size="lg" ta="justify">
					HTML (HyperText Markup Language) est le langage qui forme le squelette de chaque page web. Dans un <b>contexte professionnel</b>, une maîtrise de l'HTML ne se limite pas à connaître les balises, mais à savoir les utiliser de manière sémantique pour garantir l'accessibilité et un bon référencement (SEO). <b>Son actualité</b> est portée par la norme HTML5, qui a introduit des balises structurantes essentielles pour les applications web modernes.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Stack>
							<Blockquote cite="– Projet Phidias3 (Refonte d'un site de formation)">
								Le défi était de migrer un contenu issu de fichiers XML vers une structure web propre et compréhensible par les navigateurs et les moteurs de recherche.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant des balises sémantiques HTML5 comme <Code>&lt;main&gt;</Code>, <Code>&lt;article&gt;</Code>, <Code>&lt;section&gt;</Code> et <Code>&lt;nav&gt;</Code> pour donner du sens au contenu pédagogique. <b>Ma valeur ajoutée a été de transformer des données brutes en une page web structurée, accessible et optimisée pour le SEO,</b> résolvant ainsi le problème d'un contenu désorganisé et peu visible.
							</Blockquote>
							<Anchor onClick={() => navigate('/realisations/phidias')} fz="sm" ml="md">
								Voir la réalisation Phidias3
							</Anchor>

							<Blockquote cite="– Projet ARMEL TMS (Application mobile)">
								Pour l'application mobile, il fallait structurer les différentes "vues" (écrans) de manière logique pour que le framework puisse appliquer son style "natif".
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant l'HTML pour définir le squelette de chaque composant de l'interface : listes d'exercices, cartes de contenu... <b>Ma valeur ajoutée a été de garantir une base HTML propre, permettant à Framework7 de fonctionner correctement</b> et de créer une expérience utilisateur fluide et intuitive, comme une vraie application mobile.
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
							<b>Niveau de maîtrise : avancé.</b> Je suis très à l'aise avec l'ensemble des balises HTML5, la structuration sémantique d'une page et les bases de l'accessibilité. C'est une <b>compétence fondamentale et non-négociable</b> de mon profil, car un bon HTML est le point de départ de tout projet web de qualité.
						</Text>
						<Text mt="sm">
							<b>Mon recul sur la compétence :</b> Mon conseil est de ne jamais sous-estimer l'HTML en le considérant comme "facile". Une structure sémantique bien pensée dès le départ facilite énormément le travail en CSS et en JavaScript, tout en améliorant l'accessibilité et le SEO.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon projet professionnel n'est pas d'apprendre de nouvelles balises, mais de perfectionner leur utilisation. Je souhaite devenir un expert de l'intégration web où la qualité du code HTML est irréprochable.
						</Text>
						<Text mt="sm">
							<b>Formations à venir :</b> je prévois de me former en profondeur sur les <b>standards d'accessibilité avancés (WCAG)</b> et les attributs <b>ARIA</b> pour être capable de construire des applications web entièrement accessibles aux personnes en situation de handicap.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisations associées à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/phidias')}>Projet Phidias3</Anchor>
					<Anchor onClick={() => navigate('/realisations/armel-tms')}>Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate('/realisations/pact-hse')}>Projet PACT'HSE</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default HTMLSkill;