
import { 
	Stack, Paper, Group, 
	ThemeIcon, Title, Accordion, 
	Blockquote, Anchor, Text 
} from "@mantine/core";
import { 
	IconGrowth, 
	IconTarget, 
	IconBulb, 
	IconTrendingUp 
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const CuriositySkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
						<IconGrowth size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : Curiosité & Apprentissage</Title>
				</Group>
				<Text size="lg" ta="justify">
					Dans le <b>contexte professionnel</b> de l'informatique, où les technologies évoluent à une vitesse fulgurante, la curiosité n'est pas une simple qualité, c'est une compétence de survie. Elle se traduit par une veille technologique active et une volonté constante d'apprendre pour ne pas devenir obsolète. <b>Son actualité</b> est plus pertinente que jamais avec l'émergence rapide de nouveaux frameworks et de l'IA.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Stack>
							<Blockquote cite="– Veille technologique personnelle">
								Le défi pour tout développeur est de rester à jour face à la multitude d'informations.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en instaurant une routine de veille : je suis des newsletters spécialisées, des chaînes YouTube techniques et des blogs de développeurs. Cela me permet de découvrir de nouveaux outils et de comprendre les tendances du marché. <b>Ma valeur ajoutée est d'être capable de proposer des solutions modernes et pertinentes</b> car je ne me limite pas aux technologies que je connais déjà.
							</Blockquote>
							<Blockquote cite="– Projet ARMEL TMS (choix de Framework7)">
								Lors de la refonte de l'interface de l'application, l'outil initial (Materialize) montrait ses limites pour créer une expérience mobile "native".
								<br /><br />
								<b>La compétence a été mise en œuvre</b> grâce à ma veille. J'ai découvert <b>Framework7</b>, un framework spécialisé dans ce domaine. J'ai pris l'initiative de l'étudier, de créer un prototype, puis de le proposer comme solution pour la refonte. <b>Ma valeur ajoutée a été de trouver et d'implémenter de manière autonome une technologie plus adaptée,</b> résolvant le problème de l'expérience utilisateur et démontrant ma capacité à transformer ma curiosité en action concrète.
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
							<b>Niveau de maîtrise : avancé.</b> Je considère la curiosité comme l'une de mes <b>principales qualités</b>. Je ne me contente pas d'apprendre ce qui est nécessaire pour mon travail, j'explore activement de nouveaux sujets par passion.
						</Text>
						<Text mt="sm">
							Ma <b>vitesse d'acquisition</b> de nouvelles compétences est l'un de mes points forts, comme l'a montré l'adoption rapide de Framework7.
						</Text>
						<Text mt="sm">
							<b>Mon conseil (et mon recul) :</b> la curiosité doit être canalisée. Il est facile de se disperser. Mon approche est de me concentrer sur des technologies qui complètent mon socle de compétences (l'écosystème JS/PHP) plutôt que de sauter sur toutes les nouveautés sans discernement.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon projet est de structurer davantage ma démarche d'apprentissage. Je veux passer d'une découverte "opportuniste" à un plan de formation personnel plus ciblé pour atteindre mes objectifs de carrière.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je souhaite ne plus seulement consommer de l'information, mais aussi en produire. Mon objectif est de commencer à <b>partager mes apprentissages</b>, par exemple en écrivant des articles de blog techniques ou en contribuant à des projets open-source. C'est le meilleur moyen de valider et d'approfondir ses connaissances.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisation associée à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/armel-tms')}>
						Application Mobile ARMEL TMS
					</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default CuriositySkill;