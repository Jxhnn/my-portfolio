import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { AppShell, Avatar, Burger, FloatingIndicator, Group, MantineProvider, Stack, UnstyledButton, Text, Menu, Divider } from '@mantine/core'
import classes from './App.module.css';
import { useDisclosure } from '@mantine/hooks';
import { Route, Routes, NavLink, useLocation, useNavigate } from 'react-router';
import Home from './Home';
import { useEffect, useState } from 'react';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import About from './About/About';
import menuLinks from './constants/menuLinks';
import SkillDetailPage from './SkillDetailPage/SkillDetailPage';
import { IconChevronDown } from '@tabler/icons-react';
import type MenuLink from './Skills/interfaces/MenuLink';
import type MenuLinkSkill from './Skills/interfaces/MenuLinkSkill';
import ProjectDetailsPage from './ProjectsDetails/ProjectDetails';

const App: React.FC = () => {

	const [opened, { toggle }] = useDisclosure();

	const [active, setActive] = useState<number>(0);

	const location = useLocation();
	const navigate = useNavigate();

	const [headerRootRef, setHeaderRootRef] = useState<HTMLDivElement | null>(null);
	const [headerControlsRefs, setHeaderControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});


	const [navbarRootRef, setNavbarRootRef] = useState<HTMLElement | null>(null);
	const [navbarControlsRefs, setNavbarControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});

	const setHeaderControlRef = (index: number) => (node: HTMLButtonElement) => {
		headerControlsRefs[index] = node;
		setHeaderControlsRefs(headerControlsRefs);
	};

	const setNavbarControlRef = (index: number) => (node: HTMLButtonElement | null) => {
		navbarControlsRefs[index] = node;
		setNavbarControlsRefs(navbarControlsRefs);
	};

	useEffect(() => {
        let activeIndex = menuLinks.findIndex((item) => item.link === location.pathname);

        if (activeIndex === -1) {
            activeIndex = menuLinks.findIndex((item) => {
                if (!item.sublinks) return false;

                if (Array.isArray(item.sublinks)) {
                    return item.sublinks.some((sublink) => sublink.link === location.pathname);
                }
                
                if (item.sublinks.technical && item.sublinks.human) {
                    const inTechnical = item.sublinks.technical.some(sub => sub.link === location.pathname);
                    const inHuman = item.sublinks.human.some(sub => sub.link === location.pathname);
                    return inTechnical || inHuman;
                }
                
                return false;
            });
        }

        if (activeIndex !== -1) {
            setActive(activeIndex);
        } else {
            setActive(0);
        }
    }, [location.pathname]);

	const generateMenuItems = (
		refSetter: (index: number) => (node: HTMLButtonElement) => void,
		keyPrefix: string
	) => menuLinks.map((item, index) => {

		if (item.sublinks && (item.sublinks as MenuLinkSkill).technical) {
			return (
				<Menu key={item.label} trigger="hover" openDelay={100} closeDelay={400}>
					<Menu.Target>
						<UnstyledButton
							className={classes.control}
							ref={refSetter(index)}
							mod={{ active: active === index }}
							onClick={() => navigate('/competences')}
						>
							<Group gap={5} preventGrowOverflow={false} wrap="nowrap">
								<span className={classes.controlLabel}>{item.label}</span>
								<IconChevronDown size={16} className={classes.controlLabel} />
							</Group>
						</UnstyledButton>
					</Menu.Target>
					<Menu.Dropdown>
						<Group align="flex-start" p="xs" gap="sm">
							<Stack gap="xs">
								<Menu.Label>Compétences techniques</Menu.Label>
								{(item.sublinks as MenuLinkSkill).technical.map(sub => (
									<Menu.Item
										key={sub.link}
										onClick={() => navigate(sub.link)}
									>{sub.label}</Menu.Item>
								))}
							</Stack>
							<Divider orientation="vertical" />
							<Stack gap="xs">
								<Menu.Label>Compétences humaines</Menu.Label>
								{(item.sublinks as MenuLinkSkill).human.map(sub => (
									<Menu.Item
										key={sub.link}
										onClick={() => navigate(sub.link)}
									>{sub.label}</Menu.Item>
								))}
							</Stack>
						</Group>
					</Menu.Dropdown>
				</Menu>
			);
		} else if (item.sublinks) {
			return (
				<Menu key={item.label} trigger="hover" openDelay={100} closeDelay={400}>
					<Menu.Target>
						<UnstyledButton
							className={classes.control}
							ref={refSetter(index)}
							mod={{ active: active === index }}
							onClick={() => navigate('/realisations')}
						>
							<Group gap={5} preventGrowOverflow={false} wrap="nowrap">
								<span className={classes.controlLabel}>{item.label}</span>
								<IconChevronDown size={16} className={classes.controlLabel} />
							</Group>
						</UnstyledButton>
					</Menu.Target>
					<Menu.Dropdown>
						<Group align="flex-start" p="xs" gap="sm">
							<Stack gap="xs">
								<Menu.Label>Compétences techniques</Menu.Label>
								{(item.sublinks as MenuLink[]).map(sub => (
									<Menu.Item
										key={sub.link}
										onClick={() => navigate(sub.link)}
									>{sub.label}</Menu.Item>
								))}
							</Stack>
						</Group>
					</Menu.Dropdown>
				</Menu>
			)
		}

		return (
			<NavLink
				to={item.link}
				end
				key={`${keyPrefix}-${item.label}`}
			>
				<UnstyledButton
					className={classes.control}
					ref={refSetter(index)}
					onClick={() => {
						setActive(index);
						if (opened) {
							toggle();
						}
					}}
					mod={{ active: active === index }}
				>
					<span className={classes.controlLabel}>{item.label}</span>
				</UnstyledButton>
			</NavLink>
		)
	});

	return (
		<MantineProvider defaultColorScheme='dark'>
			<AppShell
				header={{ height: 60 }}
				navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
						<Group justify="space-between" style={{ flex: 1 }}>
							<Group gap="sm">
								<Avatar src="/assets/portrait.png" radius="xl" />
								<Stack gap={0}>
									<Text size="sm" fw={700}>John THOMAS</Text>
									<Text size="xs" c="dimmed">Développeur Web</Text>
								</Stack>
							</Group>
							<Group ml="xl" gap={0} visibleFrom="sm" ref={setHeaderRootRef} className={classes.menuRoot}>
								{generateMenuItems(setHeaderControlRef, "header")}
								{headerControlsRefs[active] && headerRootRef && (
									<FloatingIndicator
										target={headerControlsRefs[active]}
										parent={headerRootRef}
										className={classes.indicator}
									/>
								)}
							</Group>
						</Group>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar py="md" px={4} ref={setNavbarRootRef}>
					{generateMenuItems(setNavbarControlRef, "navbar")}
					{navbarControlsRefs[active] && navbarRootRef && (
						<FloatingIndicator
							target={navbarControlsRefs[active]}
							parent={navbarRootRef}
							className={classes.indicator}
						/>
					)}
				</AppShell.Navbar>
				<AppShell.Main>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path="/competences" element={<Skills />} />
						<Route path="/competences/:skillId" element={<SkillDetailPage />} />
						<Route path="/realisations/:projectId" element={<ProjectDetailsPage />} />
						<Route path="/realisations" element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	)
}

export default App
