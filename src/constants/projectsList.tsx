
import { Badge, List, Tooltip, Text, Title, Image, Stack, Group, Paper, Accordion, Blockquote, ThemeIcon, Anchor } from "@mantine/core";
import type Project from "../Skills/interfaces/Project";
import { IconApi, IconAppWindow, IconAutomation, IconBellRinging, IconBook, IconBrandCss3, IconBrandJavascript, IconBrandLaravel, IconBrandReact, IconBuildingCommunity, IconBulb, IconCode, IconDatabase, IconDatabaseImport, IconDeviceMobile, IconGrowth, IconKey, IconLayoutDashboard, IconListCheck, IconLock, IconPalette, IconRefresh, IconRun, IconSettings, IconShieldLock, IconTargetArrow, IconThumbUp, IconUsersGroup } from "@tabler/icons-react";

export const projectsList: Project[] = [
	{
		title: (
			<div>
				Site de réservation pour&nbsp;
				<Tooltip label="Accueil collectif de mineurs">
					<span>ACM</span>
				</Tooltip>
			</div>
		),
		skills: [],
		picture: 'src/assets/siteReservation.png',
		year: 2021,
		description: (
			<Stack gap="xl">
				<Paper withBorder shadow="md" p="xl" radius="md">
					<Image
						src="src/assets/siteReservation.png"
						height={220}
						radius="md"
						alt="Aperçu du site de réservation"
						mb="xl"
					/>
					<Group justify="space-between" align="flex-start">
						<Group align="center" gap="lg">
							<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
								<IconTargetArrow size={32} />
							</ThemeIcon>
							<Stack gap={0}>
								<Title order={2} c="blue.8">
									Site de réservation – Centre de loisirs
								</Title>
								<Text size="sm" c="dimmed">
									Projet réalisé pour le BTS SIO chez LesPEP64
								</Text>
							</Stack>
						</Group>
						<Badge color="blue" size="lg" variant="light">
							Projet Complet
						</Badge>
					</Group>
				</Paper>
				<Accordion variant="separated" defaultValue="contexte">
					<Accordion.Item value="contexte">
						<Accordion.Control icon={<IconBulb size={20} color="var(--mantine-color-yellow-6)" />}>
							<Title order={4}>Contexte et objectifs</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Face à l’augmentation des inscriptions et à la multiplication des échanges par mail, le centre de loisirs d’Artigueloutan avait besoin d’un outil moderne et performant pour gérer ses réservations.
							</Text>
							<Text mt="md">
								Ma mission a été de digitaliser ce processus en concevant une solution web sécurisée, intuitive et responsive, adaptée aussi bien aux familles qu’aux administrateurs.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="fonctionnalites">
						<Accordion.Control icon={<IconListCheck size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Fonctionnalités principales</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconLock size={20} />}>
									<b>Gestion sécurisée des comptes utilisateurs :</b> Inscription, activation par e-mail, mot de passe chiffré.
								</List.Item>
								<List.Item icon={<IconLayoutDashboard size={20} />}>
									<b>Tableau de bord dynamique :</b> Vue synthétique des réservations, annulation en un clic, gestion des places en temps réel.
								</List.Item>
								<List.Item icon={<IconSettings size={20} />}>
									<b>Administration avancée :</b> Création de périodes de réservation, suivi des statistiques, gestion des utilisateurs.
								</List.Item>
								<List.Item icon={<IconUsersGroup size={20} />}>
									<b>Gestion intelligente des places :</b> Distinction par âge (-6 ans / +6 ans) et par régime (matin/repas/après-midi/journée).
								</List.Item>
								<List.Item icon={<IconDeviceMobile size={20} />}>
									<b>Adaptabilité complète :</b> Application entièrement responsive, accessible sur ordinateur, tablette et smartphone.
								</List.Item>
								<List.Item icon={<IconShieldLock size={20} />}>
									<b>Sécurité et respect RGPD :</b> Vérification des champs côté client et serveur, sensibilisation à la protection des données.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="bilan">
						<Accordion.Control icon={<IconGrowth size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Bilan Personnel & apprentissages</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Ce projet a été une expérience clé dans mon parcours. J'ai découvert la gestion complète d’un projet web, de l’analyse du besoin à la mise en production, en passant par la sécurité et l’UX.
							</Text>
							<Text mt="sm">
								J'ai gagné en autonomie en installant l'infrastructure réseau moi-même et en cherchant des solutions face aux imprévus, ce qui a renforcé ma confiance en mes compétences techniques et relationnelles.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="impact">
						<Accordion.Control icon={<IconThumbUp size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Impact et retour des utilisateurs</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Après présentation, le projet a reçu un accueil très positif. La plateforme a été utilisée pendant plus d’un an par <b>plus de 100 familles</b>, simplifiant grandement la gestion administrative.
							</Text>
							<Blockquote color="blue" cite="– Un parent d'enfant du centre de loisirs" mt="md">
								Un outil attendu, simple à utiliser et qui simplifie l'inscription pour nos enfants !
							</Blockquote>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Stack technique
					</Title>
					<Group gap="sm">
						<Badge leftSection={<IconCode size={14} />} color="teal">PHP</Badge>
						<Badge leftSection={<IconCode size={14} />} color="cyan">MySQL</Badge>
						<Badge leftSection={<IconCode size={14} />} color="grape">Bootstrap</Badge>
						<Badge leftSection={<IconCode size={14} />} color="yellow">JavaScript</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: (
			<div>ARMEL TMS</div>
		),
		skills: [],
		picture: 'src/assets/armel-tms.png',
		year: 2023,
		description: (
			<Stack gap="xl">
				<Paper withBorder shadow="md" p="xl" radius="md">
					<Image
						src="src/assets/armel-interface.png"
						height={220}
						radius="md"
						alt="Aperçu de l'application ARMEL TMS"
						mb="xl"
					/>
					<Group justify="space-between" align="flex-start">
						<Group align="center" gap="lg">
							<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'green', to: 'teal' }}>
								<IconRun size={32} />
							</ThemeIcon>
							<Stack gap={0}>
								<Title order={2} c="green.8">
									ARMEL TMS - Prévention des TMS
								</Title>
								<Text size="sm" c="dimmed">
									Application de bien-être pour la prévention des troubles musculo-squelettiques.
								</Text>
							</Stack>
						</Group>
						<Badge color="green" size="lg" variant="light">
							Application Mobile
						</Badge>
					</Group>
				</Paper>
				<Accordion variant="separated" defaultValue="contexte">
					<Accordion.Item value="contexte">
						<Accordion.Control icon={<IconBulb size={20} color="var(--mantine-color-yellow-6)" />}>
							<Title order={4}>Contexte et objectifs</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								ARMEL TMS est un projet "sur étagère" conçu pour répondre à un besoin croissant en entreprise : la prévention des troubles musculo-squelettiques (TMS). L'application vise à réduire les douleurs liées au travail sédentaire ou répétitif.
							</Text>
							<Text mt="md">
								L'objectif est de fournir un outil simple et efficace permettant aux utilisateurs de paramétrer des rappels et d'effectuer des exercices préventifs directement depuis leur smartphone, de manière autonome.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="fonctionnalites">
						<Accordion.Control icon={<IconListCheck size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Fonctionnalités principales</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconDeviceMobile size={20} />}>
									<b>Application multi-plateforme :</b> Développée avec les technologies web et transformée en application mobile pour iOS et Android grâce à CapacitorJS, mais aussi avec un plugin electron pour la deployer sur ordinateur.
								</List.Item>
								<List.Item icon={<IconUsersGroup size={20} />}>
									<b>Gestion multi-entreprises :</b> L'architecture de la base de données et de l'API permet à chaque entreprise de gérer ses propres utilisateurs en toute autonomie.
								</List.Item>
								<List.Item icon={<IconBellRinging size={20} />}>
									<b>Rappels personnalisables et exercices :</b> Le cœur de l'application, permettant de programmer des notifications pour effectuer des exercices aléatoires selon les zones douloureuses renseignées dans l'application.
								</List.Item>
								<List.Item icon={<IconShieldLock size={20} />}>
									<b>Authentification sécurisée :</b> Utilisation de la norme JWT (JSON Web Token) pour les échanges avec l'API et d'un plugin Capacitor pour le stockage sécurisé des identifiants sur l'appareil.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="bilan">
						<Accordion.Control icon={<IconGrowth size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Apprentissages techniques</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Ce projet a été une excellente occasion de monter en compétence sur des technologies modernes pour le développement mobile et la sécurité :
							</Text>
							<List spacing="xs" size="sm" mt="md">
								<List.Item>
									Découverte et mise en œuvre de CapacitorJS pour transformer une application web en une véritable application native.
								</List.Item>
								<List.Item>
									Découverte aussi d'Electron pour mettre a cette application de fonctionner sur ordinateur (Windows et MacOS).
								</List.Item>
								<List.Item>
									Approfondissement de la sécurité des API avec la norme JWT pour l'authentification.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="evolution">
						<Accordion.Control icon={<IconRefresh size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Évolution du projet (refonte frontend)</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Dans une démarche d'amélioration continue et pour garantir la pérennité du projet, le frontend a été entièrement refait.
							</Text>
							<Text mt="sm">
								L'application a migré de <Anchor target="_blank" href="https://materializeweb.com/waves.html#!">Materialize</Anchor> vers <Anchor target="_blank" href="https://framework7.io/">Framework7</Anchor>, un framework plus moderne et spécialisé dans la création d'interfaces natives pour iOS et Android.
								Cette refonte démontre ma capacité à faire évoluer une base de code et à adopter de nouvelles technologies pour améliorer un produit.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Stack technique
					</Title>
					<Group gap="sm">
						<Badge leftSection={<IconCode size={14} />} color="orange">Framework7</Badge>
						<Badge leftSection={<IconDeviceMobile size={14} />} color="blue">CapacitorJS</Badge>
						<Badge leftSection={<IconBrandLaravel size={14} />} color="red">Laravel (API)</Badge>
						<Badge leftSection={<IconDatabase size={14} />} color="cyan">MySQL</Badge>
						<Badge leftSection={<IconKey size={14} />} color="grape">JWT</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: (
			<div>Phidias 3</div>
		),
		skills: [],
		picture: 'src/assets/logo-phidias.png',
		year: 2023,
		description: (
			<Stack gap="xl">
				<Paper withBorder shadow="md" p="xl" radius="md">
					<Image
						src="src/assets/phidias-sequence.png"
						height={220}
						radius="md"
						alt="Aperçu du projet Phidias3"
						mb="xl"
					/>
					<Group justify="space-between" align="flex-start">
						<Group align="center" gap="lg">
							<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'orange', to: 'yellow' }}>
								<IconBook size={32} />
							</ThemeIcon>
							<Stack gap={0}>
								<Title order={2} c="orange.8">
									Projet Phidias3 - Formation BTP
								</Title>
								<Text size="sm" c="dimmed">
									Refonte complète d'une plateforme de formation pour le secteur du BTP.
								</Text>
							</Stack>
						</Group>
						<Badge color="orange" size="lg" variant="light">
							Refonte Technique
						</Badge>
					</Group>
				</Paper>
				<Accordion variant="separated" defaultValue="contexte">
					<Accordion.Item value="contexte">
						<Accordion.Control icon={<IconBulb size={20} color="var(--mantine-color-yellow-6)" />}>
							<Title order={4}>Contexte et objectifs</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Mon premier projet en alternance a été la refonte complète du site Phidias3, une plateforme de formation pour le secteur du BTP qui datait de plus de 10 ans et n'était plus maintenable / utilisable (fonctionnait seulement sur Internet Explorer).
							</Text>
							<Text mt="md">
								L'objectif était de réaliser une <b>refonte complète</b> de l'application en utilisant des technologies modernes (Laravel) pour créer une plateforme performante, sécurisée et avec une base de données <b>structurée</b>.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="defis">
						<Accordion.Control icon={<IconDatabaseImport size={20} color="var(--mantine-color-red-6)" />}>
							<Title order={4}>Défis techniques & réalisations</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconDatabaseImport size={20} />}>
									<b>Migration de données complexe :</b> Le défi majeur a été de migrer l'intégralité du contenu depuis de multiples fichiers XML vers une base de données MySQL. Ce travail minutieux de traitement et de structuration des données a nécessité une semaine complète.
								</List.Item>
								<List.Item icon={<IconPalette size={20} />}>
									<b>Intégration d'une nouvelle charte graphique :</b> Après 3 mois de développement, j'ai intégré une nouvelle identité visuelle fournie par l'équipe multimédia, ce qui a demandé de revoir l'ensemble du design du site et a démontré ma capacité d'adaptation.
								</List.Item>
								<List.Item icon={<IconListCheck size={20} />}>
									<b>Développement de fonctionnalités pédagogiques : </b>
									Création d'un système de contenu hiérarchisé (thèmes, séquences, playlists), d'un lecteur vidéo interactif avec chapitrage, et d'outils d'aide comme des lexiques, des documents et des conseils pratiques.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="bilan">
						<Accordion.Control icon={<IconGrowth size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Apprentissages & découvertes</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Ce projet a été fondamental pour ma montée en compétences sur des technologies backend et des concepts de base de données :
							</Text>
							<List spacing="xs" size="sm" mt="md">
								<List.Item>
									Découverte et maîtrise du framework <b>Laravel</b>, de son architecture MVC et de son moteur de template <b>Blade</b>.
								</List.Item>
								<List.Item>
									Mise en pratique des appels <b>AJAX</b> pour rendre certaines parties de l'interface plus dynamiques.
								</List.Item>
								<List.Item>
									Découverte de l'indexation <b>FULLTEXT</b> en SQL pour optimiser la fonctionnalité de recherche dans du texte.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="securite">
						<Accordion.Control icon={<IconShieldLock size={20} color="var(--mantine-color-blue-6)" />}>
							<Title order={4}>Gestion de la sécurité</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								La sécurité de l'application a été assurée en tirant parti des fonctionnalités robustes intégrées à Laravel, ce qui garantit une protection contre les failles les plus courantes :
							</Text>
							<List spacing="xs" size="sm" mt="md" withPadding>
								<List.Item>Protection contre les injections SQL grâce aux requêtes préparées (via Eloquent).</List.Item>
								<List.Item>Utilisation de jetons anti-CSRF pour sécuriser tous les formulaires.</List.Item>
								<List.Item>Validation systématique des données entrantes avec les validateurs Laravel.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Stack technique
					</Title>
					<Group gap="sm">
						<Badge leftSection={<IconBrandLaravel size={14} />} color="red">Laravel</Badge>
						<Badge leftSection={<IconDatabase size={14} />} color="cyan">MySQL</Badge>
						<Badge leftSection={<IconBrandJavascript size={14} />} color="yellow">JavaScript (AJAX)</Badge>
						<Badge leftSection={<IconBrandCss3 size={14} />} color="blue">CSS</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	},
	{
		title: (
			<div>
				Développement sur SharePoint & Power Platform
			</div>
		),
		skills: [],
		picture: 'src/assets/sharepoint-icon.png',
		year: 2023,
		description: (
			<Stack gap="xl">
				<Paper withBorder shadow="md" p="xl" radius="md">
					<Group justify="space-between" align="flex-start">
						<Group align="center" gap="lg">
							<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'blue', to: 'teal' }}>
								<IconBuildingCommunity size={32} />
							</ThemeIcon>
							<Stack gap={0}>
								<Title order={2} c="blue.8">
									Développement sur SharePoint & Power Platform
								</Title>
								<Text size="sm" c="dimmed">
									Modernisation d'intranets pour divers clients.
								</Text>
							</Stack>
						</Group>
						<Badge color="blue" size="lg" variant="light">
							Écosystème Microsoft 365
						</Badge>
					</Group>
				</Paper>
				<Accordion variant="separated" defaultValue="contexte">
					<Accordion.Item value="contexte">
						<Accordion.Control icon={<IconBulb size={20} color="var(--mantine-color-yellow-6)" />}>
							<Title order={4}>Contexte et mission</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Intervention auprès de plusieurs clients pour moderniser leurs intranets SharePoint Online. La mission consistait à dépasser les fonctionnalités standard pour créer des applications métiers interactives et automatiser les processus.
							</Text>
							<Text mt="md">
								L'objectif était d'utiliser le <b>SharePoint Framework (SPFx)</b> avec <b>React</b> pour construire des composants connectés aux données de l'entreprise (principalement des <b>listes SharePoint</b>) et d'enrichir l'expérience avec les outils de la Power Platform.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="competences">
						<Accordion.Control icon={<IconListCheck size={20} color="var(--mantine-color-green-6)" />}>
							<Title order={4}>Réalisations et compétences</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<List spacing="md" size="sm" center>
								<List.Item icon={<IconBrandReact size={20} />}>
									<b>Développement de Web Parts React (SPFx) :</b> Création de composants sur mesure (actualités, annuaires, dashboards) qui récupèrent et affichent dynamiquement des données stockées dans des listes SharePoint.
								</List.Item>
								<List.Item icon={<IconApi size={20} />}>
									<b>Utilisation des API Microsoft 365 :</b> Connexion aux données via l'<b>API REST de SharePoint</b> (pour les listes et bibliothèques) et l'<b>API Microsoft Graph</b> (pour des données plus larges comme les profils utilisateurs).
								</List.Item>
								<List.Item icon={<IconAppWindow size={20} />}>
									<b>Personnalisation avec Power Apps :</b> Amélioration des formulaires de listes SharePoint pour offrir une expérience de saisie plus riche et intuitive (modification du bouton "Nouveau", formulaires conditionnels).
								</List.Item>
								<List.Item icon={<IconAutomation size={20} />}>
									<b>Automatisation avec Power Automate :</b> Création de flux de travail (workflows) pour automatiser des tâches répétitives (ex: notifications par email, processus de validation) déclenchées par des actions dans SharePoint.
								</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="bilan">
						<Accordion.Control icon={<IconGrowth size={20} color="var(--mantine-color-teal-6)" />}>
							<Title order={4}>Bilan personnel</Title>
						</Accordion.Control>
						<Accordion.Panel>
							<Text>
								Cette expérience a été un véritable tremplin, me permettant de maîtriser <b>React</b> dans un cadre professionnel concret.
							</Text>
							<Text mt="sm">
								Plus important encore, j'ai appris à concevoir des <b>solutions complètes</b> en orchestrant plusieurs services de l'écosystème Microsoft 365 (SPFx, Power Platform, API Graph) pour répondre à des besoins métiers précis, allant de l'interface utilisateur à l'automatisation des processus.
							</Text>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Paper shadow="xs" p="lg" radius="md">
					<Title order={4} mb="sm">
						Technologies et outils
					</Title>
					<Group gap="sm">
						<Badge leftSection={<IconBrandReact size={14} />} color="blue">React (SPFx)</Badge>
						<Badge leftSection={<IconApi size={14} />} color="orange">Microsoft Graph & REST API</Badge>
						<Badge leftSection={<IconAppWindow size={14} />} color="grape">Power Apps</Badge>
						<Badge leftSection={<IconAutomation size={14} />} color="cyan">Power Automate</Badge>
						<Badge leftSection={<IconBuildingCommunity size={14} />} color="teal">SharePoint Online</Badge>
					</Group>
				</Paper>
			</Stack>
		)
	}
];