import { Badge, Button, Card, Group, Image, Text } from "@mantine/core"
import { type ReactNode } from "react";
import classes from './Projects.module.css';
import { projectsList } from "../../constants/projectsList";
import { useNavigate } from "react-router";

const Projects: React.FC = () => {

	const navigate = useNavigate();

	const projectsCards: ReactNode = projectsList.map((project, idx) => {
		return (
			<Card key={idx} shadow="sm" padding="lg" radius="md" withBorder style={{ width: 'calc(33.33% - 11px)', minWidth: 280 }}>
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
					<div className={classes.tooltipText} style={{ fontWeight: 600 }}>{project.title}</div>
					<Badge color="pink">Année: {project.year}</Badge>
				</Group>
				<Text size="sm" c="dimmed" mt="xs" mb="md" ta="justify" style={{ flexGrow: 1 }}>
					{project.shortDescription}
				</Text>
				<Button color="blue" fullWidth mt="auto" radius="md" onClick={() => navigate(`/realisations/${project.id}`)}>
					Plus d'informations
				</Button>
			</Card>
		);
	});

	return (
		<div className={classes.list}>
			{projectsCards}
		</div>
	);
};

export default Projects;