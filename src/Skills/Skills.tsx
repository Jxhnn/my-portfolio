
import { Accordion, Button, Card, Group, Text, Image, Badge, Title, Paper, SimpleGrid } from "@mantine/core"
import { humanSkillsChartData, humanSkillsList, technicalSkillsChartData, technicalSkillsList } from "../constants/skillsList";
import classes from './Skills.module.css';
import type TechnicalSkill from "./interfaces/TechnicalSkill";
import { RadarChart } from '@mantine/charts';
import { useNavigate } from "react-router";

const Skills: React.FC = () => {

	const navigate = useNavigate();

	const generateSkillCards = (skills: TechnicalSkill[]) => skills.map((skill, idx) => (
		<Card key={idx} shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src={skill.picture}
					height={160}
					alt={`${skill.title} logo`}
					fit="contain"
					p="md"
				/>
			</Card.Section>
			<Group justify="space-between" mt="md" mb="xs">
				<Text fw={500}>{skill.title}</Text>
				<Badge color="pink">{skill.level}</Badge>
			</Group>
			<Button
				color="blue"
				fullWidth
				mt="md"
				radius="md"
				onClick={() => navigate(`/competences/${skill.id}`)}
			>
				Plus d'informations
			</Button>
		</Card>
	));

	return (
		<div>
			<Title order={1} mb="xl">Mes compétences</Title>
			<Paper withBorder shadow="md" p="xl" radius="md" mb="xl">
				<Title order={3} ta="center" mb="xl">Profil de compétences</Title>
				<SimpleGrid cols={{ base: 1, sm: 2 }}>
					<div>
						<Title order={4} ta="center" mb="md">Techniques</Title>
						<RadarChart
							h={300}
							data={technicalSkillsChartData}
							dataKey="skill"
							withDots
							series={[
								{ name: 'level', color: 'blue.6', opacity: 0.6 },
							]}
						/>
					</div>
					<div>
						<Title order={4} ta="center" mb="md">Humaines</Title>
						<RadarChart
							h={300}
							data={humanSkillsChartData}
							dataKey="skill"
							withDots
							series={[
								{ name: 'level', color: 'grape.6', opacity: 0.6 },
							]}
						/>
					</div>
				</SimpleGrid>
			</Paper>
			<Accordion defaultValue="technical">
				<Accordion.Item key="technical" value="technical">
					<Accordion.Control>Compétences techniques</Accordion.Control>
					<Accordion.Panel>
						<div className={classes.list}>
							{generateSkillCards(technicalSkillsList)}
						</div>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item key="human" value="human">
					<Accordion.Control>Compétences humaines</Accordion.Control>
					<Accordion.Panel>
						<div className={classes.list}>
							{generateSkillCards(humanSkillsList)}
						</div>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default Skills;