
import { Title, Text, Stack, Paper, ThemeIcon, List, Group, Timeline, Anchor } from '@mantine/core';
import { IconHeartHandshake, IconRocket, IconPuzzle, IconTrekking, IconRoad, IconSchool, IconBriefcase } from '@tabler/icons-react';

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
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'indigo', to: 'purple' }}>
							<IconRoad size={32} />
						</ThemeIcon>
						<Title order={3}>Mon parcours académique</Title>
					</Group>
					<Text>
						Mon parcours est le reflet d'une spécialisation progressive dans le développement logiciel, débutée en 2018.
					</Text>
					<Timeline active={0} bulletSize={24} lineWidth={2} mt="md">
						<Timeline.Item bullet={<IconSchool size={12} />} title="Mastère Expert en Ingénierie Logicielle">
							<Text c="dimmed" size="xs">2023 - Présent</Text>
							<Text size="sm">
								Formation actuelle qui approfondit mes compétences en architecture logicielle, gestion de projet et technologies avancées.
							</Text>
						</Timeline.Item>
						<Timeline.Item bullet={<IconSchool size={12} />} title="Licence Professionnelle DAWIN">
							<Text c="dimmed" size="xs">2022 - 2023</Text>
							<Text size="sm">
								Spécialisation en Développement d'Applications Web et Innovation Numérique, où j'ai consolidé ma maîtrise des frameworks modernes comme React et Laravel.
							</Text>
						</Timeline.Item>
						<Timeline.Item bullet={<IconSchool size={12} />} title="BTS SIO - Option SLAM">
							<Text c="dimmed" size="xs">2020 - 2022</Text>
							<Text size="sm">
								Le socle de mes compétences en développement avec le BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.
							</Text>
						</Timeline.Item>
						<Timeline.Item bullet={<IconSchool size={12} />} title="Baccalauréat Professionnel S.N.">
							<Text c="dimmed" size="xs">2018 - 2020</Text>
							<Text size="sm">
								Première immersion dans le monde de l'informatique avec l'option RISC (Réseaux Informatiques et Systèmes Communicants), qui m'a donné des bases solides en systèmes et réseaux.
							</Text>
						</Timeline.Item>
					</Timeline>
				</Stack>
			</Paper>
			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
							<IconBriefcase size={32} />
						</ThemeIcon>
						<Title order={3}>Mon parcours professionnel</Title>
					</Group>
					<Text>
						Chaque expérience a été une opportunité de mettre en pratique mes connaissances et de développer de nouvelles compétences en conditions réelles.
					</Text>
					<Timeline active={0} bulletSize={24} lineWidth={2} mt="md">
						<Timeline.Item bullet={<IconBriefcase size={12} />} title="Année d'alternance en développement web">
							<Text c="dimmed" size="xs">Sept. 2022 - Sept. 2023 | Exelys - Digital partner, Pau</Text>
							<Text size="sm">
								Mise en pratique des compétences de ma Licence DAWIN sur des projets clients variés, en travaillant sur des problématiques frontend et backend.
							</Text>
						</Timeline.Item>
						<Timeline.Item bullet={<IconBriefcase size={12} />} title="Stage de développement (Projet Phidias3)">
							<Text c="dimmed" size="xs">Janv. - Fév. 2022 (6 semaines) | Exelys, Pau</Text>
							<Text size="sm">
								Refonte complète d'un site de formation pour le BTP. Ce fut ma première expérience majeure avec le framework <b>Laravel</b> et la migration de données complexes.
							</Text>
							<Anchor href="/realisations/phidias3" size="sm" mt={4}>
								Voir le projet Phidias3
							</Anchor>
						</Timeline.Item>
						<Timeline.Item bullet={<IconBriefcase size={12} />} title="Stage de développement (Site de réservation)">
							<Text c="dimmed" size="xs">Mai - Juin 2021 | Centre de loisirs d'Artigueloutan</Text>
							<Text size="sm">
								Création d'une application web de A à Z, de la base de données au déploiement, pour gérer les réservations d'un centre de loisirs.
							</Text>
							<Anchor href="/realisations/site-reservation" size="sm" mt={4}>
								Voir le projet de réservation
							</Anchor>
						</Timeline.Item>
						<Timeline.Item bullet={<IconBriefcase size={12} />} title="Stage de maintenance d'infrastructure">
							<Text c="dimmed" size="xs">2020 (30 jours) | GFI Informatique, Pau</Text>
							<Text size="sm">
								Première expérience en entreprise mêlant maintenance d'infrastructure et développement de petits logiciels internes.
							</Text>
						</Timeline.Item>
						<Timeline.Item bullet={<IconBriefcase size={12} />} title="Stage de développement sur hardware dédié">
							<Text c="dimmed" size="xs">2019 (30 jours) | SDIS64, Pau</Text>
							<Text size="sm">
								Découverte du développement informatique plus proche du matériel, une expérience très formatrice.
							</Text>
						</Timeline.Item>
						<Timeline.Item bullet={<IconBriefcase size={12} />} title="Stage de réparation d'ordinateurs">
							<Text c="dimmed" size="xs">2019 (30 jours) | IDV64, Assat</Text>
							<Text size="sm">
								Mon tout premier contact avec le monde professionnel de l'informatique, axé sur la maintenance hardware et les objets connectés.
							</Text>
						</Timeline.Item>
					</Timeline>
				</Stack>
			</Paper>
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