
import {
	Stack, Paper, Group,
	ThemeIcon, Title, Accordion,
	Blockquote, Anchor, Text
} from "@mantine/core";
import {
	IconChecklist,
	IconTarget,
	IconBulb,
	IconTrendingUp
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const OrganisationSkill: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Stack gap="xl">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
						<IconChecklist size={32} />
					</ThemeIcon>
					<Title order={2}>Compétence : rigueur & organisation</Title>
				</Group>
				<Text size="lg" ta="justify">
					La rigueur est le fondement de la qualité logicielle. Elle se traduit par un code propre, testé et documenté. L'organisation, quant à elle, est la capacité à structurer son travail et à collaborer efficacement. Dans un <b>contexte professionnel</b>, ces compétences sont essentielles pour garantir la maintenabilité des projets et le respect des délais, surtout en équipe.
				</Text>
			</Paper>
			<Accordion variant="separated" defaultValue="proof">
				<Accordion.Item value="proof">
					<Accordion.Control icon={<IconTarget size={20} />}>
						<Title order={4}>Mes éléments de preuve</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Blockquote cite="– Travail collaboratif sur les projets SharePoint">
							Le défi sur ces projets est de développer des fonctionnalités en parallèle avec d'autres personnes, où le travail de l'un peut impacter directement celui de l'autre.
							<br /><br />
							<b>La compétence a été mise en œuvre</b> en adoptant des pratiques de travail structurées. Je découpais mes tâches dans l'outil de gestion de projet, je respectais les conventions de nommage et de codage de l'équipe, et j'utilisais Git de manière rigoureuse (branches dédiées, ...). <b>Ma valeur ajoutée a été d'être un membre fiable de l'équipe,</b> en livrant un code qui s'intègre facilement et en communiquant clairement sur mon avancement.
							<br /><br />
							Cela a permis d'éviter les conflits de code et les retards, résolvant ainsi le problème de la coordination dans une équipe de développement.
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
							<b>Niveau de maîtrise : intermédiaire.</b> Je suis naturellement organisé dans mon travail individuel et j'ai bien intégré les processus de collaboration en équipe. C'est une <b>compétence essentielle</b> que je continue de renforcer à chaque projet.
						</Text>
						<Text mt="sm">
							<b>Mon recul sur la compétence :</b> l'organisation n'est pas seulement une affaire d'outils, c'est avant tout une question de communication. Une tâche bien décrite est inutile si on n'échange pas régulièrement avec l'équipe. Mon conseil est de toujours privilégier la communication pour s'assurer que tout le monde est sur la même longueur d'onde.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="evolution">
					<Accordion.Control icon={<IconTrendingUp size={20} />}>
						<Title order={4}>Mon évolution</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>
							Mon projet professionnel est de passer d'une bonne organisation personnelle à une capacité à aider à l'organisation d'un projet dans son ensemble.
						</Text>
						<Text mt="sm">
							<b>Prochaines étapes :</b> je souhaite me former sur les méthodologies de <b>gestion de projet Agile</b> plus en profondeur, notamment le rôle de Scrum Master, pour mieux comprendre comment on estime les tâches, on planifie des sprints et on gère les imprévus. Mon objectif est d'être capable de prendre plus de responsabilités dans la planification et le suivi des projets.
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

export default OrganisationSkill;