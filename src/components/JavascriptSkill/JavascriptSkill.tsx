
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Accordion,
	Blockquote, Anchor, Code,
	Text
} from "@mantine/core";
import {
	IconBrandJavascript,
	IconTarget,
	IconBulb,
	IconTrendingUp
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const JavascriptSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'yellow', to: 'orange' }}>
						<IconBrandJavascript size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : JavaScript</Title>
				</Group>
				<Text size="lg" ta="justify">
					JavaScript est le langage de programmation fondamental du web. Dans le <b>contexte professionnel</b> actuel, sa maîtrise est indispensable, car il est le moteur de l'interactivité sur la quasi-totalité des sites et applications. <b>Son actualité</b> est rythmée par les mises à jour annuelles d'ECMAScript (ES6, ES7...), qui l'enrichissent constamment de nouvelles fonctionnalités et en font un langage moderne et puissant.
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
								Le site original était statique. Pour améliorer l'accès aux informations comme le lexique, il fallait éviter de recharger la page à chaque clic.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant des appels <b>AJAX</b> avec l'API Fetch de JavaScript pour charger dynamiquement le contenu. <b>Ma valeur ajoutée a été de rendre l'expérience utilisateur plus fluide et moderne,</b> résolvant le problème de lenteur de la navigation et prouvant ma capacité à dynamiser une application sans framework lourd.
							</Blockquote>
							<Anchor fz="sm" ml="md" onClick={() => navigate('/realisations/phidias')}>
								Voir la réalisation Phidias3
							</Anchor>
							<Blockquote cite="– Projet ARMEL TMS (Application mobile)">
								Le défi était de construire toute la logique d'une application mobile qui communique avec un backend.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant JavaScript moderne (ES6+) et l'asynchronisme (<Code>async/await</Code>) pour interroger l'API Laravel, gérer l'authentification JWT et mettre à jour l'interface en fonction des actions de l'utilisateur. <b>Ma valeur ajoutée a été de construire le cœur interactif de l'application,</b> prouvant ma maîtrise du langage pour créer une application complète et pas seulement des scripts pour un site web.
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
							<b>Niveau de maîtrise : avancé.</b> Je me considère à l'aise avec la manipulation du DOM, la gestion des événements, l'asynchronisme et les concepts modernes d'ES6+. C'est la <b>compétence fondamentale</b> de mon profil, le socle sur lequel reposent mes autres compétences comme React ou Node.js.
						</Text>
						<Text mt="sm">
							<b>Mon recul :</b> mon conseil est de ne jamais négliger les bases du "JavaScript vanilla". Comprendre comment le langage fonctionne sans l'aide d'un framework est essentiel pour débugger efficacement et choisir les bons outils pour un projet.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon projet est de continuer à approfondir ma maîtrise de JavaScript, non plus seulement comme un outil, mais comme un véritable langage dont je comprends les subtilités (mécanismes internes, optimisation des performances).
						</Text>
						<Text mt="sm">
							<b>Formations à venir :</b> Je prévois de me plonger dans des sujets plus avancés comme les <b>Web Workers</b> pour la gestion du multi-threading en frontend, et de continuer à renforcer ma pratique de <b>TypeScript</b>, qui est pour moi l'évolution naturelle et indispensable du JavaScript pour les projets à grande échelle.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisations associées à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/phidias')}>Projet Phidias3</Anchor>
					<Anchor onClick={() => navigate('/realisations/armel-tms')}>Projet ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate('/realisations/pact-hse')}>Projet PACT'HSE</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default JavascriptSkill;