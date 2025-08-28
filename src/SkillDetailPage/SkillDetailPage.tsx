
import { useParams } from 'react-router';
import { technicalSkillsList, humanSkillsList } from '../constants/skillsList';
import { Container, Title, Text } from '@mantine/core';

const SkillDetailPage = () => {
  const { skillId } = useParams();

  const allSkills = [...technicalSkillsList, ...humanSkillsList];
  const skill = allSkills.find(s => s.id === skillId);

  if (!skill) {
    return (
      <Container>
        <Title order={2}>Compétence non trouvée</Title>
        <Text>Désolé, la compétence que vous cherchez n'existe pas.</Text>
      </Container>
    );
  }

  return (
    <Container size="md">
      {skill.description}
    </Container>
  );
};

export default SkillDetailPage;