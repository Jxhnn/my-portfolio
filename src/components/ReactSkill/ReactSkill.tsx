import {
	Group, Paper, Stack,
	ThemeIcon, Title, Text,
	Anchor, Blockquote
} from "@mantine/core";
import {
	IconBrandReact,
	IconBulb,
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const ReactSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}><IconBrandReact size={32} /></ThemeIcon>
					<Title order={2}>Compétence : React</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Maîtrise de la conception d'interfaces web réactives, modulaires et 
					d'architectures front-end scalables.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Dans le génie logiciel moderne, <strong>React</strong> est bien plus qu'une simple bibliothèque d'affichage : c'est un paradigme de programmation 
					déclaratif basé sur des composants réutilisables, autonomes et fortement typés. 
					Maîtriser React dans un contexte professionnel consiste à savoir découper des maquettes d'interfaces complexes en structures logiques simples, 
					à orchestrer la synchronisation d'états asynchrones et à optimiser le cycle de rendu pour garantir des performances d'affichage optimales.
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité :</strong> l'écosystème React est actuellement marqué par l'adoption généralisée des 
					&nbsp;<em>React Server Components (RSC)</em> et l'unification des environnements de rendu (SSR, SSG) 
					au travers de frameworks comme Next.js, rendant la maîtrise des hooks de base 
					(<code>useState</code>, <code>useEffect</code>, <code>useContext</code>) incontournable pour s'adapter à ces architectures modernes.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				<Blockquote cite="– Conception de Web Parts SPFx sur mesure" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors de mes développements d'intranets chez Exelys, j'ai conçu des modules applicatifs interactifs complexes s'intégrant nativement dans 
						l'environnement Microsoft 365 de nos clients. J'ai notamment développé une <strong>carte du monde interactive (World Map)</strong> 
						&nbsp;affichant dynamiquement des fiches de projets d'énergies, ainsi que des <strong>organigrammes hiérarchiques récursifs</strong> 
						&nbsp;connectés à Microsoft Graph.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai structuré ces composants en exploitant des <em>custom hooks React</em> personnalisés. 
						Ces hooks abstraient l'ensemble de la logique de requêtage d'API (via <code>@pnp/sp</code> et <code>@pnp/graph</code>) et gèrent les états 
						d'asynchronisme de manière étanche. Les composants de rendu restent ainsi purement présentiels, ce qui améliore drastiquement la lisibilité du code, 
						facilite la maintenance et garantit une expérience utilisateur extrêmement fluide et réactive.
					</Text>
					<Anchor onClick={() => navigate("/realisations/sharepoint-custom")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (SharePoint Framework)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="cyan" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : intermédiaire.</strong> Je possède une solide maîtrise des concepts fondamentaux de React (flux de données unidirectionnels, 
					hooks standards, cycles de rendu) appliqués à des projets d'entreprise réels. Cette compétence est aujourd'hui une <strong>priorité absolue</strong> dans 
					mon profil d'expert, car elle représente le socle de mon savoir-faire en ingénierie frontend.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> a été particulièrement soutenue car j'ai immédiatement été confronté à des exigences de production 
					réelles pour des clients d'Exelys, m'obligeant à assimiler très vite les notions de typage strict avec TypeScript.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> le plus grand piège avec React est la sur-ingénierie et la dépendance abusive à des bibliothèques tierces. 
					Mon conseil est de toujours exploiter au maximum l'état local et le contexte de base de React avant d'intégrer des gestionnaires d'état 
					globaux complexes, garantissant ainsi un code plus léger et plus rapide à charger.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="cyan" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans le cadre de mon projet professionnel à moyen terme, mon objectif est d'évoluer d'un niveau intermédiaire à un niveau d'expert en 
					ingénierie logicielle frontend, capable de concevoir et d'auditer des architectures complexes de SPA à grande échelle.
				</Text>
				<Text ta="justify">
					<strong>Formations et perspectives :</strong> je mène actuellement une autoformation approfondie sur le framework <strong>Next.js</strong> 
					&nbsp;afin de maîtriser les concepts avancés d'hydratation et d'optimisation de rendu côté serveur (SSR). Ma prochaine étape de formation 
					se concentrera sur l'écriture de tests robustes d'intégration en utilisant la bibliothèque <strong>React Testing Library</strong> et <strong>Jest</strong>.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/sharepoint-custom")} size="sm">• Développement sur SharePoint & Power Platform (SPFx)</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default ReactSkill;