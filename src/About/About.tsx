
import { Title, Text, Stack, Paper, ThemeIcon, List, Group } from '@mantine/core';
import { IconHeartHandshake, IconRocket, IconPuzzle, IconTrekking } from '@tabler/icons-react';

function About() {
	return (
		<Stack gap="xl">
			<Title order={1}>Ma vision et mon parcours</Title>
			<Text size="lg" c="dimmed">
				Au-delà du rôle de développeur, je suis passionné par la création de solutions en tout genre.
			</Text>
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
							<IconHeartHandshake size={32} />
						</ThemeIcon>
						<Title order={3}>Ma philosophie : le code au service de l'humain</Title>
					</Group>
					<Text>
						Pour moi, coder n'est pas juste une question de technique. C'est avant tout créer des outils pour et par des gens. Mon approche du développement repose sur quelques idées simples :
					</Text>
					<List spacing="xs" size="sm" withPadding>
						<List.Item>
							<b>Penser à l'utilisateur avant tout :</b> je m'efforce de créer des interfaces simples et logiques. Si une application n'est pas agréable à utiliser, elle a manqué son but principal.
						</List.Item>
						<List.Item>
							<b>Écrire du code de qualité :</b> un code propre et bien pensé est plus facile à faire évoluer et à maintenir. C'est un gage de respect pour les futurs développeurs (et pour mon moi du futur !).
						</List.Item>
						<List.Item>
							<b>Être un coéquipier fiable :</b> je crois beaucoup à l'entraide et à la communication. Un projet réussi est toujours le fruit d'un bon travail d'équipe.
						</List.Item>
					</List>
				</Stack>
			</Paper>
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
							<IconRocket size={32} />
						</ThemeIcon>
						<Title order={3}>Mes ambitions</Title>
					</Group>
					<Text>
						Mon but est de continuer à apprendre et à me challenger.
					</Text>
					<Text>
						Professionnellement, je veux vraiment maîtriser l'écosystème JavaScript moderne (<b>React</b>, <b>TypeScript</b>, <b>Node.js</b>). Mon objectif est de participer à des projets de plus en plus ambitieux et, pourquoi pas, d'aider d'autres développeurs à progresser.
					</Text>
					<Text>
						Côté perso, j'aimerais garder du temps pour des projets qui me tiennent à cœur, comme contribuer à l'open-source ou simplement expérimenter avec de nouvelles technologies.
					</Text>
				</Stack>
			</Paper>
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'grape', to: 'pink' }}>
							<IconPuzzle size={32} />
						</ThemeIcon>
						<Title order={3}>Mes atouts</Title>
					</Group>
					<List spacing="sm" size="sm" withPadding>
						<List.Item><b>Curieux :</b> j'adore démonter les choses pour comprendre comment elles marchent. C'est ce qui me pousse à faire de la veille technologique en permanence.</List.Item>
						<List.Item><b>Organisé :</b> j'aime quand les choses sont bien faites. Un code propre et une bonne gestion des tâches, c'est important pour moi.</List.Item>
						<List.Item><b>Collaboratif :</b> je suis convaincu qu'on va plus loin à plusieurs. J'aime beaucoup échanger et construire des solutions en équipe.</List.Item>
						<List.Item><b>Autonome :</b> quand je suis sur un projet, je n'attends pas qu'on me donne toutes les réponses, j'aime chercher et proposer des solutions par moi-même.</List.Item>
					</List>
				</Stack>
			</Paper>
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
							<IconTrekking size={32} />
						</ThemeIcon>
						<Title order={3}>Et en dehors du code ?</Title>
					</Group>
					<Text>
						Pour rester créatif et équilibré, j'ai quelques passions qui me permettent de voir les choses différemment.
					</Text>
					<List spacing="sm" size="sm" withPadding>
						<List.Item>
							<b>L'esport :</b> passionné par la compétition, je suis de près plusieurs scènes de jeu. Plus qu'un simple loisir, c'est une excellente école pour l'esprit d'équipe, la communication sous pression et la stratégie.
						</List.Item>
						<List.Item>
							<b>La musique :</b> elle m'accompagne au quotidien. J'ai des playlists pour tout, avec une préférence pour l'électro. C'est aussi un super moyen de découvrir de nouvelles ambiances et de rester créatif.
						</List.Item>
						<List.Item>
							<b>La veille technologique :</b> c'est plus qu'un devoir, c'est une vraie passion. J'adore suivre ce qui se fait de nouveau, que ce soit dans le web, le hardware ou l'IA, pour nourrir ma curiosité et inspirer mes futurs projets.
						</List.Item>
					</List>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default About;