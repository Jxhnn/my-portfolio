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

const CuriositySkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}><IconRocket size={32} /></ThemeIcon>
					<Title order={2}>Compétence humaine : curiosité & apprentissage</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Fiche d'évaluation de la capacité de veille technologique active, de réactivité d'apprentissage et d'adaptation aux nouveaux frameworks.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Dans le domaine de l'ingénierie logicielle, où les technologies et frameworks évoluent à un rythme effréné, la curiosité 
					n'est pas une simple qualité personnelle, c'est une compétence de survie professionnelle. Elle se traduit par l'organisation 
					d'une veille technologique active et rigoureuse pour ne pas laisser ses compétences s'obsolétiser. L'apprentissage est 
					sa mise en application concrète : c'est la faculté à assimiler rapidement de nouveaux concepts, paradigmes ou langages de 
					programmation, et à savoir s'adapter à des environnements techniques inconnus pour répondre à un besoin d'entreprise.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> l'accélération de l'intelligence artificielle (génération de code assistée par IA, LLMs) et 
					l'émergence constante de nouveaux outils de bundling ou de compilation exigent des développeurs d'aujourd'hui une agilité 
					d'apprentissage continue et la capacité à s'autoformer en permanence.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				
				<Blockquote cite="– Autoformation et implémentation de Framework7 pour ARMEL TMS" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors de la phase de refonte de l'application mobile d'ARMEL TMS, l'interface d'origine n'était pas assez réactive et ne supportait 
						pas de thèmes d'actualité en Material Design 3.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> n'ayant pas de compétences sur React ou Flutter à l'époque et débutant dans 
						les frameworks mobiles structurés, j'ai organisé ma veille pour chercher une solution technique. J'ai découvert 
						&nbsp;<strong>Framework7</strong>, une bibliothèque offrant tous les composants nécessaires en Material Design 3. 
						De manière autonome, je me suis autoformé à son fonctionnement, j'ai appris à manipuler son architecture de routage 
						et de composants en JavaScript, et j'ai réalisé une maquette d'évaluation technique concluante pour mon chef de projet. 
						J'ai ensuite mené le chantier de migration avec succès, prouvant ma capacité d'apprentissage rapide et ma réactivité 
						pour adopter des technologies nouvelles afin de débloquer le projet.
					</Text>
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (ARMEL TMS)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : avancé.</strong> J'assimile très rapidement les concepts de nouveaux frameworks ou outils de programmation. 
					C'est l'un des <strong>atouts majeurs</strong> de mon profil, me permettant d'être opérationnel rapidement sur des piles technologiques variées.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est forgée par ma passion pour l'autoformation. J'organise ma veille au quotidien en 
					suivant des créateurs techniques de référence, des blogs d'ingénierie et des documentations de dépôts open source.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> face à l'océan de nouveautés technologiques, le piège est de se disperser en apprenant tout de 
					manière superficielle (le syndrome de l'objet brillant). Mon conseil est de structurer sa veille : il faut se concentrer sur 
					des concepts fondamentaux réutilisables (les patrons de conception / design patterns, la sécurité web) plutôt que d'apprendre 
					par cœur les API de frameworks qui changeront l'année suivante.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="teal" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans mon projet professionnel, mon but est de canaliser ma curiosité technique pour devenir un acteur d'innovation au sein de 
					mon équipe, capable de préconiser des technologies disruptives mais stables pour l'entreprise.
				</Text>
				<Text ta="justify">
					<strong>Perspectives :</strong> je souhaite élargir ma veille pour ne plus seulement consommer du contenu, mais commencer 
					à en produire. Mon objectif est d'approfondir mes compétences d'ingénierie avancées afin de pouvoir partager mes retours 
					d'autoformation, par exemple en rédigeant des billets de blog techniques ou en contribuant à des projets open-source.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/armel-tms")} size="sm">• Application mobile ARMEL TMS</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default CuriositySkill;