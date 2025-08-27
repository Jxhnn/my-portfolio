import '@mantine/core/styles.css';
import { AppShell, Burger, FloatingIndicator, Group, MantineProvider, UnstyledButton } from '@mantine/core'
import classes from './App.module.css';
import { useDisclosure } from '@mantine/hooks';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router';
import Home from './Home';
import { useState } from 'react';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

const App: React.FC = () => {

	const [opened, { toggle }] = useDisclosure();
	const [active, setActive] = useState<number>(0);

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

	const menuLinksLabels = [
		{
			label: 'Accueil',
			link: '/'
		},
		{
			label: 'Compétences',
			link: '/competences'
		},
		{
			label: 'Réalisations',
			link: '/realisations'
		},
		{
			label: 'Contact',
			link: '/contact'
		}
	];

	const generateMenuItems = (
		refSetter: (index: number) => (node: HTMLButtonElement) => void,
		keyPrefix: string
	) => menuLinksLabels.map((item, index) => (
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
				}}
				mod={{ active: active === index }}
			>
				<span className={classes.controlLabel}>{item.label}</span>
			</UnstyledButton>
		</NavLink>
	));

	return (
		<Router>
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
								{/* <MantineLogo size={30} /> */}
								<Group ml="xl" gap={0} visibleFrom="sm" ref={setHeaderRootRef} className={classes.menuRoot}>
									{generateMenuItems(setHeaderControlRef, "header")}
									{headerControlsRefs[active] && headerRootRef && ( // Conditionally render if target and parent exist
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
							<Route path="/competences" element={<Skills />} />
							<Route path="/realisations" element={<Projects />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</AppShell.Main>
				</AppShell>
			</MantineProvider>
		</Router>
	)
}

export default App
