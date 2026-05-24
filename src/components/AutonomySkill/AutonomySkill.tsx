import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconRocket,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const AutonomySkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}><IconRocket size={32} /></ThemeIcon>
					<Title order={2}>Compétence humaine : autonomie & proactivité</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Fiche d'évaluation de la capacité à s'approprier des problématiques complexes, à rechercher des solutions de manière indépendante 
					et à être force de proposition.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Dans le domaine de l'ingénierie logicielle, l'<strong>autonomie</strong> n'est pas de l'isolement : c'est la capacité à s'approprier 
					un besoin métier flou ou une tâche complexe, à planifier son exécution et à trouver des solutions fiables par soi-même en s'appuyant 
					sur de la recherche documentaire et de la veille technologique. La <strong>proactivité</strong> en est le prolongement naturel : 
					c'est anticiper les points de blocage futurs, concevoir des prototypes pour valider des hypothèses techniques et proposer des 
					modernisations structurelles avant qu'elles ne soient demandées.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> avec le développement du travail asynchrone et des équipes distribuées au sein des DSI 
					modernes, l'autonomie technique et la capacité à s'auto-organiser sont devenues des compétences humaines de premier plan pour 
					garantir le respect des jalons d'un projet sans nécessiter de micro-management.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				
				<Blockquote cite="– Développement autonome des scripts de migration de Phidias 3" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Le projet Phidias 3 exigeait d'extraire, nettoyer et injecter les anciennes données de cours structurées de manière 
						désorganisée dans des dizaines de fichiers XML vers notre nouvelle base relationnelle MySQL.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> ne disposant pas de mode opératoire pré-établi pour cette tâche 
						d'import complexe, j'ai pris l'initiative d'analyser l'arborescence des fichiers XML d'origine. 
						J'ai conçu de manière autonome un script de parsing complet en Python. Ce script analysait les fichiers, 
						nettoyait les données, résolvait les incohérences de liaisons d'images, puis automatisait la génération d'un 
						fichier SQL textuel d'insertions massives parfaitement structuré. J'ai mené à bien ce processus complexe de 
						A à Z sans supervision, sécurisant l'intégralité de la migration de données en une seule semaine et épargnant 
						un temps précieux à l'équipe.
					</Text>
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (Phidias 3)
					</Anchor>
				</Blockquote>

				<Blockquote cite="– Migration d'interface sur ARMEL TMS" py="xs" px="md">
					<Text ta="justify" mb="sm">
						Pour ARMEL TMS, l'interface originale s'avérait trop limitée pour offrir une expérience utilisateur fluide de 
						type native sur mobile.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai entrepris seul des recherches de solutions alternatives 
						et identifié Framework7 comme le choix d'intégration idéal. De ma propre initiative, j'ai étudié la bibliothèque, 
						réalisé un démonstrateur d'évaluation technique fonctionnel, et l'ai présenté à mon chef de projet. 
						Suite à sa validation, j'ai géré l'intégralité du chantier de migration technique de manière autonome et organisée, 
						modernisant durablement l'utilisabilité de l'application mobile.
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
					<strong>Degré de maîtrise : intermédiaire.</strong> Je suis capable de prendre en main un sujet technique complexe de bout en 
					bout et de mener les recherches nécessaires pour le résoudre de manière autonome. C'est une <strong>priorité absolue</strong> 
					&nbsp;dans mon profil d'expert logiciel pour inspirer de la confiance à mes collaborateurs et mes clients.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est développée au fil de mon parcours, s'accélérant particulièrement lors de mon stage 
					de BTS en autonomie complète sur le site de réservation d'ACM, puis s'ajustant au cadre exigeant d'une alternance en agence numérique.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> l'autonomie ne doit jamais se transformer en isolement ou en "orgueil technique". Mon conseil est 
					de savoir s'imposer une limite temporelle lors d'un blocage : chercher par soi-même pendant une ou deux heures est formateur, 
					mais il faut savoir s'arrêter pour poser une question structurée et documentée à l'équipe afin de ne pas ralentir le projet.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="orange" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans mon projet professionnel, mon but est de transformer mon autonomie technique individuelle en une capacité à encadrer ou à 
					orienter de manière proactive les choix d'architecture globaux d'une équipe.
				</Text>
				<Text ta="justify">
					<strong>Perspectives :</strong> je m'exerce à participer de manière plus proactive aux phases de conception amont et 
					d'estimation fonctionnelle (chiffrages), afin de passer d'une autonomie de pure réalisation à une autonomie décisionnelle 
					de conception logicielle.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/phidias")} size="sm">• Projet Phidias 3 : plateforme pédagogique BTP</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate("/realisations/site-reservation-acm")} size="sm">• Site de réservation pour un centre de loisirs</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default AutonomySkill;