
import { Anchor, Image, Space, Text, Title } from '@mantine/core';
import classes from './Profil.module.css';

const Profil: React.FC = () => {


	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<Title >Mon profil</Title>
				<Space h="xl" />
				<Text ta={"justify"}>
					Je m’appelle John THOMAS, et je fais des études actuellement en &nbsp;
					<Anchor href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/expert-en-ingenierie-logicielle" target="_blank">mastère expert en ingenierie logicielle</Anchor>, 
					précédemment en &nbsp;
					<Anchor target="_blank" href="https://www.iut.u-bordeaux.fr/info/assets/ressources/20141030LPROIUTBXINFODAWINw.pdf">licence professionnelle DAWIN </Anchor>
					(Développement en application web et innovation numérique)
					Depuis 2018, je me suis spécifié dans un &nbsp;
					<Anchor target="_blank" href="https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique">Baccalauréat Professionnel S.N (Systèmes Numériques)</Anchor>&nbsp;
					option RISC (Réseau Informatiques et Systèmes Communicants).
					En suite, j’ai continué sur un BTS SIO (Service Informatique aux Organisations) option S.L.A.M (Solutions Logicielles et Applications Métiers).
				</Text>
			</div>
			<div className={classes.extra}>
				<Image src='assets/portrait.png' radius='md' h={400} w={'auto'} />
			</div>
		</div>
	);
};

export default Profil;