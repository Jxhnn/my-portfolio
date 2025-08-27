
import { Accordion, Group, Paper, Stack, ThemeIcon, Title, Text, List, Code, Badge, Timeline } from "@mantine/core";
import type TechnicalSkill from "../Skills/interfaces/TechnicalSkill";
import { IconAccessible, IconApi, IconArrowsShuffle, IconAspectRatio, IconBolt, IconBoxModel, IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandLaravel, IconBrandMongodb, IconBrandNodejs, IconBrandPhp, IconBrandReact, IconBrowser, IconChartDots3, IconCode, IconDatabase, IconDeviceDesktop, IconDeviceGamepad2, IconDeviceMobile, IconEye, IconFileCode, IconFileText, IconFilter, IconJson, IconKey, IconLayout, IconLayout2, IconLayoutGrid, IconMessages, IconPalette, IconPuzzle, IconRobot, IconSchema, IconServer, IconTable, IconTerminal2, IconTools, IconWorldWww } from "@tabler/icons-react";

export const technicalSkillsList: TechnicalSkill[] = [
	{
		title: 'React',
		projects: [],
		picture: 'src/assets/react.svg',
		level: 'Intermédiaire',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
							<IconBrandReact size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : React</Title>
					</Group>

					<Text size="lg" mb="md">
						React est une bibliothèque JavaScript open source de premier plan, maintenue par Meta
						(anciennement Facebook) et une communauté de développeurs. Son objectif principal est de
						simplifier la création d'interfaces utilisateur (UI) interactives et performantes.
					</Text>
					<Text>
						En se basant sur une approche déclarative et orientée composants, React permet de
						construire des applications web complexes et évolutives.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconPuzzle size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Pour maîtriser React, la compréhension de ses concepts clés est essentielle :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="blue" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item>
									<b>Composants :</b> Blocs de code indépendants et réutilisables qui décrivent
									une partie de l'UI.
								</List.Item>
								<List.Item>
									<b>JSX (JavaScript XML) :</b> Extension de syntaxe qui permet d'écrire du code
									similaire à de l'HTML dans le JavaScript.
								</List.Item>
								<List.Item>
									<b>État (<Code>state</Code>) et Propriétés (<Code>props</Code>) :</b>
									{' '}Les <Code>props</Code> pour passer les données de parent à enfant, et
									l'<Code>état</Code> pour gérer les données internes et dynamiques d'un
									composant.
								</List.Item>
								<List.Item>
									<b>Hooks :</b> Fonctions qui permettent d'utiliser l'état et d'autres
									fonctionnalités de React dans les composants fonctionnels.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="ecosysteme">
						<Accordion.Control icon={<IconEye size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Écosystème et Applications</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="md" size="sm" center>
								<List.Item
									icon={
										<ThemeIcon color="green" size={24} radius="xl">
											<IconCode size={16} />
										</ThemeIcon>
									}
								>
									<b>Développement Web :</b> Idéal pour les applications web monopages (SPAs),
									offrant une expérience utilisateur fluide et réactive.
								</List.Item>
								<List.Item
									icon={
										<ThemeIcon color="green" size={24} radius="xl">
											<IconDeviceMobile size={16} />
										</ThemeIcon>
									}
								>
									<b>Développement Mobile Natif :</b> Avec
									<Badge color="green" variant="light" ml={5}>
										React Native
									</Badge>
									, il est possible de créer des applications pour iOS et Android.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi React est une compétence recherchée ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Performance
						</Badge>
						<Badge color="grape" variant="outline">
							Communauté forte
						</Badge>
						<Badge color="teal" variant="outline">
							Évolutivité
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'JavaScript',
		projects: [],
		picture: 'src/assets/js.svg',
		level: 'Avancé',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'yellow', to: 'orange' }}>
							<IconBrandJavascript size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : JavaScript</Title>
					</Group>

					<Text size="lg" mb="md">
						JavaScript (souvent abrégé en JS) est un langage de programmation qui est l'une des technologies fondamentales du World Wide Web, aux côtés du HTML et du CSS.
					</Text>
					<Text>
						En 2023, 98,3 % des sites web utilisent JavaScript pour le développement côté client, ce qui le rend indispensable pour créer des pages web dynamiques et interactives.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconCode size={20} color="var(--mantine-color-yellow-7)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								La maîtrise de JavaScript passe par la compréhension de ses concepts de base :
							</Text>
							<Timeline active={4} bulletSize={30} lineWidth={2} color="yellow">
								<Timeline.Item bullet={<IconCode size={16} />} title="Variables et Types de données">
									<Text size="sm">
										Déclaration de variables avec <Code>let</Code>, <Code>const</Code>, et <Code>var</Code>, et manipulation des types de données (String, Number, Boolean, Object, etc.).
									</Text>
								</Timeline.Item>
								<Timeline.Item bullet={<IconCode size={16} />} title="Structures de contrôle">
									<Text size="sm">
										Utilisation des conditions (<Code>if/else</Code>, <Code>switch</Code>) et des boucles (<Code>for</Code>, <Code>while</Code>) pour contrôler le flux d'exécution du code.
									</Text>
								</Timeline.Item>
								<Timeline.Item bullet={<IconCode size={16} />} title="Fonctions">
									<Text size="sm">
										Création de blocs de code réutilisables. Les fonctions sont des citoyens de première classe en JavaScript.
									</Text>
								</Timeline.Item>
								<Timeline.Item bullet={<IconCode size={16} />} title="Manipulation du DOM">
									<Text size="sm">
										Interaction avec la structure HTML et CSS d'une page web pour créer du contenu dynamique et répondre aux actions de l'utilisateur.
									</Text>
								</Timeline.Item>
								<Timeline.Item bullet={<IconCode size={16} />} title="Asynchronisme">
									<Text size="sm">
										Gestion des opérations asynchrones avec les "Promises" et <Code>async/await</Code> pour des applications fluides et non bloquantes.
									</Text>
								</Timeline.Item>
							</Timeline>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="applications">
						<Accordion.Control icon={<IconWorldWww size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Un Langage Polyvalent</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Initialement conçu pour le web, JavaScript est aujourd'hui utilisé dans de nombreux domaines :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="green" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconDeviceDesktop size={20} />}>
									<b>Développement Web Frontend :</b> Pour rendre les sites web interactifs et dynamiques, souvent via des frameworks comme React, Angular ou Vue.js.
								</List.Item>
								<List.Item icon={<IconServer size={20} />}>
									<b>Développement Backend :</b> Avec des environnements comme Node.js, JavaScript permet de créer des serveurs et des API robustes.
								</List.Item>
								<List.Item icon={<IconDeviceGamepad2 size={20} />}>
									<b>Jeux Vidéo :</b> Création de jeux 2D et 3D pour le web en utilisant des bibliothèques graphiques comme Pixi.js ou directement avec HTML5 Canvas.
								</List.Item>
								<List.Item icon={<IconRobot size={20} />}>
									<b>Au-delà du Web :</b> Développement d'applications de bureau, mobiles (avec React Native), et même pour l'Internet des Objets (IoT) et l'IA.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi JavaScript est une compétence fondamentale ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Indispensable au Web
						</Badge>
						<Badge color="grape" variant="outline">
							Vaste Écosystème
						</Badge>
						<Badge color="teal" variant="outline">
							Polyvalence (Frontend & Backend)
						</Badge>
						<Badge color="red" variant="outline">
							Haute Performance
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'PHP',
		projects: [],
		picture: 'src/assets/php.svg',
		level: 'Intermédiaire',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>
							<IconBrandPhp size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : PHP</Title>
					</Group>

					<Text size="lg" mb="md">
						PHP (acronyme récursif pour "PHP: Hypertext Preprocessor") est un langage de script côté serveur open source largement utilisé, spécialement conçu pour le développement web.
					</Text>
					<Text>
						Il est exécuté sur le serveur pour générer du HTML dynamique qui est ensuite envoyé au client, rendant les pages web interactives et connectées à des bases de données.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconCode size={20} color="var(--mantine-color-indigo-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Pour développer efficacement avec PHP, il est essentiel de maîtriser ses bases :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="indigo" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconServer size={20} />}>
									<b>Scripting Côté Serveur :</b> Comprendre comment le code PHP est exécuté sur le serveur pour traiter des données, gérer des sessions et interagir avec des fichiers avant de renvoyer une réponse au navigateur.
								</List.Item>
								<List.Item icon={<IconFileCode size={20} />}>
									<b>Syntaxe et Variables :</b> Maîtrise de la syntaxe de base, y compris les variables (commençant par <Code>$</Code>), les types de données et les opérateurs.
								</List.Item>
								<List.Item icon={<IconTools size={20} />}>
									<b>Structures de Contrôle :</b> Utilisation des conditions (<Code>if/else</Code>, <Code>switch</Code>) et des boucles (<Code>for</Code>, <Code>foreach</Code>, <Code>while</Code>) pour créer une logique applicative.
								</List.Item>
								<List.Item icon={<IconDatabase size={20} />}>
									<b>Interaction avec les Bases de Données :</b> PHP excelle dans la communication avec les bases de données, notamment MySQL/MariaDB, en utilisant des extensions comme PDO ou MySQLi pour manipuler les données.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="ecosysteme">
						<Accordion.Control icon={<IconWorldWww size={20} color="var(--mantine-color-grape-6)" />}>
							<Title order={4}>Écosystème et cas d'usage</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								La force de PHP réside dans son immense écosystème et sa spécialisation pour le web :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item>
									<b>Systèmes de gestion de contenu (CMS) :</b> PHP est le moteur de plateformes mondialement connues comme WordPress, Drupal et Joomla, qui alimentent une part significative du web.
								</List.Item>
								<List.Item>
									<b>Frameworks Modernes :</b> Des frameworks robustes comme Laravel, Symfony et CodeIgniter fournissent une structure solide pour construire des applications web complexes, sécurisées et maintenables.
								</List.Item>
								<List.Item>
									<b>Sites E-commerce :</b> Des plateformes comme Magento (Adobe Commerce) et PrestaShop sont construites avec PHP, démontrant sa capacité à gérer des transactions et des catalogues de produits complexes.
								</List.Item>
								<List.Item>
									<b>API RESTful :</b> Grâce à ses frameworks, PHP est également un excellent choix pour construire des backends et des API RESTful qui peuvent être consommées par des applications frontend (comme React).
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi PHP reste une compétence pertinente ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Pilier du Web
						</Badge>
						<Badge color="grape" variant="outline">
							Écosystème Mature (CMS & Frameworks)
						</Badge>
						<Badge color="teal" variant="outline">
							Facilité d'hébergement
						</Badge>
						<Badge color="red" variant="outline">
							Grande Communauté
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'HTML',
		projects: [],
		picture: 'src/assets/html.svg',
		level: 'Avancé',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
							<IconBrandHtml5 size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : HTML</Title>
					</Group>

					<Text size="lg" mb="md">
						HTML (HyperText Markup Language) est le langage de balisage standard utilisé pour créer et structurer le contenu des pages web et de leurs applications.
					</Text>
					<Text>
						Il forme le squelette de chaque site internet, en définissant la signification et la structure du contenu à l'aide d'un système de balises et d'attributs.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconCode size={20} color="var(--mantine-color-orange-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								La maîtrise de l'HTML repose sur la compréhension de ses éléments de base :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="orange" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconLayoutGrid size={20} />}>
									<b>Éléments et Balises (Tags) :</b> L'HTML utilise des balises comme <Code>{"<p>"}</Code>, <Code>{"<h1>"}</Code> ou <Code>{"<div>"}</Code> pour encadrer et définir différents types de contenu. Chaque balise a une signification spécifique.
								</List.Item>
								<List.Item icon={<IconFileText size={20} />}>
									<b>Attributs :</b> Des informations supplémentaires sont fournies aux éléments via des attributs. Par exemple, l'attribut <Code>href</Code> dans une balise <Code>{"<a>"}</Code> spécifie l'URL du lien.
								</List.Item>
								<List.Item icon={<IconBrowser size={20} />}>
									<b>Structure d'un Document :</b> Toute page HTML suit une structure standard avec <Code>{"<!DOCTYPE html>"}</Code>, suivi des balises <Code>{"<html>"}</Code>, <Code>{"<head>"}</Code> (pour les métadonnées) et <Code>{"<body>"}</Code> (pour le contenu visible).
								</List.Item>
								<List.Item icon={<IconAccessible size={20} />}>
									<b>HTML Sémantique :</b> L'utilisation de balises qui décrivent leur contenu (comme <Code>{"<header>"}</Code>, <Code>{"<nav>"}</Code>, <Code>{"<article>"}</Code>) est cruciale pour l'accessibilité et le référencement naturel (SEO).
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="role">
						<Accordion.Control icon={<IconWorldWww size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Rôle dans le développement web</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								L'HTML est le point de départ de toute création sur le web. Il fonctionne en trio avec le CSS et le JavaScript :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item>
									<b>HTML pour la Structure :</b> Il pose les fondations et organise le contenu de la page. C'est le squelette.
								</List.Item>
								<List.Item>
									<b>CSS pour le Style :</b> Le CSS (Cascading Style Sheets) est ensuite utilisé pour mettre en forme et styliser ce contenu (couleurs, polices, mise en page). C'est l'habillage.
								</List.Item>
								<List.Item>
									<b>JavaScript pour l'Interactivité :</b> Le JavaScript intervient pour ajouter des fonctionnalités dynamiques et de l'interactivité à la page. C'est le système nerveux.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi l'HTML est une compétence incontournable ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Fondation du Web
						</Badge>
						<Badge color="grape" variant="outline">
							Standard Universel
						</Badge>
						<Badge color="teal" variant="outline">
							Essentiel pour le SEO
						</Badge>
						<Badge color="red" variant="outline">
							Clé de l'Accessibilité
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'CSS',
		projects: [],
		picture: 'src/assets/css.svg',
		level: 'Avancé',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'purple' }}>
							<IconBrandCss3 size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : CSS</Title>
					</Group>

					<Text size="lg" mb="md">
						CSS (Cascading Style Sheets, ou feuilles de style en cascade) est le langage utilisé pour décrire la présentation et le style d'un document écrit en HTML.
					</Text>
					<Text>
						Il est responsable de l'apparence visuelle des sites web, incluant les couleurs, la typographie, la mise en page et les animations. C'est ce qui transforme un simple document HTML en une expérience utilisateur riche et attrayante.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconPalette size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								La maîtrise du CSS implique de comprendre sa syntaxe et ses mécanismes de base :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="blue" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconLayout2 size={20} />}>
									<b>Sélecteurs, Propriétés et Valeurs :</b> Le cœur du CSS. Un sélecteur cible un élément HTML, une propriété définit l'aspect à styler (ex: <Code>color</Code>), et une valeur lui est assignée (ex: <Code>#333</Code>).
								</List.Item>
								<List.Item icon={<IconBoxModel size={20} />}>
									<b>Le Modèle de Boîte (Box Model) :</b> Concept crucial qui décrit comment chaque élément est une boîte rectangulaire avec du contenu, du remplissage (padding), une bordure (border) et une marge (margin).
								</List.Item>
								<List.Item icon={<IconAspectRatio size={20} />}>
									<b>Flexbox et Grid :</b> Des modules de mise en page modernes et puissants. Flexbox est conçu pour un agencement unidimensionnel (lignes ou colonnes), tandis que Grid gère des agencements bidimensionnels complexes.
								</List.Item>
								<List.Item icon={<IconDeviceMobile size={20} />}>
									<b>Responsive Design & Media Queries :</b> Les Media Queries permettent d'appliquer des styles différents en fonction des caractéristiques de l'appareil (comme la largeur de l'écran), rendant les sites adaptatifs et accessibles sur tous les supports.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="role">
						<Accordion.Control icon={<IconLayout2 size={20} color="var(--mantine-color-grape-6)" />}>
							<Title order={4}>Le Pilier de la Présentation Visuelle</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Le CSS est indispensable et agit en synergie avec les autres technologies du web :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item>
									<b>Complément du HTML :</b> Alors que le HTML fournit la structure sémantique, le CSS y applique toute la couche de présentation visuelle.
								</List.Item>
								<List.Item>
									<b>Séparation des préoccupations :</b> En séparant le contenu (HTML) du style (CSS), le code devient plus propre, plus facile à maintenir et à mettre à jour.
								</List.Item>
								<List.Item>
									<b>Interactivité :</b> Combiné à JavaScript, le CSS permet de créer des animations et des transitions fluides qui améliorent l'expérience utilisateur.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi le CSS est une compétence essentielle ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Contrôle Visuel Total
						</Badge>
						<Badge color="grape" variant="outline">
							Design Adaptatif (Responsive)
						</Badge>
						<Badge color="teal" variant="outline">
							Maintenance Simplifiée
						</Badge>
						<Badge color="red" variant="outline">
							Expérience Utilisateur (UX)
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'NodeJS',
		projects: [],
		picture: 'src/assets/nodejs.svg',
		level: 'Intermédiaire',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'green', to: 'lime' }}>
							<IconBrandNodejs size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : Node.js</Title>
					</Group>

					<Text size="lg" mb="md">
						Node.js est un environnement d'exécution JavaScript open source et multiplateforme qui permet d'exécuter du code JavaScript en dehors d'un navigateur web.
					</Text>
					<Text>
						Il est principalement utilisé pour construire des applications réseau rapides et évolutives, en particulier des serveurs web et des API, grâce à son architecture non bloquante et orientée événements.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconBolt size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Pour développer avec Node.js, il est crucial de comprendre ses principes de fonctionnement :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="green" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item>
									<b>Moteur V8 de Google :</b> Node.js est construit sur le moteur JavaScript V8 de Chrome, ce qui lui confère des performances élevées en compilant le JavaScript en code machine natif.
								</List.Item>
								<List.Item>
									<b>Modèle Asynchrone et Non-bloquant :</b> C'est le cœur de Node.js. Il utilise une boucle d'événements (Event Loop) pour gérer de multiples connexions simultanément sans créer de nouveaux threads, le rendant léger et efficace pour les opérations d'entrée/sortie (I/O).
								</List.Item>
								<List.Item>
									<b>npm (Node Package Manager) :</b> Le plus grand écosystème de paquets open source au monde. npm est l'outil de ligne de commande qui permet de gérer les dépendances (bibliothèques, frameworks) d'un projet.
								</List.Item>
								<List.Item>
									<b>Système de Modules :</b> Node.js utilise un système de modules (CommonJS avec <Code>require()</Code> ou ES Modules avec <Code>import</Code>) pour organiser le code de manière structurée et réutilisable.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="ecosysteme">
						<Accordion.Control icon={<IconServer size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Écosystème et cas d'usage</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Node.js est devenu un choix privilégié pour le développement backend grâce à sa polyvalence :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconApi size={20} />}>
									<b>API RESTful et GraphQL :</b> C'est le cas d'usage le plus courant. Des frameworks comme Express.js, Koa ou NestJS facilitent la création d'API performantes pour alimenter des applications web et mobiles.
								</List.Item>
								<List.Item icon={<IconMessages size={20} />}>
									<b>Applications en Temps Réel :</b> Idéal pour les applications de chat, les jeux en ligne ou les tableaux de bord collaboratifs grâce à des bibliothèques comme Socket.io, qui tirent parti de sa nature asynchrone.
								</List.Item>
								<List.Item icon={<IconTerminal2 size={20} />}>
									<b>Outils en Ligne de Commande (CLI) :</b> De nombreux outils de développement populaires (comme Webpack, ESLint, ou même les outils React) sont construits avec Node.js.
								</List.Item>
								<List.Item icon={<IconCode size={20} />}>
									<b>Microservices :</b> Sa légèreté et sa rapidité au démarrage en font un excellent candidat pour construire des architectures de microservices.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi Node.js est une compétence prisée ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Haute Performance pour l'I/O
						</Badge>
						<Badge color="grape" variant="outline">
							JavaScript de bout en bout (Full-Stack)
						</Badge>
						<Badge color="teal" variant="outline">
							Écosystème npm immense
						</Badge>
						<Badge color="red" variant="outline">
							Évolutivité (Scalability)
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'Laravel',
		level: 'Avancé',
		picture: 'src/assets/laravel.svg',
		projects: [],
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'red', to: 'orange' }}>
							<IconBrandLaravel size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : Laravel</Title>
					</Group>

					<Text size="lg" mb="md">
						Laravel est un framework d'application web PHP open source, réputé pour sa syntaxe élégante et expressive. Il a été créé par Taylor Otwell avec l'objectif de rendre le développement web plus agréable et créatif en simplifiant les tâches courantes.
					</Text>
					<Text>
						Basé sur l'architecture MVC (Modèle-Vue-Contrôleur), Laravel fournit une structure robuste et des outils puissants pour construire des applications web modernes, des plus simples aux plus complexes.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconTools size={20} color="var(--mantine-color-red-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Développer avec Laravel signifie s'appuyer sur son écosystème et ses conventions :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="red" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconLayout size={20} />}>
									<b>Architecture MVC :</b> Laravel organise le code en séparant la logique métier (Modèle), la présentation (Vue) et la gestion des requêtes (Contrôleur), ce qui rend les applications plus claires et maintenables.
								</List.Item>
								<List.Item icon={<IconLayout size={20} />}>
									<b>Moteur de Template Blade :</b> <Code>Blade</Code> est le moteur de template simple et puissant de Laravel. Il permet d'écrire du code PHP directement dans les vues de manière propre et lisible, tout en offrant des fonctionnalités comme l'héritage de templates.
								</List.Item>
								<List.Item icon={<IconDatabase size={20} />}>
									<b>ORM Eloquent :</b> Eloquent est un mappeur objet-relationnel (ORM) qui rend l'interaction avec la base de données incroyablement simple et intuitive. Chaque table de la base de données a un "Modèle" correspondant pour interagir avec elle.
								</List.Item>
								<List.Item icon={<IconTerminal2 size={20} />}>
									<b>Artisan CLI :</b> Artisan est l'interface en ligne de commande incluse avec Laravel. Elle fournit une multitude de commandes utiles pour générer du code (contrôleurs, migrations), gérer la base de données et automatiser des tâches répétitives.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="ecosysteme">
						<Accordion.Control icon={<IconServer size={20} color="var(--mantine-color-orange-6)" />}>
							<Title order={4}>Écosystème et cas d'usage</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Grâce à son riche écosystème, Laravel est utilisé pour une grande variété de projets web :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item>
									<b>Applications Web Complètes :</b> Le cas d'usage principal. Laravel est parfait pour construire des portails clients, des plateformes SaaS (Software as a Service), des intranets et des applications métier robustes.
								</List.Item>
								<List.Item icon={<IconApi size={20} />}>
									<b>Backend pour API :</b> Laravel est un excellent choix pour développer des API RESTful ou GraphQL puissantes qui serviront de backend pour des applications frontend (React, Vue.js) ou des applications mobiles.
								</List.Item>
								<List.Item>
									<b>Sites E-commerce :</b> Bien qu'il ne soit pas un CMS e-commerce clé en main, sa flexibilité permet de construire des plateformes de vente en ligne sur mesure et performantes.
								</List.Item>
								<List.Item>
									<b>Écosystème Officiel :</b> Laravel est enrichi par des paquets officiels comme <Code>Breeze</Code> et <Code>Jetstream</Code> (authentification), <Code>Horizon</Code> (gestion des files d'attente), et <Code>Sail</Code> (environnement de développement Docker).
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi Laravel est un framework de choix ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Productivité Élevée
						</Badge>
						<Badge color="grape" variant="outline">
							Syntaxe Élégante
						</Badge>
						<Badge color="teal" variant="outline">
							Écosystème Complet
						</Badge>
						<Badge color="red" variant="outline">
							Sécurité Intégrée
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'MySQL',
		projects: [],
		level: 'Avancé',
		picture: 'src/assets/mysql.svg',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'teal' }}>
							<IconDatabase size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : MySQL / MariaDB</Title>
					</Group>

					<Text size="lg" mb="md">
						MySQL est le système de gestion de bases de données relationnelles (SGBDR) open source le plus populaire au monde. MariaDB est un fork de MySQL, créé par ses développeurs originaux, garantissant de rester open source et offrant une compatibilité élevée.
					</Text>
					<Text>
						Ces deux systèmes sont au cœur de la plupart des applications web, agissant comme des cerveaux fiables pour stocker, organiser et récupérer des données de manière structurée.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconTable size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								La maîtrise de MySQL/MariaDB repose sur la compréhension du modèle relationnel :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="blue" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconDatabase size={20} />}>
									<b>Modèle Relationnel :</b> Les données sont organisées en tables, qui sont composées de lignes et de colonnes. Les relations entre les tables permettent de lier les données de manière logique et efficace.
								</List.Item>
								<List.Item icon={<IconCode size={20} />}>
									<b>Langage SQL :</b> L'interaction avec la base de données se fait via le langage de requête structuré (SQL). Il est utilisé pour créer, lire, mettre à jour et supprimer des données (opérations CRUD).
								</List.Item>
								<List.Item icon={<IconTable size={20} />}>
									<b>Schéma et Tables :</b> La conception du schéma, c'est-à-dire la structure des tables, de leurs colonnes et des types de données, est la première étape de la création d'une base de données robuste.
								</List.Item>
								<List.Item icon={<IconKey size={20} />}>
									<b>Clés et Relations :</b> Les clés primaires identifient de manière unique chaque enregistrement dans une table, tandis que les clés étrangères créent des liens entre les tables pour assurer l'intégrité des données.
								</List.Item>
								<List.Item icon={<IconFilter size={20} />}>
									<b>Indexation :</b> La création d'index sur certaines colonnes permet d'accélérer considérablement la vitesse de recherche et de récupération des données.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="role">
						<Accordion.Control icon={<IconServer size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Rôle et cas d'usage</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								MySQL et MariaDB sont omniprésents dans l'écosystème du développement web et applicatif :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconWorldWww size={20} />}>
									<b>Composant de la stack LAMP/LEMP :</b> Ils forment le "M" (MySQL/MariaDB) dans les célèbres stacks serveur Linux, Apache/Nginx, MySQL/MariaDB, PHP/Perl/Python, qui alimentent une grande partie du web.
								</List.Item>
								<List.Item>
									<b>Backend pour CMS :</b> Pratiquement tous les systèmes de gestion de contenu majeurs comme WordPress, Joomla, ou Drupal reposent sur une base de données MySQL ou MariaDB pour stocker les articles, les utilisateurs, et les configurations.
								</List.Item>
								<List.Item>
									<b>Base de données pour Applications :</b> Toute application nécessitant de stocker des données de manière persistante et structurée (e-commerce, réseaux sociaux, applications métier) peut utiliser MySQL/MariaDB comme solution de stockage principale.
								</List.Item>
								<List.Item>
									<b>Entrepôts de Données (Data Warehousing) :</b> Pour des besoins d'analyse et de reporting, ils peuvent être utilisés pour stocker de grands volumes de données structurées.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi cette compétence est fondamentale ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Standard de l'Industrie
						</Badge>
						<Badge color="grape" variant="outline">
							Fiabilité et Performance
						</Badge>
						<Badge color="teal" variant="outline">
							Open Source et Grande Communauté
						</Badge>
						<Badge color="red" variant="outline">
							Compatibilité Élevée
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: 'MongoDB',
		projects: [],
		level: 'Débutant',
		picture: 'src/assets/mongodb.svg',
		description: (
			<Stack gap="xl">
				<Paper shadow="md" p="xl" radius="md" withBorder>
					<Group align="center" mb="lg">
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'green', to: 'teal' }}>
							<IconBrandMongodb size={32} />
						</ThemeIcon>
						<Title order={2}>Compétence technique : MongoDB</Title>
					</Group>

					<Text size="lg" mb="md">
						MongoDB est une base de données NoSQL open source, orientée document, conçue pour offrir une haute performance, une haute disponibilité et une scalabilité facile.
					</Text>
					<Text>
						Contrairement aux bases de données relationnelles comme MySQL, MongoDB stocke les données dans des documents flexibles de type JSON (en réalité, une variante binaire appelée BSON), ce qui permet de faire évoluer les schémas de données sans temps d'arrêt.
					</Text>
				</Paper>

				<Accordion variant="separated" defaultValue="concepts">
					<Accordion.Item value="concepts">
						<Accordion.Control icon={<IconSchema size={20} color="var(--mantine-color-green-7)" />}>
							<Title order={4}>Concepts fondamentaux</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								Pour travailler avec MongoDB, il est essentiel de comprendre son approche non relationnelle :
							</Text>
							<List
								spacing="md"
								size="sm"
								center
								icon={
									<ThemeIcon color="green" size={24} radius="xl">
										<IconCode size={16} />
									</ThemeIcon>
								}
							>
								<List.Item icon={<IconJson size={20} />}>
									<b>Documents BSON :</b> Les données sont stockées dans des documents de type BSON (Binary JSON). Un document est un ensemble de paires clé-valeur, ce qui le rend très flexible et similaire aux objets JavaScript.
								</List.Item>
								<List.Item icon={<IconFileText size={20} />}>
									<b>Collections :</b> Les documents sont regroupés dans des collections. Une collection est l'équivalent d'une table dans une base de données relationnelle, mais elle n'impose pas de structure stricte.
								</List.Item>
								<List.Item icon={<IconSchema size={20} />}>
									<b>Schéma flexible :</b> Il n'est pas nécessaire de définir une structure de document à l'avance. Des documents avec des champs différents peuvent coexister dans la même collection, ce qui est idéal pour le développement agile.
								</List.Item>
								<List.Item icon={<IconCode size={20} />}>
									<b>Langage de requête riche :</b> MongoDB propose un langage de requête puissant (MQL) qui permet de filtrer, trier et agréger les données de manière complexe directement depuis la base de données.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="role">
						<Accordion.Control icon={<IconServer size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Cas d'usage et applications</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text mb="md">
								La flexibilité de MongoDB en fait un excellent choix pour les applications modernes :
							</Text>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconChartDots3 size={20} />}>
									<b>Big Data et Applications en Temps Réel :</b> Sa capacité à gérer de grands volumes de données non structurées et à écrire rapidement en fait un choix populaire pour l'IoT, l'analytique et les applications temps réel.
								</List.Item>
								<List.Item>
									<b>Gestion de Contenu et Catalogues :</b> Idéal pour stocker des catalogues de produits ou des articles de blog où chaque élément peut avoir des attributs variés.
								</List.Item>
								<List.Item>
									<b>Backend pour applications mobiles et web :</b> C'est le "M" de la stack MERN (MongoDB, Express.js, React, Node.js), une alternative populaire à la stack LAMP pour le développement full-stack JavaScript.
								</List.Item>
								<List.Item icon={<IconArrowsShuffle size={20} />}>
									<b>Applications à forte évolutivité :</b> Sa capacité de sharding (répartition des données sur plusieurs serveurs) et de réplication (copies des données) lui permet de s'adapter à une charge très élevée.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>

				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Pourquoi MongoDB est une compétence demandée ?
					</Title>
					<Group>
						<Badge color="blue" variant="outline">
							Flexibilité des Données
						</Badge>
						<Badge color="grape" variant="outline">
							Scalabilité Horizontale
						</Badge>
						<Badge color="teal" variant="outline">
							Haute Performance en Lecture/Écriture
						</Badge>
						<Badge color="red" variant="outline">
							Écosystème JavaScript
						</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	}
];
