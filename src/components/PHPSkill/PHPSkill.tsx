import { 
	Stack, Paper, Group, 
	ThemeIcon, Title, Anchor, 
	Blockquote, Text 
} from "@mantine/core";
import { 
	IconBrandPhp, 
	IconBulb, 
	IconTrendingUp,
	IconLink
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

const PHPSkill: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Stack gap="xl" mx="auto">
			<Paper shadow="md" p="xl" radius="md" withBorder>
				<Group align="center" mb="lg">
					<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}><IconBrandPhp size={32} /></ThemeIcon>
					<Title order={2}>Compétence : PHP</Title>
				</Group>
				<Text size="lg" ta="justify" c="dimmed">
					Fiche d'évaluation de la maîtrise du langage PHP natif, de la sécurité serveur et de la programmation orientée objet (POO).
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">1. Ma définition de la compétence</Title>
				<Text ta="justify" mb="sm">
					Le langage <strong>PHP (Hypertext Preprocessor)</strong> est l'un des moteurs de script côté serveur les plus éprouvés 
					et les plus répandus de l'écosystème web. Maîtriser PHP de manière professionnelle consiste à savoir concevoir une 
					logique backend robuste, à traiter et filtrer de manière étanche les requêtes HTTP (via les variables superglobales 
					comme <code>$_POST</code> et <code>$_GET</code>), à manipuler des sessions utilisateurs sécurisées (<code>$_SESSION</code>), 
					à interagir proprement avec des bases de données relationnelles, et à structurer du code maintenable en adoptant les principes 
					de la programmation orientée objet (POO).
				</Text>
				<Text ta="justify">
					<strong>Rapport à l'actualité (PHP 8.3 / 8.4) :</strong> bien loin de l'image obsolète du PHP procédural d'il y a dix ans, 
					le langage moderne (PHP 8.3 et 8.4) s'est hissé au niveau des langages les plus exigeants grâce à des fonctionnalités typées 
					avancées, telles que la visibilité asymétrique des propriétés (<em>asymmetric visibility</em>), les <em>property hooks</em>, 
					et les classes en lecture seule (<em>readonly classes</em>).
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Title order={3} size="h4" mb="md">2. Mes éléments de preuve sur le terrain</Title>
				<Blockquote cite="– Conception de la plateforme de réservation ACM en PHP Vanilla" py="xs" px="md" mb="md">
					<Text ta="justify" mb="sm">
						Lors de mon stage de BTS SIO au sein du centre de loisirs d'Artigueloutan, j'ai développé l'intégralité de la logique 
						d'inscription des familles en utilisant uniquement du PHP natif, sans l'aide d'un framework.
					</Text>
					<Text ta="justify" mb="sm">
						<strong>Mise en œuvre et valeur ajoutée :</strong> j'ai codé les contrôles d'authentification des comptes parents en 
						associant les méthodes <code>password_hash()</code> et <code>password_verify()</code> configurées avec l'algorithme <em>bcrypt</em>. 
						Afin de parer les attaques de vol de session par fixation de session, j'ai programmé l'appel systématique à la méthode 
						&nbsp;<code>session_regenerate_id()</code> lors de chaque connexion validée. Conscient que le code procédural natif 
						peut vite devenir désorganisé, j'ai pris l'initiative d'isoler l'ensemble des méthodes d'accès à la base de données au 
						sein d'une classe d'accès dédiée utilisant l'extension <code>PDO</code> avec des requêtes préparées. Cette organisation 
						a garanti la robustesse et la sécurité de l'application, éliminant tout risque d'injection SQL ou d'altération de données.
					</Text>
					<Anchor onClick={() => navigate("/realisations/site-reservation-acm")} size="sm" fw={600} display="inline-flex" style={{ alignItems: 'center', gap: 4 }}>
						<IconLink size={16} /> Consulter la réalisation associée (Site de réservation ACM)
					</Anchor>
				</Blockquote>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="indigo" variant="light"><IconBulb size={20} /></ThemeIcon>
					<Title order={3} size="h4">3. Mon autocritique et recul</Title>
				</Group>
				<Text ta="justify" mb="sm">
					<strong>Degré de maîtrise : intermédiaire.</strong> Je suis parfaitement autonome pour structurer et déboguer du code en 
					PHP natif. C'est une compétence <strong>fondamentale</strong> dans mon cursus, car l'assimilation des mécaniques de base de 
					PHP m'a permis de comprendre précisément le fonctionnement "sous le capot" des frameworks comme Laravel.
				</Text>
				<Text ta="justify" mb="sm">
					Ma <strong>vitesse d'acquisition</strong> s'est consolidée très tôt lors de mon BTS SIO, où j'ai dû concevoir mes premières 
					architectures de bases de données et mes premiers algorithmes de gestion en écrivant du PHP pur.
				</Text>
				<Text ta="justify">
					<strong>Mon recul :</strong> le PHP natif est idéal pour assimiler la sécurité web et le protocole HTTP, mais montre ses 
					limites en termes de scalabilité et de maintenance collaborative. Mon conseil, issu de cette expérience, est de basculer 
					dès que possible vers un framework structurant (comme Laravel ou Symfony) afin de bénéficier de standards éprouvés, d'un 
					ORM de sécurité et d'une architecture MVC propre.
				</Text>
			</Paper>

			<Paper withBorder p="xl" radius="md" shadow="sm">
				<Group mb="md">
					<ThemeIcon color="indigo" variant="light"><IconTrendingUp size={20} /></ThemeIcon>
					<Title order={3} size="h4">4. Mon évolution et projet professionnel</Title>
				</Group>
				<Text ta="justify" mb="sm">
					Dans le cadre de mon projet professionnel, ma maîtrise de PHP sert de passerelle naturelle pour parfaire mon expertise sur 
					son framework de prédilection : Laravel. Mon objectif à moyen terme est de concevoir des architectures backend robustes et 
					de maîtriser la programmation orientée objet avancée.
				</Text>
				<Text ta="justify">
					<strong>Perspectives de formation :</strong> je me focalise actuellement sur l'exploitation des nouveautés syntaxiques apportées 
					par <strong>PHP 8.3 / 8.4</strong> (les attributs natifs, les types d'intersection et la gestion stricte du typage) afin 
					de rendre mes futurs développements Laravel encore plus robustes, clairs et performants.
				</Text>
			</Paper>

			<Paper shadow="xs" p="lg" radius="md" withBorder>
				<Title order={4} mb="sm">5. Principales réalisations rattachées à cette compétence</Title>
				<Stack gap="xs">
					<Anchor onClick={() => navigate("/realisations/site-reservation-acm")} size="sm">• Site de réservation pour un centre de loisirs</Anchor>
				</Stack>
			</Paper>
		</Stack>
	);
}

export default PHPSkill;