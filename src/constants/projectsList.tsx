
import { Tooltip } from "@mantine/core";
import type Project from "../interfaces/Project";
import SiteReservationProject from "../components/SiteReservationProject/SiteReservationProject";
import ArmelTmsProject from "../components/ArmelTmsProject/ArmelTmsProject";
import PhidiasProject from "../components/PhidiasProject/PhidiasProject";
import SharepointProject from "../components/SharepointProject/SharepointProject";
import PactHseProject from "../components/PactHseProject/PactHseProject";

export const projectsList: Project[] = [
	{
		id: 'site-reservation-acm',
		title: (
			<div>
				Site de réservation pour&nbsp;
				<Tooltip label="Accueil collectif de mineurs">
					<span>ACM</span>
				</Tooltip>
			</div>
		),
		picture: 'assets/siteReservation.png',
		year: 2021,
		shortDescription: "Numérisation d'un processus d'inscription et de planification des réservations d'un centre de loisirs en PHP natif et MySQL.",
		description: (<SiteReservationProject />)
	},
	{
		id: 'armel-tms',
		title: (
			<div>ARMEL TMS</div>
		),
		picture: 'assets/armel-tms.png',
		year: 2023,
		shortDescription: "Application multi-plateforme (mobile / desktop) d'aide à la prévention des troubles musculo-squelettiques (TMS) en entreprise.",
		description: (<ArmelTmsProject />)
	},
	{
		id: 'phidias',
		title: (
			<div>Phidias 3</div>
		),
		picture: 'assets/logo-phidias.png',
		year: 2023,
		shortDescription: "Refonte d'une plateforme de formation pour le BTP : migration automatisée de données XML héritées et architecture MVC Laravel.",
		description: (<PhidiasProject />)
	},
	{
		id: 'sharepoint-custom',
		title: (
			<div>
				Développement sur SharePoint & Power Platform
			</div>
		),
		picture: 'assets/sharepoint-icon.png',
		year: 2023,
		shortDescription: "Modernisation d'intranets collaboratifs d'entreprise via des Web Parts complexes sous SPFx (React/TypeScript) et Power Platform.",
		description: (<SharepointProject />)
	},
	{
		id: 'pact-hse',
		title: (
			<div>
				PACT HSE - Solution de gestion des risques
			</div>
		),
		picture: 'assets/logos/pact-hse.png',
		year: 2023,
		shortDescription: "Application web métier centralisée pour le pilotage de la sécurité, de la remontée d'anomalies et de la conformité réglementaire.",
		description: (<PactHseProject />)
	}
];