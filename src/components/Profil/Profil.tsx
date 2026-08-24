import { ActionIcon, Group, Image, SimpleGrid, Stack, Text, Title, Paper, ThemeIcon } from '@mantine/core';
import classes from './Profil.module.css';
import { 
	IconBrandGithub, 
	IconBrandLinkedin, 
	IconBriefcase, 
	IconApps, 
	IconUsers, 
	IconDatabase 
} from '@tabler/icons-react';

const Profil: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<Title order={1} size="h1" c="blue.4">Ingénieur Logiciel & développeur full-stack</Title>
				<Text size="xl" fw={500} mt="md" c="dimmed">
					Conception d'architectures robustes, automatisation des déploiements et création de solutions métiers sur mesure.
				</Text>

				<SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl" mb="xl">
					<Paper withBorder p="md" radius="md" shadow="sm">
						<Group>
							<ThemeIcon size="lg" radius="md" variant="light" color="blue"><IconBriefcase size={20} /></ThemeIcon>
							<Stack gap={0}>
								<Text size="xl" fw={700}>4 ans</Text>
								<Text size="sm" c="dimmed">d'expérience en entreprise</Text>
							</Stack>
						</Group>
					</Paper>
					<Paper withBorder p="md" radius="md" shadow="sm">
						<Group>
							<ThemeIcon size="lg" radius="md" variant="light" color="teal"><IconApps size={20} /></ThemeIcon>
							<Stack gap={0}>
								<Text size="xl" fw={700}>+ de 20</Text>
								<Text size="sm" c="dimmed">projets & intranets déployés</Text>
							</Stack>
						</Group>
					</Paper>
					<Paper withBorder p="md" radius="md" shadow="sm">
						<Group>
							<ThemeIcon size="lg" radius="md" variant="light" color="orange"><IconUsers size={20} /></ThemeIcon>
							<Stack gap={0}>
								<Text size="xl" fw={700}>+ de 400</Text>
								<Text size="sm" c="dimmed">utilisateurs quotidiens</Text>
							</Stack>
						</Group>
					</Paper>
					<Paper withBorder p="md" radius="md" shadow="sm">
						<Group>
							<ThemeIcon size="lg" radius="md" variant="light" color="grape"><IconDatabase size={20} /></ThemeIcon>
							<Stack gap={0}>
								<Text size="xl" fw={700}>+ de 3 Go</Text>
								<Text size="sm" c="dimmed">de données migrées en sécurité</Text>
							</Stack>
						</Group>
					</Paper>
				</SimpleGrid>

				<Stack gap="md" ta="justify">
					<Text>
						Passionné par l'ingénierie logicielle, j'accompagne les entreprises dans la conception d'outils performants et hautement disponibles. Mon parcours, initialement ancré dans l'administration système et réseau, m'a doté d'une vision transverse des infrastructures (serveurs, sécurité, réseau). Cette maîtrise de bout en bout me permet aujourd'hui de concevoir des architectures applicatives qui ne se contentent pas de fonctionner localement, mais qui sont pensées pour la production.
					</Text>
					<Text>
						Depuis 2022, j'évolue en tant que développeur web au sein de l'agence numérique <strong>Exelys</strong>. Ce rôle me confronte quotidiennement à des défis d'ingénierie majeurs : conception d'APIs résilientes, modernisation d'infrastructures historiques, développement d'interfaces complexes (React, TypeScript, Laravel) et mise en place de pipelines CI/CD. J'y cultive une approche pragmatique axée sur la Clean Architecture et la satisfaction des besoins métiers.
					</Text>
					<Text>
						En parallèle de mes missions, je valide un Mastère Expert en Ingénierie Logicielle (ISCOD), consolidant ainsi mon expertise sur la sécurité logicielle, les pratiques DevOps et le pilotage technique de projets d'envergure.
					</Text>
				</Stack>

				<Group mt="xl">
					<ActionIcon
						component="a"
						href="https://www.linkedin.com/in/john-thomas-919782202/"
						target="_blank"
						size="xl"
						variant="filled"
						color="blue"
						radius="xl"
						aria-label="Mon profil LinkedIn"
					>
						<IconBrandLinkedin stroke={1.5} />
					</ActionIcon>
					<ActionIcon
						component="a"
						href="https://github.com/Jxhnn"
						target="_blank"
						size="xl"
						variant="filled"
						color="dark"
						radius="xl"
						aria-label="Mon profil GitHub"
					>
						<IconBrandGithub stroke={1.5} />
					</ActionIcon>
				</Group>
			</div>
			<div className={classes.extra}>
				<Image src='assets/portrait.png' radius='md' h={400} w={'auto'} />
			</div>
		</div>
	);
};

export default Profil;