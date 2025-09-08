
import { useParams } from 'react-router';
import { Container, Title, Text } from '@mantine/core';
import { projectsList } from '../../constants/projectsList';

const ProjectDetailsPage = () => {
  
  const { projectId } = useParams();
  const project = projectsList.find(s => s.id === projectId);

  if (!project) {
    return (
      <Container size={"xl"}>
        <Title order={2}>Compétence non trouvée</Title>
        <Text>Désolé, la compétence que vous cherchez n'existe pas.</Text>
      </Container>
    );
  }

  return (
    <Container size="xl">
      {project.description}
    </Container>
  );
};

export default ProjectDetailsPage;