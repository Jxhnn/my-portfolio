import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconBrandHtml5,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const HTMLSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}><IconBrandHtml5 size={32} /></ThemeIcon>
					<Title order={2}>Compétence : HTML</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Structuration sémantique avancée, optimisation du référencement (SEO) et 
					conformité aux normes d'accessibilité (WCAG).
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Le langage <strong>HTML (HyperText Markup Language)</strong> est l'ossature essentielle de tout contenu web. 
					
					Loin d'un simple formatage visuel, maîtriser l'HTML en ingénierie logicielle consiste à utiliser la sémantique de la norme <strong>HTML 5</strong> pour donner du sens à la structure des documents (balises structurantes comme <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>) afin de maximiser le référencement naturel (SEO) et de garantir l'accessibilité universelle de l'interface pour les lecteurs d'écran.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> l'évolution moderne de l'HTML vise à standardiser le balisage sémantique pour 
					l'accessibilité (A11y). Cela se traduit par le déploiement natif d'éléments facilitant l'accès au contenu (comme 
					l'optimisation des temps de chargement via l'attribut natif <code>loading="lazy"</code> pour le contenu multimédia) 
					ou la structuration de balises facilitant la lecture automatique des documents.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>

				<Blockquote cite="– Restructuration sémantique de la plateforme Phidias 3" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors de la refonte de la plateforme de cours Phidias 3, l'ancien site manquait cruellement d'accessibilité numérique, 
						rendant la navigation très laborieuse pour les synthèses vocales.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai entièrement restructuré l'arborescence HTML des cours. 
						J'ai nettoyé les structures d'affichage obsolètes pour y appliquer un balisage sémantique HTML 
						(en délimitant la zone centrale par <code>&lt;main&gt;</code>, les chapitres d'apprentissage par des balises 
						&nbsp;<code>&lt;article&gt;</code> et l'ensemble des menus de cours par des balises <code>&lt;nav&gt;</code>). 
						Le résultat a été décisif : la conformité vis-à-vis des critères d'accessibilité (WCAG) a été rétablie, 
						offrant ainsi une navigation claire et exploitable aux synthèses vocales utilisées par nos élèves malvoyants.
					</Text>
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (Phidias 3)
					</Anchor>
				</Blockquote>

				<Blockquote cite="– Structuration structurelle des vues mobiles sur ARMEL TMS" py="xs" px="md">
					<Text ta="justify" mb="sm">
						Pour l'interface utilisateur mobile d'ARMEL TMS, il était primordial de structurer le squelette HTML de façon à ce que 
						le framework frontend puisse injecter ses comportements tactiles de manière prévisible.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai rédigé l'arborescence HTML délimitant la structure de chaque 
						composant de l'application mobile (sommaires d'exercices, cartes de rappel, formulaires). 
						Cette organisation rigoureuse du document a fourni une structure HTML claire et sémantique, permettant à 
						l'application hybride de s'afficher de manière parfaitement réactive et d'éviter les bugs de rendu ou de décalages tactiles.
					</Text>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (ARMEL TMS)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : avancé.</strong> L'écriture d'un HTML sémantique et conforme est pour moi une 
					&nbsp;<strong>priorité absolue et non négociable</strong>, car elle constitue le point de départ d'une expérience 
					utilisateur de qualité et d'un code frontend propre et maintenable.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> a été continue, renforcée par mes projets universitaires en 
					Licence pro DAWIN qui mettaient un accent rigoureux sur les standards W3C d'accessibilité numérique.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> le plus grand "code smell" du développement moderne est l'abus de divs . 
					Mon conseil est de toujours s'interroger sur l'existence d'une 
					balise sémantique adaptée (comme un <code>&lt;button&gt;</code> à la place d'une <code>&lt;div onclick="..."&gt;</code>) 
					pour bénéficier gratuitement de la gestion native du focus clavier, des indicateurs d'états et de l'interopérabilité des navigateurs.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Mon but est de devenir un référent en intégration web et d'être capable d'auditer l'accessibilité de plateformes d'envergure.
				</Text>
				<Text ta="justify">
					<strong>Formations et perspectives :</strong> je prévois de me former de manière approfondie sur le référentiel général 
					d'amélioration de l'accessibilité (<strong>RGAA</strong>) et sur l'utilisation avancée des attributs 
					&nbsp;<strong>ARIA</strong> (<em>Accessible Rich Internet Applications</em>), afin de rendre nos futures applications 
					mobiles et web pleinement accessibles à 100% des utilisateurs en situation de handicap.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm">• Projet Phidias 3 - plateforme pédagogique BTP</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate("/realisations/pact-hse")} size="sm">• PACT HSE - solution de gestion des risques</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default HTMLSkill;