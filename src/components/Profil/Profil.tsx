import { ActionIcon, Anchor, Group, Image, Space, Stack, Text, Title } from '@mantine/core';
import classes from './Profil.module.css';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

const Profil: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<Title>Mon profil</Title>
				<Space h="xl" />
				<Stack gap="md" ta="justify">
					<Text size="lg" fw={500} c="blue.4">
						Futur ingénieur logiciel & développeur web en alternance
					</Text>
					
					<Text>
						Je m’appelle <strong>John THOMAS</strong>. Passionné par l'informatique depuis
						mon entrée dans le domaine en 2018, j'ai d'abord forgé mes compétences 
						système et réseau lors d'un 
						<Anchor target="_blank" href="https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique">
						 	Baccalauréat Professionnel S.N
						</Anchor> 
						&nbsp;(Systèmes Numériques, option RISC). Cette base technique m'a permis de comprendre le 
						fonctionnement des infrastructures, mais c'est le désir de concevoir et de créer des outils 
						sur mesure qui m'a naturellement orienté vers le développement applicatif.
					</Text>

					<Text>
						J'ai alors poursuivi mon cursus avec un BTS SIO option S.L.A.M 
						(Solutions Logicielles et Applications Métiers), suivi d'une 
						<Anchor target="_blank" href="https://www.iut.u-bordeaux.fr/info/assets/ressources/20141030LPROIUTBXINFODAWINw.pdf">
							Licence Professionnelle DAWIN
						</Anchor>
						&nbsp;à l'IUT de Bordeaux. Aujourd'hui, afin de consolider ma posture de concepteur logiciel, 
						je prépare un 
						<Anchor href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/expert-en-ingenierie-logicielle" target="_blank">
							Mastère Expert en Ingénierie Logicielle
						</Anchor>
						&nbsp;au sein de l'ISCOD.
					</Text>

					<Text>
						Cette trajectoire académique s'accompagne d'un ancrage professionnel solide : 
						depuis septembre 2022, j'évolue en tant que développeur web en alternance chez
						&nbsp;<strong>Exelys</strong>. Ce quotidien me permet de concevoir des architectures 
						robustes, de manipuler des technologies modernes (React, TypeScript, Laravel, SQL)
						et d'appréhender des contraintes de production concrètes auprès de clients variés.
					</Text>
				</Stack>
				<Space h="xl" />
				<Group>
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
					<ActionIcon
						component="a"
						href="https://www.instagram.com/jxhnn03/"
						target="_blank"
						size="xl"
						variant="gradient"
						gradient={{ from: 'yellow', to: 'purple', deg: 45 }}
						radius="xl"
						aria-label="Mon profil Instagram"
					>
						<IconBrandInstagram stroke={1.5} />
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