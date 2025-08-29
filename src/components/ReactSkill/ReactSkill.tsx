import { 
	Group, Paper, Stack, 
	ThemeIcon, Title, Text, 
	Accordion, Blockquote, Anchor,
} from "@mantine/core";
import { 
	IconBrandReact, 
	IconBuildingCommunity, 
	IconBulb, 
	IconTarget, 
	IconTrendingUp
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const ReactSkill: React.FC = () => {


	const navigate = useNavigate();

	return (
		<Stack gap="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Group align="center" mb="lg">
          <ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}><IconBrandReact size={32} /></ThemeIcon>
          <Title order={2}>Compétence : React</Title>
        </Group>
        <Text size="lg" ta="justify">
          React est aujourd'hui la bibliothèque JavaScript de référence pour construire des interfaces utilisateur. Dans un <b>contexte professionnel</b> où l'expérience utilisateur est devenue un facteur clé de succès, sa popularité s'explique par son approche déclarative et son écosystème riche. <b>Son actualité</b> est marquée par une maintenance constante par Meta et une communauté mondiale qui garantissent son évolution et sa pérennité.
        </Text>
      </Paper>

      <Accordion variant="separated" defaultValue="proof">
        <Accordion.Item value="proof">
          <Accordion.Control icon={<IconTarget size={20} />}>
            <Title order={4}>Mes éléments de preuve</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="sm" c="dimmed" mb="xs">Exemple concret de mise en œuvre :</Text>
            <Blockquote cite="– Développement de Web Parts SharePoint (SPFx)">
              Lors de mes interventions sur des intranets SharePoint, le besoin était de créer des composants interactifs qui dépassaient les limites des outils standards.
              <br/><br/>
              <b>La compétence a été mise en œuvre</b> en développant des "Web Parts" entièrement avec React et TypeScript dans le cadre du SharePoint Framework (SPFx). J'ai utilisé les hooks pour gérer l'état des composants et interagir avec les API de SharePoint afin de récupérer et d'afficher des données de listes de manière dynamique.
              <br/><br/>
              <b>Ma valeur ajoutée a été de proposer des interfaces modernes et réactives directement intégrées dans l'écosystème Microsoft 365,</b> résolvant ainsi le problème des intranets vieillissants et peu engageants.
            </Blockquote>
            <Anchor onClick={() => navigate("/realisations/sharepoint-custom")} mt="sm" fz="sm">
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
              <b>Niveau de maîtrise : intermédiaire.</b> Je suis très à l'aise avec les concepts fondamentaux de React et leur application dans un cadre d'entreprise exigeant comme SharePoint. C'est la <b>compétence prioritaire</b> de mon profil de développeur, celle sur laquelle je construis mon expertise frontend.
            </Text>
            <Text mt="sm">
              Ma <b>vitesse d'acquisition</b> a été rapide, car j'ai directement appris React en l'appliquant sur des projets concrets pour des clients, ce qui est très formateur.
            </Text>
            <Text mt="sm">
              <b>Mon conseil (et mon recul) :</b> Le plus grand piège avec React est de se perdre dans son immense écosystème. Mon approche est de d'abord maîtriser parfaitement les bases de React lui-même avant d'intégrer des bibliothèques de state management complexes ou des frameworks comme Next.js.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="evolution">
          <Accordion.Control icon={<IconTrendingUp size={20} />}>
            <Title order={4}>Mon évolution</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              Dans mon <b>projet professionnel</b>, devenir expert en React est non-négociable. L'objectif à moyen terme est de passer d'un niveau "Intermédiaire" à "Avancé", en étant capable de concevoir des architectures complexes et d'optimiser les performances d'applications à grande échelle.
            </Text>
            <Text mt="sm">
              <b>Formations à venir :</b> Je suis actuellement en auto-formation sur <b>Next.js</b> pour maîtriser le rendu côté serveur (SSR) et la génération de sites statiques (SSG). Ma prochaine étape sera de me former en profondeur sur les stratégies de test d'applications React avec <b>Jest</b> et <b>React Testing Library</b>.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Paper shadow="xs" p="lg" radius="md">
        <Title order={4} mb="sm">Réalisation associée à cette compétence</Title>
        <Stack>
          <Anchor onClick={() => navigate("/realisations/sharepoint-custom")}>
            <Group>
              <IconBuildingCommunity size={18} />
              <Text>Expérience SharePoint & Power Platform (SPFx)</Text>
            </Group>
          </Anchor>
        </Stack>
      </Paper>
    </Stack>
	);
}

export default ReactSkill;