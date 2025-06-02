
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
	icon: typeof IconSun;
	title: React.ReactNode;
	description: React.ReactNode;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon: Icon, title, description, ...others }) => {
	return (
		<div className={classes.wrapper} {...others}>
			<Box mr="md">
				<Icon size={24} />
			</Box>

			<div>
				<Text size="xs" className={classes.title}>
					{title}
				</Text>
				<Text className={classes.description}>{description}</Text>
			</div>
		</div>
	);
}

const MOCKDATA = [
	{ title: 'Courriel', description: 'willamthomas290@gmail.com', icon: IconAt },
	{ title: 'Numéro de téléphone', description: '+33 6 09 72 49 45', icon: IconPhone },
	{ title: 'Addresse postale', description: '64000, Pau (FR)', icon: IconMapPin },
	{ title: 'Horaires de travail', description: '9H – 17H', icon: IconSun },
];

export const ContactIconsList: React.FC = () => {
	const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
	return <Stack>{items}</Stack>;
}