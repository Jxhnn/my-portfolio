import { Title, Text, Stack, Paper, ThemeIcon, Group } from '@mantine/core';
import { IconHeartHandshake, IconRocket, IconPuzzle, IconTrekking } from '@tabler/icons-react';

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
						<Title order={3}>Ma philosophie : l'ingénierie au service de l'humain</Title>
					</Group>
					<Text ta="justify">
						Pour moi, l'ingénierie logicielle dépasse la simple exécution 
						technique : c'est la conception d'outils performants pour et par 
						des humains. Mon approche repose sur l'équilibre entre une interface 
						utilisateur (UX/UI) intuitive et une architecture backend robuste. 
						Je mets un point d'honneur à livrer un code propre, structuré 
						(Clean Architecture) et documenté. 
						La maintenabilité est à mes yeux le premier gage de respect envers 
						les équipes techniques futures et la garantie de longévité d'un projet. 
						Le développement étant avant tout un sport d'équipe, je privilégie la 
						transparence, l'entraide et la communication pour mener à bien des 
						missions ambitieuses.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'grape', to: 'pink' }}>
							<IconPuzzle size={32} />
						</ThemeIcon>
						<Title order={3}>Ma posture professionnelle</Title>
					</Group>
					<Text ta="justify">
						Face à des problématiques techniques complexes, j'adopte une démarche 
						analytique. Je n'hésite pas à décortiquer les systèmes existants 
						pour en comprendre les rouages, ce qui me permet d'être une véritable 
						force de proposition au sein de mon entreprise. Mon autonomie 
						s'accompagne d'une grande rigueur méthodologique : de la modélisation 
						de la base de données jusqu'à l'intégration de pipelines 
						CI/CD (GitHub Actions), j'aime structurer mon environnement pour 
						garantir des livraisons fiables. Enfin, convaincu que l'innovation 
						naît de l'intelligence collective, je m'intègre naturellement dans 
						des dynamiques collaboratives pour co-construire les meilleures 
						solutions possibles.
					</Text>
				</Stack>
			</Paper>

			<Paper withBorder shadow="md" p="xl" radius="md">
				<Stack>
					<Group>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
							<IconRocket size={32} />
						</ThemeIcon>
						<Title order={3}>Mes ambitions d'ingénieur</Title>
					</Group>
					<Text ta="justify">
						Mon objectif à moyen et long terme est de consolider mon expertise sur l'écosystème JavaScript/TypeScript (React, Node.js) et PHP (Laravel) pour concevoir des applications scalables et hautement disponibles. Je souhaite m'impliquer toujours plus dans les décisions d'architecture globale, la sécurité des systèmes et l'industrialisation des déploiements. À terme, j'aspire à encadrer techniquement des projets complexes, à auditer des plateformes, et à accompagner ou mentorer d'autres développeurs pour tirer l'équipe vers le haut.
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