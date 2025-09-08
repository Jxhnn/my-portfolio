
import { useState } from 'react';
import {
	Title, Stack, Timeline,
	Group, Avatar, Text,
	Anchor, Modal, Button,
	List, Divider, Paper
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBriefcase, IconSchool } from '@tabler/icons-react';
import { Link } from 'react-router';
import { parcoursList } from '../../constants/parcoursData';
import type ParcoursItem from '../../interfaces/ParcoursItem';

const Parcours = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [selectedItem, setSelectedItem] = useState<ParcoursItem | null>(null);

	const openModal = (item: ParcoursItem) => {
		setSelectedItem(item);
		open();
	};

	const experiences = parcoursList.filter(item => item.type === 'experience');
	const formations = parcoursList.filter(item => item.type === 'formation');

	// Fonction réutilisable pour afficher une timeline
	const renderTimeline = (items: ParcoursItem[]) => (
		<Timeline active={-1} bulletSize={24} lineWidth={2} mt="xl">
			{items.map((item, index) => (
				<Timeline.Item
					key={index}
					bullet={item.type === 'experience' ? <IconBriefcase size={14} /> : <IconSchool size={14} />}
					title={<Text fw={500}>{item.title}</Text>} // Titre en gras pour la lisibilité
					onClick={(e) => {
						if ((e.target as HTMLElement).closest('a')) {
							return;
						}
						openModal(item);
					}}
					style={{ cursor: 'pointer' }}
				>
					<Text c="dimmed" size="xs">{item.period}</Text>
					<Anchor
						component={item.company.link ? 'a' : 'span'}
						href={item.company.link}
						target="_blank"
						size="sm"
					>
						<Group gap="xs" mt={4}>
							<Avatar src={item.company.logo} size={24} radius="xl" />
							{/* On utilise un Text car on ne peut pas mettre une ancre dans une ancre */}
							<Text component="span" inherit>
								{item.company.name}
							</Text>
						</Group>
					</Anchor>
				</Timeline.Item>
			))}
		</Timeline>
	);

	return (
		<Stack>
			<Title order={1}>Mon parcours</Title>
			<Text c="dimmed">Cliquez sur un élément pour afficher plus d'informations.</Text>

			<Paper withBorder shadow="md" p="xl" radius="md" mt="md">
				<Title order={2}>Expériences professionnelles</Title>
				{renderTimeline(experiences)}
			</Paper>

			<Paper withBorder shadow="md" p="xl" radius="md" mt="md">
				<Title order={2}>Formations</Title>
				{renderTimeline(formations)}
			</Paper>

			{/* La modale qui affiche le 2ème niveau de lecture */}
			<Modal opened={opened} onClose={close} title={selectedItem?.title} size="xl" centered>
				{selectedItem && (
					<Stack>
						<Text><b>Statut :</b> {selectedItem.details.status}</Text>
						{selectedItem.details.vision && <Text fz="sm" c="dimmed" mt="xs"><i>"{selectedItem.details.vision}"</i></Text>}

						<Divider my="sm" label="Missions principales" labelPosition="center" />
						<List spacing="xs" size="sm">
							{selectedItem.details.missions.map((mission, i) => <List.Item key={i}>{mission}</List.Item>)}
						</List>

						{selectedItem.details.relatedProjects.length > 0 && (
							<>
								<Divider my="sm" label="Réalisations associées" labelPosition="center" />
								<Group>
									{selectedItem.details.relatedProjects.map(proj => (
										<Button key={proj.id} component={Link} to={`/realisations/${proj.id}`} variant="light" size="xs">
											{proj.label}
										</Button>
									))}
								</Group>
							</>
						)}

						{selectedItem.details.relatedSkills.length > 0 && (
							<>
								<Divider my="sm" label="Compétences mises en œuvre" labelPosition="center" />
								<Group>
									{selectedItem.details.relatedSkills.map(skill => (
										<Button key={skill.id} component={Link} to={`/competences/${skill.id}`} variant="light" color="grape" size="xs">
											{skill.label}
										</Button>
									))}
								</Group>
							</>
						)}
					</Stack>
				)}
			</Modal>
		</Stack>
	);
};

export default Parcours;