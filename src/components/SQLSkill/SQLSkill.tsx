
import { 
	Stack, Paper, Group, 
	ThemeIcon, Title, Accordion, 
	Blockquote, Anchor, Text 
} from "@mantine/core";

import { 
	IconDatabase, 
	IconTarget, 
	IconBulb, 
	IconTrendingUp
} from "@tabler/icons-react";

import { useNavigate } from "react-router";

const SQLSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'teal' }}>
						<IconDatabase size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : MySQL / MariaDB</Title>
				</Group>
				<Text size="lg" ta="justify">
					MySQL et son fork MariaDB sont les systèmes de gestion de bases de données relationnelles (SGBDR) open source les plus utilisés au monde. Dans un <b>contexte professionnel</b>, ils sont le cœur de la grande majorité des applications web, responsables du stockage, de la structuration et de la sécurisation des données. <b>Leur actualité</b> reste forte malgré la montée du NoSQL, car ils offrent une fiabilité et une cohérence des données inégalées pour de nombreux cas d'usage.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Stack>
							<Blockquote cite="– Projet site de réservation (base de données 'from scratch')">
								Le défi sur ce premier projet était de concevoir un schéma de base de données complet pour gérer les utilisateurs, les enfants et les plannings de réservation.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en écrivant des requêtes SQL brutes en PHP pour toutes les opérations CRUD (Create, Read, Update, Delete). J'ai conçu la structure des tables et défini les relations entre elles. <b>Ma valeur ajoutée a été de construire la fondation de l'application,</b> même si avec le recul, je sais que le schéma n'était pas le plus évolutif. Ce projet a été mon "baptême du feu" et m'a appris les bases de la modélisation de données.
							</Blockquote>
							<Anchor onClick={() => navigate('/realisations/site-reservation-acm')}  fz="sm" ml="md">
								Voir la réalisation du site de réservation
							</Anchor>
							<Blockquote cite="– Projets Phidias3 et ARMEL TMS (utilisation avec Laravel Eloquent)">
								Sur des projets plus complexes, le besoin était de gérer la base de données de manière plus structurée, sécurisée et rapide.
								<br /><br />
								<b>La compétence a été mise en œuvre</b> en utilisant l'ORM <b>Eloquent</b> de Laravel. <b>Ma valeur ajoutée a été d'adopter une approche moderne et professionnelle de la gestion de base de données,</b> ce qui a considérablement accéléré le développement, sécurisé l'application contre les injections SQL et rendu le code beaucoup plus lisible et maintenable.
							</Blockquote>
							<Group ml="md">
								<Anchor onClick={() => navigate('/realisations/phidias')} fz="sm">Voir Phidias3</Anchor>
								<Anchor onClick={() => navigate('/realisations/armel-tms')} fz="sm">Voir ARMEL TMS</Anchor>
							</Group>
						</Stack>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="autocritique">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Mon autocritique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							<b>Niveau de maîtrise : avancé.</b> Je suis très à l'aise avec la conception de schémas relationnels et l'interaction avec la base de données via un ORM. Pour moi, une base de données bien conçue est <b>la fondation de toute application solide.</b>
						</Text>
						<Text mt="sm">
							Ma <b>vitesse d'acquisition</b> a été marquée par un "clic" lors de la découverte d'Eloquent : j'ai compris à quel point un ORM pouvait simplifier et sécuriser le travail après avoir fait du SQL "à la main".
						</Text>
						<Text mt="sm">
							<b>Mon conseil (et mon recul) :</b> Même en utilisant un ORM, il est crucial de comprendre le SQL qui est généré derrière. Savoir analyser une requête lente ou concevoir des index pertinents reste une compétence fondamentale pour optimiser les performances d'une application.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon projet est de continuer à renforcer mes compétences en modélisation de données et d'aller au-delà de l'utilisation basique du SGBDR pour maîtriser ses fonctionnalités les plus puissantes.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je souhaite me former sur des sujets avancés directement au niveau de la base de données. Je prévois d'explorer les <b>procédures stockées</b> et les <b>triggers</b> pour déporter une partie de la logique métier dans la base de données lorsque c'est pertinent. Je vais également apprendre à utiliser les <b>vues (virtual tables)</b> pour simplifier les requêtes complexes et sécuriser l'accès aux données. Maîtriser ces outils me permettra de concevoir des architectures plus performantes et robustes.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisations associées à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/phidias')}>Projet Phidias3</Anchor>
					<Anchor onClick={() => navigate('/realisations/armel-tms')}>Application Mobile ARMEL TMS</Anchor>
					<Anchor onClick={() => navigate('/realisations/site-reservation-acm')}>Site de réservation pour un centre de loisirs</Anchor>
					<Anchor onClick={() => navigate('/realisations/pact-hse')}>Projet PACT'HSE</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default SQLSkill;