
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Accordion,
	Blockquote, Anchor, Text
} from "@mantine/core";
import {
	IconPhoneCall,
	IconTarget,
	IconBulb,
	IconTrendingUp
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const RelationClientSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
						<IconPhoneCall size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : relation client</Title>
				</Group>
				<Text size="lg" ta="justify">
					Pour un développeur, la relation client ne se limite pas au support technique. Dans un <b>contexte professionnel</b> agile, elle est au cœur du projet : c'est la capacité à écouter pour bien comprendre un besoin, à communiquer clairement son avancement, et à savoir vulgariser des concepts techniques.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Blockquote cite="– Suivi de projet sur les intranets SharePoint">
							Le défi sur ces projets est de s'assurer que les développements sur mesure (Web Parts React) correspondent parfaitement aux attentes du client, qui ne sont pas toujours techniques.
							<br /><br />
							<b>La compétence a été mise en œuvre</b> lors des points de suivi hebdomadaires. Je devais présenter les nouvelles fonctionnalités, expliquer de manière simple les choix techniques et leurs impacts, et surtout écouter activement les retours des utilisateurs pour planifier les ajustements. <b>Ma valeur ajoutée a été de créer une boucle de feedback efficace,</b> rassurant le client sur l'avancement et garantissant que le produit final soit adopté par les équipes.
							<br /><br />
							Cela a permis de résoudre le problème des projets livrés "en tunnel" qui ne correspondent pas au besoin final.
						</Blockquote>
						<Anchor onClick={() => navigate('/realisations/sharepoint-custom')} mt="sm" fz="sm">
							Voir l'expérience SharePoint & Power Platform
						</Anchor>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="autocritique">
					<Accordion.Control icon={<IconBulb size={20} />}>
						<Title order={4}>Mon autocritique</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							<b>Niveau de maîtrise : débutant.</b> Je suis assez à l'aise pour présenter mon travail technique et interagir avec un client dans un cadre défini, comme les points de suivi. C'est une compétence que je considère comme <b>très importante</b> dans mon profil, car un bon développeur doit aussi être un bon communicant.
						</Text>
						<Text mt="sm">
							Ma <b>vitesse d'acquisition</b> est progressive. J'apprends à chaque interaction à mieux anticiper les questions et à vulgariser mon discours.
						</Text>
						<Text mt="sm">
							<b>Mon conseil (et mon recul) :</b> la clé est la préparation. Avant une démonstration client, il ne faut pas seulement préparer ce qu'on va montrer, mais aussi anticiper les questions et préparer des réponses simples. Ne jamais penser que le client a les mêmes connaissances techniques que nous.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon projet professionnel est de devenir un interlocuteur technique de confiance pour les clients. Je ne veux pas seulement développer des fonctionnalités, mais aussi être capable de conseiller et d'orienter le client vers les meilleures solutions.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je souhaite me former sur les bases de la <b>gestion de projet Agile (Scrum)</b> pour mieux comprendre le rôle du Product Owner et la manière de prioriser les besoins. Je veux aussi m'exercer à l'animation de petits ateliers de recueil du besoin pour être plus proactif dans la phase de conception.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Paper shadow="xs" p="lg" radius="md">
				<Title order={4} mb="sm">Réalisation associée à cette compétence</Title>
				<Stack>
					<Anchor onClick={() => navigate('/realisations/sharepoint-custom')}>
						Expérience SharePoint & Power Platform
					</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default RelationClientSkill;