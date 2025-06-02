import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import bg from './bg.svg?url';
import classes from './Contact.module.css';
import { ContactIconsList } from './ContactIcons';
import kwesforms from 'kwesforms';
import { useEffect } from 'react';

const Contact: React.FC = () => {
  
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Coordonnées
          </Text>

          <ContactIconsList />
        </div>

        <form className={`kf-form ${classes.form}`} method='POST' action="https://kwesforms.com/api/f/CVtujXdgNTh6m7RICkWo">
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Nom" placeholder="Nom" />
              <TextInput label="Votre adresse e-mail" placeholder="nom@example.fr" required />
            </SimpleGrid>

            <TextInput mt="md" label="Sujet" placeholder="Sujet" required />

            <Textarea
              mt="md"
              label="Votre message"
              placeholder="Veuillez inclure toutes les informations pertinentes"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Envoyer le message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}

export default Contact;