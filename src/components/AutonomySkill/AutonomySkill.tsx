
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Accordion,
	Blockquote, Anchor, Text
} from "@mantine/core";
import {
	IconRocket,
	IconTarget,
	IconBulb,
	IconTrendingUp
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const AutonomySkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
						<IconRocket size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : autonomie & proactivité</Title>
				</Group>
				<Text size="lg" ta="justify">
					Dans le <b>contexte professionnel</b> du développement, l'autonomie est la capacité à s'approprier une tâche, de sa conception à sa livraison, en recherchant les solutions par soi-même. La proactivité est l'étape suivante : c'est anticiper les besoins et proposer des améliorations sans attendre qu'elles soient demandées.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Stack>
							<Blockquote cite="– Projet Phidias3 (refonte technique)">
								Le projet consistait à refondre un site vieillissant. Le cahier des charges était fonctionnel, mais de nombreuses décisions techniques étaient à prendre.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> lorsque j'ai dû gérer seul la migration complexe des données depuis des fichiers XML vers une base de données MySQL. J'ai recherché et mis en place les scripts PHP nécessaires, structuré la nouvelle base, et effectué le travail de A à Z. <b>Ma valeur ajoutée a été de prendre cette initiative technique complexe et de la mener à bien sans supervision constante,</b> résolvant ainsi le problème fondamental qui bloquait la refonte du site.
							</Blockquote>
							<Anchor onClick={() => navigate("/realisations/phidias")} fz="sm" ml="md">
								Voir la réalisation Phidias3
							</Anchor>
							<Blockquote cite="– Projet ARMEL TMS (refonte de l'interface)">
								Après la première version, il a été décidé de changer de technologie frontend. Je me suis retrouvé face au défi de devoir réécrire toutes les interfaces.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en prenant en charge l'intégralité de la migration de Materialize vers Framework7. J'ai dû apprendre le nouveau framework, adapter chaque composant et m'assurer que toutes les fonctionnalités restaient intactes. <b>Ma valeur ajoutée a été de gérer ce chantier technique de manière autonome et organisée,</b> garantissant la modernisation de l'application et démontrant ma capacité d'adaptation rapide.
							</Blockquote>
							<Anchor onClick={() => navigate("/realisations/armel-tms")} fz="sm" ml="md">
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
							<b>Niveau de maîtrise : intermédiaire.</b> Je suis très à l'aise pour prendre en charge des tâches complexes et les mener à bien. C'est une <b>compétence clé</b> de mon profil, car j'aime comprendre et maîtriser les sujets sur lesquels je travaille. Je suis moins expérimenté sur la proactivité stratégique à l'échelle d'une équipe entière, ce que je cherche à développer.
						</Text>
						<Text mt="sm">
							Mon travail actuel en TMA (Tierce Maintenance Applicative) me demande moins de proactivité sur de nouvelles fonctionnalités, mais renforce mon autonomie dans la résolution de problèmes et l'analyse de code existant.
						</Text>
						<Text mt="sm">
							<b>Mon conseil :</b> l'autonomie ne signifie pas ne jamais demander d'aide. Le plus important est de savoir quand demander : après avoir bien exploré le problème soi-même, en arrivant avec des pistes de solution et des questions précises.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon objectif professionnel est de transformer mon autonomie technique en capacité de leadership. Je veux être capable non seulement de réaliser des tâches, mais aussi de participer à la conception technique et à l'orientation d'un projet.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je cherche activement à m'impliquer davantage dans les phases de conception en amont des projets. Je souhaite participer aux choix d'architecture et être force de proposition sur les solutions techniques à adopter, pour passer d'une autonomie d'exécution à une autonomie de décision.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisations associées à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate("/realisations/phidias")}>Projet Phidias3</Anchor>
					<Anchor onClick={() => navigate("/realisations/armel-tms")}>Application mobile ARMEL TMS</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default AutonomySkill;