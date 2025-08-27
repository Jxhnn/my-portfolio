
import { Accordion, Badge, Button, Card, Group, Image, Modal, Text } from "@mantine/core"
import { useState, type ReactNode } from "react";
import { technicalSkillsList } from "../constants/skillsList";
import { useDisclosure } from "@mantine/hooks";
import classes from './Skills.module.css';

const Skills: React.FC = () => {

	const [opened, { open, close }] = useDisclosure(false);
	const [modalContent, setModalContent] = useState<ReactNode>();

	const openModal = (node: ReactNode) => {
		setModalContent(node);
		open();
	};

	const technicalSkills: ReactNode = technicalSkillsList.map((skill, idx) => {
		return (
			<Card key={idx}>
				<Card.Section>
					<Image
						src={skill.picture}
						height={160}
						width={160}
						alt="Skill logo"
						fit="contain"
						className={classes.icon}
					/>
				</Card.Section>
				<Group justify="space-between" mt="md" mb="xs">
					<Text fw={500}>{skill.title}</Text>
					<Badge color="pink">Niveau: {skill.level}</Badge>
				</Group>
				<Button color="blue" fullWidth mt="md" radius="md" onClick={() => openModal(skill.description)}>
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
			<Accordion defaultValue="technical">
				<Accordion.Item key="technical" value="technical">
					<Accordion.Control>Compétences techniques</Accordion.Control>
					<Accordion.Panel>
						<div className={classes.list}>
							{technicalSkills}
						</div>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default Skills;