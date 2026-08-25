import { Title, Text, Stack, Paper, ThemeIcon, Group } from '@mantine/core';
import { IconHeartHandshake, IconRocket, IconPuzzle, IconTrekking, IconBriefcase } from '@tabler/icons-react';

function About() {
	return (
		<Stack gap="xl">
			<Title order={1}>Ma vision et mon parcours</Title>
			<Text size="lg" c="dimmed">
				Au-delà de l'écriture de code, je conçois des architectures logicielles 
				pérennes et des solutions adaptées aux véritables besoins métiers.
			</Text>

			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
							<IconHeartHandshake size={32} />
						</ThemeIcon>
						<Title order={3}>Ma philosophie : qualité, sécurité et performance</Title>
					</Group>
					<Text ta="justify">
						Pour moi, l'ingénierie logicielle dépasse la simple exécution technique. Je privilégie systématiquement la qualité, la fiabilité et une <strong>sécurité sans faille</strong> à la simple quantité de fonctionnalités livrées. Sur le plan frontend, j'affectionne la création d'interfaces dynamiques et expressives. Je cherche toujours le point d'équilibre parfait entre des animations fluides, une expérience utilisateur (UX/UI) intuitive et des performances de rendu irréprochables. Enfin, je mets un point d'honneur à livrer un code structuré (Clean Architecture) et documenté, car la maintenabilité est la garantie de longévité d'un projet.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
							<IconBriefcase size={32} />
						</ThemeIcon>
						<Title order={3}>Contexte métier et typologie de clients</Title>
					</Group>
					<Text ta="justify">
						Au sein d'Exelys, je conçois des solutions logicielles exclusivement orientées <strong>B2B pour des acteurs institutionnels et de grands comptes</strong> (TotalEnergies, Vinci Construction, le réseau CCCA-BTP). Les enjeux de ces clients gravitent autour de la gestion documentaire critique, de la communication interne à très grande échelle et de la digitalisation des processus métiers. Évoluer dans ce contexte de haute exigence m'oblige à concevoir des architectures scalables, où la haute disponibilité, la confidentialité des données et l'adoption de l'outil par des milliers de collaborateurs sont des priorités non négociables.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'grape', to: 'pink' }}>
							<IconPuzzle size={32} />
						</ThemeIcon>
						<Title order={3}>Ma posture professionnelle et méthodologie</Title>
					</Group>
					<Text ta="justify">
						Je m'intègre dans une véritable dynamique d'ingénierie collaborative. Ma semaine s'articule autour de rituels de synchronisation précis : une réunion de pilotage avec l'équipe IT pour estimer et planifier nos charges de développement, suivie d'une coordination transverse avec le pôle Multimédia pour aligner l'intégration de leurs maquettes (Figma) avec nos contraintes techniques. Pour orchestrer cela, nous utilisons d'ailleurs un gestionnaire de tâches sur mesure que nous développons nous-mêmes sur SharePoint (SPFx).
					</Text>
					<Text ta="justify">
						Au sein de l'équipe technique, mon autonomie me permet d'être force de proposition et je suis régulièrement amené à participer aux <strong>prises de décisions architecturales</strong> (choix de frameworks ou de bibliothèques). J'assume également un rôle de mentorat informel : j'accompagne un autre développeur en alternance dans sa montée en compétences, et je guide régulièrement mes collaborateurs sur les bonnes pratiques de versionnage (stratégies de branches Git).
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
							<IconRocket size={32} />
						</ThemeIcon>
						<Title order={3}>Mes ambitions d'ingénieur</Title>
					</Group>
					<Text ta="justify">
						Mon objectif à moyen terme est de consolider mon expertise sur l'écosystème JavaScript/TypeScript (React, Node.js) et PHP (Laravel) pour concevoir des applications toujours plus performantes. Je m'intéresse de plus en plus à la culture DevOps et à l'infrastructure logicielle : j'ai par exemple commencé à intégrer des solutions de conteneurisation comme <strong>Docker</strong> pour nos serveurs de développement. À terme, j'aspire à encadrer techniquement des projets complexes, à auditer des plateformes, et à continuer d'accompagner d'autres développeurs pour tirer mon équipe vers le haut.
					</Text>
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
					<Text ta="justify">
						Pour conserver un équilibre et nourrir ma créativité, je cultive des centres d'intérêt variés. Passionné par l'écosystème de l'esport et de la compétition, j'y retrouve les valeurs de stratégie, d'analyse sous pression et d'esprit d'équipe qui me sont chères dans le monde professionnel. La musique électronique m'accompagne également au quotidien, particulièrement pour favoriser ma concentration (Deep Work). Enfin, ma curiosité me pousse à maintenir une veille technologique constante, explorant de mon côté des domaines liés à l'infrastructure réseau (conteneurs, Proxmox) et aux évolutions de l'intelligence artificielle pour anticiper les défis techniques de demain.
					</Text>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default About;