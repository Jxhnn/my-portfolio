import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconBrandJavascript,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const JavascriptSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'yellow', to: 'orange' }}><IconBrandJavascript size={32} /></ThemeIcon>
					<Title order={2}>Compétence : JavaScript</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
				Expertise du langage JavaScript, de la logique asynchrone complexe et de la manipulation dynamique du DOM.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Le langage <strong>JavaScript (JS)</strong> est le moteur d'exécution incontournable du web moderne. 
					Maîtriser JavaScript signifie savoir concevoir des algorithmes robustes, manipuler l'asynchronisme 
					(à l'aide de structures comme les <code>Promises</code> et <code>async / await</code>), 
					interagir dynamiquement avec les APIs des navigateurs (DOM, fetch, storage) et structurer du code 
					propre et modulaire, que ce soit pour le navigateur (frontend) ou le serveur (Node.js / Bun).
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité (ES2025 / ES2026) :</strong> en 2026, l'évolution du langage s'accélère avec la 
					finalisation d'<strong>ES2025</strong> et l'arrivée d'<strong>ES2026</strong>. Ces versions stabilisent des 
					méthodes d'itérateurs avancées (<em>Iterator helpers</em>), de nouvelles méthodes d'ensembles natifs 
					(<em>Set methods</em>), et la très attendue <strong>Temporal API</strong>, 
					résolvant une fois pour toutes les faiblesses historiques de la manipulation des dates en JS.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				
				<Blockquote cite="– Flux asynchrones d'authentification et d'onboarding sur ARMEL TMS" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						L'application ARMEL TMS a été conçue sur le modèle d'une Single Page Application (SPA), où l'intégralité des flux et 
						requêtes de données s'effectue de manière asynchrone sans rechargement de page.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai développé le module d'authentification entièrement en 
						JavaScript à l'aide de requêtes <code>fetch</code>. Lorsqu'un utilisateur soumet ses identifiants, le script 
						interroge de manière asynchrone l'API Laravel. À la réception du token JWT, le code JavaScript orchestre sa 
						sauvegarde sécurisée, puis analyse le profil de l'utilisateur pour le rediriger dynamiquement : soit vers 
						l'écran principal de l'application, soit vers un parcours d'onboarding (tutoriel interactif) conçu pour lui 
						apprendre à utiliser l'application. Ce flux asynchrone garantit une transition fluide et une expérience utilisateur 
						sans rupture visuelle.
					</Text>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (ARMEL TMS)
					</Anchor>
				</Blockquote>

				<Blockquote cite="– Rechargement dynamique de contenu global sur Phidias 3" py="xs" px="md">
					<Text ta="justify" mb="sm">
						Sur le projet Phidias 3, le défi technique était d'offrir une navigation fluide au sein de l'application sans 
						recharger la page complète lors des modifications ou créations de contenus pédagogiques.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai implémenté des requêtes AJAX en JavaScript 
						natif (API <code>Fetch</code>). Suite à la création ou à la modification d'un cours (playlist) par un utilisateur, 
						le script intercepte l'événement, transmet les données au serveur Laravel, récupère le contenu mis à jour et 
						l'injecte dynamiquement à la place de l'existant dans le DOM. Cette automatisation a permis d'optimiser le 
						confort de travail des formateurs, éliminant les temps d'attente liés aux rafraîchissements complets de page.
					</Text>
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (Phidias 3)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="yellow" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : avancé.</strong> JavaScript est ma compétence fondamentale, le cœur technique 
					sur lequel reposent l'ensemble de mes spécialisations frontend (React, SPFx) et de bureau (Electron). 
					C'est la <strong>priorité numéro un</strong> de mon profil d'expert.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> a été continue, s'accélérant drastiquement lors du portage 
					applicatif d'ARMEL TMS où j'ai dû appréhender les API d'Electron et de Capacitor en JavaScript pur 
					pour distribuer l'application sur desktop et mobile.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> maîtriser un framework (React, Vue, Angular) est inutile si l'on ne maîtrise 
					pas parfaitement le "Vanilla JS". Mon conseil est d'investir du temps sur la compréhension intime du 
					moteur JavaScript (la file d'attente des événements / *Event Loop*, les fermetures / *Closures* et le 
					prototypage d'objets) afin d'être armé pour résoudre n'importe quel bug complexe d'affichage ou d'optimisation.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="yellow" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					À moyen terme, je souhaite consolider mes compétences en JavaScript pour concevoir des applications 
					web hautement performantes capables de rivaliser avec des comportements d'applications de bureau natives.
				</Text>
				<Text ta="justify">
					<strong>Formations et perspectives :</strong> je prévois de me former sur l'exploitation 
					des <strong>Web Workers</strong> afin d'implémenter des architectures de traitement lourd en arrière-plan 
					(multi-threading) directement côté client. Parallèlement, je renforce mes connaissances sur l'unification de 
					TypeScript pour sécuriser les flux de données complexes de bout en bout de mes projets.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm">• Projet Phidias 3 : Plateforme pédagogique BTP</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate("/realisations/site-reservation-acm")} size="sm">• Site de réservation pour un centre de loisirs</Anchor>
					<Anchor onClick={() => navigate("/realisations/pact-hse")} size="sm">• PACT HSE - Solution de gestion des risques</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default JavascriptSkill;