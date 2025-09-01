
import { Badge, List, Tooltip, Text, Title, Image, Stack, Group, Paper, Accordion, Blockquote, ThemeIcon, Anchor } from "@mantine/core";
import type Project from "../interfaces/Project";
import { IconApi, IconAppWindow, IconAutomation, IconBellRinging, IconBook, IconBrandCss3, IconBrandJavascript, IconBrandLaravel, IconBrandReact, IconBuildingCommunity, IconBulb, IconCode, IconDatabase, IconDatabaseImport, IconDeviceMobile, IconGrowth, IconKey, IconLayoutDashboard, IconListCheck, IconLock, IconPalette, IconRefresh, IconRun, IconSettings, IconShieldLock, IconTargetArrow, IconThumbUp, IconUsersGroup } from "@tabler/icons-react";
import SiteReservationProject from "../SiteReservationProject/SiteReservationProject";
import ArmelTmsProject from "../components/ArmelTmsProject/ArmelTmsProject";
import PhidiasProject from "../components/PhidiasProject/PhidiasProject";
import SharepointProject from "../components/SharepointProject/SharepointProject";

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
		skills: [],
		picture: 'assets/siteReservation.png',
		year: 2021,
		description: (<SiteReservationProject />)
	},
	{
		id: 'armel-tms',
		title: (
			<div>ARMEL TMS</div>
		),
		skills: [],
		picture: 'assets/armel-tms.png',
		year: 2023,
		description: (<ArmelTmsProject />)
	},
	{
		id: 'phidias',
		title: (
			<div>Phidias 3</div>
		),
		skills: [],
		picture: 'assets/logo-phidias.png',
		year: 2023,
		description: (<PhidiasProject />)
	},
	{
		id: 'sharepoint-custom',
		title: (
			<div>
				Développement sur SharePoint & Power Platform
			</div>
		),
		skills: [],
		picture: 'assets/sharepoint-icon.png',
		year: 2023,
		description: (<SharepointProject />)
	}
];