
import { Badge, Button, Card, Group, Image, Modal, Text } from "@mantine/core"
import { useState, type ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import classes from './Projects.module.css';
import { projectsList } from "../constants/projectsList";

const Projects: React.FC = () => {

	const [opened, { open, close }] = useDisclosure(false);
	const [modalContent, setModalContent] = useState<ReactNode>();

	const openModal = (node: ReactNode) => {
		setModalContent(node);
		open();
	};

	const projectsCards: ReactNode = projectsList.map(project => {
		return (
			<Card key={project.title?.toString()}>
				<Card.Section>
					<Image
						src={project.picture}
						height={160}
						width={160}
						alt="Project thumbnail"
						fit="contain"
						className={classes.icon}
					/>
				</Card.Section>
				<Group justify="space-between" mt="md" mb="xs">
					<Text fw={500}>{project.title}</Text>
					<Badge color="pink">Année: {project.year}</Badge>
				</Group>
				<Button color="blue" fullWidth mt="md" radius="md" onClick={() => openModal(project.description)}>
					Plus d'informations
				</Button>
			</Card>
		);
	});

	return (
		<div>
			<Modal opened={opened} size="auto" onClose={close} title="Informations sur la compétence selectionnée" centered>
				{modalContent}
			</Modal>
			<div className={classes.list}>
				{projectsCards}
			</div>
		</div>
	);
};

export default Projects;